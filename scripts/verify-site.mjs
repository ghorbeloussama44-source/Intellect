#!/usr/bin/env node
// Vérifications obligatoires avant mise en ligne (voir CLAUDE.md). Usage : npm run clean && npm run build && npm run verify
// 1. SITE_URL n'existe qu'à un seul endroit de src/   2. compte et cohérence du sitemap   3. SEO de chaque page
// 4. seuil de 600 mots   5. crawl depuis l'accueil en ne suivant QUE les <a href> : zéro page orpheline.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, extname } from 'node:path';

const root = process.cwd(), dist = join(root, 'dist');
if (!existsSync(dist)) { console.error('dist/ introuvable : lancer npm run build'); process.exit(1); }
const siteSrc = readFileSync(join(root, 'src/config/site.ts'), 'utf8');
const SITE_URL = siteSrc.match(/SITE_URL\s*=\s*'([^']+)'/)[1];
const MIN_WORDS = Number(siteSrc.match(/MIN_WORDS\s*=\s*(\d+)/)[1]);
const PER_LOCALE = Number(siteSrc.match(/TARGET_PAGES_PER_LOCALE\s*=\s*(\d+)/)[1]);
const host = new URL(SITE_URL).host;
const errors = [], warns = [];
const err = (m) => errors.push(m), warn = (m) => warns.push(m);

// 1) URL de base unique dans src/
const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
const hostHits = walk(join(root, 'src')).filter((f) => readFileSync(f, 'utf8').includes(host));
if (hostHits.length !== 1) err(`« ${host} » apparaît dans ${hostHits.length} fichiers de src/ (attendu : 1, src/config/site.ts) : ${hostHits.join(', ')}`);

// 2) sitemap
const sitemap = readFileSync(join(dist, 'sitemap.xml'), 'utf8');
const locs = [...sitemap.matchAll(/<url>\s*<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (new Set(locs).size !== locs.length) err('URL en double dans le sitemap');
const locale = (u) => (new URL(u).pathname.match(/^\/(en|ar)(\/|$)/)?.[1] ?? 'fr');
const perLocale = { fr: 0, en: 0, ar: 0 };
locs.forEach((u) => { perLocale[locale(u)]++; if (new URL(u).host !== host) err(`sitemap : hôte inattendu ${u}`); });
const counts = Object.values(perLocale);
if (new Set(counts).size !== 1) err(`sitemap : nombre de pages différent selon la langue ${JSON.stringify(perLocale)}`);

const fileFor = (u) => { const p = new URL(u).pathname; return join(dist, p.endsWith('/') ? p + 'index.html' : p); };
const decode = (s) => s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'");
const pages = new Map();
const titles = new Map(), descs = new Map();

for (const u of locs) {
  const f = fileFor(u);
  if (!existsSync(f)) { err(`${u} : fichier absent du build`); continue; }
  const html = readFileSync(f, 'utf8');
  const pathname = new URL(u).pathname;
  const tag = (re) => html.match(re)?.[1];
  const title = decode(tag(/<title>([^<]*)<\/title>/) ?? ''), desc = decode(tag(/<meta name="description" content="([^"]*)"/) ?? '');
  const canonical = tag(/<link rel="canonical" href="([^"]+)"/);
  if (!title) err(`${pathname} : title manquant`);
  if (!desc) err(`${pathname} : description manquante`);
  if (canonical !== u) err(`${pathname} : canonical (${canonical}) ≠ URL du sitemap`);
  (titles.get(title) ?? titles.set(title, []).get(title)).push(pathname);
  (descs.get(desc) ?? descs.set(desc, []).get(desc)).push(pathname);
  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1 !== 1) err(`${pathname} : ${h1} balises H1 (attendu : 1)`);
  // hreflang
  const alts = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => [m[1], m[2]]);
  const langs = alts.map((a) => a[0]).sort().join(',');
  if (langs !== 'ar,en,fr,x-default') err(`${pathname} : hreflang incomplet (${langs})`);
  for (const [, href] of alts) if (!locs.includes(href)) err(`${pathname} : hreflang vers une URL absente du sitemap (${href})`);
  if (!/<html lang="(fr|en|ar)" dir="(ltr|rtl)"/.test(html)) err(`${pathname} : lang/dir manquants`);
  if (locale(u) === 'ar' && !/<html lang="ar" dir="rtl"/.test(html)) err(`${pathname} : page arabe sans dir="rtl"`);
  // URLs absolues cohérentes
  for (const m of html.matchAll(/(?:href|content)="(https?:\/\/[^"]+)"/g)) {
    const h = new URL(m[1]).host;
    if (/vercel\.app$/.test(h) && h !== host) err(`${pathname} : ancienne URL ${m[1]}`);
  }
  // JSON-LD
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { const j = JSON.parse(m[1]); if (/aggregateRating|"Review"/i.test(m[1])) err(`${pathname} : JSON-LD avec avis/note interdit`); void j; } catch { err(`${pathname} : JSON-LD invalide`); }
  }
  // images
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt(?=[\s=>])/.test(m[0])) err(`${pathname} : <img> sans alt`);
    if (!/\bwidth=/.test(m[0]) || !/\bheight=/.test(m[0])) err(`${pathname} : <img> sans dimensions`);
  }
  // mots visibles du <main>
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? '';
  const text = decode(main.replace(/<(script|style|svg|canvas|video)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' '));
  const words = text.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
  if (words < MIN_WORDS) err(`${pathname} : ${words} mots (minimum ${MIN_WORDS})`);
  // liens sortants (ancres réelles uniquement)
  const links = [...html.matchAll(/<a\b[^>]*\bhref="([^"#][^"]*)"/g)].map((m) => m[1]);
  pages.set(pathname, { words, links });
}
for (const [t, p] of titles) if (p.length > 1) err(`title en double « ${t} » : ${p.join(', ')}`);
for (const [d, p] of descs) if (p.length > 1) err(`description en double : ${p.join(', ')}`);

// 5) crawl : on part de la racine et on ne suit que les <a href> internes
const seen = new Set(['/']), queue = ['/'];
while (queue.length) {
  const p = queue.shift(); const page = pages.get(p); if (!page) continue;
  for (const l of page.links) {
    if (/^(mailto:|tel:|javascript:)/.test(l)) continue;
    let path; try { const u = new URL(l, SITE_URL + p); if (u.host !== host) continue; path = u.pathname; } catch { continue; }
    if (!seen.has(path) && pages.has(path)) { seen.add(path); queue.push(path); }
  }
}
const orphans = [...pages.keys()].filter((p) => !seen.has(p));
orphans.forEach((o) => err(`page orpheline (non atteignable par ancres <a href>) : ${o}`));

// rapport
const target = PER_LOCALE * 3;
console.log(`\nSitemap : ${locs.length} URL (fr ${perLocale.fr} · en ${perLocale.en} · ar ${perLocale.ar}) — objectif ${target} avant l'achat du domaine`);
console.log(`Pages atteignables par crawl d'ancres : ${seen.size}/${pages.size} · orphelines : ${orphans.length}`);
const w = [...pages.entries()].map(([p, v]) => v.words); console.log(`Mots visibles : min ${Math.min(...w)} · max ${Math.max(...w)}`);
warns.forEach((m) => console.log('⚠', m));
if (errors.length) { console.log(`\n✘ ${errors.length} problème(s) :`); errors.forEach((m) => console.log('  -', m)); process.exit(1); }
console.log('\n✔ Toutes les vérifications passent.');

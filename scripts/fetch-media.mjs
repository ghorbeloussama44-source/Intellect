#!/usr/bin/env node
// Télécharge les photos (Pexels) et la vidéo d'ambiance (Pixabay) dans assets/.
// Usage : copier .env.example en .env, y mettre les clés, puis  node scripts/fetch-media.mjs
// Node 18+ requis. Les clés ne sont jamais écrites dans le dépôt (.env est ignoré par git).
import { readFileSync, existsSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
if (existsSync(join(root, ".env")))
  for (const l of readFileSync(join(root, ".env"), "utf8").split(/\r?\n/)) {
    const m = l.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/); if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
const PEXELS = process.env.PEXELS_API_KEY, PIXABAY = process.env.PIXABAY_API_KEY;
const out = join(root, "assets"); mkdirSync(out, { recursive: true });

// slot -> requêtes essayées dans l'ordre, format Pexels, fichier
const SLOTS = [
  { file: "hero.jpg",      size: "portrait",  q: ["student Brandenburg Gate Berlin", "young woman student Berlin", "female student backpack Germany"], orientation: "portrait" },
  { file: "og.jpg",        size: "landscape", q: ["Brandenburg Gate Berlin sunset", "Berlin skyline"], orientation: "landscape" },
  { file: "card-de.jpg",   size: "landscape", q: ["Brandenburg Gate German flag", "Berlin Germany landmark"], orientation: "landscape" },
  { file: "card-med.jpg",  size: "landscape", q: ["doctor stethoscope white coat", "medical student stethoscope"], orientation: "landscape" },
  { file: "card-ru.jpg",   size: "landscape", q: ["Saint Basil's Cathedral Moscow", "Red Square Moscow"], orientation: "landscape" },
  { file: "card-all.jpg",  size: "landscape", q: ["student walking German city", "university student campus backpack"], orientation: "landscape" },
];
const credits = ["# Crédits médias\n"];

async function pexels() {
  if (!PEXELS) return console.log("PEXELS_API_KEY absente : photos ignorées.");
  for (const s of SLOTS) {
    let done = false;
    for (const q of s.q) {
      const r = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(q)}&orientation=${s.orientation}&per_page=5`, { headers: { Authorization: PEXELS } });
      if (!r.ok) { console.log(`Pexels ${r.status} pour "${q}"`); continue; }
      const { photos = [] } = await r.json();
      const p = photos[0]; if (!p) continue;
      const img = await fetch(p.src[s.size] || p.src.large);
      if (!img.ok) continue;
      writeFileSync(join(out, s.file), Buffer.from(await img.arrayBuffer()));
      credits.push(`- \`${s.file}\` — « ${q} » — ${p.photographer} (${p.photographer_url}) via Pexels : ${p.url}`);
      console.log(`✔ ${s.file}  (${q}, ${p.photographer})`); done = true; break;
    }
    if (!done) console.log(`✘ ${s.file} : aucun résultat`);
  }
}

async function pixabayVideo() {
  if (!PIXABAY) return console.log("PIXABAY_API_KEY absente : vidéo ignorée.");
  for (const q of ["berlin city", "germany city", "students university"]) {
    const r = await fetch(`https://pixabay.com/api/videos/?key=${PIXABAY}&q=${encodeURIComponent(q)}&per_page=10&safesearch=true`);
    if (!r.ok) { console.log(`Pixabay ${r.status}`); continue; }
    const { hits = [] } = await r.json();
    const v = hits.find(h => h.videos?.small?.url && h.videos.small.size < 8e6) || hits.find(h => h.videos?.tiny?.url);
    if (!v) continue;
    const f = v.videos.small?.size < 8e6 ? v.videos.small : v.videos.tiny;
    const res = await fetch(f.url); if (!res.ok) continue;
    writeFileSync(join(out, "hero-bg.mp4"), Buffer.from(await res.arrayBuffer()));
    credits.push(`- \`hero-bg.mp4\` — « ${q} » — ${v.user} via Pixabay : ${v.pageURL}`);
    console.log(`✔ hero-bg.mp4  (${q}, ${(f.size / 1e6).toFixed(1)} Mo)`); return;
  }
  console.log("✘ hero-bg.mp4 : aucune vidéo");
}

await pexels(); await pixabayVideo();
writeFileSync(join(out, "CREDITS.md"), credits.join("\n") + "\n");
console.log("Terminé. Vérifiez les images dans assets/ puis : git add assets && git commit -m 'Add media' && git push");

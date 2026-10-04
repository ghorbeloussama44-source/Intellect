#!/usr/bin/env node
// Prépare les images du site : redimensionne, compresse (mozjpeg), recadre l'image de partage,
// et détoure les portraits en PNG transparent (suppression d'arrière-plan locale par IA).
//
//   npm install                       (une fois : sharp + @imgly/background-removal-node)
//   npm run images                    traite tout media-src/  ->  src/assets/media/
//   node scripts/prep-images.mjs --cutout hero,portrait   force le détourage de ces fichiers
//   node scripts/prep-images.mjs --only hero              ne traite qu'un fichier
//
// Règles : media-src/hero*.jpg sont détourés automatiquement (hero-cutout.png), og.jpg est recadré 1200x630,
// card-*.jpg sont limités à 900 px de large, le reste à 1600 px.
// Le premier détourage télécharge le modèle IA (~80 Mo) puis tout fonctionne hors-ligne.
import { readdirSync, existsSync, mkdirSync, statSync, unlinkSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { basename, extname, join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(root, "media-src"), OUT = join(root, "src", "assets", "media");
const kb = f => (statSync(f).size / 1024).toFixed(0) + " Ko";

export async function run({ cutout = [], only = null } = {}) {
  if (!existsSync(SRC)) { console.log("Aucun dossier media-src/ : rien à faire."); return; }
  mkdirSync(OUT, { recursive: true });
  const files = readdirSync(SRC).filter(f => /\.(jpe?g|png|webp)$/i.test(f)).filter(f => !only || basename(f, extname(f)) === only);
  for (const f of files) {
    const name = basename(f, extname(f)), input = join(SRC, f);
    const maxW = name === "og" ? 1200 : name.startsWith("card") ? 900 : name.startsWith("hero") ? 1200 : 1600;
    let img = sharp(input).rotate();                       // respecte l'orientation EXIF
    if (name === "og") img = img.resize(1200, 630, { fit: "cover", position: "attention" });
    else img = img.resize({ width: maxW, withoutEnlargement: true });
    const jpg = join(OUT, `${name}.jpg`);
    await img.clone().jpeg({ quality: 80, mozjpeg: true, progressive: true }).toFile(jpg);   // Astro génère ensuite le WebP/AVIF au build
    console.log(`✔ ${name}.jpg ${kb(jpg)}`);

    if (cutout.includes(name) || (name.startsWith("hero") && !name.includes("cutout") && name !== "hero-bg")) await cut(name, input);
  }
}

async function cut(name, input) {
  try {
    const tmp = join(root, `.${name}-raw-cutout.png`);
    const r = spawnSync(process.execPath, [join(root, "scripts", "cutout-worker.mjs"), input, tmp], { stdio: "inherit" });
    if (r.status !== 0 || !existsSync(tmp)) throw new Error("le détoureur a échoué (code " + r.status + ")");
    // recadre sur le sujet (bords transparents retirés) puis limite la taille
    const base = sharp(tmp).trim().resize({ width: 1100, withoutEnlargement: true });
    const png = join(OUT, `${name}-cutout.png`);
    await base.clone().png({ compressionLevel: 9, effort: 8 }).toFile(png);
    unlinkSync(tmp);
    console.log(`✔ ${name}-cutout.png ${kb(png)} (fond transparent)`);
  } catch (e) {
    console.log(`✘ détourage de ${name} impossible : ${e.message}\n  (npm install fait ? connexion pour le 1er téléchargement du modèle ?) — le site utilisera ${name}.jpg à la place.`);
  }
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const a = process.argv.slice(2), val = k => (a.includes(k) ? a[a.indexOf(k) + 1] : null);
  await run({ cutout: (val("--cutout") || "").split(",").filter(Boolean), only: val("--only") });
}

#!/usr/bin/env node
// Prépare les images du site : redimensionne, compresse (mozjpeg + webp), recadre l'image de partage,
// et détoure les portraits en PNG transparent (suppression d'arrière-plan locale par IA).
//
//   npm install                       (une fois : sharp + @imgly/background-removal-node)
//   npm run images                    traite tout assets/src/  ->  assets/
//   node scripts/prep-images.mjs --cutout hero,portrait   force le détourage de ces fichiers
//   node scripts/prep-images.mjs --only hero              ne traite qu'un fichier
//
// Règles : assets/src/hero*.jpg sont détourés automatiquement (hero-cutout.png), og.jpg est recadré 1200x630,
// card-*.jpg sont limités à 900 px de large, le reste à 1600 px.
// Le premier détourage télécharge le modèle IA (~80 Mo) puis tout fonctionne hors-ligne.
import { readdirSync, existsSync, mkdirSync, statSync, unlinkSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { basename, extname, join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(root, "assets", "src"), OUT = join(root, "assets");
const kb = f => (statSync(f).size / 1024).toFixed(0) + " Ko";

export async function run({ cutout = [], only = null } = {}) {
  if (!existsSync(SRC)) { console.log("Aucun dossier assets/src : rien à faire."); return; }
  mkdirSync(OUT, { recursive: true });
  const files = readdirSync(SRC).filter(f => /\.(jpe?g|png|webp)$/i.test(f)).filter(f => !only || basename(f, extname(f)) === only);
  for (const f of files) {
    const name = basename(f, extname(f)), input = join(SRC, f);
    const maxW = name === "og" ? 1200 : name.startsWith("card") ? 900 : name.startsWith("hero") ? 1200 : 1600;
    let img = sharp(input).rotate();                       // respecte l'orientation EXIF
    if (name === "og") img = img.resize(1200, 630, { fit: "cover", position: "attention" });
    else img = img.resize({ width: maxW, withoutEnlargement: true });
    const jpg = join(OUT, `${name}.jpg`), webp = join(OUT, `${name}.webp`);
    await img.clone().jpeg({ quality: 80, mozjpeg: true, progressive: true }).toFile(jpg);
    await img.clone().webp({ quality: 78 }).toFile(webp);
    console.log(`✔ ${name}.jpg ${kb(jpg)} · ${name}.webp ${kb(webp)}`);

    if (cutout.includes(name) || (name.startsWith("hero") && !name.includes("cutout") && name !== "hero-bg")) await cut(name, input);
  }
}

async function cut(name, input) {
  try {
    const tmp = join(OUT, `.${name}-raw-cutout.png`);
    const r = spawnSync(process.execPath, [join(root, "scripts", "cutout-worker.mjs"), input, tmp], { stdio: "inherit" });
    if (r.status !== 0 || !existsSync(tmp)) throw new Error("le détoureur a échoué (code " + r.status + ")");
    // recadre sur le sujet (bords transparents retirés) puis limite la taille
    const base = sharp(tmp).trim().resize({ width: 1100, withoutEnlargement: true });
    const png = join(OUT, `${name}-cutout.png`), webp = join(OUT, `${name}-cutout.webp`);
    await base.clone().png({ compressionLevel: 9, effort: 8 }).toFile(png);
    await base.clone().webp({ quality: 85, alphaQuality: 95 }).toFile(webp);
    unlinkSync(tmp);
    console.log(`✔ ${name}-cutout.png ${kb(png)} (fond transparent) · ${name}-cutout.webp ${kb(webp)}`);
  } catch (e) {
    console.log(`✘ détourage de ${name} impossible : ${e.message}\n  (npm install fait ? connexion pour le 1er téléchargement du modèle ?) — le site utilisera ${name}.jpg à la place.`);
  }
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const a = process.argv.slice(2), val = k => (a.includes(k) ? a[a.indexOf(k) + 1] : null);
  await run({ cutout: (val("--cutout") || "").split(",").filter(Boolean), only: val("--only") });
}

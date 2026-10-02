// Processus isolé : suppression d'arrière-plan (IA locale). Isolé de sharp pour éviter un conflit de libvips natif.
// Usage interne : node scripts/cutout-worker.mjs entrée.jpg sortie.png
import { readFileSync, writeFileSync } from "node:fs";
import { removeBackground } from "@imgly/background-removal-node";
const [input, output] = process.argv.slice(2);
const type = /png$/i.test(input) ? "image/png" : /webp$/i.test(input) ? "image/webp" : "image/jpeg";
const blob = await removeBackground(new Blob([readFileSync(input)], { type }), { output: { format: "image/png" } });
writeFileSync(output, Buffer.from(await blob.arrayBuffer()));
process.exit(0);

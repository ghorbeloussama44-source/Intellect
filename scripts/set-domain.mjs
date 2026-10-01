#!/usr/bin/env node
// Remplace le domaine provisoire dans index.html, sitemap.xml et robots.txt.
// Usage : node scripts/set-domain.mjs https://www.votre-domaine.com
import { readFileSync, writeFileSync } from "node:fs";
const d = (process.argv[2] || "").replace(/\/+$/, "");
if (!/^https:\/\/[^/\s]+$/.test(d)) { console.error("Usage: node scripts/set-domain.mjs https://www.votre-domaine.com"); process.exit(1); }
for (const f of ["index.html", "sitemap.xml", "robots.txt"]) {
  const t = readFileSync(f, "utf8"); writeFileSync(f, t.replaceAll("https://www.intellect.example", d)); console.log("✔", f);
}

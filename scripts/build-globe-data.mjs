#!/usr/bin/env node
// Génère src/data/globe-land.json : points des terres émergées (suite de Fibonacci filtrée par les contours Natural Earth).
// Usage : npm run build:globe   (dépendances de dev : world-atlas, topojson-client, d3-geo)
import { readFileSync, writeFileSync } from "node:fs";
import { feature } from "topojson-client";
import { geoContains } from "d3-geo";

const topo = JSON.parse(readFileSync(new URL("../node_modules/world-atlas/land-110m.json", import.meta.url)));
const land = feature(topo, topo.objects.land);
const N = 11000, GOLDEN = Math.PI * (3 - Math.sqrt(5)), out = [];
for (let i = 0; i < N; i++) {
  const y = 1 - (i / (N - 1)) * 2, lat = Math.asin(y) * 180 / Math.PI, lon = ((GOLDEN * i * 180 / Math.PI + 540) % 360) - 180;
  if (lat < -58) continue;                       // pas d'Antarctique
  if (geoContains(land, [lon, lat])) out.push(Math.round(lat * 10), Math.round(lon * 10));
}
writeFileSync(new URL("../src/data/globe-land.json", import.meta.url), JSON.stringify(out));
console.log(out.length / 2, "points");

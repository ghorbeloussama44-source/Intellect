#!/usr/bin/env node
// Génère public/og-default.jpg (1200x630) : logo sur panneau blanc + visuel lumineux. À relancer si le logo change.
import sharp from 'sharp';

const W = 1200, H = 630;
const bg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00284a"/><stop offset="1" stop-color="#0a4a82"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#g)"/><rect x="60" y="150" width="700" height="330" rx="36" fill="#fff"/><rect x="60" y="500" width="700" height="8" rx="4" fill="#FF8A00"/></svg>`);
const logo = await sharp('src/assets/brand/logo.png').resize({ width: 600 }).toBuffer();
const glow = await sharp('src/assets/brand/logo-glow.jpg').resize({ height: H }).toBuffer();
await sharp(bg)
  .composite([{ input: glow, left: W - 680, top: 0, blend: 'screen' }, { input: logo, left: 110, top: 190 }])
  .jpeg({ quality: 84, mozjpeg: true }).toFile('public/og-default.jpg');
console.log('public/og-default.jpg créé');

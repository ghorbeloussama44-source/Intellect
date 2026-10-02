# Intellect — site web

Site statique (HTML/CSS/JS, sans build) : cours d'allemand A1–C1, préparation médecine en Allemagne, études et accompagnement en Russie/Allemagne. Langues : FR / EN / DE.

## Déploiement Vercel
Framework Preset **Other**, Build Command et Output Directory vides. Branche : `main`.

## Médias, détourage PNG et optimisation
```
npm install                # une fois (sharp + détourage IA local)
cp .env.example .env       # y coller PEXELS_API_KEY et PIXABAY_API_KEY
npm run media              # télécharge les photos/vidéo dans assets/src puis lance npm run images
npm run images             # redimensionne, compresse (jpg+webp), détoure le hero en PNG transparent
git add assets && git commit -m "Add media" && git push
```
Détourer un autre fichier : `node scripts/prep-images.mjs --cutout nom`. Détails dans `.claude/skills/image-prep/SKILL.md`.
Sans photos, le site affiche le globe WebGL et des dégradés de secours.

## Globe WebGL
`js/globe.js` (rendu) + `js/globe-data.js` (continents, généré par `npm run build:globe`). Aucune bibliothèque ; pause hors écran, image fixe si l'utilisateur réduit les animations.

## SEO
Domaine provisoire `https://www.intellect.example` : le remplacer par le vrai domaine avec
`node scripts/set-domain.mjs https://www.votre-domaine.com` (index.html, sitemap.xml, robots.txt).
Les données structurées (schema.org) sont dans `index.html`. Penser à ajouter le site dans Google Search Console.

## Fichiers
`index.html` · `css/style.css` · `js/main.js` (i18n, menu, formulaire) · `js/globe.js` (globe WebGL), `js/hero-gl.js` (fond WebGL) · `scripts/` (outils) · `vercel.json`
Le formulaire est une démo : à relier à un back-end, Formspree ou WhatsApp.

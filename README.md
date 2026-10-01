# Intellect — site web

Site statique (HTML/CSS/JS, sans build) : cours d'allemand A1–C1, préparation médecine en Allemagne, études et accompagnement en Russie/Allemagne. Langues : FR / EN / DE.

## Déploiement Vercel
Framework Preset **Other**, Build Command et Output Directory vides. Branche : `main`.

## Médias (photos Pexels + vidéo Pixabay)
```
cp .env.example .env      # y coller PEXELS_API_KEY et PIXABAY_API_KEY
node scripts/fetch-media.mjs
git add assets && git commit -m "Add media" && git push
```
Génère `assets/hero.jpg`, `og.jpg`, `card-*.jpg`, `hero-bg.mp4` et `CREDITS.md`. Sans ces fichiers, le site affiche des dégradés de secours.

## SEO
Domaine provisoire `https://www.intellect.example` : le remplacer par le vrai domaine avec
`node scripts/set-domain.mjs https://www.votre-domaine.com` (index.html, sitemap.xml, robots.txt).
Les données structurées (schema.org) sont dans `index.html`. Penser à ajouter le site dans Google Search Console.

## Fichiers
`index.html` · `css/style.css` · `js/main.js` (i18n, menu, formulaire) · `js/hero-gl.js` (fond WebGL) · `scripts/` (outils) · `vercel.json`
Le formulaire est une démo : à relier à un back-end, Formspree ou WhatsApp.

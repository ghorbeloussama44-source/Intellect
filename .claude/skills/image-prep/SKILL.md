---
name: image-prep
description: Prépare les images du site Intellect — récupération Pexels/Pixabay, détourage en PNG transparent, redimensionnement/compression (jpg+webp), image Open Graph. À utiliser dès qu'on ajoute, remplace ou optimise une photo ou une vidéo du site.
---

# Préparation des images (site Intellect)

## Pipeline
1. **Originaux** → `media-src/` (ignoré par git). Noms réservés :
   - `hero.jpg` : portrait de l'étudiante (détouré automatiquement → `hero-cutout.png`)
   - `og.jpg` : image de partage (recadrée 1200×630)
   - `card-de.jpg`, `card-med.jpg`, `card-ru.jpg`, `card-all.jpg` : vignettes des cartes (≤ 900 px)
2. **Récupérer** : `npm run media` (Pexels pour les photos, Pixabay pour `public/hero-bg.mp4`). Clés dans `.env` (voir `.env.example`), jamais dans le dépôt ni dans un message.
3. **Optimiser / détourer** : `npm run images`
   - `node scripts/prep-images.mjs --cutout nom1,nom2` détoure d'autres fichiers (PNG transparent + webp alpha, recadré sur le sujet).
   - `--only nom` ne traite qu'un fichier.
4. **Vérifier** à l'œil : un détourage correct garde cheveux et bords nets, sans halo. Sinon, essayer une photo avec un meilleur contraste sujet/fond.
5. **Publier** : `git add assets && git commit && git push` (Vercel redéploie).

## Règles
- Le hero charge `hero-cutout.png`, sinon `hero.jpg` (dans `src/assets/media/`), sinon affiche le globe seul : ne jamais casser cette chaîne de repli.
- Garder `CREDITS.md` à jour (photographe + source) pour chaque photo issue de Pexels/Pixabay.
- Poids cibles : cartes < 150 Ko, hero < 250 Ko, vidéo < 8 Mo. Toujours un `alt` descriptif en français.
- Le détourage tourne dans un processus séparé (`scripts/cutout-worker.mjs`) : ne pas importer `@imgly/background-removal-node` dans le même processus que `sharp` (plantage natif).
- Le premier détourage peut télécharger le modèle IA ; ensuite tout fonctionne hors ligne.

## Pistes d'amélioration d'image
Détourer puis poser le sujet devant le globe WebGL (`js/globe.js`) donne l'effet de profondeur du hero ; un sujet clair sur fond sombre se détoure mieux qu'un sujet sombre sur fond sombre.

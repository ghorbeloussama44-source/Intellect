# Intellect — site web

Site vitrine d'Intellect, agence d'accompagnement étudiant (cours d'allemand A1–C1, médecine en Allemagne, études en Allemagne et en Russie).
Astro 5 + TypeScript, trois langues (français, anglais, arabe RTL), 15 pages × 3 langues = 45 URL.

La source de vérité du projet est [`CLAUDE.md`](./CLAUDE.md) : règles SEO, multilingue, contenu, Git et migration de domaine.

```bash
npm install
npm run dev                     # développement
npm run clean && npm run build  # build propre (TypeScript + génération)
npm run verify                  # contrôles pré-publication (sitemap, hreflang, 600 mots, orphelines…)
```

- **URL de base** : une seule constante, `SITE_URL` dans `src/config/site.ts` (domaine Vercel provisoire).
- **Pages** : registre `src/config/pages.ts` + textes `src/copy/pages/`.
- **Interface** : `src/components`, `src/layouts`, `src/styles/global.css` (propriétés CSS logiques pour le RTL).
- **WebGL** : `src/scripts/globe.ts` (globe), `src/scripts/background.ts` (fonds), données `src/data/globe-land.json` (`npm run build:globe`).
- **Médias** : `npm run media` puis `npm run images` (voir `.claude/skills/image-prep/SKILL.md`).

## Déploiement Vercel

Branche de production : `main`. `vercel.json` déclare le framework Astro ; aucun réglage manuel n'est nécessaire (Build Command `npm run build`, Output `dist`).

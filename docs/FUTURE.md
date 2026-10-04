# Évolutions prévues (après février 2027)

Le site est aujourd'hui un **site vitrine statique** : 15 pages × 3 langues. Il n'y a ni backend, ni base de données,
ni authentification, ni paiement. Ce document décrit comment ajouter plus tard un blog, un e-learning et un espace
étudiant **sans refondre l'existant**. Rien de ce qui suit n'est visible ni lié dans la navigation actuelle.

## Routes réservées

| Route | Usage futur |
|---|---|
| `/blog`, `/blog/[slug]` | Blog (articles par langue) |
| `/categories/[slug]` | Catégories du blog |
| `/e-learning`, `/e-learning/[course]`, `/cours/[slug]` | Catalogue et cours |
| `/espace-etudiant`, `/connexion`, `/inscription`, `/profil`, `/progression` | Espace étudiant (nécessite un backend) |

Elles suivent la même logique de langues que les pages actuelles : français sans préfixe, `/en/…` et `/ar/…`.
**Ne pas créer de page vide** ni de lien vers une page « bientôt disponible » : une route n'existe que le jour où son contenu existe.

## Blog

Les types sont dans `src/types/blog.ts`. Le plus simple est de réutiliser le mécanisme des pages :

1. Ajouter un dossier `src/copy/blog/` (un fichier par article, avec `fr`, `en`, `ar`).
2. Créer `src/pages/blog/[slug].astro` et `src/pages/[lang]/blog/[slug].astro` à partir de `getStaticPaths`.
3. Étendre `src/pages/sitemap.xml.ts` pour y inclure les articles (hreflang et lastmod compris).
4. Étendre `scripts/verify-site.mjs` : le seuil de 600 mots et le contrôle d'orphelines s'appliquent aussi aux articles.
5. Brancher le maillage : liste d'articles sur `/blog`, articles associés en bas de chaque article.

## E-learning

Les types sont dans `src/types/elearning.ts`. Un cours est du contenu statique (modules, leçons, documents, exercices).
Les vidéos restent hébergées chez un fournisseur spécialisé. Tant qu'il n'y a pas de comptes, il n'y a ni progression
enregistrée ni quiz noté : ces fonctions demandent un backend.

## Espace étudiant

Connexion, inscription, profil et progression demandent une authentification et une base de données. À décider avec le
client : fournisseur d'authentification, hébergement des données, conformité (RGPD), politique de confidentialité.
Ces pages seront `noindex`.

## Garde-fous à conserver

- Toute nouvelle route publique reste dans `SITE_URL`, le sitemap dynamique et le contrôle `npm run verify`.
- Les liens de navigation sont de vraies ancres `<a href>`.
- Une page ou un article n'est publié que s'il existe dans les trois langues.
- Les contenus générés pour le blog ne contiennent ni statistique, ni avis, ni garantie inventés.

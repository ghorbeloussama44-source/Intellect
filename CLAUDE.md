# CLAUDE.md

> Ce fichier est la source de vérité du projet. Les blocs marqués
> `<!-- À REMPLIR -->` doivent être complétés avant le premier développement.
> Tout le reste s'applique tel quel.

---

# Projet

Nom officiel : **Intellect**

<!-- À REMPLIR : une phrase décrivant ce que fait le site et à qui il s'adresse. -->

<!-- À REMPLIR : nom exact du dépôt GitHub. Ne jamais le renommer. -->

## Domaine — situation provisoire

Le site est **temporairement** servi sur :

```
https://intellect-khaki-one.vercel.app
```

Ce n'est **pas** le domaine définitif. Un nom de domaine propre sera acheté
lorsque le site atteindra **45 pages publiques** (15 pages × 3 langues).

**Règle absolue : l'URL de base ne doit jamais être écrite en dur.**

Elle vit dans une seule constante, et une seule :

```ts
// src/config/site.ts
export const SITE_URL = 'https://intellect-khaki-one.vercel.app';
```

Tout — canonical, hreflang, OpenGraph, JSON-LD, sitemap, robots.txt — doit
dériver de cette constante. Le jour de la migration, changer cette ligne doit
suffire. Si une recherche de `vercel.app` dans `src/` remonte plus d'une
occurrence, c'est un bug à corriger immédiatement.

## Le jour où le domaine est acheté

Suivre cette checklist dans l'ordre, sans en sauter une étape :

1. Ajouter le domaine dans Vercel et le définir comme **domaine principal**
   (`Primary Domain`). Vercel redirige alors automatiquement `*.vercel.app`
   vers lui — ne pas supprimer l'ancien domaine, la redirection est ce qui
   transmet l'historique à Google.
2. Choisir `www` ou l'apex, puis rediriger l'autre en 301 **définitivement**.
   Ne jamais servir les deux.
3. Changer `SITE_URL`, puis relancer un build propre et vérifier qu'aucune
   page ne contient encore l'ancienne URL.
4. Créer une **nouvelle propriété** dans Google Search Console pour le
   nouveau domaine, et y soumettre le sitemap.
5. Utiliser l'**outil de changement d'adresse** de Search Console depuis
   l'ancienne propriété vers la nouvelle.
6. Conserver l'ancienne propriété active au moins six mois pour suivre la
   migration des URL.
7. Ne **jamais** supprimer les redirections : elles doivent rester en place
   indéfiniment.

Tant que le domaine définitif n'est pas en place, le site reste indexable
sur `vercel.app`. C'est volontaire : le contenu commence à vieillir et à
être découvert dès maintenant, et la redirection 301 transmettra l'acquis.

---

# Objectif de lancement

**45 pages publiques** = **15 pages de contenu × 3 langues**.

<!-- À REMPLIR : la liste des 15 pages prévues, par exemple
     accueil, à propos, 3 pages de service, 5 articles, contact,
     mentions légales, confidentialité, FAQ, etc. -->

Le compteur qui fait foi est le **nombre d'URL dans `sitemap.xml`**, pas le
nombre de fichiers ni le nombre de pages générées par le framework au build.
Ces trois chiffres diffèrent toujours : vérifier le sitemap.

---

# Philosophie

Le projet doit pouvoir évoluer pendant plusieurs années.

Toujours privilégier :

- qualité
- évolutivité
- modularité
- performances
- SEO
- accessibilité
- maintenabilité

Ne jamais casser les fonctionnalités existantes.

Toujours améliorer sans régression.

---

# Git

`main` — production.

`develop` — préproduction.

`feature/*` — nouvelle fonctionnalité.

`release/*` — préparation avant publication.

`hotfix/*` — correction urgente.

**Ne jamais développer directement sur `main`.**

## Après un merge en squash

Si les pull requests sont fusionnées en **squash**, les commits d'origine ne
sont plus ancêtres de `main` : la branche de travail diverge et un `git pull`
produit des conflits artificiels.

Reconstruire la branche sur la nouvelle base plutôt que fusionner :

```bash
git fetch origin main
git checkout -B <branche> origin/main
```

Si la branche portait des commits non encore fusionnés, les rebaser sur la
nouvelle base au lieu de les perdre.

---

# SEO

Le SEO est prioritaire.

Chaque nouvelle page doit posséder :

- Meta Title unique
- Meta Description unique
- Canonical absolu, dérivé de `SITE_URL`
- Balises `hreflang` vers les trois langues, plus `x-default`
- OpenGraph
- Twitter Cards
- Schema.org pertinent pour le type de page
- Breadcrumb
- FAQ si pertinente
- URL propre, lisible, sans paramètre
- H1 unique
- H2 cohérents et hiérarchisés

Le sitemap est **dynamique** : toute nouvelle page y entre automatiquement.
Une page ajoutée à la main dans le sitemap est un bug d'architecture.

`robots.txt` doit rester valide et ne bloquer que les espaces privés.

## Données structurées — règles strictes

Toute donnée structurée (JSON-LD) doit refléter un contenu **réellement
visible** sur la page. Ne jamais baliser une note, un avis, un prix ou un
fait qui n'apparaît pas dans le contenu affiché : c'est du spam de données
structurées, passible d'une action manuelle Google.

Ne jamais ajouter `aggregateRating`, `Review` ou `AggregateRating` sur notre
propre entité (`Organization`, `LocalBusiness` ou tout sous-type) publiée sur
notre propre site : ce sont des avis « self-serving », inéligibles aux rich
results selon les consignes Google. Les étoiles ne peuvent venir que de
plateformes tierces (Google Business Profile, Trustpilot, etc.).

Un `aggregateRating` reste autorisé uniquement sur une **entité tierce**
réellement notée par nos utilisateurs, avec des avis authentiques,
vérifiables et affichés sur la page.

**Ne jamais inventer de valeurs** (note, nombre d'avis, prix, statistique) :
toute donnée chiffrée balisée doit provenir d'une source réelle et
vérifiable. En cas de doute, ne pas baliser.

---

# Navigation et maillage interne

**Tout lien de navigation doit être une vraie ancre `<a href="...">`.**

Jamais `<button onClick={() => router.push('/page')}>`. Googlebot ne clique
pas sur les boutons et ne suit pas les navigations programmatiques. Une page
atteignable uniquement par un bouton est **invisible pour Google**, même si
elle figure dans le sitemap — un sitemap est une indication, pas un ordre.

Cela vaut en particulier pour :

- le **sélecteur de langue** (le piège le plus courant et le plus coûteux)
- les cartes et tuiles cliquables
- les boutons « voir plus », « découvrir », « lire la suite »
- les menus déroulants

La navigation client reste possible : garder le `href` réel et intercepter
le clic, jamais l'inverse.

## Vérification obligatoire avant chaque mise en ligne

Explorer le site depuis la page d'accueil avec un user-agent Googlebot, en ne
suivant **que** les ancres `<a href>`, et comparer le résultat au sitemap.

**Toute page du sitemap non atteignable par ce crawl est une page orpheline
et doit être corrigée avant la mise en ligne.** L'objectif est zéro, sans
exception.

---

# Contenu

**Aucune page indexable ne doit descendre sous 600 mots de contenu réel**
(texte visible, hors menu, pied de page et balisage).

Une page trop mince est explorée par Google puis écartée, et apparaît en
« Explorée, actuellement non indexée » dans Search Console. Elle consomme du
budget de crawl sans rien rapporter, et elle tire la perception globale du
site vers le bas.

Les pages les plus stratégiques — celles qui portent l'intention commerciale
— doivent être les **plus** fournies, pas les moins. Un blog riche adossé à
des pages de service squelettiques est une erreur de priorisation classique.

Avant d'ajouter une page neuve, vérifier qu'aucune page existante n'est sous
le seuil. Enrichir une page déjà indexée rapporte davantage qu'en créer une
nouvelle.

## Images

Chaque image de contenu doit porter :

- un texte alternatif **traduit dans les trois langues**, décrivant ce qui
  est réellement visible sur l'image
- un format moderne (WebP ou AVIF), des dimensions explicites
- un crédit et une URL de licence lorsque la source l'exige
- une entrée dans le sitemap images

Ne jamais décrire dans l'`alt` autre chose que ce que montre l'image.
Toujours inspecter visuellement une image avant de l'intégrer : une image
correcte sur le papier peut être inutilisable à l'écran.

---

# Architecture

Organisation privilégiée :

```
components   pages      layouts    hooks
services     utils      constants  types
schemas      seo        config     locales
assets/images  assets/icons
```

Chaque composant a une **responsabilité unique**.

Réduire les duplications.

Le contenu rédactionnel est séparé du code de présentation : un registre de
données d'un côté, des gabarits de l'autre. Ajouter une page doit se faire en
ajoutant une entrée de données, pas en dupliquant un composant.

Toutes les pages publiques doivent inclure le menu de navigation complet et
le pied de page complet, via des composants partagés.

**Ne jamais créer une page sans le menu et le pied de page.**

---

# Multilingue

Le projet supporte trois langues :

- **Français**
- **Anglais**
- **Arabe**

Détection automatique à la première visite, choix utilisateur mémorisé.

La détection automatique ne doit **jamais** s'appliquer aux robots : les
crawlers ne conservent pas de cookie entre deux requêtes, et une redirection
basée sur la langue les empêche d'indexer l'URL canonique. Les robots
reçoivent toujours la version par défaut, en statut 200.

Toutes les chaînes doivent être traduisibles. **Ne jamais coder un texte en
dur dans un composant** lorsqu'une traduction est possible.

Chaque contenu existe dans les trois langues ou dans aucune : pas de page
publiée à moitié traduite.

## Arabe — sens de lecture

L'arabe impose un support RTL complet, pas un simple `dir="rtl"` posé sur la
racine :

- `dir="rtl"` et `lang="ar"` sur `<html>` pour les pages arabes
- utiliser les propriétés CSS **logiques** (`margin-inline-start`,
  `padding-inline-end`, `text-align: start`) plutôt que `left` / `right`
- miroiter les icônes directionnelles (flèches, chevrons)
- vérifier chaque page en arabe sur mobile avant publication : c'est là que
  les débordements apparaissent

---

# Performance

Objectif : **Lighthouse supérieur à 95** sur mobile comme sur ordinateur.

Utiliser :

- Lazy loading
- Code splitting
- Images optimisées et dimensionnées
- Bundle minimal
- Accessibilité élevée
- Responsive sans défaut, testé à partir de 320 px de large

---

# Qualité

## Avant chaque commit

1. Compiler le projet
2. Vérifier TypeScript — zéro erreur
3. Vérifier ESLint — zéro erreur
4. Vérifier le responsive
5. Vérifier le SEO de chaque page touchée
6. Vérifier les performances

**Ne jamais laisser d'erreur.**

## Build propre avant toute vérification

Toujours nettoyer avant de construire, puis vérifier :

```bash
npm run clean && npm run build
```

Un artefact de build incrémental périmé peut servir une ancienne version
d'une page — y compris une page 404 — alors que le code source est correct.
Ne jamais diagnostiquer une route sur un build incrémental.

## Vérifier sur un serveur de production, pas en développement

Tester les routes sur un serveur lancé depuis le build de production, et
s'assurer qu'aucune ancienne instance ne tourne encore sur le même port — un
serveur fantôme sert des pages périmées et fait perdre un temps considérable.

---

# Convention

Toujours privilégier :

- du code lisible
- des composants réutilisables
- une architecture modulaire
- des commentaires uniquement lorsqu'ils sont nécessaires
- le moins de dépendances possible

Conserver la compatibilité avec Vercel.

**Ne jamais modifier l'URL de base ailleurs que dans la constante `SITE_URL`.**

**Toujours produire un rapport des modifications effectuées** à la fin de
chaque intervention.

---

# Pièges déjà rencontrés sur un projet comparable

Ces erreurs ont réellement coûté du temps ou du trafic. Les éviter d'emblée.

| Piège | Conséquence | Règle |
|---|---|---|
| Sélecteur de langue en `<button>` | 234 pages sur 312 orphelines, jamais explorées par Google | Vraies ancres `<a href>` |
| Pages de service à 200 mots | « Explorée, actuellement non indexée » | Seuil de 600 mots |
| `aggregateRating` sur sa propre entité | Inéligible aux rich results, risque d'action manuelle | Jamais d'avis auto-attribué |
| Build incrémental périmé | Fausse 404, diagnostic erroné | `clean` avant `build` |
| Serveur de test fantôme | Sitemap et pages périmés | Tuer les processus avant de relancer |
| Merge en squash | Divergence de branche, faux conflits | `checkout -B` sur `origin/main` |
| URL de base en dur | Migration de domaine impossible à faire proprement | Une seule constante `SITE_URL` |

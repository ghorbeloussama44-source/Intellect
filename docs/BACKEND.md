# Brancher la base de données (comptes, commentaires, progression)

Le site est statique (Astro sur Vercel). Les fonctionnalités dynamiques passent par **trois services** définis dans
`src/types/community.ts` et choisis dans `src/services/index.ts` :

| `PUBLIC_API_URL` | Adaptateur | Usage |
|---|---|---|
| vide | `src/services/demo.ts` | **Démonstration** : tout reste dans `localStorage`. Aucun mot de passe vérifié. Bandeau « mode démonstration » visible. À ne jamais laisser en production. |
| renseignée | `src/services/http.ts` | API réelle, contrat ci-dessous. |

Changer d'adaptateur ne demande **aucune modification de l'interface** : définir `PUBLIC_API_URL` (variable d'environnement Vercel) suffit.

## Contrat REST

Session = cookie `httpOnly; Secure; SameSite=Lax` posé par le serveur. Le client envoie `credentials: 'include'` ; configurer CORS avec l'origine du site (`SITE_URL`) et `Access-Control-Allow-Credentials: true`.

| Méthode & chemin | Corps | Réponse |
|---|---|---|
| `GET /auth/session` | – | `{ user: {id,name,email} \| null }` |
| `POST /auth/sign-up` | `{name,email,password}` | `{ user }` · erreur `{code:'exists'}` (409) |
| `POST /auth/sign-in` | `{email,password}` | `{ user }` · erreur `{code:'unknown-account'}` (401) |
| `POST /auth/sign-out` | – | 204 |
| `POST /auth/forgot` | `{email}` | 204 (toujours, pour ne pas révéler l'existence du compte) |
| `GET /posts/{postId}/comments` | – | `{ comments: Comment[] }` (champs : id, postId, parentId, author{id,name}, body, createdAt, likes, liked) |
| `POST /posts/{postId}/comments` | `{body,parentId}` | `{ comment }` · 401 `{code:'auth-required'}` |
| `POST /comments/{id}/like` | – | `{ likes, liked }` (bascule) |
| `POST /comments/{id}/report` | – | 204 |
| `DELETE /comments/{id}` | – | 204 (auteur ou modérateur) |
| `GET /progress` | – | `{ progress: { [courseId]: { done: string[], scores: {[lessonId]:{score,total}}, last?: string } } }` |
| `PUT /progress/{courseId}/lessons/{lessonId}` | `{done}` ou `{score,total}` | 204 |
| `PUT /progress/{courseId}/last` | `{lessonId}` | 204 |

`postId`, `courseId`, `lessonId` sont les identifiants stables de `src/data/blog.ts` et `src/copy/courses/*.ts`.

## Tables suggérées (PostgreSQL)

`profiles(id, name, email, role, created_at)` · `posts(id, category, published_at, updated_at)` · `post_translations(post_id, locale, slug, title, description, body)` ·
`comments(id, post_id, parent_id, author_id, body, status, created_at)` · `comment_likes(comment_id, user_id)` · `comment_reports(comment_id, user_id, created_at)` ·
`courses`, `modules`, `lessons`, `lesson_translations` · `progress(user_id, course_id, lesson_id, done, score, total, updated_at)`.

Supabase, Firebase ou une API maison conviennent : il suffit d'exposer le contrat ci-dessus (ou d'écrire un 3ᵉ adaptateur dans `src/services/`).

## À faire côté serveur (obligatoire)

- Hachage des mots de passe (argon2/bcrypt), limitation de débit, vérification de l'e-mail, réinitialisation par lien à usage unique.
- Validation et **échappement** des commentaires (le client les affiche en texte brut, jamais en HTML), longueur max 1000, anti-spam, file de modération.
- Règles d'accès par ligne (RLS) : un utilisateur ne lit/écrit que sa progression et ne supprime que ses commentaires.
- **Accès réservé aux leçons** : le contenu des leçons est aujourd'hui dans le HTML statique (le verrou est visuel). Pour un vrai contenu payant ou privé, servir texte et vidéos depuis l'API après contrôle de session.

## Alimenter le blog et les cours

- Article : entrée dans `src/data/blog.ts` + `src/copy/pages/<id>.ts` (fr/en/ar). L'index du blog devient indexable à `BLOG_INDEX_MIN_POSTS` articles.
- Cours : fichier dans `src/copy/courses/` (modèle : `german-a1-start.ts`) + ligne dans `src/data/courses.ts`. Vidéo d'une leçon : champ `video: { mp4 }` ou `{ youtube }` (ID, domaine nocookie).

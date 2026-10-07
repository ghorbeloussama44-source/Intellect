/**
 * Registre des articles de blog. Le texte vit dans src/copy/pages/<contentId>.ts (même format que les pages) ;
 * ici, uniquement les métadonnées. Ajouter un article = une entrée ici + un fichier de contenu en trois langues.
 * À terme, ce registre sera alimenté par la base (voir docs/BACKEND.md).
 */
import type { Locale } from '../config/site';

export type BlogCategory = 'study' | 'life';
export interface PostDef {
  /** Identifiant stable, aussi utilisé comme clé des commentaires. */
  id: string;
  /** Fichier de contenu dans src/copy/pages/. */
  contentId: string;
  category: BlogCategory;
  published: string;
  updated: string;
  slugs: Record<Locale, string>;
}

export const POSTS: PostDef[] = [
  { id: 'student-life', contentId: 'student-life', category: 'life', published: '2026-10-04', updated: '2026-10-04',
    slugs: { fr: 'logement-vie-etudiante', en: 'housing-student-life', ar: 'housing-student-life' } },
  { id: 'germany-or-russia', contentId: 'germany-or-russia', category: 'study', published: '2026-10-05', updated: '2026-10-05',
    slugs: { fr: 'allemagne-ou-russie', en: 'germany-or-russia', ar: 'germany-or-russia' } },
];

export const getPost = (id: string): PostDef | undefined => POSTS.find((p) => p.id === id);
/** L'index du blog n'est indexé qu'à partir de ce nombre d'articles (en dessous, page trop mince). */
export const BLOG_INDEX_MIN_POSTS = 6;

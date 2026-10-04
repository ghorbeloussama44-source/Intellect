/**
 * Modèle de données du futur blog (après février 2027). Aucune route ni lien n'est publié aujourd'hui.
 * Chaque article existe dans les trois langues ou dans aucune : même règle que pour les pages.
 */
import type { Locale } from '../config/site';

export interface BlogCategory {
  /** Identifiant stable, commun aux trois langues. */
  id: string;
  slugs: Record<Locale, string>;
  names: Record<Locale, string>;
}

export interface BlogPostTranslation {
  slug: string;
  title: string;
  summary: string;
  /** Corps de l'article, en blocs structurés comme les pages (voir src/copy/types.ts). */
  sections: import('../copy/types').Section[];
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  imageAlt: string;
}

export interface BlogPost {
  id: string;
  categoryId: string;
  /** Date ISO de publication et de dernière mise à jour. */
  publishedAt: string;
  updatedAt: string;
  author: string;
  image: string;
  /** Identifiants d'articles ou de pages associés. */
  related: string[];
  translations: Record<Locale, BlogPostTranslation>;
}

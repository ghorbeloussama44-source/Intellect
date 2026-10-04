/**
 * Registre des pages publiques : une entrée = une page dans les trois langues.
 * Ajouter une page = ajouter une entrée ici + un fichier src/copy/pages/<id>.ts.
 * Le sitemap, la navigation, le maillage et les hreflang en dérivent automatiquement.
 */
import { DEFAULT_LOCALE, LOCALES, type Locale } from './site';

export type PageLayout = 'home' | 'article' | 'faq' | 'contact';
export type PageSchema = 'WebPage' | 'Service' | 'Article' | 'AboutPage' | 'ContactPage' | 'FAQPage';

export interface PageDef {
  id: string;
  layout: PageLayout;
  schema: PageSchema;
  /** Slug par langue ; chaîne vide = racine de la langue. */
  slugs: Record<Locale, string>;
  /** `draft` = ni routée, ni dans le sitemap, ni dans la navigation. */
  status: 'published' | 'draft';
  /** Date ISO de dernière mise à jour du contenu (lastmod). */
  updated: string;
  priority: number;
  /** Page parente pour le fil d'Ariane. */
  parent?: string;
  /** Position dans le menu principal (absent = pas dans le menu). */
  navOrder?: number;
  /** Groupe du pied de page. */
  footerGroup?: 'learn' | 'study' | 'about';
  /** Images de contenu déclarées dans le sitemap images. */
  images?: { file: string; altKey: string }[];
}

const D = '2026-10-04';

export const PAGES: PageDef[] = [
  { id: 'home', layout: 'home', schema: 'WebPage', slugs: { fr: '', en: '', ar: '' }, status: 'published', updated: D, priority: 1.0,
    images: [{ file: 'hero-cutout.png', altKey: 'heroAlt' }] },

  { id: 'german-courses', layout: 'article', schema: 'Service', slugs: { fr: 'cours-allemand', en: 'german-courses', ar: 'german-courses' },
    status: 'draft', updated: D, priority: 0.9, navOrder: 1, footerGroup: 'learn' },
  { id: 'german-a1-a2', layout: 'article', schema: 'Service', slugs: { fr: 'cours-allemand/a1-a2', en: 'german-courses/a1-a2', ar: 'german-courses/a1-a2' },
    status: 'draft', updated: D, priority: 0.8, parent: 'german-courses', footerGroup: 'learn' },
  { id: 'german-b1', layout: 'article', schema: 'Service', slugs: { fr: 'cours-allemand/b1', en: 'german-courses/b1', ar: 'german-courses/b1' },
    status: 'draft', updated: D, priority: 0.8, parent: 'german-courses', footerGroup: 'learn' },
  { id: 'german-c1', layout: 'article', schema: 'Service', slugs: { fr: 'cours-allemand/c1', en: 'german-courses/c1', ar: 'german-courses/c1' },
    status: 'draft', updated: D, priority: 0.8, parent: 'german-courses', footerGroup: 'learn' },

  { id: 'medicine-germany', layout: 'article', schema: 'Service', slugs: { fr: 'medecine-allemagne', en: 'medicine-in-germany', ar: 'medicine-in-germany' },
    status: 'draft', updated: D, priority: 0.9, navOrder: 2, footerGroup: 'study' },
  { id: 'study-germany', layout: 'article', schema: 'Service', slugs: { fr: 'etudier-en-allemagne', en: 'study-in-germany', ar: 'study-in-germany' },
    status: 'draft', updated: D, priority: 0.9, navOrder: 3, footerGroup: 'study' },
  { id: 'study-russia', layout: 'article', schema: 'Service', slugs: { fr: 'etudier-en-russie', en: 'study-in-russia', ar: 'study-in-russia' },
    status: 'draft', updated: D, priority: 0.9, navOrder: 4, footerGroup: 'study' },
  { id: 'student-support', layout: 'article', schema: 'Service', slugs: { fr: 'accompagnement-etudiant', en: 'student-support', ar: 'student-support' },
    status: 'draft', updated: D, priority: 0.8, footerGroup: 'study' },

  { id: 'student-visa-germany', layout: 'article', schema: 'Article', slugs: { fr: 'guide/visa-etudiant-allemagne', en: 'guides/german-student-visa', ar: 'guides/german-student-visa' },
    status: 'draft', updated: D, priority: 0.7, parent: 'study-germany', footerGroup: 'learn' },
  { id: 'student-life', layout: 'article', schema: 'Article', slugs: { fr: 'guide/logement-vie-etudiante', en: 'guides/housing-student-life', ar: 'guides/housing-student-life' },
    status: 'draft', updated: D, priority: 0.7, footerGroup: 'study' },
  { id: 'germany-or-russia', layout: 'article', schema: 'Article', slugs: { fr: 'guide/allemagne-ou-russie', en: 'guides/germany-or-russia', ar: 'guides/germany-or-russia' },
    status: 'draft', updated: D, priority: 0.7, footerGroup: 'study' },

  { id: 'about', layout: 'article', schema: 'AboutPage', slugs: { fr: 'a-propos', en: 'about', ar: 'about' },
    status: 'draft', updated: D, priority: 0.6, navOrder: 5, footerGroup: 'about' },
  { id: 'faq', layout: 'faq', schema: 'FAQPage', slugs: { fr: 'faq', en: 'faq', ar: 'faq' },
    status: 'draft', updated: D, priority: 0.6, footerGroup: 'about' },
  { id: 'contact', layout: 'contact', schema: 'ContactPage', slugs: { fr: 'contact', en: 'contact', ar: 'contact' },
    status: 'draft', updated: D, priority: 0.7, navOrder: 6, footerGroup: 'about' },
];

export const publishedPages = (): PageDef[] => PAGES.filter((p) => p.status === 'published');
export const getPage = (id: string): PageDef | undefined => PAGES.find((p) => p.id === id);

/** Chemin absolu (sans domaine) d'une page : `/`, `/etudier-en-russie/`, `/en/study-in-russia/`... */
export function pagePath(page: PageDef, locale: Locale): string {
  const slug = page.slugs[locale];
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  return slug ? `${prefix}/${slug}/` : `${prefix}/`;
}

/** Chemin d'une page publiée, ou undefined si inconnue / en brouillon (jamais de lien vers une page non publiée). */
export function hrefTo(id: string, locale: Locale): string | undefined {
  const page = getPage(id);
  return page && page.status === 'published' ? pagePath(page, locale) : undefined;
}

export const allLocalizedPaths = (): { page: PageDef; locale: Locale; path: string }[] =>
  publishedPages().flatMap((page) => LOCALES.map((locale) => ({ page, locale, path: pagePath(page, locale) })));

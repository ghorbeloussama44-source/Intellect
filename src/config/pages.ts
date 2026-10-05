/**
 * Registre des pages publiques : une entrée = une page dans les trois langues.
 * Ajouter une page = ajouter une entrée ici + un fichier src/copy/pages/<id>.ts.
 * Le sitemap, la navigation, le maillage et les hreflang en dérivent automatiquement.
 */
import { LOCALES, type Locale } from './site';

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

  // --- Cours d'allemand : A1 → A2 → B1 → C1
  { id: 'german-courses', layout: 'article', schema: 'Service', slugs: { fr: 'formations/allemand', en: 'courses/german', ar: 'courses/german' },
    status: 'published', updated: D, priority: 0.9, navOrder: 1, footerGroup: 'learn' },
  { id: 'german-a1', layout: 'article', schema: 'Service', slugs: { fr: 'formations/allemand-a1', en: 'courses/german-a1', ar: 'courses/german-a1' },
    status: 'published', updated: D, priority: 0.8, parent: 'german-courses', footerGroup: 'learn' },
  { id: 'german-a2', layout: 'article', schema: 'Service', slugs: { fr: 'formations/allemand-a2', en: 'courses/german-a2', ar: 'courses/german-a2' },
    status: 'published', updated: D, priority: 0.8, parent: 'german-courses', footerGroup: 'learn' },
  { id: 'german-b1', layout: 'article', schema: 'Service', slugs: { fr: 'formations/allemand-b1', en: 'courses/german-b1', ar: 'courses/german-b1' },
    status: 'published', updated: D, priority: 0.8, parent: 'german-courses', footerGroup: 'learn' },
  { id: 'german-c1', layout: 'article', schema: 'Service', slugs: { fr: 'formations/allemand-c1', en: 'courses/german-c1', ar: 'courses/german-c1' },
    status: 'published', updated: D, priority: 0.8, parent: 'german-courses', footerGroup: 'learn' },

  // --- Études en Allemagne → Médecine → Préparation aux examens
  { id: 'study-germany', layout: 'article', schema: 'Service', slugs: { fr: 'etudes/allemagne', en: 'studies/germany', ar: 'studies/germany' },
    status: 'published', updated: D, priority: 0.9, navOrder: 3, footerGroup: 'study' },
  { id: 'medicine-germany', layout: 'article', schema: 'Service', slugs: { fr: 'etudes/medecine-allemagne', en: 'studies/medicine-germany', ar: 'studies/medicine-germany' },
    status: 'published', updated: D, priority: 0.9, parent: 'study-germany', navOrder: 2, footerGroup: 'study' },
  { id: 'exam-preparation', layout: 'article', schema: 'Service', slugs: { fr: 'preparation-examens', en: 'exam-preparation', ar: 'exam-preparation' },
    status: 'published', updated: D, priority: 0.8, parent: 'medicine-germany', footerGroup: 'learn' },

  // --- Russie, accompagnement, démarches
  { id: 'study-russia', layout: 'article', schema: 'Service', slugs: { fr: 'etudes/russie', en: 'studies/russia', ar: 'studies/russia' },
    status: 'published', updated: D, priority: 0.9, navOrder: 4, footerGroup: 'study' },
  { id: 'student-support', layout: 'article', schema: 'Service', slugs: { fr: 'accompagnement', en: 'support', ar: 'support' },
    status: 'published', updated: D, priority: 0.8, footerGroup: 'study' },
  { id: 'visa-procedures', layout: 'article', schema: 'Service', slugs: { fr: 'visa-demarches', en: 'visa-procedures', ar: 'visa-procedures' },
    status: 'published', updated: D, priority: 0.8, footerGroup: 'study' },

  // --- Institutionnel
  { id: 'about', layout: 'article', schema: 'AboutPage', slugs: { fr: 'a-propos', en: 'about', ar: 'about' },
    status: 'published', updated: D, priority: 0.6, navOrder: 5, footerGroup: 'about' },
  { id: 'faq', layout: 'faq', schema: 'FAQPage', slugs: { fr: 'faq', en: 'faq', ar: 'faq' },
    status: 'published', updated: D, priority: 0.6, footerGroup: 'about' },
  { id: 'contact', layout: 'contact', schema: 'ContactPage', slugs: { fr: 'contact', en: 'contact', ar: 'contact' },
    status: 'published', updated: D, priority: 0.7, footerGroup: 'about' },

  // --- Brouillons : contenus déjà rédigés, hors des 15 pages du lancement (futurs articles de blog / guides)
  { id: 'student-life', layout: 'article', schema: 'Article', slugs: { fr: 'guide/logement-vie-etudiante', en: 'guides/housing-student-life', ar: 'guides/housing-student-life' },
    status: 'draft', updated: D, priority: 0.5 },
  { id: 'germany-or-russia', layout: 'article', schema: 'Article', slugs: { fr: 'guide/allemagne-ou-russie', en: 'guides/germany-or-russia', ar: 'guides/germany-or-russia' },
    status: 'draft', updated: D, priority: 0.5 },
];

export const publishedPages = (): PageDef[] => PAGES.filter((p) => p.status === 'published');
export const getPage = (id: string): PageDef | undefined => PAGES.find((p) => p.id === id);

/** Chemin absolu (sans domaine) d'une page, toujours préfixé par la langue : `/fr/`, `/fr/etudes/russie/`, `/en/studies/russia/`, `/ar/`... */
export function pagePath(page: PageDef, locale: Locale): string {
  const slug = page.slugs[locale];
  return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Chemin d'une page publiée, ou undefined si inconnue / en brouillon (jamais de lien vers une page non publiée). */
export function hrefTo(id: string, locale: Locale): string | undefined {
  const page = getPage(id);
  return page && page.status === 'published' ? pagePath(page, locale) : undefined;
}

export const allLocalizedPaths = (): { page: PageDef; locale: Locale; path: string }[] =>
  publishedPages().flatMap((page) => LOCALES.map((locale) => ({ page, locale, path: pagePath(page, locale) })));

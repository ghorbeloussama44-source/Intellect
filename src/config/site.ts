/**
 * Configuration globale du site.
 *
 * SITE_URL est la SEULE occurrence de l'URL de base dans le code.
 * Canonical, hreflang, OpenGraph, JSON-LD, sitemap et robots.txt en dérivent.
 * Domaine provisoire : à remplacer ici, et nulle part ailleurs, à l'achat du domaine définitif.
 */
export const SITE_URL = 'https://intellect-khaki-one.vercel.app';

export const SITE_NAME = 'Intellect';

export const LOCALES = ['fr', 'en', 'ar'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'fr';

export interface LocaleMeta {
  /** Libellé affiché dans le sélecteur, dans la langue elle-même. */
  label: string;
  /** Valeur de l'attribut lang et de hreflang. */
  htmlLang: string;
  dir: 'ltr' | 'rtl';
  ogLocale: string;
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  fr: { label: 'Français', htmlLang: 'fr', dir: 'ltr', ogLocale: 'fr_FR' },
  en: { label: 'English', htmlLang: 'en', dir: 'ltr', ogLocale: 'en_GB' },
  ar: { label: 'العربية', htmlLang: 'ar', dir: 'rtl', ogLocale: 'ar_AR' },
};

/** Nombre de pages publiques visé avant l'achat du domaine : 15 pages x 3 langues. */
export const TARGET_PAGES_PER_LOCALE = 15;
export const TARGET_PUBLIC_URLS = TARGET_PAGES_PER_LOCALE * LOCALES.length;

/** Seuil de contenu réel (mots visibles) sous lequel une page indexable est refusée. */
export const MIN_WORDS = 600;

/** Point de terminaison du formulaire de contact (Formspree, Getform, fonction Vercel...). Vide = formulaire non connecté. */
export const FORM_ENDPOINT: string = import.meta.env.PUBLIC_FORM_ENDPOINT ?? '';

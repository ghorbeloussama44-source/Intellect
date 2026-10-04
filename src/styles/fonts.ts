import type { Locale } from '../config/site';

const face = (family: string, file: string, weight: string, range?: string): string =>
  `@font-face{font-family:'${family}';font-style:normal;font-display:swap;font-weight:${weight};src:url(/fonts/${file}) format('woff2');${range ? `unicode-range:${range};` : ''}}`;

const LATIN = 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+20AC,U+2122';
const ARABIC = 'U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0897-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC';

/** Polices auto-hébergées : l'arabe ne charge que Cairo, le latin que Poppins + Caveat. */
export function fontCss(locale: Locale): string {
  if (locale === 'ar') {
    return face('Cairo Variable', 'cairo-arabic-wght-normal.woff2', '200 1000', ARABIC) + face('Cairo Variable', 'cairo-latin-wght-normal.woff2', '200 1000', LATIN);
  }
  return ['400', '600', '700', '800'].map((w) => face('Poppins', `poppins-latin-${w}-normal.woff2`, w)).join('') + face('Caveat', 'caveat-latin-600-normal.woff2', '600');
}

/** Fichiers à précharger (rendu initial) par langue. */
export const preloadFonts = (locale: Locale): string[] =>
  locale === 'ar' ? ['cairo-arabic-wght-normal.woff2'] : ['poppins-latin-400-normal.woff2', 'poppins-latin-700-normal.woff2'];

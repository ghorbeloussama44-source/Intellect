import { LOCALES, LOCALE_META, DEFAULT_LOCALE, type Locale } from '../config/site';
import { pagePath, type PageDef } from '../config/pages';
import { absoluteUrl } from '../config/urls';

export interface Alternate { hreflang: string; href: string }

/** hreflang vers les trois langues (réciproques) + x-default (langue par défaut). */
export function alternatesFor(page: PageDef): Alternate[] {
  const list: Alternate[] = LOCALES.map((l: Locale) => ({ hreflang: LOCALE_META[l].htmlLang, href: absoluteUrl(pagePath(page, l)) }));
  list.push({ hreflang: 'x-default', href: absoluteUrl(pagePath(page, DEFAULT_LOCALE)) });
  return list;
}

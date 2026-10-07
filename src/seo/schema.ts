import { DEFAULT_LOCALE, LOCALE_META, SITE_NAME, type Locale } from '../config/site';
import { getPage, pagePath, type PageDef } from '../config/pages';
import { absoluteUrl } from '../config/urls';
import type { PageContent } from '../copy/types';
import { getContent } from '../copy';
import { CONTACT } from '../config/contact';
import { useUi } from '../locales';
import { getPost } from '../data/blog';

/** JSON-LD : uniquement des informations réellement visibles sur la page. Jamais d'avis ni de note auto-attribués. */
const homeUrl = (): string => absoluteUrl(pagePath(getPage('home') as PageDef, DEFAULT_LOCALE));
const orgId = (): string => absoluteUrl('/#organization');
const siteId = (): string => absoluteUrl('/#website');

export interface Crumb { name: string; path: string }

export function breadcrumbTrail(page: PageDef, locale: Locale, content: PageContent): Crumb[] {
  const ui = useUi(locale);
  const trail: Crumb[] = [{ name: ui.breadcrumbHome, path: pagePath(getPage('home') as PageDef, locale) }];
  if (page.id === 'home') return trail;
  const chain: PageDef[] = [];
  for (let cur = page.parent ? getPage(page.parent) : undefined; cur && cur.status === 'published' && chain.length < 4; cur = cur.parent ? getPage(cur.parent) : undefined) chain.unshift(cur);
  for (const anc of chain) {
    const ancContent = getContent(anc.id, locale);
    if (ancContent) trail.push({ name: ancContent.nav, path: pagePath(anc, locale) });
  }
  trail.push({ name: content.nav, path: pagePath(page, locale) });
  return trail;
}

export function buildGraph(page: PageDef, locale: Locale, content: PageContent, ogImagePath: string): object {
  const ui = useUi(locale);
  const url = absoluteUrl(pagePath(page, locale));
  const lang = LOCALE_META[locale].htmlLang;
  const trail = breadcrumbTrail(page, locale, content);

  const organization = {
    '@type': 'Organization', '@id': orgId(), name: SITE_NAME, url: homeUrl(),
    logo: { '@type': 'ImageObject', url: absoluteUrl('/logo.png') }, slogan: ui.tagline,
    ...(CONTACT.email ? { email: CONTACT.email } : {}), ...(CONTACT.phone ? { telephone: CONTACT.phone } : {}),
  };
  const website = { '@type': 'WebSite', '@id': siteId(), url: homeUrl(), name: SITE_NAME, publisher: { '@id': orgId() }, inLanguage: ['fr', 'en', 'ar'] };
  const breadcrumb = trail.length > 1 ? {
    '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`,
    itemListElement: trail.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: absoluteUrl(c.path) })),
  } : undefined;

  const common = { '@id': `${url}#page`, url, name: content.h1, description: content.description, inLanguage: lang, isPartOf: { '@id': siteId() }, ...(breadcrumb ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}) };
  let main: Record<string, unknown>;
  switch (page.schema) {
    case 'Service':
      main = { '@type': ['WebPage', 'Service'], ...common, serviceType: content.nav, provider: { '@id': orgId() } }; break;
    case 'Article':
      main = { '@type': 'Article', ...common, headline: content.h1, datePublished: getPost(page.data?.postId ?? '')?.published ?? page.updated, dateModified: page.updated,
        author: { '@id': orgId() }, publisher: { '@id': orgId() }, mainEntityOfPage: url, image: absoluteUrl(ogImagePath) }; break;
    case 'AboutPage': main = { '@type': 'AboutPage', ...common, about: { '@id': orgId() } }; break;
    case 'ContactPage': main = { '@type': 'ContactPage', ...common }; break;
    case 'FAQPage': main = { '@type': 'FAQPage', ...common }; break;
    default: main = { '@type': 'WebPage', ...common };
  }
  const graph: object[] = [organization, website, main];
  if (breadcrumb) graph.push(breadcrumb);
  if (content.faq?.length) {
    const faq = { '@type': 'FAQPage', '@id': `${url}#faq`, inLanguage: lang, mainEntity: content.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
    if (page.schema === 'FAQPage') Object.assign(main, { mainEntity: faq.mainEntity }); else graph.push(faq);
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

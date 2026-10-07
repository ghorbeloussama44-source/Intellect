import type { Locale } from '../config/site';
import { getPage, pagePath } from '../config/pages';
import { getContent } from '../copy';
import type { PageContent } from '../copy/types';
import { POSTS, type PostDef } from '../data/blog';

export interface PostView { post: PostDef; content: PageContent; href: string; minutes: number }

const wordCount = (c: PageContent): number => {
  const parts: string[] = [c.lead];
  for (const s of c.sections) parts.push(s.h2, ...(s.paragraphs ?? []), ...(s.bullets ?? []), ...(s.after ?? []), ...(s.steps ?? []).flatMap((x) => [x.title, x.text]), ...(s.blocks ?? []).flatMap((b) => [b.h3, ...(b.paragraphs ?? []), ...(b.bullets ?? [])]));
  return parts.join(' ').split(/\s+/).filter(Boolean).length;
};
export const readingMinutes = (c: PageContent): number => Math.max(1, Math.round(wordCount(c) / 200));

/** Articles de la langue, du plus récent au plus ancien. */
export function postsFor(locale: Locale, exclude?: string): PostView[] {
  return [...POSTS].sort((a, b) => b.published.localeCompare(a.published)).filter((p) => p.id !== exclude).flatMap((post) => {
    const content = getContent(`post:${post.id}`, locale);
    const page = getPage(`post:${post.id}`);
    return content && page ? [{ post, content, href: pagePath(page, locale), minutes: readingMinutes(content) }] : [];
  });
}

export const formatDate = (iso: string, locale: Locale): string =>
  new Intl.DateTimeFormat(locale === 'ar' ? 'ar-u-nu-latn' : locale, { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(iso));

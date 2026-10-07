/** Contenu des pages générées depuis les données : articles (texte rédigé), cours, leçons et pages techniques. */
import type { Locale } from '../config/site';
import { getCourse, courseLessons } from '../data/courses';
import { getPost } from '../data/blog';
import { fmt, useFeat } from '../locales/features';
import type { PageContent } from './types';

const base = (nav: string, title: string, description: string, h1: string, lead: string): PageContent => ({ nav, title, description, h1, lead, sections: [] });

export function dynamicContent(id: string, locale: Locale, fromFile: (contentId: string) => PageContent | undefined): PageContent | undefined {
  const f = useFeat(locale);
  switch (id) {
    case 'blog-index': return base(f.nav.blog, f.blog.title, f.blog.description, f.blog.title.split(':')[0] ?? f.blog.title, f.blog.lead);
    case 'catalog': return base(f.nav.elearning, f.learn.catalogTitle, f.learn.catalogDescription, f.learn.catalogTitle.split(':')[0] ?? f.learn.catalogTitle, f.learn.catalogLead);
    case 'login': return base(f.nav.signIn, f.auth.inTitle, f.auth.inDescription, f.auth.inTitle.split('|')[0]!.trim(), f.auth.inLead);
    case 'signup': return base(f.nav.signUp, f.auth.upTitle, f.auth.upDescription, f.auth.upTitle.split('|')[0]!.trim(), f.auth.upLead);
    case 'forgot': return base(f.auth.forgot.replace(/\s?[?؟]$/, ''), f.auth.forgotTitle, f.auth.forgotDescription, f.auth.forgotTitle.split('|')[0]!.trim(), f.auth.forgotLead);
    case 'account': return base(f.nav.account, f.auth.accountTitle, f.auth.accountDescription, f.auth.accountTitle.split('|')[0]!.trim(), f.auth.accountLead);
  }
  const [kind, a, b] = id.split(':');
  if (kind === 'post' && a) {
    const post = getPost(a);
    return post ? fromFile(post.contentId) : undefined;
  }
  const course = a ? getCourse(a) : undefined;
  if (kind === 'course' && course) {
    const n = courseLessons(course).length;
    return base(course.title[locale], `${course.title[locale]} | ${f.nav.elearning}`, course.summary[locale], course.title[locale], `${course.summary[locale]} ${fmt(f.learn.lessons, { n })}.`);
  }
  if (kind === 'lesson' && course) {
    const lesson = courseLessons(course).find((l) => l.id === b);
    if (!lesson) return undefined;
    return base(lesson.title[locale], `${lesson.title[locale]} | ${course.title[locale]}`, lesson.summary[locale], lesson.title[locale], lesson.summary[locale]);
  }
  return undefined;
}

export const isDynamicId = (id: string): boolean => ['blog-index', 'catalog', 'login', 'signup', 'forgot', 'account'].includes(id) || /^(post|course|lesson):/.test(id);

/** Pages générées depuis les données (articles, cours, leçons) et pages techniques (comptes, e-learning). */
import type { PageDef } from './pages';
import { BLOG_INDEX_MIN_POSTS, POSTS } from '../data/blog';
import { COURSES, courseLessons } from '../data/courses';

const all = (s: string): PageDef['slugs'] => ({ fr: s, en: s, ar: s });
const D = '2026-10-07';

export function dynamicPages(): PageDef[] {
  const pages: PageDef[] = [
    { id: 'blog-index', layout: 'blog-index', schema: 'WebPage', slugs: all('blog'), status: 'published', updated: D, priority: 0.7,
      index: POSTS.length >= BLOG_INDEX_MIN_POSTS, navOrder: 5, footerGroup: 'about' },
    { id: 'catalog', layout: 'catalog', schema: 'WebPage', slugs: all('e-learning'), status: 'published', updated: D, priority: 0.6,
      index: false, navOrder: 6, footerGroup: 'learn' },
    { id: 'login', layout: 'auth-in', schema: 'WebPage', slugs: { fr: 'connexion', en: 'sign-in', ar: 'sign-in' }, status: 'published', updated: D, priority: 0.1, private: true },
    { id: 'signup', layout: 'auth-up', schema: 'WebPage', slugs: { fr: 'inscription', en: 'sign-up', ar: 'sign-up' }, status: 'published', updated: D, priority: 0.1, private: true },
    { id: 'forgot', layout: 'auth-forgot', schema: 'WebPage', slugs: { fr: 'mot-de-passe-oublie', en: 'forgot-password', ar: 'forgot-password' }, status: 'published', updated: D, priority: 0.1, private: true },
    { id: 'account', layout: 'account', schema: 'WebPage', slugs: { fr: 'espace-etudiant', en: 'student-area', ar: 'student-area' }, status: 'published', updated: D, priority: 0.1, private: true },
  ];
  for (const p of POSTS) {
    pages.push({ id: `post:${p.id}`, layout: 'blog-post', schema: 'Article', slugs: { fr: `blog/${p.slugs.fr}`, en: `blog/${p.slugs.en}`, ar: `blog/${p.slugs.ar}` },
      status: 'published', updated: p.updated, priority: 0.6, parent: 'blog-index', data: { postId: p.id } });
  }
  for (const c of COURSES) {
    pages.push({ id: `course:${c.id}`, layout: 'course', schema: 'WebPage', slugs: all(`e-learning/${c.id}`), status: 'published', updated: c.published, priority: 0.5,
      index: false, parent: 'catalog', data: { courseId: c.id } });
    for (const l of courseLessons(c)) {
      pages.push({ id: `lesson:${c.id}:${l.id}`, layout: 'lesson', schema: 'WebPage', slugs: all(`e-learning/${c.id}/${l.id}`), status: 'published', updated: c.published, priority: 0.4,
        index: false, parent: `course:${c.id}`, data: { courseId: c.id, lessonId: l.id } });
    }
  }
  return pages;
}

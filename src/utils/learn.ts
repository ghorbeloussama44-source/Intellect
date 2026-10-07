import type { Locale } from '../config/site';
import { getPage, pagePath } from '../config/pages';
import { courseLessons } from '../data/courses';
import type { Course, Lesson } from '../types/elearning';

export const lessonHref = (c: Course, l: Lesson, locale: Locale): string => pagePath(getPage(`lesson:${c.id}:${l.id}`)!, locale);
export const courseHref = (c: Course, locale: Locale): string => pagePath(getPage(`course:${c.id}`)!, locale);
export const kindIcon = (k: Lesson['kind']): string => (k === 'video' ? '#i-play' : k === 'reading' ? '#i-book' : '#i-quiz');

export function neighbours(c: Course, l: Lesson): { prev?: Lesson; next?: Lesson } {
  const all = courseLessons(c), i = all.findIndex((x) => x.id === l.id);
  return { prev: all[i - 1], next: all[i + 1] };
}

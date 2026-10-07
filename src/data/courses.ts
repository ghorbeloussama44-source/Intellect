/**
 * Registre des cours. Pour ajouter un cours : créer src/copy/courses/<id>.ts (export default Course) et l'importer ici.
 * Les cours seront à terme alimentés depuis la base (voir docs/BACKEND.md) : le gabarit ne change pas.
 */
import type { Course, Lesson } from '../types/elearning';
import germanA1Start from '../copy/courses/german-a1-start';

export const COURSES: Course[] = [germanA1Start];

export const getCourse = (id: string): Course | undefined => COURSES.find((c) => c.id === id);
export const courseLessons = (c: Course): Lesson[] => c.modules.flatMap((m) => m.lessons);
export const courseMinutes = (c: Course): number => courseLessons(c).reduce((n, l) => n + l.minutes, 0);

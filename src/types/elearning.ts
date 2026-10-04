/**
 * Modèle conceptuel du futur e-learning. Rien ici ne suppose de backend aujourd'hui : ces types décrivent
 * le contenu statique d'un cours. La progression, les quiz notés et les comptes viendront avec un backend,
 * à décider après février 2027.
 */
import type { Locale } from '../config/site';

export type CourseLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'medical';

export interface Lesson {
  id: string;
  title: Record<Locale, string>;
  /** Vidéo hébergée ailleurs ; le site ne stocke pas de média lourd. */
  videoUrl?: string;
  documents?: { label: Record<Locale, string>; url: string }[];
  exercises?: Exercise[];
}

export interface Exercise {
  id: string;
  prompt: Record<Locale, string>;
  /** Corrigé affiché côté client ; pas de notation serveur à ce stade. */
  answer?: Record<Locale, string>;
}

export interface CourseModule {
  id: string;
  title: Record<Locale, string>;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  level: CourseLevel;
  slugs: Record<Locale, string>;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  image: string;
  modules: CourseModule[];
}

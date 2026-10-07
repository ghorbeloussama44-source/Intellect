import type { Locale } from '../config/site';

/** Texte localisé : les trois langues sont obligatoires (pas de contenu à moitié traduit). */
export type L<T = string> = Record<Locale, T>;

export type ExerciseType = 'choice' | 'fill' | 'order';
export interface Exercise {
  id: string;
  type: ExerciseType;
  prompt: L;
  /** choice : propositions ; order : mots dans le désordre. */
  options?: string[] | L<string[]>;
  /** choice : index de la bonne proposition ; fill : réponses acceptées ; order : mots dans le bon ordre. */
  answer: number | string[];
  explain: L;
}

export type LessonKind = 'video' | 'reading' | 'quiz';
export interface VocabItem { de: string; tr: L }
export interface Lesson {
  id: string;
  kind: LessonKind;
  /** Durée estimée de la leçon (visionnage + exercices), en minutes. */
  minutes: number;
  /** Accessible sans compte. */
  free?: boolean;
  title: L;
  summary: L;
  /** Vidéo courte : à renseigner quand elle existe. Absente = emplacement « bientôt disponible ». */
  video?: { mp4?: string; youtube?: string; poster?: string };
  notes: L<string[]>;
  vocab?: VocabItem[];
  exercises: Exercise[];
  /** Documents à télécharger : { label, url }. */
  resources?: { label: L; url: string }[];
}
export interface Module { id: string; title: L; lessons: Lesson[] }
export interface Course {
  id: string;
  /** Slugs par langue (identiques ou non). */
  level: string;
  published: string;
  title: L;
  summary: L;
  description: L;
  outcomes: L<string[]>;
  modules: Module[];
}

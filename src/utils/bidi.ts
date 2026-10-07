import type { Locale } from '../config/site';

/** Isole les passages latins (mots allemands) dans un texte arabe pour que leur ordre ne soit pas inversé. */
const RUN = /[A-Za-zÄÖÜäöüß][A-Za-zÄÖÜäöüß0-9'’\-/.]*(?:[ ,]+[A-Za-zÄÖÜäöüß0-9'’\-/.]+)*/g;
export const isolate = (s: string, locale: Locale): string => (locale === 'ar' ? s.replace(RUN, '⁦$&⁩') : s);

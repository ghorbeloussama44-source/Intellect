import type { Locale } from '../config/site';
import { ar } from './ar';
import { en } from './en';
import { fr } from './fr';
import type { Ui } from './types';

const dictionaries: Record<Locale, Ui> = { fr, en, ar };

/** Chaînes d'interface communes à toutes les pages, dans la langue demandée. */
export const useUi = (locale: Locale): Ui => dictionaries[locale];
export type { Ui };

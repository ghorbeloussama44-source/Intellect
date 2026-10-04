import type { Locale } from '../config/site';
import type { ContentSet, HomeContent, PageContent } from './types';

const modules = import.meta.glob<{ default: ContentSet }>('./pages/*.ts', { eager: true });

const registry = new Map<string, ContentSet>();
for (const [file, mod] of Object.entries(modules)) {
  const id = file.replace('./pages/', '').replace(/\.ts$/, '');
  registry.set(id, mod.default);
}

/** Contenu d'une page dans une langue ; undefined si la page n'a pas (encore) de contenu. */
export const getContent = (id: string, locale: Locale): PageContent | undefined => registry.get(id)?.[locale];
export const getHomeContent = (locale: Locale): HomeContent => registry.get('home')![locale] as HomeContent;
export const hasContentInAllLocales = (id: string): boolean => {
  const set = registry.get(id);
  return Boolean(set && set.fr && set.en && set.ar);
};
export type { PageContent, HomeContent };

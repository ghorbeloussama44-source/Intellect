export interface Faq { q: string; a: string }
export interface Step { title: string; text: string }
export interface Block { h3: string; paragraphs?: string[]; bullets?: string[] }

export interface Section {
  id: string;
  h2: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: Step[];
  blocks?: Block[];
  /** Paragraphes affichés après les listes / étapes. */
  after?: string[];
}

export interface PageContent {
  /** Libellé court dans le menu et le fil d'Ariane. */
  nav: string;
  /** Meta title (unique par page et par langue). */
  title: string;
  /** Meta description (unique, ~150 caractères). */
  description: string;
  h1: string;
  lead: string;
  sections: Section[];
  faq?: Faq[];
  /** Identifiants de pages à proposer en fin d'article. */
  related?: string[];
}

export interface HomeContent extends PageContent {
  hero: { h1a: string; h1b: string; h1c: string; lead: string; points: [string, string, string]; script: string[] };
  services: { eyebrow: string; title: string; text: string; cards: { id: string; title: string; sub?: string; items: string[] }[] };
  levels: { eyebrow: string; title: string; text: string; link: string };
  why: { eyebrow: string; title: string; items: [string, string, string, string]; script: string[] };
  contact: { eyebrow: string; title: string; text: string };
}

export type ContentSet<T extends PageContent = PageContent> = Record<'fr' | 'en' | 'ar', T>;

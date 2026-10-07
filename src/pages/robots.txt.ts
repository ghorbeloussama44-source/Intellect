import type { APIRoute } from 'astro';
import { PAGES, pagePath } from '../config/pages';
import { LOCALES } from '../config/site';
import { absoluteUrl } from '../config/urls';

/** robots.txt : tout est ouvert sauf l'espace privé (connexion, inscription, espace étudiant), dérivé du registre. Le sitemap dérive de SITE_URL. */
export const GET: APIRoute = () => {
  const blocked = PAGES.filter((p) => p.private && p.status === 'published').flatMap((p) => LOCALES.map((l) => `Disallow: ${pagePath(p, l)}`));
  return new Response(`User-agent: *\nAllow: /\n${blocked.join('\n')}\n\nSitemap: ${absoluteUrl('/sitemap.xml')}\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

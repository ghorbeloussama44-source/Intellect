import type { APIRoute } from 'astro';
import { absoluteUrl } from '../config/urls';

/** robots.txt : tout est ouvert, aucun espace privé à ce jour. Le sitemap dérive de SITE_URL. */
export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl('/sitemap.xml')}\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });

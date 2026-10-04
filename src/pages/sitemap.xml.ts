import type { APIRoute } from 'astro';
import { getImage } from 'astro:assets';
import { allLocalizedPaths } from '../config/pages';
import { absoluteUrl } from '../config/urls';
import { alternatesFor } from '../seo/alternates';
import { useUi, type Ui } from '../locales';
import { getMedia } from '../utils/media';

const esc = (s: string): string => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Sitemap dynamique : toute page publiée dans le registre y entre toute seule, avec hreflang et images. */
export const GET: APIRoute = async () => {
  const urls = await Promise.all(allLocalizedPaths().map(async ({ page, locale, path }) => {
    const ui = useUi(locale);
    const alts = alternatesFor(page).map((a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${esc(a.href)}"/>`).join('\n');
    const images = (await Promise.all((page.images ?? []).map(async (img) => {
      const meta = getMedia(img.file);
      if (!meta) return '';
      const opt = await getImage({ src: meta, format: 'webp' });
      const alt = ui[img.altKey as keyof Ui];
      return `    <image:image><image:loc>${esc(absoluteUrl(opt.src))}</image:loc><image:title>${esc(String(alt))}</image:title></image:image>`;
    }))).filter(Boolean).join('\n');
    return `  <url>\n    <loc>${esc(absoluteUrl(path))}</loc>\n    <lastmod>${page.updated}</lastmod>\n    <priority>${page.priority.toFixed(1)}</priority>\n${alts}${images ? `\n${images}` : ''}\n  </url>`;
  }));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

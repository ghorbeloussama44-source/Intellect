/** Progression affichée sur le catalogue et sur la page d'un cours (coches, barre, bouton Reprendre). */
import { services } from '../services';
import type { CourseProgress } from '../types/community';

const fmt = (s: string, v: Record<string, string | number>): string => s.replace(/\{(\w+)\}/g, (_, k: string) => String(v[k] ?? ''));

export async function initCourseProgress(): Promise<void> {
  const cards = document.querySelectorAll<HTMLElement>('[data-course]');
  if (!cards.length) return;
  const all = await services.progress.all();
  cards.forEach((card) => {
    const p: CourseProgress | undefined = all[card.dataset.course ?? ''];
    const total = Number(card.dataset.total ?? 0);
    if (!p || p.done.length === 0 || !total) return;
    const bar = card.querySelector<HTMLElement>('[data-pbar]'), line = card.querySelector<HTMLElement>('[data-pline]');
    if (bar) { bar.hidden = false; bar.querySelector('i')?.setAttribute('style', `width:${Math.round((p.done.length / total) * 100)}%`); }
    if (line) { line.hidden = false; line.textContent = `${p.done.length} / ${total}`; }
  });
}

export async function initCoursePage(): Promise<void> {
  const root = document.querySelector<HTMLElement>('[data-course-page]');
  if (!root) return;
  const cfg = JSON.parse(root.dataset.config ?? '{}') as { id: string; lessons: { id: string; href: string }[] };
  const p: CourseProgress | undefined = (await services.progress.all())[cfg.id];
  const done = new Set(p?.done ?? []);
  root.querySelectorAll<HTMLElement>('[data-lesson]').forEach((li) => {
    if (done.has(li.dataset.lesson ?? '')) { li.classList.add('is-done'); }
  });
  const session = await services.auth.getSession();
  if (session) root.querySelectorAll('[data-lock]').forEach((e) => e.remove());
  if (!p || (done.size === 0 && !p.last)) return;
  const bar = root.querySelector<HTMLElement>('[data-pbar]'), line = root.querySelector<HTMLElement>('[data-pline]');
  const pct = Math.round((done.size / cfg.lessons.length) * 100);
  if (bar) { bar.hidden = false; bar.querySelector('i')?.setAttribute('style', `width:${pct}%`); }
  if (line) { line.hidden = false; line.textContent = fmt(root.dataset.progressLabel ?? '', { a: done.size, b: cfg.lessons.length }); }
  const cta = document.querySelector<HTMLAnchorElement>('[data-cta]');
  const finished = done.size === cfg.lessons.length;
  const target = finished ? cfg.lessons[0] : (cfg.lessons.find((l) => !done.has(l.id) && l.id === p.last) ?? cfg.lessons.find((l) => !done.has(l.id)));
  if (cta && target) { cta.href = target.href; cta.textContent = (finished ? root.dataset.again : root.dataset.resume) ?? cta.textContent; }
}

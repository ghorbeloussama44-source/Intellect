/** Espace étudiant : profil et progression des cours. Redirige vers la connexion sans session. */
import { isDemo, services } from '../services';

interface Cfg { login: string; catalog: string; strings: Record<string, string>; courses: { id: string; title: string; href: string; total: number; lessons: { id: string; href: string }[] }[] }
const fmt = (s: string, v: Record<string, string | number>): string => s.replace(/\{(\w+)\}/g, (_, k: string) => String(v[k] ?? ''));

export async function initAccountPage(): Promise<void> {
  const root = document.querySelector<HTMLElement>('#account');
  if (!root) return;
  const cfg = JSON.parse(root.dataset.config ?? '{}') as Cfg;
  const user = await services.auth.getSession();
  if (!user) { try { sessionStorage.setItem('intellect-next', location.pathname); } catch { /* ignoré */ } location.replace(cfg.login); return; }
  const profile = root.querySelector<HTMLElement>('[data-profile]')!, courses = root.querySelector<HTMLElement>('[data-courses]')!;
  profile.hidden = false; courses.hidden = false;
  profile.querySelector('[data-name]')!.textContent = user.name;
  profile.querySelector('[data-email]')!.textContent = user.email;
  if (isDemo) { const d = profile.querySelector<HTMLElement>('[data-demo]')!; d.hidden = false; d.textContent = cfg.strings.demo ?? ''; }
  profile.querySelector('[data-signout]')?.addEventListener('click', async () => { await services.auth.signOut(); location.assign(cfg.login); });

  const progress = await services.progress.all();
  const list = courses.querySelector<HTMLElement>('[data-list]')!;
  const started = cfg.courses.filter((c) => (progress[c.id]?.done.length ?? 0) > 0 || progress[c.id]?.last);
  if (started.length === 0) {
    const p = document.createElement('p'); p.textContent = cfg.strings.noCourses ?? '';
    const a = document.createElement('a'); a.className = 'btn btn-orange'; a.href = cfg.catalog; a.textContent = cfg.strings.discover ?? '';
    list.replaceChildren(p, a); return;
  }
  list.replaceChildren(...started.map((c) => {
    const p = progress[c.id]!, done = new Set(p.done), pct = Math.round((done.size / c.total) * 100);
    const card = document.createElement('article'); card.className = 'course-card';
    const body = document.createElement('div'); body.className = 'course-body';
    const h = document.createElement('h3'); const link = document.createElement('a'); link.href = c.href; link.textContent = c.title; h.append(link);
    const bar = document.createElement('div'); bar.className = 'pbar'; const i = document.createElement('i'); i.style.width = `${pct}%`; bar.append(i);
    const line = document.createElement('p'); line.className = 'pline'; line.textContent = fmt(cfg.strings.progress ?? '', { a: done.size, b: c.total });
    const target = c.lessons.find((l) => !done.has(l.id) && l.id === p.last) ?? c.lessons.find((l) => !done.has(l.id)) ?? c.lessons[0]!;
    const cta = document.createElement('a'); cta.className = 'btn btn-orange'; cta.href = target.href; cta.textContent = done.size === c.total ? (cfg.strings.again ?? '') : (cfg.strings.resume ?? '');
    body.append(h, bar, line, cta); card.append(body);
    return card;
  }));
}

/** Lecteur de leçon : onglets, accès réservé, progression, moteur d'exercices (choix, texte à compléter, mise en ordre). */
import { services } from '../services';

type Ex = { id: string; type: 'choice' | 'fill' | 'order'; prompt: string; options?: string[]; answer: number | string[]; explain: string };
interface Cfg { courseId: string; lessonId: string; free: boolean; total: number; next: string | null; strings: Record<string, string>; exercises: Ex[]; login: string; signup: string }

const fmt = (s: string, v: Record<string, string | number>): string => s.replace(/\{(\w+)\}/g, (_, k: string) => String(v[k] ?? ''));
const norm = (s: string): string => s.trim().toLowerCase().replace(/\s+/g, ' ');
function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls?: string, text?: string): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}
const PASS = 0.7;

export function initLesson(): void {
  const root = document.querySelector<HTMLElement>('#lessonRoot');
  if (!root) return;
  const cfg = JSON.parse(root.dataset.config ?? '{}') as Cfg;
  const t = cfg.strings;
  const done = new Set<string>();

  // --- onglets (sans JavaScript, tous les panneaux restent visibles)
  const tabs = [...root.querySelectorAll<HTMLButtonElement>('[role=tab]')];
  const select = (tab: HTMLButtonElement, focus = false): void => {
    tabs.forEach((b) => {
      const on = b === tab;
      b.setAttribute('aria-selected', String(on)); b.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(b.getAttribute('aria-controls') ?? ''); if (panel) panel.hidden = !on;
    });
    if (focus) tab.focus();
  };
  tabs.forEach((b, i) => {
    b.addEventListener('click', () => select(b));
    b.addEventListener('keydown', (e) => {
      const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      const dirFix = document.documentElement.dir === 'rtl' ? -1 : 1;
      if (step) { e.preventDefault(); select(tabs[(i + step * dirFix + tabs.length) % tabs.length]!, true); }
    });
  });
  select(tabs[0]!);

  // --- progression
  const doneBtn = root.querySelector<HTMLButtonElement>('[data-done]')!;
  const paint = (): void => {
    const isDone = done.has(cfg.lessonId);
    doneBtn.setAttribute('aria-pressed', String(isDone)); doneBtn.classList.toggle('on', isDone);
    const label = doneBtn.querySelector('span'); if (label) label.textContent = (isDone ? doneBtn.dataset.on : doneBtn.dataset.off) ?? '';
    root.querySelectorAll<HTMLElement>('.lesson-side [data-lesson]').forEach((li) => {
      const d = done.has(li.dataset.lesson ?? ''); li.classList.toggle('is-done', d)
    });
    const bar = root.querySelector<HTMLElement>('[data-pbar]'), line = root.querySelector<HTMLElement>('[data-pline]');
    if (bar && line) {
      bar.hidden = line.hidden = false;
      bar.querySelector('i')?.setAttribute('style', `width:${Math.round((done.size / cfg.total) * 100)}%`);
      line.textContent = fmt(t.progress ?? '', { a: done.size, b: cfg.total });
    }
  };
  const setDone = async (value: boolean): Promise<void> => {
    if (value) done.add(cfg.lessonId); else done.delete(cfg.lessonId);
    paint();
    try { await services.progress.markLesson(cfg.courseId, cfg.lessonId, value); } catch { /* hors connexion : l'état local reste affiché */ }
  };
  doneBtn.addEventListener('click', () => void setDone(!done.has(cfg.lessonId)));

  void (async () => {
    const p = (await services.progress.all())[cfg.courseId];
    p?.done.forEach((id) => done.add(id));
    paint();
    try { await services.progress.setLast(cfg.courseId, cfg.lessonId); } catch { /* ignoré */ }
    // accès réservé aux comptes (visuel tant qu'aucune vraie base n'est branchée)
    if (!cfg.free && !(await services.auth.getSession())) {
      root.classList.add('gated');
      root.querySelector<HTMLElement>('[data-gate]')!.hidden = false;
    }
  })();
  root.querySelectorAll<HTMLAnchorElement>('[data-next]').forEach((a) => a.addEventListener('click', () => { try { sessionStorage.setItem('intellect-next', location.pathname); } catch { /* ignoré */ } }));

  // --- exercices
  const host = root.querySelector<HTMLElement>('[data-ex]')!;
  const exs = cfg.exercises;
  let idx = 0, correct = 0;
  const optionText = (e: Ex): string => (e.type === 'choice' ? (e.options?.[e.answer as number] ?? '') : (e.answer as string[]).join(e.type === 'order' ? ' ' : ' / '));

  function question(): void {
    const e = exs[idx]!;
    host.replaceChildren();
    const card = el('div', 'ex-card');
    card.append(el('p', 'ex-count', fmt(t.questions ?? '', { a: idx + 1, b: exs.length })));
    const bar = el('div', 'pbar'); const bi = el('i'); bi.style.width = `${(idx / exs.length) * 100}%`; bar.append(bi); card.append(bar);
    const h = el('h3', undefined, e.prompt); h.id = 'ex-prompt'; card.append(h);

    let getValue: () => string | number | string[] | null = () => null;
    const body = el('div', 'ex-body'); card.append(body);
    if (e.type === 'choice') {
      let sel: number | null = null;
      const group = el('div', 'opts'); group.setAttribute('role', 'radiogroup'); group.setAttribute('aria-labelledby', 'ex-prompt');
      (e.options ?? []).forEach((o, i) => {
        const b = el('button', 'opt', o); b.type = 'button'; b.setAttribute('role', 'radio'); b.setAttribute('aria-checked', 'false');
        b.addEventListener('click', () => { sel = i; group.querySelectorAll('.opt').forEach((x) => x.setAttribute('aria-checked', String(x === b))); });
        group.append(b);
      });
      body.append(group); getValue = () => sel;
    } else if (e.type === 'fill') {
      const input = el('input', 'fill'); input.type = 'text'; input.placeholder = t.placeholder ?? ''; input.setAttribute('aria-labelledby', 'ex-prompt');
      input.autocomplete = 'off'; input.autocapitalize = 'off'; input.spellcheck = false; input.dir = 'ltr';
      input.addEventListener('keydown', (k) => { if (k.key === 'Enter') { k.preventDefault(); check.click(); } });
      body.append(input); getValue = () => input.value;
      queueMicrotask(() => input.focus({ preventScroll: true }));
    } else {
      const picked: number[] = [];
      const words = e.options ?? [];
      const line = el('div', 'order-line'); line.setAttribute('aria-live', 'polite'); line.dir = 'ltr';
      const bank = el('div', 'order-bank'); bank.dir = 'ltr';
      const draw = (): void => {
        line.replaceChildren(...picked.map((i) => el('span', 'tok on', words[i] ?? '')));
        bank.querySelectorAll<HTMLButtonElement>('.tok').forEach((b) => { b.disabled = picked.includes(Number(b.dataset.i)); });
      };
      words.forEach((w, i) => {
        const b = el('button', 'tok', w); b.type = 'button'; b.dataset.i = String(i); b.lang = 'de';
        b.addEventListener('click', () => { picked.push(i); draw(); });
        bank.append(b);
      });
      const reset = el('button', 'btn btn-ghost', t.resetOrder); reset.type = 'button';
      reset.addEventListener('click', () => { picked.length = 0; draw(); });
      body.append(el('p', 'hint', t.orderHelp), line, bank, reset);
      getValue = () => picked.map((i) => words[i] ?? '');
    }

    const fb = el('div', 'ex-feedback'); fb.setAttribute('role', 'status'); card.append(fb);
    const actions = el('div', 'ex-actions');
    const check = el('button', 'btn btn-orange', t.check); check.type = 'button';
    check.addEventListener('click', () => {
      const v = getValue();
      if (v === null || v === '' || (Array.isArray(v) && v.length === 0)) return;
      const ok = e.type === 'choice' ? v === e.answer : e.type === 'fill' ? (e.answer as string[]).some((a) => norm(a) === norm(String(v))) : norm((v as string[]).join(' ')) === norm((e.answer as string[]).join(' '));
      if (ok) correct++;
      card.classList.add(ok ? 'ok' : 'ko');
      fb.replaceChildren(el('b', undefined, ok ? t.correct : t.wrong));
      if (!ok) fb.append(el('p', undefined, `${t.answerWas} ${optionText(e)}`));
      fb.append(el('p', undefined, e.explain));
      card.querySelectorAll<HTMLButtonElement | HTMLInputElement>('button.opt, button.tok, input.fill').forEach((x) => { x.disabled = true; });
      check.hidden = true;
      const nxt = el('button', 'btn btn-orange', idx + 1 < exs.length ? t.next ?? '' : t.allDone ?? ''); nxt.type = 'button';
      nxt.addEventListener('click', () => { idx++; if (idx < exs.length) question(); else summary(); });
      actions.append(nxt); nxt.focus();
    });
    actions.append(check); card.append(actions);
    host.append(card);
  }

  function summary(): void {
    host.replaceChildren();
    const card = el('div', 'ex-card summary');
    const pct = correct / exs.length;
    card.append(el('p', 'score', fmt(t.score ?? '', { a: correct, b: exs.length })), el('p', undefined, t.allDone));
    const retry = el('button', 'btn btn-ghost', t.retry); retry.type = 'button';
    retry.addEventListener('click', () => { idx = 0; correct = 0; question(); });
    card.append(retry);
    if (pct >= PASS && cfg.next) { const a = el('a', 'btn btn-orange', t.next); a.href = cfg.next; card.append(a); }
    host.append(card);
    void services.progress.saveScore(cfg.courseId, cfg.lessonId, correct, exs.length).catch(() => undefined);
    if (pct >= PASS && !done.has(cfg.lessonId)) void setDone(true);
  }

  if (exs.length) question();
}

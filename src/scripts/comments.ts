/** Commentaires d'un article : liste, réponses (un niveau), j'aime, signalement, suppression des siens. Jamais d'innerHTML avec du texte utilisateur. */
import { isDemo, services } from '../services';
import { ServiceError, type Comment, type User } from '../types/community';

interface Cfg { locale: string; strings: Record<string, string>; login: string; signup: string; demo: string }
const MAX = 1000;
const fmt = (s: string, v: Record<string, string | number>): string => s.replace(/\{(\w+)\}/g, (_, k: string) => String(v[k] ?? ''));

function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls?: string, text?: string): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

export function initComments(): void {
  const root = document.querySelector<HTMLElement>('#comments');
  if (!root) return;
  const cfg = JSON.parse(root.dataset.config ?? '{}') as Cfg;
  const postId = root.dataset.post ?? '';
  const t = cfg.strings;
  const list = root.querySelector<HTMLElement>('[data-list]')!, compose = root.querySelector<HTMLElement>('[data-compose]')!;
  const count = root.querySelector<HTMLElement>('[data-count]')!, sortSel = root.querySelector<HTMLSelectElement>('[data-sort]')!;
  const demo = root.querySelector<HTMLElement>('[data-demo]')!;
  let me: User | null = null, all: Comment[] = [];
  const reported = new Set<string>();

  if (isDemo) { demo.hidden = false; demo.textContent = cfg.demo; }

  const rel = new Intl.RelativeTimeFormat(cfg.locale === 'ar' ? 'ar-u-nu-latn' : cfg.locale, { numeric: 'auto' });
  const ago = (iso: string): string => {
    const s = (new Date(iso).getTime() - Date.now()) / 1000, a = Math.abs(s);
    if (a < 60) return rel.format(Math.round(s), 'second');
    if (a < 3600) return rel.format(Math.round(s / 60), 'minute');
    if (a < 86400) return rel.format(Math.round(s / 3600), 'hour');
    if (a < 2_592_000) return rel.format(Math.round(s / 86400), 'day');
    return new Intl.DateTimeFormat(cfg.locale === 'ar' ? 'ar-u-nu-latn' : cfg.locale, { dateStyle: 'medium' }).format(new Date(iso));
  };
  const fail = (box: HTMLElement, e: unknown): void => { box.textContent = e instanceof ServiceError && e.code === 'auth-required' ? t.signInPrompt ?? '' : t.error ?? ''; box.hidden = false; };

  function form(parentId: string | null, parentName?: string): HTMLFormElement {
    const f = el('form', 'cm-form');
    const label = el('label', 'visually-hidden', parentName ? fmt(t.replyTo ?? '', { name: parentName }) : t.title);
    const ta = el('textarea'); ta.maxLength = MAX; ta.rows = parentId ? 2 : 3; ta.required = true; ta.placeholder = t.placeholder ?? '';
    label.append(ta);
    const left = el('span', 'cm-left'); const upd = (): void => { left.textContent = fmt(t.left ?? '', { n: MAX - ta.value.length }); };
    ta.addEventListener('input', upd); upd();
    const err = el('p', 'form-error'); err.hidden = true; err.setAttribute('role', 'alert');
    const row = el('div', 'cm-row');
    const send = el('button', 'btn btn-orange', t.submit); send.type = 'submit';
    row.append(left, send);
    if (parentId) { const c = el('button', 'btn btn-ghost', t.cancel); c.type = 'button'; c.addEventListener('click', () => f.remove()); row.append(c); }
    f.append(label, ta, err, row, ...(parentId ? [] : [el('p', 'cm-note', t.moderation)]));
    f.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!ta.value.trim()) return;
      send.disabled = true; send.textContent = t.posting ?? '';
      try { all.push(await services.comments.add(postId, ta.value, parentId)); ta.value = ''; upd(); if (parentId) f.remove(); render(); }
      catch (x) { fail(err, x); }
      finally { send.disabled = false; send.textContent = t.submit ?? ''; }
    });
    return f;
  }

  function item(c: Comment, isReply: boolean): HTMLLIElement {
    const li = el('li', isReply ? 'cm cm-reply' : 'cm'); li.id = `c-${c.id}`;
    const head = el('div', 'cm-head');
    const mine = me?.id === c.author.id;
    head.append(el('span', 'avatar sm', (c.author.name.trim()[0] ?? '?').toUpperCase()), el('b', undefined, c.author.name));
    if (mine) head.append(el('span', 'chip', t.you));
    const time = el('time', undefined, ago(c.createdAt)); time.dateTime = c.createdAt; head.append(time);
    const body = el('p', 'cm-body', c.body);
    const acts = el('div', 'cm-acts');
    const like = el('button', 'cm-act', `${t.like} · ${c.likes}`); like.type = 'button'; like.setAttribute('aria-pressed', String(c.liked));
    like.addEventListener('click', async () => {
      try { const r = await services.comments.toggleLike(c.id, postId); c.likes = r.likes; c.liked = r.liked; like.textContent = `${t.like} · ${r.likes}`; like.setAttribute('aria-pressed', String(r.liked)); }
      catch (x) { if (x instanceof ServiceError && x.code === 'auth-required') location.hash = '#comments'; }
    });
    acts.append(like);
    if (!isReply && me) {
      const r = el('button', 'cm-act', t.reply); r.type = 'button';
      r.addEventListener('click', () => { if (li.querySelector('.cm-form')) return; const f = form(c.id, c.author.name); li.append(f); f.querySelector('textarea')?.focus(); });
      acts.append(r);
    }
    if (!mine) {
      const rp = el('button', 'cm-act', reported.has(c.id) ? (t.reported ?? '') : t.report); rp.type = 'button'; rp.disabled = reported.has(c.id);
      rp.addEventListener('click', async () => { try { await services.comments.report(c.id, postId); reported.add(c.id); rp.textContent = t.reported ?? ''; rp.disabled = true; } catch { /* ignoré */ } });
      acts.append(rp);
    } else {
      const d = el('button', 'cm-act danger', t.remove); d.type = 'button';
      d.addEventListener('click', async () => {
        if (!confirm(t.confirmRemove)) return;
        try { await services.comments.remove(c.id, postId); all = all.filter((x) => x.id !== c.id && x.parentId !== c.id); render(); } catch { /* ignoré */ }
      });
      acts.append(d);
    }
    li.append(head, body, acts);
    return li;
  }

  function render(): void {
    const sort = sortSel.value;
    const cmp = (a: Comment, b: Comment): number => sort === 'oldest' ? a.createdAt.localeCompare(b.createdAt) : sort === 'popular' ? b.likes - a.likes || b.createdAt.localeCompare(a.createdAt) : b.createdAt.localeCompare(a.createdAt);
    const tops = all.filter((c) => !c.parentId).sort(cmp);
    count.textContent = all.length === 0 ? '' : all.length === 1 ? (t.one ?? '') : fmt(t.many ?? '', { n: all.length });
    list.replaceChildren();
    if (tops.length === 0) { list.append(el('li', 'cm-empty', t.none)); return; }
    for (const c of tops) {
      const li = item(c, false);
      const replies = all.filter((r) => r.parentId === c.id).sort((a, b) => a.createdAt.localeCompare(b.createdAt));
      if (replies.length) { const ul = el('ol', 'cm-replies'); replies.forEach((r) => ul.append(item(r, true))); li.append(ul); }
      list.append(li);
    }
  }

  function renderCompose(): void {
    compose.replaceChildren();
    if (me) { compose.append(form(null)); return; }
    const box = el('div', 'cm-gate');
    box.append(el('p', undefined, t.signInPrompt));
    const a1 = el('a', 'btn btn-orange', t.signIn); a1.href = cfg.login;
    const a2 = el('a', 'btn btn-ghost', t.signUp); a2.href = cfg.signup;
    box.append(a1, a2);
    compose.append(box);
  }

  sortSel.addEventListener('change', render);
  void (async () => {
    try { me = await services.auth.getSession(); all = await services.comments.list(postId); } catch { list.replaceChildren(el('li', 'cm-empty', t.error)); }
    renderCompose(); render();
  })();
}

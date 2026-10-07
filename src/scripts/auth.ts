/** Formulaires de connexion, d'inscription et de réinitialisation. Validation côté navigateur + appel au service d'authentification. */
import { isDemo, services } from '../services';
import { ServiceError } from '../types/community';

interface Cfg { mode: 'in' | 'up' | 'forgot'; strings: Record<string, string | Record<string, string>>; next: string }
const fmt = (s: string, v: Record<string, string>): string => s.replace(/\{(\w+)\}/g, (_, k: string) => v[k] ?? '');

export function initAuthForm(): void {
  const form = document.querySelector<HTMLFormElement>('#authForm');
  if (!form) return;
  const cfg = JSON.parse(form.dataset.config ?? '{}') as Cfg;
  const t = cfg.strings as Record<string, string> & { err: Record<string, string> };
  const err = t.err as unknown as Record<string, string>;
  const q = <T extends HTMLElement>(s: string): T | null => form.querySelector<T>(s);
  const fieldErr = (name: string, msg?: string): void => {
    const p = q(`[data-err="${name}"]`); if (!p) return;
    p.hidden = !msg; p.textContent = msg ?? '';
    const input = form.elements.namedItem(name);
    if (input instanceof HTMLInputElement) input.setAttribute('aria-invalid', String(Boolean(msg)));
  };
  const top = q('[data-form-err]')!, ok = q('[data-form-ok]')!, submit = q<HTMLButtonElement>('[data-submit]')!;
  if (isDemo) { const d = q('[data-demo]'); if (d) { d.hidden = false; d.textContent = t.demo ?? ''; } }

  const toggle = q<HTMLButtonElement>('[data-toggle]');
  toggle?.addEventListener('click', () => {
    const input = form.elements.namedItem('password') as HTMLInputElement, show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    toggle.setAttribute('aria-pressed', String(show)); toggle.setAttribute('aria-label', show ? (toggle.dataset.hide ?? '') : (toggle.dataset.show ?? ''));
  });

  const strength = q('[data-strength]');
  (form.elements.namedItem('password') as HTMLInputElement | null)?.addEventListener('input', (e) => {
    if (!strength) return;
    const v = (e.target as HTMLInputElement).value;
    const score = [v.length >= 8, /[a-z]/.test(v) && /[A-Z]/.test(v), /\d/.test(v), /[^A-Za-z0-9]/.test(v) || v.length >= 14].filter(Boolean).length;
    const level = !v ? 0 : score <= 1 ? 1 : score <= 3 ? 2 : 3;
    strength.dataset.level = String(level);
    const label = strength.querySelector('[data-label]'); if (label) label.textContent = [ '—', t.weak ?? '', t.fair ?? '', t.strong ?? ''][level] ?? '—';
  });

  const val = (n: string): string => ((form.elements.namedItem(n) as HTMLInputElement | null)?.value ?? '').trim();
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    top.hidden = true; ok.hidden = true;
    let bad = false;
    const check = (name: string, msg: string | undefined): void => { fieldErr(name, msg); if (msg) bad = true; };
    if (cfg.mode === 'up') check('name', val('name') ? undefined : err.required);
    check('email', !val('email') ? err.required : /^\S+@\S+\.\S+$/.test(val('email')) ? undefined : err.email);
    if (cfg.mode !== 'forgot') {
      const pw = (form.elements.namedItem('password') as HTMLInputElement).value;
      check('password', !pw ? err.required : cfg.mode === 'up' && pw.length < 8 ? err.short : undefined);
    }
    if (bad) { (form.querySelector('[aria-invalid="true"]') as HTMLElement | null)?.focus(); return; }
    submit.disabled = true;
    try {
      const email = val('email'), password = (form.elements.namedItem('password') as HTMLInputElement | null)?.value ?? '';
      if (cfg.mode === 'forgot') { await services.auth.requestPasswordReset(email); ok.hidden = false; ok.textContent = t.sent ?? ''; return; }
      const user = cfg.mode === 'up' ? await services.auth.signUp({ name: val('name'), email, password }) : await services.auth.signIn({ email, password });
      ok.hidden = false; ok.textContent = fmt(t.welcome ?? '', { name: user.name });
      const back = sessionStorage.getItem('intellect-next');
      sessionStorage.removeItem('intellect-next');
      location.assign(back && back.startsWith('/') ? back : cfg.next);
    } catch (x) {
      const code = x instanceof ServiceError ? x.code : 'generic';
      top.hidden = false;
      top.textContent = code === 'unknown-account' ? err.unknown ?? '' : code === 'exists' ? err.exists ?? '' : code === 'network' ? err.network ?? '' : err.generic ?? '';
    } finally { submit.disabled = false; }
  });
}

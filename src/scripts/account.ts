/** État de connexion dans l'en-tête : bascule « Connexion » ↔ menu d'avatar, et déconnexion. */
import { services } from '../services';

export const AUTH_EVENT = 'intellect:auth';

export async function initAccount(): Promise<void> {
  const box = document.querySelector<HTMLElement>('[data-acct]');
  if (!box) return;
  const out = box.querySelector<HTMLElement>('[data-out]'), inn = box.querySelector<HTMLDetailsElement>('[data-in]');
  const user = await services.auth.getSession();
  if (user && out && inn) {
    out.hidden = true; inn.hidden = false;
    const initial = inn.querySelector('[data-initial]'), name = inn.querySelector('[data-name]');
    if (initial) initial.textContent = (user.name.trim()[0] ?? '?').toUpperCase();
    if (name) name.textContent = user.name;
  }
  document.addEventListener('click', (e) => { if (inn?.open && !inn.contains(e.target as Node)) inn.open = false; });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && inn?.open) { inn.open = false; inn.querySelector('summary')?.focus(); } });
  box.querySelector('[data-signout]')?.addEventListener('click', async () => {
    await services.auth.signOut();
    document.dispatchEvent(new CustomEvent(AUTH_EVENT));
    location.reload();
  });
}

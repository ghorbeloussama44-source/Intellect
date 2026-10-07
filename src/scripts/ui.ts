/** Interactions de l'interface : menu, sélecteur de langue, effets au scroll, cartes, formulaire. */
const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document): T | null => r.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document): T[] => [...r.querySelectorAll<T>(s)];
const root = document.documentElement;
const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Mémorise le choix de langue de l'utilisateur ; le lien reste un vrai <a href> (crawlable). */
function initLanguage(): void {
  // la langue de la page visitée devient la langue mémorisée : l'adresse racine « / » y renverra le visiteur
  try { localStorage.setItem('intellect-lang', root.lang); } catch { /* stockage indisponible */ }
  const details = $<HTMLDetailsElement>('details.lang');
  $$<HTMLAnchorElement>('a[data-lang]').forEach((a) => a.addEventListener('click', () => {
    try { localStorage.setItem('intellect-lang', a.dataset.lang ?? ''); } catch { /* stockage indisponible */ }
  }));
  document.addEventListener('click', (e) => { if (details?.open && !details.contains(e.target as Node)) details.open = false; });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && details?.open) { details.open = false; $('summary', details)?.focus(); } });
}

function initMenu(): HTMLElement | null {
  const burger = $<HTMLButtonElement>('#burger'), menu = $('#menu');
  if (!burger || !menu) return menu;
  const close = (): void => { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); };
  burger.addEventListener('click', () => burger.setAttribute('aria-expanded', String(menu.classList.toggle('open'))));
  menu.addEventListener('click', (e) => { if ((e.target as Element).closest('a')) close(); });
  return menu;
}

function initScroll(): void {
  const header = $('.site-header'), bar = $('#progress'), hero = $('.hero'), marquee = $('.marquee');
  const rtl = root.dir === 'rtl';
  let last = scrollY, skew = 0, ticking = false;

  const tick = (): void => {
    ticking = false;
    const y = scrollY, dy = y - last; last = y;
    const max = Math.max(1, root.scrollHeight - innerHeight);
    if (bar) bar.style.transform = `scaleX(${Math.min(1, y / max)})`;
    header?.classList.toggle('scrolled', y > 8);
    if (!calm) {
      if (hero) root.style.setProperty('--hp', Math.min(1, Math.max(0, y / (hero.offsetHeight * 0.9))).toFixed(3));
      skew += (Math.max(-9, Math.min(9, dy * 0.35)) * (rtl ? -1 : 1) - skew) * 0.25;
      marquee?.style.setProperty('--skew', `${skew.toFixed(2)}deg`);
      if (Math.abs(skew) > 0.05) { ticking = true; requestAnimationFrame(tick); }
    }
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(tick); } }, { passive: true });
  tick();
}

/** Apparitions échelonnées : seuls les éléments sous la ligne de flottaison sont masqués puis révélés. */
function initReveal(): void {
  if (calm || !('IntersectionObserver' in window)) return;
  const groups = ['.levels-grid > div:first-child > *', '.stairs .lvl', '.stairs .bubble', '.section-head > *', '.cards .card', '.why-grid > div:first-child > *',
    '.why-items li', '.contact-grid > div:first-child > *', '.form', '.prose > *', '.steps li', '.cta-band', '.faq details'];
  const items: HTMLElement[] = [];
  groups.forEach((sel) => $$(sel).forEach((el, i) => { el.classList.add('rv'); el.style.setProperty('--i', String(i % 5)); items.push(el); }));
  const done = (el: HTMLElement): void => { el.classList.add('in'); setTimeout(() => el.classList.remove('rv', 'in'), 1600); };
  const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { done(en.target as HTMLElement); io.unobserve(en.target); } }), { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
  items.forEach((el) => { if (el.getBoundingClientRect().top < innerHeight * 0.92) el.classList.remove('rv'); else io.observe(el); });
  root.classList.add('rv-on');
}

function initCards(): void {
  if (calm || !matchMedia('(hover:hover) and (pointer:fine)').matches) return;
  $$('.card').forEach((c) => {
    c.addEventListener('pointermove', (e) => {
      const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      c.style.setProperty('--mx', `${(x + 0.5) * r.width}px`); c.style.setProperty('--my', `${(y + 0.5) * r.height}px`);
      c.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-4px)`;
    });
    c.addEventListener('pointerleave', () => { c.style.transform = ''; });
  });
}

/** Vidéo d'ambiance facultative : ignorée si mouvement réduit, économie de données ou fichier absent. */
function initVideo(): void {
  const vid = $<HTMLVideoElement>('#heroVideo');
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  if (!vid) return;
  if (calm || conn?.saveData || !vid.dataset.src) { vid.remove(); return; }
  vid.addEventListener('canplay', () => { vid.classList.add('show'); void vid.play().catch(() => undefined); }, { once: true });
  vid.addEventListener('error', () => vid.remove(), { once: true });
  vid.src = vid.dataset.src; vid.load();
}

/** Formulaire : n'annonce un succès que si l'envoi a réellement abouti. */
function initForm(): void {
  const form = $<HTMLFormElement>('#form'), note = $('#formNote');
  if (!form || !note) return;
  const msg = (key: string): string => form.dataset[key] ?? '';
  const say = (text: string, error = false): void => { note.textContent = text; note.classList.toggle('error', error); };
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = form.elements.namedItem('name') as HTMLInputElement, email = form.elements.namedItem('email') as HTMLInputElement;
    const okEmail = /^\S+@\S+\.\S+$/.test(email.value);
    name.classList.toggle('bad', !name.value.trim()); email.classList.toggle('bad', !okEmail);
    if (!name.value.trim() || !okEmail) return say(msg('err'), true);
    const endpoint = form.dataset.endpoint, wa = form.dataset.wa;
    if (!endpoint && !wa) return say(msg('notConnected'), true);
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const topic = (form.elements.namedItem('topic') as HTMLSelectElement).selectedOptions[0]?.textContent ?? '';
    const text = msg('waText').replace(/\{(\w+)\}/g, (_, k: string) => (k === 'topic' ? topic : (data[k] ?? '').trim())).replace(/\s{2,}/g, ' ').trim();
    // l'onglet WhatsApp doit s'ouvrir pendant le geste de l'utilisateur, avant tout envoi réseau
    const tab = wa ? window.open('', '_blank') : null;
    const openWa = (): void => { const url = `https://wa.me/${wa}?text=${encodeURIComponent(text)}`; if (tab) { tab.opener = null; tab.location.href = url; } else location.assign(url); };
    say(msg('sending'));
    try {
      if (endpoint) {
        const res = await fetch(endpoint, { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
        if (!res.ok) throw new Error(String(res.status));
      }
      form.reset();
      if (wa) { openWa(); say(msg('okWa')); } else say(msg('ok'));
    } catch { tab?.close(); say(msg('failed'), true); }
  });
}

export function initUi(): void {
  initLanguage();
  initMenu();
  initScroll();
  initReveal();
  initCards();
  initVideo();
  initForm();
}

/**
 * Démarre les effets WebGL au premier geste de l'utilisateur (souris, toucher, molette, clavier),
 * ou après un court délai sur un poste de bureau capable. Avant cela, le CSS affiche un rendu statique équivalent :
 * le chargement reste léger (score Lighthouse mobile) et les robots n'exécutent jamais le WebGL.
 */
export function startWhenReady(start: () => void): void {
  let done = false;
  const events = ['pointerdown', 'pointermove', 'wheel', 'keydown', 'touchstart', 'scroll'] as const;
  const run = (): void => {
    if (done) return;
    done = true;
    events.forEach((e) => removeEventListener(e, run));
    start();
  };
  events.forEach((e) => addEventListener(e, run, { passive: true }));
}

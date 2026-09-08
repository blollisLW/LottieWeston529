(() => {
  const poster = document.getElementById('posterShell');
  if (!poster) return;

  const canMove = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)');
  if (!canMove.matches) return;

  const MAX_TILT = 0.75;
  const MAX_SHIFT = 2.5;

  const reset = () => {
    poster.style.setProperty('--rx', '0deg');
    poster.style.setProperty('--ry', '0deg');
    poster.style.setProperty('--tx', '0px');
    poster.style.setProperty('--ty', '0px');
  };

  window.addEventListener('pointermove', (event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = (event.clientY / window.innerHeight) * 2 - 1;

    poster.style.setProperty('--ry', `${(x * MAX_TILT).toFixed(2)}deg`);
    poster.style.setProperty('--rx', `${(-y * MAX_TILT).toFixed(2)}deg`);
    poster.style.setProperty('--tx', `${(x * MAX_SHIFT).toFixed(2)}px`);
    poster.style.setProperty('--ty', `${(y * MAX_SHIFT).toFixed(2)}px`);
  }, { passive: true });

  window.addEventListener('pointerleave', reset, { passive: true });
  window.addEventListener('blur', reset);
})();

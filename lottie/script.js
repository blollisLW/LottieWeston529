(() => {
  const root = document.documentElement;
  const hero = document.getElementById('hero');
  if (!hero) return;

  const motionOK = window.matchMedia('(prefers-reduced-motion: no-preference)');
  const finePointer = window.matchMedia('(pointer: fine)');

  let raf = 0;
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  const apply = () => {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    root.style.setProperty('--scene-x', `${(currentX * 7).toFixed(2)}px`);
    root.style.setProperty('--scene-y', `${(currentY * 3).toFixed(2)}px`);
    root.style.setProperty('--title-x', `${(-currentX * 3.5).toFixed(2)}px`);
    root.style.setProperty('--title-y', `${(-currentY * 2).toFixed(2)}px`);
    root.style.setProperty('--decor-x', `${(-currentX * 7).toFixed(2)}px`);
    root.style.setProperty('--decor-y', `${(-currentY * 4).toFixed(2)}px`);

    if (Math.abs(targetX - currentX) > 0.002 || Math.abs(targetY - currentY) > 0.002) {
      raf = requestAnimationFrame(apply);
    } else {
      raf = 0;
    }
  };

  const queue = () => {
    if (!raf) raf = requestAnimationFrame(apply);
  };

  if (motionOK.matches && finePointer.matches) {
    window.addEventListener('pointermove', (event) => {
      targetX = (event.clientX / window.innerWidth) * 2 - 1;
      targetY = (event.clientY / window.innerHeight) * 2 - 1;
      queue();
    }, { passive: true });

    document.documentElement.addEventListener('mouseleave', () => {
      targetX = 0;
      targetY = 0;
      queue();
    });
  }

  let cheerTimer;
  hero.addEventListener('pointerdown', () => {
    if (!motionOK.matches) return;
    hero.classList.remove('is-cheering');
    void hero.offsetWidth;
    hero.classList.add('is-cheering');
    clearTimeout(cheerTimer);
    cheerTimer = setTimeout(() => hero.classList.remove('is-cheering'), 700);
  }, { passive: true });
})();

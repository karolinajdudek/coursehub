'use strict';
document.body.classList.add('js');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#course-nav');
if (menu && nav) {
  const links = [...nav.querySelectorAll('a')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href')));
  function closeMenu(returnFocus = false) {
    nav.classList.remove('is-open');
    menu.setAttribute('aria-expanded', 'false');
    menu.querySelector('span').textContent = '＋';
    if (returnFocus) menu.focus();
  }
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    nav.classList.toggle('is-open', open);
    menu.setAttribute('aria-expanded', String(open));
    menu.querySelector('span').textContent = open ? '−' : '＋';
  });
  nav.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link) return;
    closeMenu();
    const target = document.querySelector(link.getAttribute('href'));
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') closeMenu(true);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.sidebar')) closeMenu();
  });
  const mobile = window.matchMedia('(max-width: 700px)');
  mobile.addEventListener('change', () => closeMenu());
  let scheduled = false;
  function updateActive() {
    const threshold = mobile.matches ? 110 : 100;
    let current = 0;
    sections.forEach((section, index) => {
      if (section.getBoundingClientRect().top <= threshold) current = index;
    });
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) current = sections.length - 1;
    links.forEach((link, index) => {
      if (index === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scheduled = false;
  }
  function schedule() {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateActive); }
  }
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  window.addEventListener('hashchange', schedule);
  updateActive();
}

/* Progressive enhancement: content and links work without JavaScript. */
(() => {
  'use strict';

  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  const header = document.querySelector('.site-header');
  if (header) {
    const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#site-nav');
  if (menuButton && navigation) {
    const mobileLayout = window.matchMedia('(max-width: 540px)');
    const setMenu = (open, restoreFocus = false) => {
      navigation.classList.toggle('is-open', open);
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      if (restoreFocus) menuButton.focus();
    };

    document.documentElement.classList.add('js-nav');
    menuButton.hidden = false;
    menuButton.addEventListener('click', () => {
      setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
    });
    navigation.addEventListener('click', (event) => {
      const link = event.target.closest('a');
      if (!link) return;
      setMenu(false);
      if (mobileLayout.matches && link.hash) {
        const target = document.getElementById(link.hash.slice(1));
        if (target) {
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        }
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        setMenu(false, true);
      }
    });
    document.addEventListener('click', (event) => {
      if (!navigation.contains(event.target) && !menuButton.contains(event.target)) setMenu(false);
    });
    const onLayoutChange = () => {
      const focusWillBeHidden = mobileLayout.matches && navigation.contains(document.activeElement);
      setMenu(false, focusWillBeHidden);
    };
    if (mobileLayout.addEventListener) mobileLayout.addEventListener('change', onLayoutChange);
  }

  if (navigation && 'IntersectionObserver' in window) {
    const sectionLinks = Array.from(navigation.querySelectorAll('a[href^="#"]'));
    const sections = sectionLinks.map((link) => document.getElementById(link.hash.slice(1))).filter(Boolean);
    const activeSections = new Map();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => activeSections.set(entry.target.id, entry.isIntersecting));
      const active = sections.find((section) => activeSections.get(section.id));
      sectionLinks.forEach((link) => {
        if (active && link.hash === '#' + active.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
    sections.forEach((section) => observer.observe(section));
  }

  const copyButton = document.querySelector('[data-copy-email]');
  const copyStatus = document.querySelector('#copy-status');
  if (copyButton && copyStatus && navigator.clipboard && window.isSecureContext) {
    copyButton.hidden = false;
    copyButton.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(copyButton.dataset.copyEmail);
        copyStatus.textContent = 'Email address copied. Say hello whenever you’re ready.';
      } catch {
        copyStatus.textContent = 'Copy is unavailable. Select the email address above to open your email app.';
      }
    });
  }
})();

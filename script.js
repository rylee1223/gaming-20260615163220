/* -------------------------------------------------
   GameSphere – Interactive JavaScript
   Handles:
   • Mobile navigation toggle
   • Light/Dark theme switching
   • Simple scroll‑into‑view animations
--------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const htmlEl = document.documentElement;
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    const themeSwitcher = document.getElementById('theme-switcher');
    const yearSpan = document.getElementById('year');

    /* ---- Set current year in footer ---- */
    yearSpan.textContent = new Date().getFullYear();

    /* ---- Mobile navigation toggle ---- */
    navToggle.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
        navToggle.setAttribute('aria-expanded', !expanded);
        navList.classList.toggle('open');
    });

    /* ---- Theme switcher (dark default) ---- */
    const THEME_KEY = 'gamesphere-theme';
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Load saved theme or system preference
    const savedTheme = localStorage.getItem(THEME_KEY);
    const initialTheme = savedTheme ? savedTheme : (userPrefersDark ? 'dark' : 'light');
    setTheme(initialTheme, false);

    themeSwitcher.addEventListener('click', () => {
        const current = htmlEl.classList.contains('light-theme') ? 'light' : 'dark';
        const next = current === 'light' ? 'dark' : 'light';
        setTheme(next, true);
    });

    function setTheme(mode, store) {
        if (mode === 'light') {
            htmlEl.classList.add('light-theme');
            themeSwitcher.textContent = '🌙';
        } else {
            htmlEl.classList.remove('light-theme');
            themeSwitcher.textContent = '☀️';
        }
        if (store) localStorage.setItem(THEME_KEY, mode);
    }

    /* ---- Scroll‑into‑view animations using IntersectionObserver ---- */
    const faders = document.querySelectorAll('.section');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(section => {
        section.classList.add('fade-in');
        appearOnScroll.observe(section);
    });
});
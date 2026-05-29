import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Hero animation – title words slam up on page load
 */
export function animateHero() {
  const tl = gsap.timeline({ delay: 0.1 });
  tl.to('.title-word', {
    y: '0%',
    duration: 1.1,
    ease: 'power4.out',
    stagger: 0.15,
  });
}

/**
 * Helper: reveal heading lines with clip‑up effect
 * @param {string} selector - CSS selector for the lines to reveal (e.g. '#origin .reveal-line')
 */
export function revealLines(selector) {
  const lines = document.querySelectorAll(selector);
  if (!lines.length) return;

  // Wrap inner text in a span if not already wrapped
  lines.forEach((line) => {
    if (line.querySelector('.line-inner')) return;
    const inner = document.createElement('span');
    inner.classList.add('line-inner');
    inner.style.cssText = 'display:block; transform:translateY(105%);';
    inner.innerHTML = line.innerHTML;
    line.innerHTML = '';
    line.style.overflow = 'hidden';
    line.style.display = 'block';
    line.appendChild(inner);
  });

  const inners = document.querySelectorAll(selector + ' .line-inner');
  gsap.to(inners, {
    y: '0%',
    duration: 1.1,
    ease: 'power4.out',
    stagger: 0.12,
    scrollTrigger: {
      trigger: lines[0]?.closest('h2, h1') || lines[0],
      start: 'top 88%',
    },
  });
}

/**
 * Fade‑up animation for any elements with .reveal-para, .reveal-block, .reveal-card
 * @param {string} containerSelector - optional parent selector to limit scope
 */
export function fadeUpElements(containerSelector = 'body') {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  gsap.utils.toArray(container.querySelectorAll('.reveal-para, .reveal-block')).forEach((el, i) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.85,
      ease: 'power3.out',
      delay: i * 0.1,
      scrollTrigger: { trigger: el, start: 'top 88%' },
    });
  });

  gsap.utils.toArray(container.querySelectorAll('.reveal-card')).forEach((el, i) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: i * 0.15,
      scrollTrigger: { trigger: el, start: 'top 88%' },
    });
  });
}

/**
 * Animate numeric counters (e.g. stat-num elements)
 */
export function animateCounters() {
  document.querySelectorAll('.stat-num').forEach((el) => {
    const end = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const dec = String(end).includes('.') ? 1 : 0;
    const obj = { v: 0 };

    gsap.to(obj, {
      v: end,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%' },
      onUpdate() {
        el.textContent = obj.v.toFixed(dec) + suffix;
      },
    });
  });
}

/**
 * Animate skill bar fills
 */
export function animateSkillBars() {
  document.querySelectorAll('.skill-bar-fill').forEach((bar) => {
    const targetW = bar.dataset.width + '%';
    gsap.to(bar, {
      width: targetW,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: { trigger: bar, start: 'top 88%' },
    });
  });
}

/**
 * Staggered reveal for signal links
 */
export function animateSignalLinks() {
  gsap.utils.toArray('.signal-link').forEach((el, i) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out',
      delay: i * 0.1,
      scrollTrigger: { trigger: el, start: 'top 90%' },
    });
  });
}

/**
 * Parallax effects: watermark and hero content
 */
export function initParallax() {
  // Watermark moves up on scroll
  gsap.to('.watermark', {
    y: '-18%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.act-open',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });

  // Hero content fades and moves up
  gsap.to('.open-content', {
    y: '-12%',
    opacity: 0.3,
    ease: 'none',
    scrollTrigger: {
      trigger: '.act-open',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });
}

/**
 * Master function to set up all scroll animations
 * Call this once after the page has loaded
 */
export function setupAllScrollAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // Act II: Origin
  revealLines('#origin .reveal-line');
  fadeUpElements('#origin');
  animateCounters();

  // Act III: Work
  revealLines('#work .reveal-line');
  fadeUpElements('#work');

  // Act IV: Craft
  revealLines('#craft .reveal-line');
  animateSkillBars();

  // Act V: Milestones (handled by fadeUpElements, but add specific ones if needed)
  fadeUpElements('#milestones');

  // Act VI: Signal
  revealLines('#signal .reveal-line');
  fadeUpElements('#signal');
  animateSignalLinks();

  // Parallax
  initParallax();
}
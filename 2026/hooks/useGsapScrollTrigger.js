import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function useGsapScrollTrigger() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    // Helper for revealing heading lines
    function revealLines(selector) {
      const lines = document.querySelectorAll(selector);
      if (!lines.length) return;

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

    // --- ACT II: Origin ---
    revealLines('#origin .reveal-line');

    gsap.utils.toArray('#origin .reveal-para').forEach((el, i) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: i * 0.1,
        scrollTrigger: { trigger: el, start: 'top 88%' },
      });
    });

    // Stat counters
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

    // Education cards
    gsap.utils.toArray('.reveal-card').forEach((el, i) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: i * 0.15,
        scrollTrigger: { trigger: el, start: 'top 88%' },
      });
    });

    // --- ACT III: Work ---
    revealLines('#work .reveal-line');
    gsap.utils.toArray('.reveal-block, .reveal-para').forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 86%' },
      });
    });

    // --- ACT IV: Craft ---
    revealLines('#craft .reveal-line');
    document.querySelectorAll('.skill-bar-fill').forEach((bar) => {
      const targetW = bar.dataset.width + '%';
      gsap.to(bar, {
        width: targetW,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: bar, start: 'top 88%' },
      });
    });

    // --- ACT V: Signal ---
    revealLines('#signal .reveal-line');
    gsap.utils.toArray('#signal .reveal-para').forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%' },
      });
    });
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

    // Parallax
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
}
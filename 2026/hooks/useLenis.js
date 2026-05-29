import { useEffect } from 'react';
import gsap from 'gsap';
import Lenis from '@studio-freight/lenis';

export default function useLenis() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.4,
    });

    // Share GSAP's ticker – one loop, no double‑RAF
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    lenis.on('scroll', () => {
      // ScrollTrigger will be updated separately
    });

    // Make lenis globally accessible for programmatic scroll
    window._lenis = lenis;

    return () => {
      gsap.ticker.remove(() => lenis.destroy());
      lenis.destroy();
      delete window._lenis;
    };
  }, []);
}
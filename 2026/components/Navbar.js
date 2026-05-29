"use client";
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Navbar() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const nav = document.getElementById('nav');
    ScrollTrigger.create({
      start: 'top -60',
      onEnter: () => nav.classList.add('scrolled'),
      onLeaveBack: () => nav.classList.remove('scrolled'),
    });
  }, []);

  const scrollTo = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
    if (window._lenis) {
      window._lenis.scrollTo(target, { offset: -60, duration: 1.4 });
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav id="nav" className="fixed top-0 left-0 right-0 h-[68px] flex items-center justify-between px-[clamp(24px,5vw,72px)] z-[100] transition-all duration-500 border-b border-transparent scrolled:bg-black/92 scrolled:backdrop-blur-md scrolled:border-b-border">
      <a href="#open" className="nav-logo font-display text-[1.5rem] tracking-[0.1em] text-white flex items-center gap-[2px] hover:text-gold transition-colors" onClick={(e) => { e.preventDefault(); scrollTo('open'); }}>
        <span>K</span><span className="text-gold text-[1.2rem]">·</span><span>T</span>
      </a>

      <div className="nav-chapters hidden md:flex gap-8 items-center">
        {['open', 'origin', 'work', 'craft', 'milestones', 'signal'].map((section, idx) => (
          <button
            key={section}
            className="nav-chapter font-mono text-[0.7rem] tracking-[0.15em] text-white-dim relative py-1 transition-colors hover:text-gold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-300"
            data-target={section}
            onClick={() => scrollTo(section)}
          >
            {['I', 'II', 'III', 'IV', 'V', 'VI'][idx]}
          </button>
        ))}
      </div>

      <div className="nav-actions flex items-center gap-2.5">
        <a href="./certificates/resume.pdf" className="nav-cta-secondary font-mono text-[0.7rem] tracking-[0.15em] uppercase px-5 py-2.5 border border-border-hi text-white-dim hover:text-white hover:border-white-dim hover:bg-white/6 transition-all" data-cert="resume" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        <a href="mailto:abhimanhas2132@gmail.com" className="nav-cta font-mono text-[0.7rem] tracking-[0.15em] uppercase px-5 py-2.5 border border-gold-dim text-gold hover:bg-gold-glow hover:border-gold transition-all" target="_blank" rel="noopener noreferrer">
          Hire Me
        </a>
      </div>
    </nav>
  );
}
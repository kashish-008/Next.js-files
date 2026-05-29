"use client";
import { useEffect } from 'react';
import gsap from 'gsap';

export default function ActOpen() {
  useEffect(() => {
    // Hero text animation: each word slams up into view
    const tl = gsap.timeline({ delay: 0.1 });
    tl.to('.title-word', {
      y: '0%',
      duration: 1.1,
      ease: 'power4.out',
      stagger: 0.15,
    });
  }, []);

  return (
    <section id="open" className="act-open relative flex flex-col justify-center min-h-screen px-[clamp(24px,6vw,80px)] pt-[var(--nav-h)] pb-[clamp(80px,10vh,140px)] overflow-hidden bg-black">
      <div className="scanlines absolute inset-0 pointer-events-none z-[1] bg-[repeating-linear-gradient(to_bottom,transparent_0px,transparent_3px,rgba(255,255,255,0.012)_3px,rgba(255,255,255,0.012)_4px)]"></div>
      <div className="watermark absolute bottom-[-0.15em] left-[-0.04em] font-display text-[clamp(12rem,28vw,28rem)] text-transparent [-webkit-text-stroke:1px_#4a453d] leading-none pointer-events-none select-none z-0 opacity-35 tracking-[-0.02em]">
        DEVELOPER
      </div>

      <div className="open-content relative z-[2] max-w-[1200px]">
        <div className="open-eyebrow flex items-center gap-6 mb-10 opacity-0 animate-fade-in [animation-delay:1.8s] [animation-fill-mode:forwards]">
          <span className="mono font-mono text-[0.72rem] tracking-[0.12em] text-white-dim">Chapter I</span>
          <span className="open-line flex-1 max-w-[80px] h-px bg-border-hi"></span>
          <span className="mono font-mono text-[0.72rem] tracking-[0.12em] text-white-dim">A Story Begins</span>
        </div>

        <h1 className="open-title mb-10" aria-label="Kashish Thakur">
          <div className="title-row block overflow-hidden">
            <span className="title-word block font-display text-[clamp(5rem,16vw,17rem)] leading-[0.88] tracking-[-0.01em] text-white translate-y-[110%]">KASHISH</span>
          </div>
          <div className="title-row title-row-indent block overflow-hidden pl-[clamp(2rem,8vw,12rem)]">
            <span className="title-word title-word-outline block font-display text-[clamp(5rem,16vw,17rem)] leading-[0.88] tracking-[-0.01em] text-transparent [-webkit-text-stroke:2px_#f0ece4] translate-y-[110%]">THAKUR</span>
          </div>
        </h1>

        <div className="open-descriptor mb-10 opacity-0 animate-fade-in [animation-delay:2.2s] [animation-fill-mode:forwards]">
          <p className="open-role font-body text-[clamp(1.1rem,2.5vw,1.5rem)] font-light text-white-dim mb-2">Frontend Developer &amp; MCA Student</p>
          <p className="open-tagline font-body text-[clamp(1.2rem,2.5vw,1.6rem)] italic text-white">
            Building interfaces that feel <em className="not-italic text-gold">alive</em>.
          </p>
        </div>

        <div className="open-meta flex items-center gap-4 opacity-0 animate-fade-in [animation-delay:2.5s] [animation-fill-mode:forwards]">
          <span className="mono font-mono text-[0.68rem] tracking-[0.12em] text-white-dim">Punjab, India</span>
          <span className="open-dot w-[3px] h-[3px] rounded-full bg-gold-dim"></span>
          <span className="mono font-mono text-[0.68rem] tracking-[0.12em] text-white-dim">Available for opportunities</span>
          <span className="open-dot w-[3px] h-[3px] rounded-full bg-gold-dim"></span>
          <span className="mono font-mono text-[0.68rem] tracking-[0.12em] text-white-dim">2026</span>
        </div>
      </div>

      {/* Scroll prompt */}
      <div className="scroll-prompt absolute bottom-10 right-[clamp(24px,5vw,30px)] flex flex-col items-center gap-2.5 opacity-0 animate-fade-in [animation-delay:3s] [animation-fill-mode:forwards] z-[2]">
        <div className="scroll-prompt-track w-px h-[60px] bg-border-hi relative overflow-hidden">
          <div className="scroll-prompt-thumb absolute top-[-100%] w-full h-[40%] bg-gold animate-scroll-thumb"></div>
        </div>
        <span className="mono font-mono text-[0.68rem] tracking-[0.12em] text-white-dim">Scroll to continue</span>
      </div>

      {/* Filmstrip */}
      <div className="filmstrip absolute bottom-0 left-0 right-0 flex gap-0 overflow-hidden border-t border-border z-[2] opacity-0 animate-fade-in [animation-delay:2.8s] [animation-fill-mode:forwards]">
        {['HTML','CSS','JS','REACT','GSAP','GIT','PYTHON','HTML','CSS','JS','REACT','GSAP','GIT','PYTHON'].map((tech, idx) => (
          <span key={idx} className="flex-1 text-center py-2.5 font-mono text-[0.62rem] tracking-[0.18em] text-white-faint border-r border-border last:border-r-0">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
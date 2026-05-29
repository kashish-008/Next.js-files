"use client";

export default function ActSignal() {
  return (
    <section id="signal" className="act-signal relative bg-black px-[clamp(24px,6vw,80px)] py-[clamp(100px,14vh,180px)] flex flex-col justify-between min-h-screen">
      <div className="act-label absolute top-[clamp(80px,10vh,120px)] right-[clamp(24px,5vw,30px)] writing-mode-vertical font-mono text-[0.65rem] tracking-[0.2em] text-white-faint select-none hidden md:block">
        Chapter VI---Contact Me
      </div>

      <div className="signal-layout max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-1fr-1fr gap-20 items-start flex-1">
        <div className="signal-heading-wrap">
          <h2 className="signal-heading font-display text-[clamp(5rem,12vw,11rem)] leading-[0.88] tracking-[0.01em] text-white flex flex-col">
            <span className="reveal-line block overflow-hidden"><span className="line-inner block translate-y-[105%]">Send</span></span>
            <span className="reveal-line block overflow-hidden"><span className="line-inner block translate-y-[105%]">the</span></span>
            <span className="reveal-line reveal-line-accent block overflow-hidden text-gold"><span className="line-inner block translate-y-[105%]">Signal.</span></span>
          </h2>
          <p className="signal-sub text-[clamp(1rem,1.6vw,1.15rem)] text-white-dim leading-[1.85] max-w-[480px] mt-8 opacity-0 translate-y-7 reveal-para">
            If you have a project, a role, or a conversation worth having - the line is open. No spam. No bots. Just Kashish.
          </p>
        </div>

        <div className="signal-links flex flex-col w-full self-start pt-4">
          <a href="mailto:abhimanhas2132@gmail.com" className="signal-link flex items-center justify-between py-8 border-b border-border opacity-0 translate-y-5 transition-all hover:pl-6 hover:pr-6 hover:bg-surface group first:border-t">
            <div className="signal-link-inner flex flex-col gap-1">
              <span className="signal-link-type font-mono text-[0.65rem] text-gold-dim">Email</span>
              <span className="signal-link-value font-display text-[clamp(1.1rem,2vw,1.6rem)] tracking-[0.02em] text-white group-hover:text-gold transition-colors">abhimanhas2132@gmail.com</span>
            </div>
            <span className="signal-arrow text-[1.5rem] text-white-dim group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold transition-all">↗</span>
          </a>

          <a href="tel:+919781149520" className="signal-link flex items-center justify-between py-8 border-b border-border opacity-0 translate-y-5 transition-all hover:pl-6 hover:pr-6 hover:bg-surface group">
            <div className="signal-link-inner flex flex-col gap-1">
              <span className="signal-link-type font-mono text-[0.65rem] text-gold-dim">Phone</span>
              <span className="signal-link-value font-display text-[clamp(1.1rem,2vw,1.6rem)] tracking-[0.02em] text-white group-hover:text-gold transition-colors">+91 97811 49520</span>
            </div>
            <span className="signal-arrow text-[1.5rem] text-white-dim group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold transition-all">↗</span>
          </a>

          <a href="https://linkedin.com/in/kashish54" target="_blank" rel="noopener noreferrer" className="signal-link flex items-center justify-between py-8 border-b border-border opacity-0 translate-y-5 transition-all hover:pl-6 hover:pr-6 hover:bg-surface group">
            <div className="signal-link-inner flex flex-col gap-1">
              <span className="signal-link-type font-mono text-[0.65rem] text-gold-dim">LinkedIn</span>
              <span className="signal-link-value font-display text-[clamp(1.1rem,2vw,1.6rem)] tracking-[0.02em] text-white group-hover:text-gold transition-colors">linkedin.com/in/kashish54</span>
            </div>
            <span className="signal-arrow text-[1.5rem] text-white-dim group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold transition-all">↗</span>
          </a>

          <a href="https://github.com/kashish-008" target="_blank" rel="noopener noreferrer" className="signal-link flex items-center justify-between py-8 border-b border-border opacity-0 translate-y-5 transition-all hover:pl-6 hover:pr-6 hover:bg-surface group">
            <div className="signal-link-inner flex flex-col gap-1">
              <span className="signal-link-type font-mono text-[0.65rem] text-gold-dim">GitHub</span>
              <span className="signal-link-value font-display text-[clamp(1.1rem,2vw,1.6rem)] tracking-[0.02em] text-white group-hover:text-gold transition-colors">github.com/kashish-008</span>
            </div>
            <span className="signal-arrow text-[1.5rem] text-white-dim group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold transition-all">↗</span>
          </a>
        </div>
      </div>

      {/* Credits */}
      <div className="signal-credits max-w-[1300px] mx-auto w-full mt-16 pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center md:items-end gap-4">
        <div className="credits-left">
          <span className="mono font-mono text-[0.68rem] tracking-[0.12em] text-white-dim">Kashish Thakur · 2025</span>
        </div>
        <div className="credits-center text-center font-mono text-[0.68rem] tracking-[0.12em] text-white-dim">
          Designed &amp; Developed with obsession
          <p className="text-white-dim/70 mt-1">Made with curiosity, caffeine, and clean code.</p>
        </div>
        <div className="credits-right font-mono text-[0.68rem] tracking-[0.12em] text-white-dim">
          Punjab · India
        </div>
      </div>
    </section>
  );
}
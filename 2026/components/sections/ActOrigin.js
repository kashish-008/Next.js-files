"use client";

export default function ActOrigin() {
  return (
    <section id="origin" className="act-origin relative min-h-screen bg-deep px-[clamp(24px,6vw,80px)] py-[clamp(100px,14vh,180px)]">
      <div className="act-label absolute top-[clamp(80px,10vh,120px)] right-[clamp(24px,5vw,30px)] writing-mode-vertical font-mono text-[0.65rem] tracking-[0.2em] text-white-faint select-none hidden md:block">
        Chapter II---About
      </div>

      <div className="origin-layout max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-20 items-start">
        <div className="origin-left sticky top-[calc(68px+40px)]">
          <h2 className="act-heading font-display text-[clamp(4rem,10vw,9rem)] leading-[0.92] tracking-[0.01em] text-white flex flex-col gap-[0.05em] mb-12">
            <span className="reveal-line block overflow-hidden leading-none pb-0.5">
              <span className="line-inner block translate-y-[105%]">The</span>
            </span>
            <span className="reveal-line block overflow-hidden leading-none pb-0.5">
              <span className="line-inner block translate-y-[105%]">Origin</span>
            </span>
            <span className="reveal-line reveal-line-accent block overflow-hidden leading-none pb-0.5 text-gold">
              <span className="line-inner block translate-y-[105%]">Story.</span>
            </span>
          </h2>

          <div className="origin-stats flex flex-col border-t border-border mt-12">
            <div className="origin-stat py-6 border-b border-border">
              <span className="stat-num block font-display text-5xl leading-none text-gold tracking-[0.02em] mb-1" data-count="8.1" data-suffix>8.1</span>
              <span className="stat-label font-mono text-[0.68rem] tracking-[0.12em] text-white-dim uppercase">SGPA · MCA</span>
            </div>
            <div className="origin-stat py-6 border-b border-border">
              <span className="stat-num block font-display text-5xl leading-none text-gold tracking-[0.02em] mb-1" data-count="45" data-suffix="+">45+</span>
              <span className="stat-label font-mono text-[0.68rem] tracking-[0.12em] text-white-dim uppercase">Days MERN Training</span>
            </div>
            <div className="origin-stat py-6 border-b border-border">
              <span className="stat-num block font-display text-5xl leading-none text-gold tracking-[0.02em] mb-1" data-count="6" data-suffix="mo">6mo</span>
              <span className="stat-label font-mono text-[0.68rem] tracking-[0.12em] text-white-dim uppercase">Corporate Experience</span>
            </div>
          </div>
        </div>

        <div className="origin-right pt-4">
          <div className="origin-paragraph grid grid-cols-[48px_1fr] gap-6 items-start mb-12 opacity-0 translate-y-7 reveal-para">
            <span className="para-number font-mono text-[0.72rem] text-gold-dim pt-[0.35rem]">01</span>
            <p className="text-[clamp(1.05rem,1.8vw,1.25rem)] leading-[1.85] text-white-dim font-light">
              Every developer has a moment — the first time a line of code did exactly what they told it to. For Kashish Thakur, that moment became an obsession.
            </p>
          </div>

          <div className="origin-paragraph grid grid-cols-[48px_1fr] gap-6 items-start mb-12 opacity-0 translate-y-7 reveal-para">
            <span className="para-number font-mono text-[0.72rem] text-gold-dim pt-[0.35rem]">02</span>
            <p className="text-[clamp(1.05rem,1.8vw,1.25rem)] leading-[1.85] text-white-dim font-light">
              Studying MCA at CGC Landran with an 8.1 SGPA, he's not just collecting grades — he's building a foundation. Hands-on MERN training. Six months inside Cognessol's data operations. Real work. Real pressure.
            </p>
          </div>

          <div className="origin-paragraph grid grid-cols-[48px_1fr] gap-6 items-start mb-12 opacity-0 translate-y-7 reveal-para">
            <span className="para-number font-mono text-[0.72rem] text-gold-dim pt-[0.35rem]">03</span>
            <p className="text-[clamp(1.05rem,1.8vw,1.25rem)] leading-[1.85] text-white-dim font-light">
              Detail-oriented by nature, adaptable by experience. The kind of developer who watches Christopher Nolan films not just for the story — but to study how layers of complexity can feel effortless to the audience.
            </p>
          </div>

          <div className="origin-paragraph grid grid-cols-[48px_1fr] gap-6 items-start mb-12 opacity-0 translate-y-7 reveal-para">
            <span className="para-number font-mono text-[0.72rem] text-gold-dim pt-[0.35rem]">04</span>
            <p className="text-[clamp(1.05rem,1.8vw,1.25rem)] leading-[1.85] text-white-dim font-light">
              Currently hunting for opportunities where code meets creativity. Remote or in-office — doesn't matter. What matters is building something that <em className="text-gold not-italic">moves</em> people.
            </p>
          </div>

          <div className="origin-quote opacity-0 translate-y-7 reveal-para my-12 py-8 px-10 border-l-2 border-gold bg-gold-glow/30">
            <blockquote className="font-body text-[clamp(1.2rem,2.2vw,1.6rem)] italic leading-[1.6] text-white font-light">
              "The interface is the story.<br />Every animation is a sentence."
            </blockquote>
          </div>
        </div>
      </div>

      {/* Education strip */}
      <div className="education-strip flex flex-col md:flex-row items-stretch mt-24 border-t border-b border-border max-w-[1300px] mx-auto">
        <div className="edu-card flex-1 p-12 opacity-0 translate-y-6 reveal-card">
          <span className="edu-year font-mono text-[0.72rem] text-gold-dim block mb-4">2024 - 2026</span>
          <h3 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] tracking-[0.02em] text-white mb-2 leading-[1.1]">Master of Computer Applications</h3>
          <p className="text-white-dim mb-5">CGC Landran</p>
          <span className="edu-grade font-mono text-[0.72rem] tracking-[0.12em] text-gold bg-gold-glow px-3 py-1.5 border border-gold-dim inline-block">SGPA 8.1</span>
        </div>
        <div className="edu-divider w-full md:w-px h-px md:h-auto bg-border flex-shrink-0"></div>
        <div className="edu-card flex-1 p-12 opacity-0 translate-y-6 reveal-card">
          <span className="edu-year font-mono text-[0.72rem] text-gold-dim block mb-4">2020 - 2023</span>
          <h3 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] tracking-[0.02em] text-white mb-2 leading-[1.1]">Bachelor of Computer Applications</h3>
          <p className="text-white-dim mb-5">SPN College</p>
          <span className="edu-grade font-mono text-[0.72rem] tracking-[0.12em] text-gold bg-gold-glow px-3 py-1.5 border border-gold-dim inline-block">CGPA 7.7</span>
        </div>
        <div className="edu-divider w-full md:w-px h-px md:h-auto bg-border flex-shrink-0"></div>
        <div className="edu-card flex-1 p-12 opacity-0 translate-y-6 reveal-card">
          <span className="edu-year font-mono text-[0.72rem] text-gold-dim block mb-4">2019 - 2020</span>
          <h3 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] tracking-[0.02em] text-white mb-2 leading-[1.1]">12th <br /> Non-Medical</h3>
          <p className="text-white-dim mb-5">ASS School</p>
          <span className="edu-grade font-mono text-[0.72rem] tracking-[0.12em] text-gold bg-gold-glow px-3 py-1.5 border border-gold-dim inline-block">CGPA 8.2</span>
        </div>
      </div>
    </section>
  );
}
"use client";

export default function ActCraft() {
  return (
    <section id="craft" className="act-craft relative min-h-screen bg-deep px-[clamp(24px,6vw,80px)] py-[clamp(100px,14vh,180px)] overflow-hidden">
      <div className="act-label absolute top-[clamp(80px,10vh,120px)] right-[clamp(24px,5vw,30px)] writing-mode-vertical font-mono text-[0.65rem] tracking-[0.2em] text-white-faint select-none hidden md:block">
        Chapter IV---Skills
      </div>

      <div className="craft-layout max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-20 items-start mb-24">
        <div className="craft-left sticky top-[calc(68px+40px)]">
          <h2 className="act-heading font-display text-[clamp(4rem,10vw,9rem)] leading-[0.92] tracking-[0.01em] text-white flex flex-col">
            <span className="reveal-line block overflow-hidden"><span className="line-inner block translate-y-[105%]">The</span></span>
            <span className="reveal-line block overflow-hidden"><span className="line-inner block translate-y-[105%]">Arsenal.</span></span>
          </h2>
          <p className="craft-sub text-[clamp(1rem,1.5vw,1.1rem)] text-white-dim leading-[1.8] max-w-[340px] mt-6 opacity-0 translate-y-7 reveal-para">
            Tools aren't the story - they're the vocabulary. Here's the one Kashish speaks fluently, and the ones he's still learning.
          </p>
        </div>

        <div className="craft-right">
          {/* Core Skills */}
          <div className="skill-category mb-12 opacity-0 translate-y-6 reveal-block">
            <div className="skill-cat-label font-mono text-[0.72rem] tracking-[0.12em] text-white-dim pb-3 mb-6 border-b border-border block">Core - Fluent</div>
            <div className="skill-bars flex flex-col gap-5">
              <div className="skill-bar-item flex flex-col gap-1.5">
                <span className="text-[0.95rem] text-white-dim font-body">HTML5 &amp; CSS3</span>
                <div className="skill-bar h-[2px] bg-border relative overflow-hidden">
                  <div className="skill-bar-fill absolute top-0 left-0 h-full w-0 bg-gold" data-width="92"></div>
                </div>
              </div>
              <div className="skill-bar-item flex flex-col gap-1.5">
                <span className="text-[0.95rem] text-white-dim font-body">JavaScript (ES6+)</span>
                <div className="skill-bar h-[2px] bg-border relative overflow-hidden">
                  <div className="skill-bar-fill absolute top-0 left-0 h-full w-0 bg-gold" data-width="82"></div>
                </div>
              </div>
              <div className="skill-bar-item flex flex-col gap-1.5">
                <span className="text-[0.95rem] text-white-dim font-body">React.js</span>
                <div className="skill-bar h-[2px] bg-border relative overflow-hidden">
                  <div className="skill-bar-fill absolute top-0 left-0 h-full w-0 bg-gold" data-width="68"></div>
                </div>
              </div>
              <div className="skill-bar-item flex flex-col gap-1.5">
                <span className="text-[0.95rem] text-white-dim font-body">GSAP Animations</span>
                <div className="skill-bar h-[2px] bg-border relative overflow-hidden">
                  <div className="skill-bar-fill absolute top-0 left-0 h-full w-0 bg-gold" data-width="78"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="skill-category mb-12 opacity-0 translate-y-6 reveal-block">
            <div className="skill-cat-label font-mono text-[0.72rem] tracking-[0.12em] text-white-dim pb-3 mb-6 border-b border-border block">Tools - Comfortable</div>
            <div className="skill-pills-row flex flex-wrap gap-2.5">
              {['Git / GitHub','Locomotive Scroll','Bootstrap 5','Python','AOS','VS Code'].map(tool => (
                <span key={tool} className="font-mono text-[0.68rem] tracking-[0.1em] uppercase px-4 py-1.5 border border-border-hi text-white-dim hover:border-gold-dim hover:text-gold transition-all cursor-none">{tool}</span>
              ))}
            </div>
          </div>

          {/* Learning */}
          <div className="skill-category opacity-0 translate-y-6 reveal-block">
            <div className="skill-cat-label font-mono text-[0.72rem] tracking-[0.12em] text-white-dim pb-3 mb-6 border-b border-border block">Learning - In Progress</div>
            <div className="skill-pills-row skill-pills-row-dim flex flex-wrap gap-2.5">
              {['Node.js','MongoDB','Express.js','Three.js'].map(tech => (
                <span key={tech} className="font-mono text-[0.68rem] tracking-[0.1em] uppercase px-4 py-1.5 border border-dashed border-border-hi text-white-dim opacity-60 hover:border-gold-dim hover:text-gold transition-all cursor-none">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="skill-marquee w-full overflow-hidden border-t border-border py-6">
        <div className="marquee-track flex gap-10 w-max animate-marquee">
          {['HTML','·','CSS','·','JavaScript','·','React','·','GSAP','·','Git','·','Python','·','AOS','·','HTML','·','CSS','·','JavaScript','·','React','·','GSAP','·','Git','·','Python','·','AOS','·'].map((item, idx) => (
            <span key={idx} className="font-display text-[clamp(1.4rem,3vw,2rem)] tracking-[0.08em] text-white-faint whitespace-nowrap">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
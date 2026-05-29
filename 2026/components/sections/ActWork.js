"use client";

export default function ActWork() {
  return (
    <section id="work" className="act-work relative min-h-screen bg-black px-[clamp(24px,6vw,80px)] py-[clamp(100px,14vh,180px)]">
      <div className="act-label absolute top-[clamp(80px,10vh,120px)] right-[clamp(24px,5vw,30px)] writing-mode-vertical font-mono text-[0.65rem] tracking-[0.2em] text-white-faint select-none hidden md:block">
        Chapter III---Experience + Projects
      </div>

      {/* Experience Section */}
      <div className="work-experience max-w-[1300px] mx-auto mb-32">
        <div className="work-exp-label mb-12 pb-6 border-b border-border">
          <span className="mono font-mono text-[0.72rem] tracking-[0.12em] text-white-dim">Experience</span>
        </div>

        <div className="exp-feature grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-20 items-start">
          <div className="exp-feature-left sticky top-[calc(68px+40px)]">
            <h2 className="act-heading-sm font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.92] tracking-[0.01em] text-white flex flex-col">
              <span className="reveal-line block overflow-hidden"><span className="line-inner block translate-y-[105%]">Where the</span></span>
              <span className="reveal-line block overflow-hidden"><span className="line-inner block translate-y-[105%]">story got</span></span>
              <span className="reveal-line reveal-line-accent block overflow-hidden text-gold"><span className="line-inner block translate-y-[105%]">real.</span></span>
            </h2>
          </div>

          <div className="exp-feature-right">
            <div className="exp-block bg-surface border border-border p-12 opacity-0 translate-y-[30px] reveal-block hover:border-border-hi transition-colors">
              <div className="exp-block-header flex flex-wrap justify-between items-start gap-6 mb-6">
                <div>
                  <h3 className="font-display text-[clamp(1.8rem,3vw,2.5rem)] tracking-[0.02em] text-white leading-[1.05]">Data Management Role</h3>
                  <span className="exp-company font-mono text-[0.72rem] tracking-[0.12em] text-gold block mt-1">Cognessol</span>
                </div>
                <span className="exp-date font-mono text-[0.72rem] text-white-dim whitespace-nowrap pt-2">Jan 2024 - Jul 2024</span>
              </div>
              <p className="exp-desc text-[clamp(1rem,1.5vw,1.1rem)] text-white-dim leading-[1.85] mb-8">
                Six months inside a real company. Not a tutorial, not a project - actual work. Improved data organization that impacted real business decisions. Collaborated with cross-functional teams under deadlines. Learned that discipline is the foundation of everything.
              </p>
              <div className="exp-tags flex flex-wrap gap-2.5">
                <span className="font-mono text-[0.65rem] tracking-[0.1em] uppercase px-3 py-1.5 border border-border-hi text-white-dim">Data Management</span>
                <span className="font-mono text-[0.65rem] tracking-[0.1em] uppercase px-3 py-1.5 border border-border-hi text-white-dim">Cross-team Collaboration</span>
                <span className="font-mono text-[0.65rem] tracking-[0.1em] uppercase px-3 py-1.5 border border-border-hi text-white-dim">Business Operations</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="work-projects max-w-[1300px] mx-auto">
        <div className="work-proj-label mb-12 pb-6 border-b border-border">
          <span className="mono font-mono text-[0.72rem] tracking-[0.12em] text-white-dim">Projects</span>
        </div>

        <h2 className="act-heading font-display text-[clamp(4rem,10vw,9rem)] leading-[0.92] tracking-[0.01em] text-white flex flex-col mb-16">
          <span className="reveal-line block overflow-hidden"><span className="line-inner block translate-y-[105%]">Things built</span></span>
          <span className="reveal-line block overflow-hidden"><span className="line-inner block translate-y-[105%]"><em className="not-italic text-gold">from nothing.</em></span></span>
        </h2>

        {/* Project 01 */}
        <div className="project-row grid grid-cols-[80px_1fr_280px] gap-12 items-start py-16 opacity-0 translate-y-[30px] reveal-block group">
          <div className="project-row-number font-display text-7xl text-white-faint leading-none pt-1 group-hover:text-gold transition-colors">01</div>
          <div className="project-row-content">
            <div className="project-row-header flex flex-wrap items-baseline gap-6 mb-5">
              <h3 className="font-display text-[clamp(2rem,4vw,3.2rem)] tracking-[0.02em] text-white leading-none">EMS Pro</h3>
              <span className="project-type font-mono text-[0.72rem] text-gold-dim">Individual</span>
            </div>
            <p className="project-story text-[clamp(1rem,1.5vw,1.1rem)] text-white-dim leading-[1.85] mb-6 max-w-[580px]">
              No React. No backend. Just HTML, CSS, and the kind of JavaScript that makes you remember why you started coding. GSAP adds the rhythm - smooth transitions that breathe. LocalStorage gives it memory. Responsive because every device deserves the same experience. Proof that constraints aren't limitations - they're the whole point.
            </p>
            <div className="project-tech flex flex-wrap gap-2">
              {['HTML','CSS','JavaScript','GSAP','LocalStorage'].map(tech => (
                <span key={tech} className="font-mono text-[0.62rem] tracking-[0.1em] uppercase px-3 py-1.5 border border-border text-white-dim group-hover:border-gold-dim group-hover:text-gold transition-all">{tech}</span>
              ))}
            </div>
          </div>
          <div className="project-row-visual flex items-start pt-2">
            <div className="proj-visual-box w-full aspect-square bg-surface border border-border flex flex-col items-center justify-center gap-6 p-8 relative overflow-hidden group-hover:border-gold-dim transition-all">
              <div className="absolute inset-0 bg-gold-glow opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="proj-visual-label font-display text-5xl text-white-faint tracking-[0.1em] relative z-10 group-hover:text-gold transition-colors">EMS</span>
              <div className="proj-visual-lines flex flex-col gap-1.5 w-[60%] relative z-10">
                <div className="h-px bg-border-hi group-hover:bg-gold-dim transition-all"></div>
                <div className="h-px w-[75%] bg-border-hi group-hover:bg-gold-dim transition-all"></div>
                <div className="h-px w-[55%] bg-border-hi group-hover:bg-gold-dim transition-all"></div>
                <div className="h-px w-[85%] bg-border-hi group-hover:bg-gold-dim transition-all"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-divider h-px bg-border my-0"></div>

        {/* Project 02 */}
        <div className="project-row project-row-reverse grid grid-cols-[80px_1fr_280px] gap-12 items-start py-16 opacity-0 translate-y-[30px] reveal-block group">
          <div className="project-row-number font-display text-7xl text-white-faint leading-none pt-1 group-hover:text-gold transition-colors">02</div>
          <div className="project-row-content">
            <div className="project-row-header flex flex-wrap items-baseline gap-6 mb-5">
              <h3 className="font-display text-[clamp(2rem,4vw,3.2rem)] tracking-[0.02em] text-white leading-none">Google Gemini Clone</h3>
              <span className="project-type font-mono text-[0.72rem] text-gold-dim">Team of 4</span>
            </div>
            <p className="project-story text-[clamp(1rem,1.5vw,1.1rem)] text-white-dim leading-[1.85] mb-6 max-w-[580px]">
              A collaborative effort that demanded one thing above all: clarity. Four developers, one UI. Led design decisions that kept the interface cohesive. Responsive across every screen. API connected. The kind of project where you learn that good code is also good communication.
            </p>
            <div className="project-tech flex flex-wrap gap-2">
              {['HTML','CSS','JavaScript','API Integration','Responsive UI'].map(tech => (
                <span key={tech} className="font-mono text-[0.62rem] tracking-[0.1em] uppercase px-3 py-1.5 border border-border text-white-dim group-hover:border-gold-dim group-hover:text-gold transition-all">{tech}</span>
              ))}
            </div>
          </div>
          <div className="project-row-visual flex items-start pt-2">
            <div className="proj-visual-box proj-visual-box-alt w-full aspect-square bg-deep border border-border flex flex-col items-center justify-center gap-6 p-8 relative overflow-hidden group-hover:border-gold-dim transition-all">
              <div className="absolute inset-0 bg-gold-glow opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="proj-visual-label font-display text-5xl text-white-faint tracking-[0.1em] relative z-10 group-hover:text-gold transition-colors">GEM</span>
              <div className="proj-visual-lines flex flex-col gap-1.5 w-[60%] relative z-10">
                <div className="h-px bg-border-hi group-hover:bg-gold-dim transition-all"></div>
                <div className="h-px w-[75%] bg-border-hi group-hover:bg-gold-dim transition-all"></div>
                <div className="h-px w-[55%] bg-border-hi group-hover:bg-gold-dim transition-all"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
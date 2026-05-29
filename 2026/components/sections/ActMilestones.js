"use client";

export default function ActMilestones() {
  return (
    <section id="milestones" className="act-milestones relative min-h-screen bg-deep px-[clamp(24px,6vw,80px)] py-[clamp(100px,14vh,180px)]">
      <div className="act-label absolute top-[clamp(80px,10vh,120px)] right-[clamp(24px,5vw,30px)] writing-mode-vertical font-mono text-[0.65rem] tracking-[0.2em] text-white-faint select-none hidden md:block">
        Chapter V---Certificate & Achievement
      </div>

      <div className="milestones-layout max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-20 items-start">
        <div className="milestones-left sticky top-[calc(68px+48px)]">
          <h2 className="act-heading font-display text-[clamp(4rem,10vw,9rem)] leading-[0.92] tracking-[0.01em] text-white flex flex-col">
            <span className="reveal-line block overflow-hidden"><span className="line-inner block translate-y-[105%]">Beyond</span></span>
            <span className="reveal-line block overflow-hidden"><span className="line-inner block translate-y-[105%]">the</span></span>
            <span className="reveal-line reveal-line-accent block overflow-hidden text-gold"><span className="line-inner block translate-y-[105%]">Code.</span></span>
          </h2>
          <p className="milestones-sub text-[clamp(1rem,1.5vw,1.1rem)] text-white-dim leading-[1.8] mt-6 opacity-0 translate-y-7 reveal-para">
            Certificates are proof. Achievements are story. Here's both.
          </p>
        </div>

        <div className="milestones-right">
          {/* SIH Achievement */}
          <div className="milestone-card milestone-card-hero bg-surface border border-border p-8 mb-8 transition-all hover:border-gold-dim hover:translate-x-1.5 group">
            <div className="milestone-card-header flex flex-wrap justify-between items-center gap-3 mb-4">
              <span className="milestone-type font-mono text-[0.65rem] tracking-[0.15em] text-gold-dim bg-gold-glow px-3 py-1 border border-gold-dim">Team Achievement</span>
              <span className="milestone-year font-mono text-[0.65rem] tracking-[0.12em] text-white-faint">2025</span>
            </div>
            <h3 className="font-display text-[clamp(1.4rem,2.5vw,1.8rem)] tracking-[0.02em] text-white mb-4 leading-[1.2]">Smart India Hackathon</h3>
            <p className="milestone-story text-[0.95rem] text-white-dim leading-[1.7] mb-5">
              Built a College ERP prototype from scratch. Cleared the presentation round. Made it to prototype demonstration. Four minds, one vision, zero sleep - the kind of pressure that builds character.
            </p>
            <div className="milestone-tags flex flex-wrap gap-2">
              <span className="font-mono text-[0.6rem] tracking-[0.1em] px-2.5 py-1 border border-border-hi text-white-dim">Team of 4</span>
              <span className="font-mono text-[0.6rem] tracking-[0.1em] px-2.5 py-1 border border-border-hi text-white-dim">ERP Prototype</span>
              <span className="font-mono text-[0.6rem] tracking-[0.1em] px-2.5 py-1 border border-border-hi text-white-dim">PPT Round</span>
              <span className="font-mono text-[0.6rem] tracking-[0.1em] px-2.5 py-1 border border-border-hi text-white-dim">Prototype Round</span>
            </div>
          </div>

          {/* Research Paper */}
          <div className="milestone-card bg-surface border border-border p-8 mb-8 transition-all hover:border-gold-dim hover:translate-x-1.5 group">
            <div className="milestone-card-header flex flex-wrap justify-between items-center gap-3 mb-4">
              <span className="milestone-type font-mono text-[0.65rem] tracking-[0.15em] text-gold-dim bg-gold-glow px-3 py-1 border border-gold-dim">Research Publication</span>
              <span className="milestone-year font-mono text-[0.65rem] tracking-[0.12em] text-white-faint">Feb 2026</span>
            </div>
            <h3 className="font-display text-[clamp(1.4rem,2.5vw,1.8rem)] tracking-[0.02em] text-white mb-4 leading-[1.2]">Full Dive in Immersive Virtual Reality</h3>
            <p className="milestone-story text-[0.95rem] text-white-dim leading-[1.7] mb-5">
              Research paper presented at the International Conference on "Role of Multidisciplinary & Technology-Led Approach" - Viksit Bharat 2047. Recognized with an award for contribution.
            </p>
            <div className="milestone-meta flex flex-wrap gap-6 font-mono text-[0.65rem] text-gold-dim mt-4">
              <span>International Conference</span>
              <span>Award Received</span>
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="cert-grid grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {[
              { key: 'git', title: 'Git Training', desc: 'Version control. Branching. Collaboration.', date: 'March 2026' },
              { key: 'js', title: 'JavaScript for Beginners', desc: 'ES6+, DOM, async - the foundation.', date: 'March 2026' },
              { key: 'research', title: 'International Conference Research Paper', desc: 'Full Dive in Immersive Virtual Reality - Presented & Awarded.', date: 'February 2026' },
              { key: 'frontend', title: 'Introduction to Front End Development', desc: 'HTML, CSS, React basics - certified.', date: 'March 2026' }
            ].map((cert, idx) => (
              <div key={idx} className="cert-card flex items-start gap-4 py-5 pr-5 pl-0 bg-transparent border-b border-border transition-all hover:border-gold-dim hover:pl-4 group cursor-none">
                <div className="cert-line w-0.5 h-8 bg-gold-dim flex-shrink-0 mt-1 group-hover:h-10 group-hover:bg-gold transition-all"></div>
                <div className="cert-info flex-1">
                  <h4 className="font-display text-[1.1rem] tracking-[0.02em] text-white mb-1">{cert.title}</h4>
                  <p className="font-body text-[0.75rem] text-white-dim mb-1 italic">{cert.desc}</p>
                  <div className="cert-footer flex items-center justify-between flex-wrap gap-4 mt-3">
                    <span className="cert-date font-mono text-[0.6rem] tracking-[0.12em] text-gold-dim">{cert.date}</span>
                    <a href="#" className="cert-link font-mono text-[0.65rem] tracking-[0.12em] text-gold-dim no-underline inline-flex items-center gap-1 transition-all hover:text-gold hover:translate-x-1" data-cert={cert.key}>View Certificate</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
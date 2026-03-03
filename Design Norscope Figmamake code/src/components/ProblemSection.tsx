import { useRef, useEffect, useState } from 'react';
import { Clock, Users, Cog, FileText } from 'lucide-react';

const STYLES = `
  .ps-reveal { transform: translateY(60px); transition: transform 500ms cubic-bezier(0.16,1,0.3,1); }
  .ps-reveal.ps-visible { transform: translateY(0); }
  .ps-card { transform: translateY(80px); transition: transform 580ms cubic-bezier(0.16,1,0.3,1) var(--sd,0ms); }
  .ps-card.ps-visible { transform: translateY(0); }
  @media (prefers-reduced-motion: reduce) {
    .ps-reveal, .ps-card { transform: none; transition: none; }
  }
`;

const problems = [
  { icon: Clock, title: 'Downtime Costs', description: 'Every hour of unplanned downtime costs manufacturers thousands in lost productivity and revenue.' },
  { icon: Users, title: 'Skill Shortage', description: 'Experienced technicians are retiring faster than new talent can be trained and deployed.' },
  { icon: Cog, title: 'Complex Machines', description: 'Modern industrial equipment requires specialized knowledge and precise maintenance procedures.' },
  { icon: FileText, title: 'Paper-Based Manuals', description: 'Traditional documentation is difficult to navigate during critical maintenance operations.' }
];

export function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setVisible(true); return; }
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{STYLES}</style>
      <section ref={sectionRef} className="py-12 md:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className={`text-center mb-10 md:mb-16 ps-reveal${visible ? ' ps-visible' : ''}`}>
            <h2 className="text-[28px] md:text-[40px] tracking-tight mb-3 md:mb-4" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
              The Industrial Challenge
            </h2>
            <p className="text-[15px] md:text-[17px] text-[#4A4A4A] max-w-2xl mx-auto">
              Manufacturing faces mounting pressure from complexity, workforce gaps, and rising operational costs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className={`bg-white border border-[var(--border-light)] rounded-lg p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300 md:hover:-translate-y-2 ps-card${visible ? ' ps-visible' : ''}`}
                style={{ '--sd': `${index * 100}ms` } as React.CSSProperties}
              >
                <div className="mb-5 md:mb-6">
                  <problem.icon className="w-9 h-9 md:w-10 md:h-10 transition-transform duration-300 hover:scale-110" style={{ color: 'var(--industrial-blue)', strokeWidth: 1.5 }} />
                </div>
                <h3 className="text-[17px] md:text-[18px] mb-2 md:mb-3" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>{problem.title}</h3>
                <p className="text-[14px] md:text-[15px] leading-relaxed text-[#6B6B6B]">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
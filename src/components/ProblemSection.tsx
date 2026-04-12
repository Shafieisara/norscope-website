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
      <section className="section-py-lg" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container-max px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: AlertCircle,
                title: 'High Downtime Costs',
                description: 'Unplanned machine stops cost manufacturers millions. Finding the right procedure and specialist often takes hours.',
                metric: '40% ',
                metricLabel: 'downtime reduction'
              },
              {
                icon: FileText,
                title: 'Static Documentation',
                description: 'Paper manuals and static PDFs are difficult to use while working, leading to skipped steps and safety risks.',
                metric: '95% ',
                metricLabel: 'error reduction'
              },
              {
                icon: History,
                title: 'Knowledge Loss',
                description: 'As experienced technicians retire, their institutional knowledge disappears. Capture it digitally before it is gone.',
                metric: '3x ',
                metricLabel: 'faster onboarding'
              }
            ].map((item, index) => (
              <div key={index} className="space-y-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'white', border: '1px solid var(--border-light)' }}
                >
                  <item.icon className="w-6 h-6" style={{ color: 'var(--industrial-blue)' }} />
                </div>
                <h3 
                  className="text-[20px] md:text-[22px]"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  {item.title}
                </h3>
                <p className="text-[15px] md:text-[16px] text-main leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
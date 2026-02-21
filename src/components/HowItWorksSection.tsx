import { useRef, useEffect, useState } from 'react';
import { Glasses, Scan, Navigation2, ClipboardCheck } from 'lucide-react';

const STYLES = `
  .hw-reveal { transform: translateY(70px); transition: transform 450ms cubic-bezier(0.16,1,0.3,1); }
  .hw-reveal.hw-visible { transform: translateY(0); }
  .hw-card { transform: translateY(90px); transition: transform 560ms cubic-bezier(0.16,1,0.3,1) var(--sd,0ms); }
  .hw-card.hw-visible { transform: translateY(0); }
  @media (prefers-reduced-motion: reduce) {
    .hw-reveal, .hw-card { transform: none; transition: none; }
  }
`;

const steps = [
  { icon: Glasses, title: 'Wear Device', description: 'Put on Norscope AR glasses for hands-free operation' },
  { icon: Scan, title: 'Scan Machine', description: 'System identifies equipment and loads procedures' },
  { icon: Navigation2, title: 'Follow AR Instructions', description: 'Visual guidance overlays show exact steps in real-time' },
  { icon: ClipboardCheck, title: 'Log Maintenance', description: 'Automatically document work and update records' }
];

export function HowItWorksSection() {
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
          <div className={`text-center mb-10 md:mb-16 hw-reveal${visible ? ' hw-visible' : ''}`}>
            <h2 className="text-[28px] md:text-[40px] tracking-tight mb-3 md:mb-4" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
              How It Works
            </h2>
            <p className="text-[15px] md:text-[17px] text-[#4A4A4A] max-w-2xl mx-auto">
              Four simple steps to transform your maintenance operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 relative">
            {/* Connection line - hidden on mobile */}
            <div className="hidden lg:block absolute left-[12.5%] right-[12.5%] h-[2px]" style={{ backgroundColor: 'var(--border-light)', top: '3.5rem' }} />

            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative text-center hw-card${visible ? ' hw-visible' : ''}`}
                style={{ '--sd': `${index * 90}ms` } as React.CSSProperties}
              >
                <div className="flex justify-center mb-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[14px]"
                    style={{ backgroundColor: 'var(--industrial-blue)', color: 'white', fontWeight: 600 }}
                  >
                    {index + 1}
                  </div>
                </div>
                <div
                  className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-5 md:mb-6 rounded-full flex items-center justify-center bg-white border-2"
                  style={{ borderColor: 'var(--industrial-blue)' }}
                >
                  <step.icon className="w-9 h-9 md:w-10 md:h-10" style={{ color: 'var(--industrial-blue)', strokeWidth: 1.5 }} />
                </div>
                <h3 className="text-[17px] md:text-[18px] mb-2 md:mb-3" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>{step.title}</h3>
                <p className="text-[14px] md:text-[15px] leading-relaxed text-[#6B6B6B]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
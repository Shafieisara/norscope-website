import { useRef, useEffect, useState } from 'react';
import { Glasses, Scan, Navigation2, ClipboardCheck } from 'lucide-react';
import { howItWorksT, type Lang } from '../i18n/translations';

const STYLES = `
  .hw-reveal { transform: translateY(70px); transition: transform 450ms cubic-bezier(0.16,1,0.3,1); }
  .hw-reveal.hw-visible { transform: translateY(0); }
  .hw-card { transform: translateY(90px); transition: transform 560ms cubic-bezier(0.16,1,0.3,1) var(--sd,0ms); }
  .hw-card.hw-visible { transform: translateY(0); }

  /* Hover: card lifts */
  .hw-card.hw-visible:hover { transform: translateY(-6px); transition: transform 250ms ease-out; }

  /* Hover: icon circle fills and scales */
  .hw-card.hw-visible:hover .hw-icon-ring {
    background-color: var(--industrial-blue) !important;
    border-color: var(--industrial-blue) !important;
    transform: scale(1.08);
  }
  .hw-icon-ring { transition: background-color 250ms ease, border-color 250ms ease, transform 250ms ease; }
  .hw-card.hw-visible:hover .hw-icon-ring svg { color: white !important; }
  .hw-icon-ring svg { transition: color 250ms ease; }

  @media (prefers-reduced-motion: reduce) {
    .hw-reveal, .hw-card { transform: none; transition: none; }
    .hw-card.hw-visible:hover { transform: none; }
    .hw-icon-ring, .hw-icon-ring svg { transition: none; }
  }
`;

const stepIcons = [Glasses, Scan, Navigation2, ClipboardCheck];

interface HowItWorksSectionProps {
  lang?: Lang;
}

export function HowItWorksSection({ lang = 'EN' }: HowItWorksSectionProps) {
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

  const steps = howItWorksT.steps[lang];

  return (
    <>
      <style>{STYLES}</style>
      <section ref={sectionRef} className="py-12 md:py-[var(--section-py-lg)] bg-white">
        <div className="max-w-[var(--container-max)] mx-auto px-6 md:px-12">
          <div className={`text-center mb-10 md:mb-16 hw-reveal${visible ? ' hw-visible' : ''}`}>
            <h2 className="text-[28px] md:text-[40px] tracking-tight mb-3 md:mb-4" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
              {howItWorksT.heading[lang]}
            </h2>
            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] max-w-2xl mx-auto">
              {howItWorksT.subtitle[lang]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 relative">
            {/* Connection line - hidden on mobile */}
            <div className="hidden lg:block absolute left-[12.5%] right-[12.5%] h-[2px]" style={{ backgroundColor: 'var(--border-light)', top: '3.5rem' }} />

            {steps.map((step, index) => {
              const StepIcon = stepIcons[index];
              return (
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
                    className="hw-icon-ring w-20 h-20 md:w-24 md:h-24 mx-auto mb-5 md:mb-6 rounded-full flex items-center justify-center bg-white border-2"
                    style={{ borderColor: 'var(--industrial-blue)' }}
                  >
                    <StepIcon className="w-9 h-9 md:w-10 md:h-10" style={{ color: 'var(--industrial-blue)', strokeWidth: 1.5 }} />
                  </div>
                  <h3 className="text-[17px] md:text-[18px] mb-2 md:mb-3" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>{step.title}</h3>
                  <p className="text-[14px] md:text-[15px] leading-relaxed text-[var(--text-muted)]">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
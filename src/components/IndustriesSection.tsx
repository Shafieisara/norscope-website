import { Factory, Cog, Droplet, Mountain, Ship } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { industriesT, type Lang } from '../i18n/translations';

const icons = [Factory, Cog, Droplet, Mountain, Ship];

interface IndustriesSectionProps {
  lang?: Lang;
}

export function IndustriesSection({ lang = 'EN' }: IndustriesSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setIsVisible(true);
      hasTriggeredRef.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggeredRef.current) {
            setIsVisible(true);
            hasTriggeredRef.current = true;
          }
        });
      },
      { threshold: 0.25 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const industries = industriesT.industries[lang];

  return (
    <section ref={sectionRef} className="py-20 md:py-[var(--section-py-lg)]" style={{ backgroundColor: 'var(--light-gray)' }}>
      <div className="max-w-[var(--container-max)] mx-auto px-6 md:px-12">
        <div className={`text-center mb-16 md:mb-20 section-header ${isVisible ? 'section-visible' : ''}`}>
          <h2 
            className="text-[32px] md:text-[44px] tracking-tight mb-4 md:mb-5"
            style={{ fontWeight: 600, color: 'var(--dark-text)', lineHeight: 1.2 }}
          >
            {industriesT.heading[lang]}
          </h2>
          <p 
            className="text-[16px] md:text-[18px] max-w-3xl mx-auto"
            style={{ color: 'var(--text-main)', lineHeight: 1.6 }}
          >
            {industriesT.subtitle[lang]}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
          {industries.map((industry, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={index}
                className={`industry-card bg-white rounded-lg p-7 md:p-8 group section-card ${isVisible ? 'section-visible' : ''}`}
                style={{
                  transitionDelay: isVisible ? `${index * 80}ms` : '0ms',
                  border: '1px solid var(--border-light)',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div 
                    className="w-16 h-16 md:w-18 md:h-18 rounded-full flex items-center justify-center mb-5 transition-all duration-300"
                    style={{ backgroundColor: 'var(--light-gray)' }}
                  >
                    <Icon 
                      className="w-8 h-8 md:w-9 md:h-9 transition-all duration-300" 
                      style={{ color: 'var(--industrial-blue)', strokeWidth: 1.5 }}
                    />
                  </div>
                  <h3 
                    className="text-[16px] md:text-[17px] mb-2"
                    style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                  >
                    {industry.name}
                  </h3>
                  <p 
                    className="industry-description text-[14px] md:text-[15px] leading-relaxed"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .section-header {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 600ms ease-out, transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .section-header.section-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-card {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 600ms ease-out, transform 600ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 250ms ease-out, border-color 250ms ease-out;
        }

        .section-card.section-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .industry-card {
          position: relative;
          cursor: pointer;
          min-height: 240px;
        }

        .industry-description {
          opacity: 0;
          transition: opacity 300ms ease-out;
        }

        .industry-card:hover {
          border-color: var(--industrial-blue) !important;
          box-shadow: 0 4px 12px rgba(44, 95, 141, 0.12) !important;
          transform: translateY(-4px);
        }

        .industry-card:hover .industry-description {
          opacity: 1;
        }

        .industry-card:hover div[style*="backgroundColor"] {
          background-color: var(--industrial-blue-light) !important;
        }

        .industry-card:hover svg {
          color: var(--industrial-blue) !important;
          transform: scale(1.05);
        }

        @media (prefers-reduced-motion: reduce) {
          .section-header,
          .section-card,
          .industry-description,
          .industry-card,
          .industry-card svg,
          .industry-card div[style*="backgroundColor"] {
            transition: none !important;
          }
          
          .section-header,
          .section-card {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .industry-description {
            opacity: 1;
            max-height: 100px;
          }
        }
      `}</style>
    </section>
  );
}
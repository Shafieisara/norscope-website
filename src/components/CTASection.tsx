import { useEffect, useRef, useState } from 'react';

interface CTASectionProps {
  onContactClick?: () => void;
}

export function CTASection({ onContactClick }: CTASectionProps) {
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
      {
        threshold: 0.25,
      }
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

  return (
    <section ref={sectionRef} className="py-16 md:py-32" style={{ backgroundColor: 'var(--dark-bg)' }}>
      <div className={`max-w-[1440px] mx-auto px-6 md:px-12 text-center section-content ${isVisible ? 'section-visible' : ''}`}>
        <h2 
          className="text-[32px] md:text-[48px] tracking-tight mb-5 md:mb-6"
          style={{ fontWeight: 600, color: 'white' }}
        >
          Ready to modernize machine maintenance?
        </h2>
        <p className="text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
          Built for the next generation of industrial maintenance
        </p>
        
        <button 
          className="px-8 md:px-10 py-3.5 md:py-4 rounded-md text-[15px] md:text-[16px] transition-all hover:shadow-2xl hover:scale-105"
          style={{ 
            backgroundColor: 'var(--industrial-blue)', 
            color: 'white',
            fontWeight: 500
          }}
          onClick={onContactClick}
        >
          Discuss a Pilot
        </button>
      </div>

      <style>{`
        .section-content {
          transform: translateY(60px);
          transition: transform 550ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .section-content.section-visible {
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .section-content {
            transform: translateY(0);
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
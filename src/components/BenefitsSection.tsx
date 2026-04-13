import { CheckCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { AnimatedCounter } from './AnimatedCounter';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { benefitsT, type Lang } from '../i18n/translations';

interface BenefitsSectionProps {
  lang?: Lang;
  onNavigateToMethodology?: () => void;
}

const METRIC_VALUES = [21, 26, 13, 25];
const METRIC_COLORS = ['#0066CC', '#059669', '#0066CC', '#059669'];
const METRIC_SUPERSCRIPTS = ['¹', '¹', '²', '²'];

export function BenefitsSection({ lang = 'EN', onNavigateToMethodology }: BenefitsSectionProps) {
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

  const metricCards = benefitsT.metricCards[lang];

  return (
    <section 
      ref={sectionRef}
      className="py-12 md:py-24" 
      style={{ backgroundColor: 'var(--light-gray)' }}
    >
      <div className="max-w-[var(--container-max)] mx-auto px-6 md:px-12">
        <div 
          className={`text-center mb-10 md:mb-12 impact-header ${isVisible ? 'impact-visible' : ''}`}
        >
          <h2 
            className="text-[28px] md:text-[40px] tracking-tight mb-3 md:mb-4"
            style={{ fontWeight: 600, color: 'var(--dark-text)' }}
          >
            {benefitsT.heading[lang]}
          </h2>
          <p className="text-[15px] md:text-[17px] text-[var(--text-main)] max-w-3xl mx-auto">
            {benefitsT.subtitle[lang]}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-12">
          {/* Image */}
          <div className="relative h-[350px] md:h-[400px] rounded-lg overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1753964724380-2c5ae02512a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljaWFuJTIwc3VjY2Vzc2Z1bCUyMG1haW50ZW5hbmNlfGVufDF8fHx8MTc2OTI5MzYwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Confident technician after successful AR-assisted maintenance"
              className="w-full h-full object-cover"
            />
            {/* Success indicators */}
            <div className="absolute top-6 right-6 bg-green-50/95 backdrop-blur-sm px-4 py-2 rounded-md border border-green-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-[13px] font-semibold text-green-700">{benefitsT.taskComplete[lang]}</span>
              </div>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-2 gap-4">
            {metricCards.map((item, index) => (
              <div key={index} className="card-hover bg-white rounded-lg p-5 md:p-6 transition-all">
                <div className="text-[30px] md:text-[36px] mb-2" style={{ fontWeight: 700, color: METRIC_COLORS[index] }}>
                  <AnimatedCounter
                    end={METRIC_VALUES[index]}
                    prefix=""
                    suffix="%"
                    className="inline"
                  />
                  <sup className="text-[16px] md:text-[18px] ml-0.5" style={{ fontWeight: 600 }}>{METRIC_SUPERSCRIPTS[index]}</sup>
                </div>
                <div 
                  className="text-[15px] md:text-[16px] mb-2"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  {item.label}
                </div>
                <div className="text-[12px] md:text-[13px] text-[var(--text-muted)] leading-relaxed">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sources Block */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="bg-white border border-[var(--border-light)] rounded-lg p-5 md:p-6">
            <h4 className="text-[14px] md:text-[15px] mb-3 md:mb-4" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
              {benefitsT.sourcesTitle[lang]}
            </h4>
            <div className="space-y-3">
              <p className="text-[12px] md:text-[13px] text-[var(--text-main)] leading-relaxed">
                <span style={{ fontWeight: 600 }}>1.</span> {benefitsT.source1[lang]}
              </p>
              <p className="text-[12px] md:text-[13px] text-[var(--text-main)] leading-relaxed">
                <span style={{ fontWeight: 600 }}>2.</span> {benefitsT.source2[lang]}
              </p>
            </div>
          </div>

          {/* Disclaimer Note */}
          <div className="bg-white border border-[var(--border-light)] rounded-lg p-4 md:p-5">
            <p className="text-[12px] md:text-[13px] text-[var(--text-muted)] leading-relaxed text-center">
              {benefitsT.disclaimer[lang]}
            </p>
          </div>
        </div>

        {/* View approach button */}
        <div className="text-center mt-6 md:mt-8">
          <button
            onClick={onNavigateToMethodology}
            className="text-[14px] md:text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors underline"
          >
            {benefitsT.viewApproach[lang]}
          </button>
        </div>
      </div>

      <style>{`
        .impact-header {
          transform: translateY(60px);
          transition: transform 500ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .impact-header.impact-visible {
          transform: translateY(0);
        }

        .impact-card {
          transform: translateY(80px);
          transition: transform 600ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 200ms ease-out;
        }

        .impact-card.impact-visible {
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .impact-header,
          .impact-card {
            transform: translateY(0);
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
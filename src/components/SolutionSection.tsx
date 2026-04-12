import { useRef, useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import factoryImage from '../assets/factory-industrial-scene.webp';

const STYLES = `
  .ss-left { transform: translateX(-60px); transition: transform 550ms cubic-bezier(0.16,1,0.3,1); }
  .ss-left.ss-visible { transform: translateX(0); }
  .ss-right { transform: translateX(60px); transition: transform 550ms cubic-bezier(0.16,1,0.3,1) 80ms; }
  .ss-right.ss-visible { transform: translateX(0); }

  /* Feature row hover */
  .ss-feature-row {
    padding: 8px 10px;
    border-radius: 6px;
    border-left: 2px solid transparent;
    margin-left: -10px;
    transition: background-color 200ms ease, border-color 200ms ease;
  }
  .ss-feature-row:hover {
    background-color: var(--industrial-blue-light);
    border-left-color: var(--industrial-blue);
  }
  .ss-feature-row:hover svg { transform: scale(1.15); }
  .ss-feature-row svg { transition: transform 200ms ease; }

  @media (prefers-reduced-motion: reduce) {
    .ss-left, .ss-right { transform: none; transition: none; }
    .ss-feature-row, .ss-feature-row svg { transition: none; }
  }
`;

const features = [
  'Fully offline AR capability - no internet required',
  'Universal machine compatibility across manufacturers',
  'Real-time IoT integration and sensor monitoring',
  'Step-by-step AR-guided maintenance procedures',
  'Automatic compliance documentation and logging',
  'Voice-activated hands-free operation'
];

export function SolutionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setVisible(true); return; }
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{STYLES}</style>
      <section ref={sectionRef} className="py-12 md:py-24" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
            {/* Left Column - Image slides in from left */}
            <div className={`relative order-2 lg:order-1 ss-left${visible ? ' ss-visible' : ''}`}>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <ImageWithFallback src={factoryImage} alt="Industrial System Diagram" className="w-full h-[300px] md:h-[480px] object-cover" />
              </div>
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white rounded-lg shadow-2xl p-4 md:p-6 border border-[var(--border-light)]">
                <div className="text-[24px] md:text-[32px] mb-1" style={{ fontWeight: 600, color: 'var(--industrial-blue)' }}>99.9%</div>
                <div className="text-[12px] md:text-[14px] text-[#6B6B6B]">System Uptime</div>
              </div>
            </div>

            {/* Right Column - Content slides in from right */}
            <div className={`space-y-6 md:space-y-8 order-1 lg:order-2 ss-right${visible ? ' ss-visible' : ''}`}>
              <div>
                <h2 className="text-[16px] mb-4" style={{ color: 'var(--industrial-blue)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>The Norscope Platform</h2>
                <h3 className="text-[28px] md:text-[40px] tracking-tight mb-6" style={{ fontWeight: 600, color: 'var(--dark-text)', lineHeight: 1.1 }}>
                  Step-by-step guidance, <br className="hidden md:block" /> directly in the field of view
                </h3>
                <p className="text-[16px] md:text-[18px] text-main mb-8 leading-relaxed">
                  Norscope provides an integrated software platform for creating, deploying, and validating maintenance workflows through industrial smart glasses.
                </p>
              </div>
              <div className="space-y-3 md:space-y-4 pt-2 md:pt-4">
                {features.map((feature, index) => (
                  <div key={index} className="ss-feature-row flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }} />
                    <span className="text-[14px] md:text-[16px] text-[var(--dark-text)]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
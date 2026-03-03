import { useRef, useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import arHeadsetImage from '../assets/ar-headset-product.webp';
import workerWeldingImage from '../assets/industrial-worker-welding.webp';
import maintenanceTechImage from '../assets/factory-maintenance-tech.webp';

const STYLES = `
  .cs-left { transform: translateX(-60px); transition: transform 550ms cubic-bezier(0.16,1,0.3,1); }
  .cs-left.cs-visible { transform: translateX(0); }
  .cs-right { transform: translateX(60px); transition: transform 550ms cubic-bezier(0.16,1,0.3,1) 80ms; }
  .cs-right.cs-visible { transform: translateX(0); }
  @media (prefers-reduced-motion: reduce) {
    .cs-left, .cs-right { transform: none; transition: none; }
  }
`;

const features = [
  'Machine-specific maintenance workflows',
  'Offline AI models trained on customer manuals',
  'Role-based user interfaces',
  'ERP / CMMS / IoT system integration',
  'Continuous updates per customer deployment'
];

export function CustomSoftwareSection() {
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
      <section ref={sectionRef} className="py-12 md:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
            {/* Left Column - Content slides in from left */}
            <div className={`space-y-6 md:space-y-8 cs-left${visible ? ' cs-visible' : ''}`}>
              <div>
                <h2 className="text-[28px] md:text-[40px] tracking-tight mb-3 md:mb-4" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
                  Custom Software for Every Customer
                </h2>
                <p className="text-[15px] md:text-[17px] leading-relaxed text-[#4A4A4A]">
                  We design and deploy customer-specific AR software modules tailored to each
                  machine type, maintenance workflow, safety standard, and IT environment. Our
                  platform adapts to your operations, not the other way around.
                </p>
              </div>
              <div className="space-y-3 md:space-y-4 pt-2 md:pt-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }} />
                    <span className="text-[14px] md:text-[16px] text-[var(--dark-text)]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image stack slides in from right */}
            <div className={`space-y-4 md:space-y-5 cs-right${visible ? ' cs-visible' : ''}`}>
              <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                <ImageWithFallback src={arHeadsetImage} alt="AR Headset Product" className="w-full h-[140px] md:h-[180px] object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback src={workerWeldingImage} alt="Industrial Worker Wearing AR Headset" className="w-full h-[140px] md:h-[180px] object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback src={maintenanceTechImage} alt="Real-World Usage Scenario" className="w-full h-[140px] md:h-[180px] object-cover" />
              </div>
              <p className="text-[12px] md:text-[13px] text-[#6B6B6B] text-center pt-1 md:pt-2">
                Hardware platform combined with customer-specific software deployment
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
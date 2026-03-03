import { useRef, useEffect, useState } from 'react';

const STYLES = `
  .cta-reveal { transform: translateY(60px); transition: transform 520ms cubic-bezier(0.16,1,0.3,1); }
  .cta-reveal.cta-visible { transform: translateY(0); }
  @media (prefers-reduced-motion: reduce) {
    .cta-reveal { transform: none; transition: none; }
  }
`;

interface CTASectionProps {
  onContactClick?: () => void;
}

export function CTASection({ onContactClick }: CTASectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setVisible(true); return; }
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{STYLES}</style>
      <section ref={sectionRef} className="py-16 md:py-32" style={{ backgroundColor: 'var(--dark-bg)' }}>
        <div className={`max-w-[1440px] mx-auto px-6 md:px-12 text-center cta-reveal${visible ? ' cta-visible' : ''}`}>
          <h2
            className="text-[32px] md:text-[48px] tracking-tight mb-5 md:mb-6"
            style={{ fontWeight: 600, color: 'white' }}
          >
            Ready to modernize machine maintenance?
          </h2>
          <p className="text-[16px] md:text-[18px] leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Join leading manufacturers who trust Norscope to power their industrial AR operations
          </p>
          <button
            onClick={onContactClick}
            className="w-full md:w-auto px-8 md:px-10 py-3.5 md:py-4 rounded-md text-[15px] md:text-[16px] transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 bg-gradient-to-r from-[var(--industrial-blue)] to-blue-700 hover:from-blue-600 hover:to-blue-800"
            style={{ color: 'white', fontWeight: 500 }}
          >
            Request Demo
          </button>
        </div>
      </section>
    </>
  );
}
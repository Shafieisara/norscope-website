import { useRef, useEffect } from 'react';
import headsetImage from '../assets/hero-headset-figma.webp';
import { heroT, type Lang } from '../i18n/translations';

interface HeroSectionProps {
  lang?: Lang;
  onContactClick?: () => void;
  onProductClick?: () => void;
}

export function HeroSection({ lang = 'EN', onContactClick, onProductClick }: HeroSectionProps) {
  const bgRef = useRef<HTMLDivElement>(null);

  // Parallax via direct DOM mutation — no React re-renders on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.5}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative flex items-center min-h-[80vh] overflow-hidden">
      {/* Full-width background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${headsetImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
      </div>

      {/* Subtle blueprint background with parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 opacity-[0.05] pointer-events-none z-[1]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="section-container py-32 md:py-40 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <h1 className="h1-hero text-white">
              {heroT.headline[lang]}
            </h1>

            <p className="text-[16px] md:text-[18px] leading-relaxed text-gray-200 max-w-[520px] mx-auto lg:mx-0">
              {heroT.body[lang]}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 justify-center lg:justify-start">
              <button
                onClick={onContactClick}
                className="btn-primary w-full sm:w-auto px-8 py-3.5"
              >
                {heroT.ctaPrimary[lang]}
              </button>
              <button
                onClick={onProductClick}
                className="btn-outline w-full sm:w-auto px-8 py-3.5 text-white border-white/40 hover:bg-white/10 hover:border-white/60 hover:text-white"
              >
                {heroT.ctaSecondary[lang]}
              </button>
            </div>
          </div>

          {/* Right Column - Keep empty to retain layout structure */}
          <div className="relative flex justify-center lg:justify-end">
            {/* The image has been moved to the background */}
          </div>
        </div>
      </div>
    </section>
  );
}
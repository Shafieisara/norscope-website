import { useRef, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import headsetImage from '../assets/hero-headset-figma.png';

interface HeroSectionProps {
  onContactClick?: () => void;
  onProductClick?: () => void;
}

export function HeroSection({ onContactClick, onProductClick }: HeroSectionProps) {
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

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-16 md:pb-20 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <h1
              className="text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] tracking-tight text-white"
              style={{ fontWeight: 600 }}
            >
              Offline AR Guidance for Industrial Maintenance
            </h1>

            <p className="text-[16px] md:text-[18px] leading-relaxed text-gray-200 max-w-[520px] mx-auto lg:mx-0">
              Offline augmented reality platform for industrial servicing and training.
              Reduce downtime, accelerate knowledge transfer, and eliminate errors in
              complex maintenance operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 justify-center lg:justify-start">
              <button
                onClick={onContactClick}
                className="w-full sm:w-auto px-8 py-3.5 rounded-md text-[15px] transition-all hover:shadow-lg"
                style={{
                  backgroundColor: 'var(--industrial-blue)',
                  color: 'white',
                  fontWeight: 500
                }}
              >
                Discuss a Pilot
              </button>
              <button
                onClick={onProductClick}
                className="w-full sm:w-auto px-8 py-3.5 rounded-md text-[15px] border-2 transition-all hover:bg-white/10"
                style={{
                  borderColor: 'rgba(255,255,255,0.4)',
                  color: 'white',
                  fontWeight: 500
                }}
              >
                Product Overview
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
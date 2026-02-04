import { ImageWithFallback } from './figma/ImageWithFallback';
import headsetImage from '../assets/hero-headset.png';

interface HeroSectionProps {
  scrollY: number;
  onContactClick?: () => void;
  onProductClick?: () => void;
}

export function HeroSection({ scrollY, onContactClick, onProductClick }: HeroSectionProps) {
  // Calculate parallax offset
  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative flex items-center overflow-hidden bg-white">
      {/* Subtle blueprint background with parallax */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          backgroundImage: `
            linear-gradient(rgba(0, 102, 204, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 102, 204, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-16 md:pb-20 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <h1
              className="text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] tracking-tight"
              style={{ fontWeight: 600, color: 'var(--dark-text)' }}
            >
              AR Glasses for Industrial Machine Maintenance
            </h1>

            <p className="text-[16px] md:text-[18px] leading-relaxed text-[#4A4A4A] max-w-[520px] mx-auto lg:mx-0">
              Offline augmented reality platform for industrial servicing and training.
              Reduce downtime, accelerate knowledge transfer, and eliminate errors in
              complex maintenance operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 justify-center lg:justify-start">
              <button
                onClick={onContactClick}
                className="px-8 py-3.5 rounded-md text-[15px] transition-all hover:shadow-lg"
                style={{
                  backgroundColor: 'var(--industrial-blue)',
                  color: 'white',
                  fontWeight: 500
                }}
              >
                Request Demo
              </button>
              <button
                onClick={onProductClick}
                className="px-8 py-3.5 rounded-md text-[15px] border-2 transition-all hover:border-[var(--industrial-blue)]"
                style={{
                  borderColor: 'var(--border-light)',
                  color: 'var(--dark-text)',
                  fontWeight: 500
                }}
              >
                Product Overview
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative rounded-lg overflow-hidden shadow-2xl w-full max-w-[440px] lg:max-w-[520px]">
              <img
                src={headsetImage}
                alt="Norscope AR Glasses"
                className="w-full h-[400px] md:h-[480px] lg:h-[560px] object-cover object-center"
              />
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
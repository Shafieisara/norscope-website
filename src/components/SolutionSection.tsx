import { CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import factoryImage from '../assets/factory-industrial-scene.png';

const features = [
  'Fully offline AR capability - no internet required',
  'Universal machine compatibility across manufacturers',
  'Real-time IoT integration and sensor monitoring',
  'Step-by-step AR-guided maintenance procedures',
  'Automatic compliance documentation and logging',
  'Voice-activated hands-free operation'
];

export function SolutionSection() {
  return (
    <section className="py-12 md:py-24" style={{ backgroundColor: 'var(--light-gray)' }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Left Column - Diagram/Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src={factoryImage}
                alt="Industrial System Diagram"
                className="w-full h-[300px] md:h-[480px] object-cover"
              />
            </div>

            {/* Floating stats card */}
            <div
              className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white rounded-lg shadow-2xl p-4 md:p-6 border border-[var(--border-light)]"
            >
              <div className="text-[24px] md:text-[32px] mb-1" style={{ fontWeight: 600, color: 'var(--industrial-blue)' }}>
                99.9%
              </div>
              <div className="text-[12px] md:text-[14px] text-[#6B6B6B]">
                System Uptime
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            <div>
              <h2
                className="text-[28px] md:text-[40px] tracking-tight mb-3 md:mb-4"
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                Enterprise AR Platform
              </h2>
              <p className="text-[15px] md:text-[17px] leading-relaxed text-[#4A4A4A]">
                Norscope delivers a robust augmented reality solution designed specifically
                for industrial environments. Our platform works anywhere, with any machine,
                ensuring your team has instant access to critical maintenance information.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4 pt-2 md:pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                  />
                  <span className="text-[14px] md:text-[16px] text-[var(--dark-text)]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
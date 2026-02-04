import { Check } from 'lucide-react';
import saraImg from '../assets/Sara Sarvestani.png';
import siddhantImg from '../assets/siddhant-rebello.png';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface AboutPageProps {
  onNavigateHome: () => void;
  currentLanguage: 'EN' | 'DE';
  onLanguageChange: (lang: 'EN' | 'DE') => void;
  onAboutClick?: () => void;
  onProductClick?: () => void;
  onSolutionClick?: () => void;
  onImpactClick?: () => void;
  onContactClick?: () => void;
}

export function AboutPage({ onNavigateHome, currentLanguage, onLanguageChange, onAboutClick, onProductClick, onSolutionClick, onImpactClick, onContactClick }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation
        currentLanguage={currentLanguage}
        onLanguageChange={onLanguageChange}
        onLogoClick={onNavigateHome}
        onAboutClick={onAboutClick}
        onProductClick={onProductClick}
        onSolutionClick={onSolutionClick}
        onImpactClick={onImpactClick}
        onContactClick={onContactClick}
      />

      {/* About Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <h1
            className="text-[36px] md:text-[52px] tracking-tight mb-4 md:mb-6"
            style={{ fontWeight: 600, color: 'var(--dark-text)' }}
          >
            About Norscope
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#4A4A4A] max-w-3xl leading-relaxed">
            Practical augmented reality software for industrial machine maintenance and servicing.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-[24px] md:text-[32px] tracking-tight mb-4 md:mb-6"
              style={{ fontWeight: 600, color: 'var(--dark-text)' }}
            >
              The Problem
            </h2>
            <p className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed">
              Industrial maintenance still relies heavily on paper documentation, individual experience, and the physical presence of experts. This leads to long downtimes, inconsistent repair quality, and significant training overhead.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-[24px] md:text-[32px] tracking-tight mb-4 md:mb-6"
              style={{ fontWeight: 600, color: 'var(--dark-text)' }}
            >
              Our Solution
            </h2>
            <p className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed mb-6 md:mb-8">
              Norscope develops offline-capable augmented reality software that guides technicians step by step during real maintenance tasks. Instead of generic AR content, the software is configured individually for each customer's machines, processes, and safety requirements.
            </p>

            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-3">
                <Check
                  className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0"
                  style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                />
                <span className="text-[15px] md:text-[17px] text-[#4A4A4A]">
                  Customer-specific AR workflows
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check
                  className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0"
                  style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                />
                <span className="text-[15px] md:text-[17px] text-[#4A4A4A]">
                  Offline-first operation
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check
                  className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0"
                  style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                />
                <span className="text-[15px] md:text-[17px] text-[#4A4A4A]">
                  Structured task guidance and validation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-[24px] md:text-[32px] tracking-tight mb-4 md:mb-6"
              style={{ fontWeight: 600, color: 'var(--dark-text)' }}
            >
              Our Mission
            </h2>
            <div
              className="border-l-4 pl-6 md:pl-8 py-4"
              style={{ borderColor: 'var(--industrial-blue)' }}
            >
              <p className="text-[16px] md:text-[19px] text-[#4A4A4A] leading-relaxed">
                To reduce industrial downtime and knowledge loss by providing technicians with clear, structured, and context-aware guidance directly at the machine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Team */}
      <section className="py-12 md:py-20" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <h2
            className="text-[28px] md:text-[40px] tracking-tight mb-10 md:mb-16 text-center"
            style={{ fontWeight: 600, color: 'var(--dark-text)' }}
          >
            Founding Team
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {/* Founder Card 1 - Siddhant */}
            <div className="bg-white border border-[var(--border-light)] rounded-lg overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={siddhantImg}
                  alt="Siddhant Rebello"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3
                  className="text-[20px] md:text-[22px] mb-1"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  Siddhant Rebello
                </h3>
                <div
                  className="text-[14px] md:text-[15px] mb-4"
                  style={{ color: 'var(--industrial-blue)', fontWeight: 500 }}
                >
                  Founder | Engineering & Product
                </div>
                <p className="text-[14px] md:text-[15px] text-[#6B6B6B] leading-relaxed">
                  Mechanical engineering background with hands-on experience in industrial machines and intelligent manufacturing systems. Focused on building practical AR solutions grounded in real maintenance workflows.
                </p>
              </div>
            </div>

            {/* Founder Card 2 - Sara */}
            <div className="bg-white border border-[var(--border-light)] rounded-lg overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={saraImg}
                  alt="Sara Shafiei"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3
                  className="text-[20px] md:text-[22px] mb-1"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  Sara Shafiei
                </h3>
                <div
                  className="text-[14px] md:text-[15px] mb-4"
                  style={{ color: 'var(--industrial-blue)', fontWeight: 500 }}
                >
                  Co-Founder | Business & Operations
                </div>
                <p className="text-[14px] md:text-[15px] text-[#6B6B6B] leading-relaxed">
                  Background in business strategy and operations with experience in startup execution and stakeholder coordination. Focused on translating industrial needs into scalable product and organizational structures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
          <p className="text-[16px] md:text-[18px] text-[#4A4A4A] leading-relaxed mb-8 md:mb-10 max-w-3xl mx-auto">
            Norscope is built with a focus on real industrial constraints, realistic deployment conditions, and measurable operational impact.
          </p>

          <button
            onClick={onContactClick}
            className="px-8 py-3.5 rounded-md text-[15px] transition-all hover:opacity-90"
            style={{
              backgroundColor: 'var(--industrial-blue)',
              color: 'white',
              fontWeight: 500
            }}
          >
            Request Demo
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
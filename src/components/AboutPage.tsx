import { Check } from 'lucide-react';
import saraImg from '../assets/Sara Sarvestani.webp';
import siddhantImg from '../assets/siddhant-rebello.webp';
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
  onImpressumClick?: () => void;
  onDatenschutzClick?: () => void;
}

export function AboutPage({ onNavigateHome, currentLanguage, onLanguageChange, onAboutClick, onProductClick, onSolutionClick, onImpactClick, onContactClick, onImpressumClick, onDatenschutzClick }: AboutPageProps) {
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
        currentPage="about"
      />

      {/* About Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-[var(--section-py-md)]">
        <div className="section-container">
          <h1 className="h1-page">
            About Norscope
          </h1>
          <p className="p-body max-w-3xl">
            Practical augmented reality software for industrial machine maintenance and servicing.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-12 md:py-[var(--section-py-md)]">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="h2-section mb-4 md:mb-6">
              The Problem
            </h2>
            <p className="p-body">
              Industrial maintenance still relies heavily on paper documentation, individual experience, and the physical presence of experts. This leads to long downtimes, inconsistent repair quality, and significant training overhead.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-12 md:py-[var(--section-py-md)] bg-[var(--light-gray)]">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="h2-section mb-4 md:mb-6">
              Our Solution
            </h2>
            <p className="p-body mb-6 md:mb-8">
              Norscope develops offline-capable augmented reality software that guides technicians step by step during real maintenance tasks. Instead of generic AR content, the software is configured individually for each customer's machines, processes, and safety requirements.
            </p>

            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-3">
                <Check
                  className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0"
                  style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                />
                <span className="p-body">
                  Customer-specific AR workflows
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check
                  className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0"
                  style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                />
                <span className="p-body">
                  Offline-first operation
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check
                  className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0"
                  style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                />
                <span className="p-body">
                  Structured task guidance and validation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-12 md:py-[var(--section-py-md)]">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="h2-section mb-4 md:mb-6">
              Our Mission
            </h2>
            <div
              className="border-l-4 pl-6 md:pl-8 py-4"
              style={{ borderColor: 'var(--industrial-blue)' }}
            >
              <p className="p-body">
                To reduce industrial downtime and knowledge loss by providing technicians with clear, structured, and context-aware guidance directly at the machine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Team */}
      <section className="py-12 md:py-[var(--section-py-lg)] bg-[var(--light-gray)]">
        <div className="section-container">
          <h2 className="h2-section mb-10 md:mb-16 text-center">
            Founding Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {/* Founder Card 1 - Siddhant */}
            <div className="card-hover bg-white rounded-lg overflow-hidden">
              <div className="img-hover-zoom aspect-square">
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
                <p className="text-[14px] md:text-[15px] text-[var(--text-muted)] leading-relaxed">
                  Mechanical engineering background with hands-on experience in industrial machines and intelligent manufacturing systems. Focused on building practical AR solutions grounded in real maintenance workflows.
                </p>
              </div>
            </div>

            {/* Founder Card 2 - Sara */}
            <div className="card-hover bg-white rounded-lg overflow-hidden">
              <div className="img-hover-zoom aspect-square">
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
                <p className="text-[14px] md:text-[15px] text-[var(--text-muted)] leading-relaxed">
                  Background in business strategy and operations with experience in startup execution and stakeholder coordination. Focused on translating industrial needs into scalable product and organizational structures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 md:py-[var(--section-py-lg)]">
        <div className="section-container text-center">
          <p className="p-body mb-8 md:mb-10 max-w-3xl mx-auto">
            Norscope is built with a focus on real industrial constraints, realistic deployment conditions, and measurable operational impact.
          </p>

          <button
            onClick={onContactClick}
            className="btn-primary w-full md:w-auto px-8 py-3.5"
          >
            Discuss a Pilot
          </button>
        </div>
      </section>

      <Footer
        onAboutClick={onAboutClick}
        onProductClick={onProductClick}
        onSolutionClick={onSolutionClick}
        onImpactClick={onImpactClick}
        onContactClick={onContactClick}
        onImpressumClick={onImpressumClick}
        onDatenschutzClick={onDatenschutzClick}
      />
    </div>
  );
}
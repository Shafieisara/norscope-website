import { Check, Shield, Wifi, MonitorCog, ArrowRight } from 'lucide-react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImage from '../assets/hero-headset.webp';
import problemImage from '../assets/problem-paper-manual.webp';
import maintenanceImage from '../assets/solution-active-maintenance.webp';
import customMachineryImage from '../assets/solution-custom-machinery.webp';
import factoryRealityImage from '../assets/solution-factory-reality.webp';

interface SolutionPageProps {
  onNavigateHome: () => void;
  onNavigateToProduct: () => void;
  currentLanguage: 'EN' | 'DE';
  onLanguageChange: (lang: 'EN' | 'DE') => void;
  onAboutClick?: () => void;
  onProductClick?: () => void;
  onSolutionClick?: () => void;
  onImpactClick?: () => void;
  onContactClick?: () => void;
}

export function SolutionPage({ 
  onNavigateHome, 
  onNavigateToProduct, 
  currentLanguage, 
  onLanguageChange, 
  onAboutClick, 
  onProductClick,
  onSolutionClick,
  onImpactClick,
  onContactClick
}: SolutionPageProps) {
  const currentPage = currentLanguage === 'EN' ? 'solution-en' : 'solution-de';
  
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
        currentPage={currentPage}
      />
      
      {/* Solution Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-[var(--section-py-lg)]">
        <div className="max-w-[var(--container-max)] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 
                className="text-[36px] md:text-[52px] tracking-tight mb-6 md:mb-8"
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                A Practical AR Platform for Industrial Maintenance
              </h1>
              <p className="text-[18px] md:text-[20px] text-[var(--text-main)] leading-relaxed">
                Structured, offline-capable AR software for real maintenance tasks
              </p>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <ImageWithFallback
                src={heroImage}
                alt="Technician wearing AR headset in industrial environment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Core Problem */}
      <section className="py-16 md:py-[var(--section-py-md)]" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="max-w-[var(--container-max)] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 
                className="text-[28px] md:text-[36px] tracking-tight mb-6 md:mb-8"
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                The Core Problem
              </h2>
              <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-8">
                Industrial maintenance operations face persistent challenges that impact efficiency, quality, and knowledge retention. Documentation is often inaccessible during work, expertise is concentrated in individuals rather than systems, and procedures vary inconsistently across locations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--industrial-blue)' }} />
                  <span className="text-[15px] md:text-[17px] text-[var(--text-main)]">
                    Critical information not available at point of work
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--industrial-blue)' }} />
                  <span className="text-[15px] md:text-[17px] text-[var(--text-main)]">
                    High dependency on senior technicians
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--industrial-blue)' }} />
                  <span className="text-[15px] md:text-[17px] text-[var(--text-main)]">
                    Inconsistent execution across teams and sites
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--industrial-blue)' }} />
                  <span className="text-[15px] md:text-[17px] text-[var(--text-main)]">
                    Limited visibility into procedural adherence
                  </span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <ImageWithFallback
                src={problemImage}
                alt="Technician working with manual documentation in industrial setting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Norscope Solution */}
      <section className="py-16 md:py-[var(--section-py-md)]">
        <div className="max-w-[var(--container-max)] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h2 
              className="text-[28px] md:text-[36px] tracking-tight mb-6 md:mb-8"
              style={{ fontWeight: 600, color: 'var(--dark-text)' }}
            >
              The Norscope Solution
            </h2>
            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-6">
              Norscope is an augmented reality software platform designed specifically for industrial maintenance workflows. It provides technicians with structured, step-by-step guidance directly in their field of view while they work on machines.
            </p>
            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed">
              Rather than offering a generic AR viewer, Norscope is configured individually for each customer's specific machines, procedures, and operational requirements. The system is designed to function reliably offline, addressing the connectivity constraints common in industrial environments.
            </p>
          </div>
        </div>
      </section>

      {/* How the Solution Works */}
      <section className="py-16 md:py-[var(--section-py-lg)]" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="max-w-[var(--container-max)] mx-auto px-6 md:px-12">
          <h2 
            className="text-[28px] md:text-[40px] tracking-tight mb-12 md:mb-16 text-center"
            style={{ fontWeight: 600, color: 'var(--dark-text)' }}
          >
            How the Solution Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto mb-12">
            {/* Step 1 */}
            <div className="card-hover bg-white p-8 rounded-lg">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                style={{ backgroundColor: 'var(--industrial-blue)' }}
              >
                <MonitorCog className="w-6 h-6 text-white" />
              </div>
              <h3 
                className="text-[18px] md:text-[20px] mb-3"
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                Task-Specific Guidance
              </h3>
              <p className="text-[14px] md:text-[15px] text-[var(--text-muted)] leading-relaxed">
                Technicians receive step-by-step instructions tailored to the specific machine and maintenance task being performed.
              </p>
            </div>

            {/* Step 2 */}
            <div className="card-hover bg-white p-8 rounded-lg">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                style={{ backgroundColor: 'var(--industrial-blue)' }}
              >
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 
                className="text-[18px] md:text-[20px] mb-3"
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                Context Awareness
              </h3>
              <p className="text-[14px] md:text-[15px] text-[var(--text-muted)] leading-relaxed">
                Visual references and contextual information are displayed at the appropriate point in the workflow, reducing manual document lookup.
              </p>
            </div>

            {/* Step 3 */}
            <div className="card-hover bg-white p-8 rounded-lg">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                style={{ backgroundColor: 'var(--industrial-blue)' }}
              >
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 
                className="text-[18px] md:text-[20px] mb-3"
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                Validation & Traceability
              </h3>
              <p className="text-[14px] md:text-[15px] text-[var(--text-muted)] leading-relaxed">
                Procedural steps are confirmed as completed, providing documentation of work performed and supporting quality assurance.
              </p>
            </div>

            {/* Step 4 */}
            <div className="card-hover bg-white p-8 rounded-lg">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                style={{ backgroundColor: 'var(--industrial-blue)' }}
              >
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <h3 
                className="text-[18px] md:text-[20px] mb-3"
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                Offline Operation
              </h3>
              <p className="text-[14px] md:text-[15px] text-[var(--text-muted)] leading-relaxed">
                The system operates without requiring continuous network connectivity, ensuring reliability on the shop floor.
              </p>
            </div>
          </div>

          {/* Process Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden max-w-5xl mx-auto">
            <ImageWithFallback
              src={maintenanceImage}
              alt="Technician performing maintenance work in industrial environment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Custom Software per Customer */}
      <section className="py-16 md:py-[var(--section-py-md)]">
        <div className="max-w-[var(--container-max)] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 
                className="text-[28px] md:text-[36px] tracking-tight mb-6 md:mb-8"
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                Custom Software per Customer
              </h2>
              <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-8">
                Industrial environments vary significantly in their equipment, procedures, safety requirements, and organizational structures. Norscope is therefore configured specifically for each customer rather than deployed as a generic solution.
              </p>
              <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-8">
                This approach ensures that workflows align with existing maintenance procedures, terminology matches organizational standards, and validation steps reflect actual quality requirements.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ArrowRight 
                    className="w-5 h-5 mt-0.5 flex-shrink-0" 
                    style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                  />
                  <span className="text-[15px] md:text-[17px] text-[var(--text-main)]">
                    Workflows based on customer-specific maintenance procedures
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight 
                    className="w-5 h-5 mt-0.5 flex-shrink-0" 
                    style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                  />
                  <span className="text-[15px] md:text-[17px] text-[var(--text-main)]">
                    Integration with existing technical documentation and assets
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight 
                    className="w-5 h-5 mt-0.5 flex-shrink-0" 
                    style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                  />
                  <span className="text-[15px] md:text-[17px] text-[var(--text-main)]">
                    Validation steps aligned with organizational quality standards
                  </span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <ImageWithFallback
                src={customMachineryImage}
                alt="Close-up of industrial equipment and machinery"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Designed for Industrial Reality */}
      <section className="py-16 md:py-[var(--section-py-md)]" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="max-w-[var(--container-max)] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h2 
              className="text-[28px] md:text-[36px] tracking-tight mb-6 md:mb-8"
              style={{ fontWeight: 600, color: 'var(--dark-text)' }}
            >
              Designed for Industrial Reality
            </h2>
            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-8">
              Norscope is built to function in real industrial environments, accounting for the practical constraints and operational requirements of shop floor work.
            </p>
            
            <div className="space-y-6 mb-12">
              <div>
                <h3 
                  className="text-[18px] mb-3"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  Offline-First Architecture
                </h3>
                <p className="text-[15px] md:text-[17px] text-[var(--text-muted)] leading-relaxed">
                  Many industrial facilities have limited or unreliable network connectivity in production areas. Norscope operates without requiring constant cloud connectivity, with synchronization occurring when network access is available.
                </p>
              </div>

              <div>
                <h3 
                  className="text-[18px] mb-3"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  Headset-Agnostic Platform
                </h3>
                <p className="text-[15px] md:text-[17px] text-[var(--text-muted)] leading-relaxed">
                  The platform supports multiple industrial AR headset models, allowing customers to select hardware that meets their specific operational, safety, and ergonomic requirements.
                </p>
              </div>

              <div>
                <h3 
                  className="text-[18px] mb-3"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  Robust and Usable
                </h3>
                <p className="text-[15px] md:text-[17px] text-[var(--text-muted)] leading-relaxed">
                  The interface is designed for use during physical maintenance work, with clear visual hierarchy, appropriate text sizing, and interaction patterns suited to industrial headset usage.
                </p>
              </div>
            </div>

            {/* Optional workshop image */}
            <div className="relative h-[350px] md:h-[450px] rounded-lg overflow-hidden">
              <ImageWithFallback
                src={factoryRealityImage}
                alt="Factory floor with workers in industrial environment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resulting Benefits */}
      <section className="py-16 md:py-[var(--section-py-md)]">
        <div className="max-w-[var(--container-max)] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h2 
              className="text-[28px] md:text-[36px] tracking-tight mb-6 md:mb-8"
              style={{ fontWeight: 600, color: 'var(--dark-text)' }}
            >
              Resulting Benefits
            </h2>
            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-8">
              Organizations implementing Norscope typically observe improvements in several operational areas:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check 
                  className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0" 
                  style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                />
                <span className="text-[15px] md:text-[17px] text-[var(--text-main)]">
                  More consistent execution of maintenance procedures across technicians
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check 
                  className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0" 
                  style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                />
                <span className="text-[15px] md:text-[17px] text-[var(--text-main)]">
                  Reduced time required to onboard new maintenance personnel
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check 
                  className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0" 
                  style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                />
                <span className="text-[15px] md:text-[17px] text-[var(--text-main)]">
                  Better documentation of work performed and steps completed
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check 
                  className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0" 
                  style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                />
                <span className="text-[15px] md:text-[17px] text-[var(--text-main)]">
                  Decreased dependency on specific individuals for critical procedures
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check 
                  className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0" 
                  style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                />
                <span className="text-[15px] md:text-[17px] text-[var(--text-main)]">
                  Improved visibility into procedural adherence and completion
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 md:py-[var(--section-py-lg)]" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="max-w-[var(--container-max)] mx-auto px-6 md:px-12 text-center">
          <p className="text-[18px] md:text-[20px] text-[var(--text-main)] leading-relaxed mb-10 max-w-3xl mx-auto">
            Learn more about how Norscope is implemented in industrial environments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={onNavigateToProduct}
              className="btn-primary px-8 py-3.5 rounded-md text-[15px]"
              style={{ 
                backgroundColor: 'var(--industrial-blue)', 
                color: 'white',
                fontWeight: 500
              }}
            >
              View Product
            </button>
            <button 
              onClick={onContactClick}
              className="btn-outline px-8 py-3.5 rounded-md text-[15px] transition-all"
              style={{ 
                backgroundColor: 'transparent',
                border: '1px solid var(--border-light)',
                color: 'var(--dark-text)',
                fontWeight: 500
              }}
            >
              Discuss a Pilot
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
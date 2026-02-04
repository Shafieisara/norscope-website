import { Check, X, ArrowRight, ChevronRight } from 'lucide-react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface ProductPageProps {
  onNavigateHome: () => void;
  onNavigateToMethodology: () => void;
  currentLanguage: 'EN' | 'DE';
  onLanguageChange: (lang: 'EN' | 'DE') => void;
  onAboutClick?: () => void;
  onProductClick?: () => void;
  onSolutionClick?: () => void;
  onImpactClick?: () => void;
  onContactClick?: () => void;
}

export function ProductPage({ onNavigateHome, onNavigateToMethodology, currentLanguage, onLanguageChange, onAboutClick, onProductClick, onSolutionClick, onImpactClick, onContactClick }: ProductPageProps) {
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

      {/* Product Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h1
              className="text-[36px] md:text-[52px] tracking-tight mb-6 md:mb-8"
              style={{ fontWeight: 600, color: 'var(--dark-text)' }}
            >
              AR Software for Industrial Machine Maintenance
            </h1>
            <p className="text-[18px] md:text-[20px] text-[#4A4A4A] leading-relaxed mb-6">
              Offline-capable augmented reality software that supports technicians during real maintenance and servicing tasks.
            </p>
            <p className="text-[15px] md:text-[17px] text-[#6B6B6B] leading-relaxed mb-10">
              Norscope is a software platform that runs on industrial AR headsets and is configured individually for each customer's machines, procedures, and workflows.
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
        </div>
      </section>

      {/* The Reality of Industrial Maintenance */}
      <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h2
              className="text-[28px] md:text-[36px] tracking-tight mb-6 md:mb-8"
              style={{ fontWeight: 600, color: 'var(--dark-text)' }}
            >
              The Reality of Industrial Maintenance
            </h2>
            <p className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed mb-8">
              Industrial maintenance still relies heavily on paper documentation, static manuals, and individual experience. This results in long downtimes, inconsistent repair quality, and high dependency on senior technicians.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--industrial-blue)' }} />
                <span className="text-[15px] md:text-[17px] text-[#4A4A4A]">
                  Manual document lookup during tasks
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--industrial-blue)' }} />
                <span className="text-[15px] md:text-[17px] text-[#4A4A4A]">
                  Knowledge stored in people, not systems
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--industrial-blue)' }} />
                <span className="text-[15px] md:text-[17px] text-[#4A4A4A]">
                  Limited standardization across sites
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Norscope Does */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h2
              className="text-[28px] md:text-[36px] tracking-tight mb-6 md:mb-8"
              style={{ fontWeight: 600, color: 'var(--dark-text)' }}
            >
              What Norscope Does
            </h2>
            <p className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed mb-8">
              Norscope provides technicians with step-by-step, context-aware AR guidance directly at the machine. Instructions, visual references, and validation steps are displayed in the technician's field of view while work is performed.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <ArrowRight
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                />
                <span className="text-[15px] md:text-[17px] text-[#4A4A4A]">
                  Visual task guidance instead of manual lookup
                </span>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                />
                <span className="text-[15px] md:text-[17px] text-[#4A4A4A]">
                  Structured workflows instead of ad-hoc decisions
                </span>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                />
                <span className="text-[15px] md:text-[17px] text-[#4A4A4A]">
                  Validation steps to reduce human error
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <h2
            className="text-[28px] md:text-[40px] tracking-tight mb-12 md:mb-16 text-center"
            style={{ fontWeight: 600, color: 'var(--dark-text)' }}
          >
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: 'var(--industrial-blue)' }}
              >
                <span className="text-[24px] text-white" style={{ fontWeight: 600 }}>1</span>
              </div>
              <h3
                className="text-[18px] md:text-[20px] mb-3"
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                Select Task
              </h3>
              <p className="text-[14px] md:text-[15px] text-[#6B6B6B] leading-relaxed">
                Technician selects the machine and maintenance task.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: 'var(--industrial-blue)' }}
              >
                <span className="text-[24px] text-white" style={{ fontWeight: 600 }}>2</span>
              </div>
              <h3
                className="text-[18px] md:text-[20px] mb-3"
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                Guided Execution
              </h3>
              <p className="text-[14px] md:text-[15px] text-[#6B6B6B] leading-relaxed">
                Step-by-step instructions and visual cues are displayed.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: 'var(--industrial-blue)' }}
              >
                <span className="text-[24px] text-white" style={{ fontWeight: 600 }}>3</span>
              </div>
              <h3
                className="text-[18px] md:text-[20px] mb-3"
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                Validation & Documentation
              </h3>
              <p className="text-[14px] md:text-[15px] text-[#6B6B6B] leading-relaxed">
                Steps are confirmed to reduce errors and ensure traceability.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: 'var(--industrial-blue)' }}
              >
                <span className="text-[24px] text-white" style={{ fontWeight: 600 }}>4</span>
              </div>
              <h3
                className="text-[18px] md:text-[20px] mb-3"
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                Completion
              </h3>
              <p className="text-[14px] md:text-[15px] text-[#6B6B6B] leading-relaxed">
                Task completion is logged automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Software per Customer */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h2
              className="text-[28px] md:text-[36px] tracking-tight mb-6 md:mb-8"
              style={{ fontWeight: 600, color: 'var(--dark-text)' }}
            >
              Configured for Each Customer
            </h2>
            <p className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed mb-8">
              Industrial environments differ significantly in machine types, procedures, and safety requirements. Norscope is therefore configured individually for each customer instead of offering a one-size-fits-all solution.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check
                  className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0"
                  style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                />
                <span className="text-[15px] md:text-[17px] text-[#4A4A4A]">
                  Machine-specific workflows
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check
                  className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0"
                  style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                />
                <span className="text-[15px] md:text-[17px] text-[#4A4A4A]">
                  Customer-specific procedures
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check
                  className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0"
                  style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                />
                <span className="text-[15px] md:text-[17px] text-[#4A4A4A]">
                  Adapted safety and validation steps
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offline-First by Design */}
      <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h2
              className="text-[28px] md:text-[36px] tracking-tight mb-6 md:mb-8"
              style={{ fontWeight: 600, color: 'var(--dark-text)' }}
            >
              Offline-First by Design
            </h2>
            <p className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed mb-8">
              Many industrial environments have limited or unreliable connectivity. Norscope is designed to operate offline, ensuring reliable usage on the shop floor.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check
                  className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0"
                  style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                />
                <span className="text-[15px] md:text-[17px] text-[#4A4A4A]">
                  No permanent cloud dependency
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check
                  className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0"
                  style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                />
                <span className="text-[15px] md:text-[17px] text-[#4A4A4A]">
                  Reliable operation without network access
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check
                  className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0"
                  style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                />
                <span className="text-[15px] md:text-[17px] text-[#4A4A4A]">
                  Synchronization when connectivity is available
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What the Product Is — and Is Not */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
            {/* Norscope Is */}
            <div>
              <h3
                className="text-[20px] md:text-[24px] mb-6 md:mb-8"
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                Norscope is:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                  />
                  <span className="text-[15px] md:text-[17px] text-[#4A4A4A]">
                    Industrial AR software
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                  />
                  <span className="text-[15px] md:text-[17px] text-[#4A4A4A]">
                    Workflow-driven
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                  />
                  <span className="text-[15px] md:text-[17px] text-[#4A4A4A]">
                    Technician-focused
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                  />
                  <span className="text-[15px] md:text-[17px] text-[#4A4A4A]">
                    Designed for real maintenance tasks
                  </span>
                </div>
              </div>
            </div>

            {/* Norscope Is Not */}
            <div>
              <h3
                className="text-[20px] md:text-[24px] mb-6 md:mb-8"
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                Norscope is not:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <X
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: '#6B6B6B', strokeWidth: 2 }}
                  />
                  <span className="text-[15px] md:text-[17px] text-[#6B6B6B]">
                    A generic AR content viewer
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <X
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: '#6B6B6B', strokeWidth: 2 }}
                  />
                  <span className="text-[15px] md:text-[17px] text-[#6B6B6B]">
                    A consumer AR application
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <X
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: '#6B6B6B', strokeWidth: 2 }}
                  />
                  <span className="text-[15px] md:text-[17px] text-[#6B6B6B]">
                    A replacement for engineering expertise
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Measurable Impact */}
      <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-[28px] md:text-[36px] tracking-tight mb-6 md:mb-8"
              style={{ fontWeight: 600, color: 'var(--dark-text)' }}
            >
              Measurable Impact
            </h2>
            <p className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed mb-8">
              Norscope focuses on measurable operational improvements such as reduced downtime, faster onboarding, and fewer procedural errors. These metrics are derived using structured modeling and conservative assumptions.
            </p>

            <button
              onClick={onNavigateToMethodology}
              className="inline-flex items-center gap-2 text-[15px] hover:gap-3 transition-all"
              style={{ color: 'var(--industrial-blue)', fontWeight: 500 }}
            >
              See how we calculate impact
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
          <p className="text-[18px] md:text-[20px] text-[#4A4A4A] leading-relaxed mb-10 max-w-3xl mx-auto">
            Interested in seeing how Norscope works in your environment?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
            <button
              onClick={onContactClick}
              className="px-8 py-3.5 rounded-md text-[15px] transition-all"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid var(--border-light)',
                color: 'var(--dark-text)',
                fontWeight: 500
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
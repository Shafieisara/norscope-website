import { Check, X, ArrowRight, ChevronRight, FileText, Settings, ClipboardCheck, Database } from 'lucide-react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImage from '../assets/product-hero-figma.png';
import problemImage from '../assets/problem-paper-manual.webp';
import controlInterface from '../assets/solution-custom-machinery.webp';

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
  const currentPage = currentLanguage === 'EN' ? 'product-en' : 'product-de';
  
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
      
      {/* Product Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-[var(--section-py-lg)]">
        <div className="max-w-[var(--container-max)] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="max-w-2xl">
              <h1 
                className="text-[36px] md:text-[52px] tracking-tight mb-6 md:mb-8"
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                AR Software for Industrial Machine Maintenance
              </h1>
              <p className="text-[18px] md:text-[20px] text-[var(--text-main)] leading-relaxed mb-6">
                Offline-capable guidance for real maintenance and servicing tasks.
              </p>
              <p className="text-[15px] md:text-[17px] text-[var(--text-muted)] leading-relaxed mb-10">
                Configured for each customer's machines, workflows, and environment.
              </p>
              
              <button 
                onClick={onContactClick}
                className="btn-primary px-8 py-3.5 rounded-md text-[15px]"
                style={{ 
                  backgroundColor: 'var(--industrial-blue)', 
                  color: 'white',
                  fontWeight: 500
                }}
              >
                Discuss a Pilot
              </button>
            </div>

            {/* Right: Hero Visual */}
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src={heroImage}
                  alt="AR-guided industrial maintenance workflow showing step-by-step instructions"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Reality of Industrial Maintenance */}
      <section className="py-16 md:py-[var(--section-py-md)]" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="max-w-[var(--container-max)] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="max-w-2xl">
              <h2 
                className="text-[28px] md:text-[36px] tracking-tight mb-6 md:mb-8"
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                The Reality of Industrial Maintenance
              </h2>
              <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-8">
                Industrial maintenance still depends heavily on manuals, memory, and individual experience. This leads to slow execution, inconsistent quality, and difficult knowledge transfer.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--industrial-blue)' }} />
                  <span className="text-[15px] md:text-[17px] text-[var(--text-main)]">
                    Manual document lookup during tasks
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--industrial-blue)' }} />
                  <span className="text-[15px] md:text-[17px] text-[var(--text-main)]">
                    Knowledge stored in people, not systems
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--industrial-blue)' }} />
                  <span className="text-[15px] md:text-[17px] text-[var(--text-main)]">
                    Limited standardization across sites
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Supporting Visual */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
                  src={problemImage}
                  alt="Industrial worker with manual documentation"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Norscope Does */}
      <section className="py-16 md:py-[var(--section-py-md)]">
        <div className="max-w-[var(--container-max)] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Product Capability Visual */}
            <div className="order-2 lg:order-1">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
                  src={controlInterface}
                  alt="Industrial control interface"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="max-w-2xl order-1 lg:order-2">
              <h2 
                className="text-[28px] md:text-[36px] tracking-tight mb-6 md:mb-8"
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                What Norscope Does
              </h2>
              <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-8">
                Norscope guides technicians step by step at the machine with contextual instructions, visual references, and validation steps.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ArrowRight 
                    className="w-5 h-5 mt-0.5 flex-shrink-0" 
                    style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                  />
                  <span className="text-[15px] md:text-[17px] text-[var(--text-main)]">
                    Visual task guidance instead of manual lookup
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight 
                    className="w-5 h-5 mt-0.5 flex-shrink-0" 
                    style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                  />
                  <span className="text-[15px] md:text-[17px] text-[var(--text-main)]">
                    Structured workflows instead of ad-hoc decisions
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight 
                    className="w-5 h-5 mt-0.5 flex-shrink-0" 
                    style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                  />
                  <span className="text-[15px] md:text-[17px] text-[var(--text-main)]">
                    Validation steps to reduce human error
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-[var(--section-py-lg)]" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="max-w-[var(--container-max)] mx-auto px-6 md:px-12">
          <h2 
            className="text-[28px] md:text-[40px] tracking-tight mb-12 md:mb-16 text-center"
            style={{ fontWeight: 600, color: 'var(--dark-text)' }}
          >
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="card-hover rounded-lg p-6 text-center">
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
              <p className="text-[14px] md:text-[15px] text-[var(--text-muted)] leading-relaxed">
                Choose machine and workflow.
              </p>
            </div>

            {/* Step 2 */}
            <div className="card-hover rounded-lg p-6 text-center">
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
              <p className="text-[14px] md:text-[15px] text-[var(--text-muted)] leading-relaxed">
                Follow contextual AR instructions.
              </p>
            </div>

            {/* Step 3 */}
            <div className="card-hover rounded-lg p-6 text-center">
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
              <p className="text-[14px] md:text-[15px] text-[var(--text-muted)] leading-relaxed">
                Confirm steps and record execution.
              </p>
            </div>

            {/* Step 4 */}
            <div className="card-hover rounded-lg p-6 text-center">
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
              <p className="text-[14px] md:text-[15px] text-[var(--text-muted)] leading-relaxed">
                Store results and sync when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Industrial Environments */}
      <section className="py-16 md:py-[var(--section-py-md)]">
        <div className="max-w-[var(--container-max)] mx-auto px-6 md:px-12">
          <h2 
            className="text-[28px] md:text-[36px] tracking-tight mb-12 md:mb-16 text-center"
            style={{ fontWeight: 600, color: 'var(--dark-text)' }}
          >
            Built for Industrial Environments
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-6xl mx-auto">
            {/* Machine-Specific */}
            <div className="card-hover rounded-lg p-6 text-center">
              <div 
                className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: 'var(--light-gray)' }}
              >
                <Settings className="w-8 h-8" style={{ color: 'var(--industrial-blue)' }} />
              </div>
              <h3 
                className="text-[16px] md:text-[18px] mb-3"
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                Machine-Specific
              </h3>
              <p className="text-[14px] md:text-[15px] text-[var(--text-muted)] leading-relaxed">
                Workflows configured for each customer's machines
              </p>
            </div>

            {/* Customer Procedures */}
            <div className="card-hover rounded-lg p-6 text-center">
              <div 
                className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: 'var(--light-gray)' }}
              >
                <FileText className="w-8 h-8" style={{ color: 'var(--industrial-blue)' }} />
              </div>
              <h3 
                className="text-[16px] md:text-[18px] mb-3"
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                Custom Procedures
              </h3>
              <p className="text-[14px] md:text-[15px] text-[var(--text-muted)] leading-relaxed">
                Support for customer-specific maintenance protocols
              </p>
            </div>

            {/* Offline Capable */}
            <div className="card-hover rounded-lg p-6 text-center">
              <div 
                className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: 'var(--light-gray)' }}
              >
                <Database className="w-8 h-8" style={{ color: 'var(--industrial-blue)' }} />
              </div>
              <h3 
                className="text-[16px] md:text-[18px] mb-3"
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                Offline Operation
              </h3>
              <p className="text-[14px] md:text-[15px] text-[var(--text-muted)] leading-relaxed">
                Fully functional without network connectivity
              </p>
            </div>

            {/* Sync When Available */}
            <div className="card-hover rounded-lg p-6 text-center">
              <div 
                className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: 'var(--light-gray)' }}
              >
                <ArrowRight className="w-8 h-8" style={{ color: 'var(--industrial-blue)' }} />
              </div>
              <h3 
                className="text-[16px] md:text-[18px] mb-3"
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                Smart Sync
              </h3>
              <p className="text-[14px] md:text-[15px] text-[var(--text-muted)] leading-relaxed">
                Automatic synchronization when connectivity returns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Norscope Is Designed For */}
      <section className="py-16 md:py-[var(--section-py-lg)]" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="max-w-[var(--container-max)] mx-auto px-6 md:px-12">
          <h2 
            className="text-[28px] md:text-[36px] tracking-tight mb-12 md:mb-16 text-center"
            style={{ fontWeight: 600, color: 'var(--dark-text)' }}
          >
            What Norscope Is Designed For
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              {/* Designed for */}
              <div className="flex flex-col">
                <h3 
                  className="text-[20px] md:text-[24px] mb-8"
                  style={{ fontWeight: 600, color: 'var(--dark-text)', lineHeight: 1.2 }}
                >
                  Designed for
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Check 
                      className="w-5 h-5 mt-1 flex-shrink-0" 
                      style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                    />
                    <span className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed">
                      Industrial maintenance workflows
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check 
                      className="w-5 h-5 mt-1 flex-shrink-0" 
                      style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                    />
                    <span className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed">
                      Technician guidance at the machine
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check 
                      className="w-5 h-5 mt-1 flex-shrink-0" 
                      style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                    />
                    <span className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed">
                      Offline-capable operation
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check 
                      className="w-5 h-5 mt-1 flex-shrink-0" 
                      style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                    />
                    <span className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed">
                      Customer-specific procedure support
                    </span>
                  </div>
                </div>
              </div>

              {/* Not designed for */}
              <div className="flex flex-col">
                <h3 
                  className="text-[20px] md:text-[24px] mb-8"
                  style={{ fontWeight: 600, color: 'var(--dark-text)', lineHeight: 1.2 }}
                >
                  Not designed for
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <X 
                      className="w-5 h-5 mt-1 flex-shrink-0" 
                      style={{ color: 'var(--text-muted)', strokeWidth: 2 }}
                    />
                    <span className="text-[15px] md:text-[17px] text-[var(--text-muted)] leading-relaxed">
                      Generic AR content viewing
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X 
                      className="w-5 h-5 mt-1 flex-shrink-0" 
                      style={{ color: 'var(--text-muted)', strokeWidth: 2 }}
                    />
                    <span className="text-[15px] md:text-[17px] text-[var(--text-muted)] leading-relaxed">
                      Consumer AR applications
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X 
                      className="w-5 h-5 mt-1 flex-shrink-0" 
                      style={{ color: 'var(--text-muted)', strokeWidth: 2 }}
                    />
                    <span className="text-[15px] md:text-[17px] text-[var(--text-muted)] leading-relaxed">
                      Replacing engineering judgment
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X 
                      className="w-5 h-5 mt-1 flex-shrink-0" 
                      style={{ color: 'var(--text-muted)', strokeWidth: 2 }}
                    />
                    <span className="text-[15px] md:text-[17px] text-[var(--text-muted)] leading-relaxed">
                      Cloud-dependent operation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Measurable Impact */}
      <section className="py-16 md:py-[var(--section-py-md)]" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="max-w-[var(--container-max)] mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-[28px] md:text-[36px] tracking-tight mb-6 md:mb-8"
              style={{ fontWeight: 600, color: 'var(--dark-text)' }}
            >
              Measurable Impact
            </h2>
            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-8">
              Norscope focuses on measurable operational improvements such as reduced downtime, faster onboarding, and fewer procedural errors. These metrics are derived using structured modeling and conservative assumptions.
            </p>
            
            <button 
              onClick={onNavigateToMethodology}
              className="inline-arrow-link text-[15px]"
              style={{ color: 'var(--industrial-blue)', fontWeight: 500 }}
            >
              See how we calculate impact
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 md:py-[var(--section-py-lg)]">
        <div className="max-w-[var(--container-max)] mx-auto px-6 md:px-12 text-center">
          <p className="text-[18px] md:text-[20px] text-[var(--text-main)] leading-relaxed mb-10 max-w-3xl mx-auto">
            Interested in seeing how Norscope works in your environment?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={onContactClick}
              className="btn-primary px-8 py-3.5 rounded-md text-[15px]"
              style={{ 
                backgroundColor: 'var(--industrial-blue)', 
                color: 'white',
                fontWeight: 500
              }}
            >
              Discuss a Pilot
            </button>
            <button 
              onClick={onContactClick}
              className="btn-outline px-8 py-3.5 rounded-md text-[15px] transition-all"
              style={{ 
                backgroundColor: 'transparent',
                color: 'var(--industrial-blue)',
                fontWeight: 500,
                border: '1.5px solid var(--industrial-blue)'
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
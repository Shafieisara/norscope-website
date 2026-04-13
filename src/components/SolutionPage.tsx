import { Check, Shield, Wifi, MonitorCog, ArrowRight } from 'lucide-react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImage from '../assets/woman working with norscope.webp';
import problemImage from '../assets/problem-paper-manual.webp';
import maintenanceImage from '../assets/solution-active-maintenance.webp';
import customMachineryImage from '../assets/solution-custom-machinery.webp';
import factoryRealityImage from '../assets/solution-factory-reality.webp';
import { solutionPageT, type Lang } from '../i18n/translations';

interface SolutionPageProps {
  onNavigateHome: () => void;
  onNavigateToProduct: () => void;
  currentLanguage: Lang;
  onLanguageChange: (lang: Lang) => void;
  onAboutClick?: () => void;
  onProductClick?: () => void;
  onSolutionClick?: () => void;
  onImpactClick?: () => void;
  onContactClick?: () => void;
  onImpressumClick?: () => void;
  onDatenschutzClick?: () => void;
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
  onContactClick,
  onImpressumClick,
  onDatenschutzClick,
}: SolutionPageProps) {
  const lang = currentLanguage;
  const currentPage = lang === 'EN' ? 'solution-en' : 'solution-de';
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        currentLanguage={lang}
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
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="h1-page">
                {solutionPageT.hero.heading[lang]}
              </h1>
              <p className="p-body">
                {solutionPageT.hero.body[lang]}
              </p>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <ImageWithFallback
                src={heroImage}
                alt="Woman working with Norscope AR guidance"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Core Problem */}
      <section className="py-16 md:py-[var(--section-py-md)] bg-[var(--light-gray)]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="h2-section mb-6 md:mb-8">
                {solutionPageT.coreProblem.heading[lang]}
              </h2>
              <p className="p-body mb-8">
                {solutionPageT.coreProblem.body[lang]}
              </p>
              
              <div className="space-y-4">
                {solutionPageT.coreProblem.items[lang].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--industrial-blue)' }} />
                    <span className="text-[15px] md:text-[17px] text-[var(--text-main)]">
                      {item}
                    </span>
                  </div>
                ))}
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
        <div className="section-container">
          <div className="max-w-4xl">
            <h2 className="h2-section mb-6 md:mb-8">
              {solutionPageT.norsopesSolution.heading[lang]}
            </h2>
            <p className="p-body mb-6">
              {solutionPageT.norsopesSolution.body1[lang]}
            </p>
            <p className="p-body">
              {solutionPageT.norsopesSolution.body2[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* How the Solution Works */}
      <section className="py-16 md:py-[var(--section-py-lg)] bg-[var(--light-gray)]">
        <div className="section-container">
          <h2 className="h2-section mb-12 md:mb-16 text-center">
            {solutionPageT.howSolutionWorks.heading[lang]}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto mb-12">
            {(() => {
              const stepIcons = [MonitorCog, Shield, Check, Wifi];
              return solutionPageT.howSolutionWorks.cards[lang].map((card, i) => {
                const Icon = stepIcons[i];
                return (
                  <div key={i} className="card-hover bg-white p-8 rounded-lg">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                      style={{ backgroundColor: 'var(--industrial-blue)' }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 
                      className="text-[18px] md:text-[20px] mb-3"
                      style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-[14px] md:text-[15px] text-[var(--text-muted)] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                );
              });
            })()}
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
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="h2-section mb-6 md:mb-8">
                {solutionPageT.customSoftware.heading[lang]}
              </h2>
              <p className="p-body mb-8">
                {solutionPageT.customSoftware.body1[lang]}
              </p>
              <p className="p-body mb-8">
                {solutionPageT.customSoftware.body2[lang]}
              </p>
              
              <div className="space-y-4">
                {solutionPageT.customSoftware.items[lang].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ArrowRight 
                      className="w-5 h-5 mt-0.5 flex-shrink-0" 
                      style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                    />
                    <span className="text-[15px] md:text-[17px] text-[var(--text-main)]">
                      {item}
                    </span>
                  </div>
                ))}
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
      <section className="py-16 md:py-[var(--section-py-md)] bg-[var(--light-gray)]">
        <div className="section-container">
          <div className="max-w-4xl">
            <h2 className="h2-section mb-6 md:mb-8">
              {solutionPageT.industrialReality.heading[lang]}
            </h2>
            <p className="p-body mb-8">
              {solutionPageT.industrialReality.body[lang]}
            </p>
            
            <div className="space-y-6 mb-12">
              {solutionPageT.industrialReality.sections[lang].map((sec, i) => (
                <div key={i}>
                  <h3 
                    className="text-[18px] mb-3"
                    style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                  >
                    {sec.title}
                  </h3>
                  <p className="text-[15px] md:text-[17px] text-[var(--text-muted)] leading-relaxed">
                    {sec.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Optional workshop image */}
          <div className="relative h-[350px] md:h-[450px] rounded-lg overflow-hidden max-w-5xl mx-auto">
            <ImageWithFallback
              src={factoryRealityImage}
              alt="Factory floor with workers in industrial environment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Resulting Benefits */}
      <section className="py-16 md:py-[var(--section-py-md)]">
        <div className="section-container">
          <div className="max-w-4xl">
            <h2 className="h2-section mb-6 md:mb-8">
              {solutionPageT.resultingBenefits.heading[lang]}
            </h2>
            <p className="p-body mb-8">
              {solutionPageT.resultingBenefits.intro[lang]}
            </p>
            
            <div className="space-y-4">
              {solutionPageT.resultingBenefits.items[lang].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check 
                    className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0" 
                    style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                  />
                  <span className="text-[15px] md:text-[17px] text-[var(--text-main)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 md:py-[var(--section-py-lg)] bg-[var(--light-gray)]">
        <div className="section-container text-center">
          <p className="p-body mb-10 max-w-3xl mx-auto">
            {solutionPageT.closing.body[lang]}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={onNavigateToProduct}
              className="btn-primary px-8 py-3.5"
            >
              {solutionPageT.closing.primary[lang]}
            </button>
            <button 
              onClick={onContactClick}
              className="btn-outline px-8 py-3.5"
            >
              {solutionPageT.closing.secondary[lang]}
            </button>
          </div>
        </div>
      </section>

      <Footer
        lang={lang}
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
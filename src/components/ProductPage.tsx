import { Check, X, ArrowRight, ChevronRight, FileText, Settings, ClipboardCheck, Database } from 'lucide-react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImage from '../assets/product-hero-figma.webp';
import problemImage from '../assets/problem-paper-manual.webp';
import controlInterface from '../assets/solution-custom-machinery.webp';
import { productT, type Lang } from '../i18n/translations';

interface ProductPageProps {
  onNavigateHome: () => void;
  onNavigateToMethodology: () => void;
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

export function ProductPage({ onNavigateHome, onNavigateToMethodology, currentLanguage, onLanguageChange, onAboutClick, onProductClick, onSolutionClick, onImpactClick, onContactClick, onImpressumClick, onDatenschutzClick }: ProductPageProps) {
  const lang = currentLanguage;
  const currentPage = lang === 'EN' ? 'product-en' : 'product-de';
  
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
      
      {/* Product Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-[var(--section-py-lg)]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="max-w-2xl">
              <h1 className="h1-page">
                {productT.hero.heading[lang]}
              </h1>
              <p className="text-[18px] md:text-[20px] text-[var(--text-main)] leading-relaxed mb-6">
                {productT.hero.subHeading[lang]}
              </p>
              <p className="p-body text-[var(--text-muted)] mb-10">
                {productT.hero.body[lang]}
              </p>
              
              <button 
                onClick={onContactClick}
                className="btn-primary px-8 py-3.5"
              >
                {productT.hero.button[lang]}
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
      <section className="py-16 md:py-[var(--section-py-md)] bg-[var(--light-gray)]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="max-w-2xl">
              <h2 className="h2-section mb-6 md:mb-8">
                {productT.reality.heading[lang]}
              </h2>
              <p className="p-body mb-8">
                {productT.reality.body[lang]}
              </p>
              
              <div className="space-y-4">
                {productT.reality.items[lang].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--industrial-blue)' }} />
                    <span className="text-[15px] md:text-[17px] text-[var(--text-main)]">
                      {item}
                    </span>
                  </div>
                ))}
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
        <div className="section-container">
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
              <h2 className="h2-section mb-6 md:mb-8">
                {productT.whatDoes.heading[lang]}
              </h2>
              <p className="p-body mb-8">
                {productT.whatDoes.body[lang]}
              </p>
              
              <div className="space-y-4">
                {productT.whatDoes.items[lang].map((item, i) => (
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
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-[var(--section-py-lg)] bg-[var(--light-gray)]">
        <div className="section-container">
          <h2 className="h2-section mb-12 md:mb-16 text-center">
            {productT.howWorks.heading[lang]}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-6xl mx-auto">
            {productT.howWorks.steps[lang].map((step, i) => (
              <div key={i} className="card-hover rounded-lg p-6 text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: 'var(--industrial-blue)' }}
                >
                  <span className="text-[24px] text-white" style={{ fontWeight: 600 }}>{i + 1}</span>
                </div>
                <h3 
                  className="text-[18px] md:text-[20px] mb-3"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  {step.title}
                </h3>
                <p className="text-[14px] md:text-[15px] text-[var(--text-muted)] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Industrial Environments */}
      <section className="py-16 md:py-[var(--section-py-md)]">
        <div className="section-container">
          <h2 className="h2-section mb-12 md:mb-16 text-center">
            {productT.builtFor.heading[lang]}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-6xl mx-auto">
            {productT.builtFor.cards[lang].map((card, i) => {
              const icons = [Settings, FileText, Database, ArrowRight];
              const Icon = icons[i];
              return (
                <div key={i} className="card-hover rounded-lg p-6 text-center">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: 'var(--light-gray)' }}
                  >
                    <Icon className="w-8 h-8" style={{ color: 'var(--industrial-blue)' }} />
                  </div>
                  <h3 
                    className="text-[16px] md:text-[18px] mb-3"
                    style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-[var(--text-muted)] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Norscope Is Designed For */}
      <section className="py-16 md:py-[var(--section-py-lg)] bg-[var(--light-gray)]">
        <div className="section-container">
          <h2 className="h2-section mb-12 md:mb-16 text-center">
            {productT.designedFor.heading[lang]}
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              {/* Designed for */}
              <div className="flex flex-col">
                <h3 
                  className="text-[20px] md:text-[24px] mb-8"
                  style={{ fontWeight: 600, color: 'var(--dark-text)', lineHeight: 1.2 }}
                >
                  {productT.designedFor.forTitle[lang]}
                </h3>
                <div className="space-y-5">
                  {productT.designedFor.forItems[lang].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check 
                        className="w-5 h-5 mt-1 flex-shrink-0" 
                        style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                      />
                      <span className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Not designed for */}
              <div className="flex flex-col">
                <h3 
                  className="text-[20px] md:text-[24px] mb-8"
                  style={{ fontWeight: 600, color: 'var(--dark-text)', lineHeight: 1.2 }}
                >
                  {productT.designedFor.notForTitle[lang]}
                </h3>
                <div className="space-y-5">
                  {productT.designedFor.notForItems[lang].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <X 
                        className="w-5 h-5 mt-1 flex-shrink-0" 
                        style={{ color: 'var(--text-muted)', strokeWidth: 2 }}
                      />
                      <span className="text-[15px] md:text-[17px] text-[var(--text-muted)] leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Measurable Impact */}
      <section className="py-16 md:py-[var(--section-py-md)] bg-[var(--light-gray)]">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="h2-section mb-6 md:mb-8">
              {productT.impact.heading[lang]}
            </h2>
            <p className="p-body mb-8">
              {productT.impact.body[lang]}
            </p>
            
            <button 
              onClick={onNavigateToMethodology}
              className="inline-arrow-link text-[15px]"
              style={{ color: 'var(--industrial-blue)', fontWeight: 500 }}
            >
              {productT.impact.link[lang]}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 md:py-[var(--section-py-lg)]">
        <div className="section-container text-center">
          <p className="p-body mb-10 max-w-3xl mx-auto text-[18px] md:text-[20px]">
            {productT.closing.body[lang]}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={onContactClick}
              className="btn-primary px-8 py-3.5"
            >
              {productT.closing.primary[lang]}
            </button>
            <button 
              onClick={onContactClick}
              className="btn-outline px-8 py-3.5 border-[1.5px] border-[var(--industrial-blue)] text-[var(--industrial-blue)]"
            >
              {productT.closing.secondary[lang]}
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
import { Check } from 'lucide-react';
import saraImg from '../assets/Sara Sarvestani.webp';
import siddhantImg from '../assets/Siddhant Rebello.webp';
import wahibImg from '../assets/Wahib Farhat.webp';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { aboutT, type Lang } from '../i18n/translations';

interface AboutPageProps {
  onNavigateHome: () => void;
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

export function AboutPage({ onNavigateHome, currentLanguage, onLanguageChange, onAboutClick, onProductClick, onSolutionClick, onImpactClick, onContactClick, onImpressumClick, onDatenschutzClick }: AboutPageProps) {
  const lang = currentLanguage;
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
        currentPage="about"
      />

      {/* About Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-[var(--section-py-md)]">
        <div className="section-container">
          <h1 className="h1-page">
            {aboutT.hero.heading[lang]}
          </h1>
          <p className="p-body max-w-3xl">
            {aboutT.hero.body[lang]}
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-12 md:py-[var(--section-py-md)]">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="h2-section mb-4 md:mb-6">
              {aboutT.problem.heading[lang]}
            </h2>
            <p className="p-body">
              {aboutT.problem.body[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-12 md:py-[var(--section-py-md)] bg-[var(--light-gray)]">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="h2-section mb-4 md:mb-6">
              {aboutT.solution.heading[lang]}
            </h2>
            <p className="p-body mb-6 md:mb-8">
              {aboutT.solution.body[lang]}
            </p>

            <div className="space-y-3 md:space-y-4">
              {aboutT.solution.items[lang].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check
                    className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0"
                    style={{ color: 'var(--industrial-blue)', strokeWidth: 2 }}
                  />
                  <span className="p-body">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-12 md:py-[var(--section-py-md)]">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="h2-section mb-4 md:mb-6">
              {aboutT.mission.heading[lang]}
            </h2>
            <div
              className="border-l-4 pl-6 md:pl-8 py-4"
              style={{ borderColor: 'var(--industrial-blue)' }}
            >
              <p className="p-body">
                {aboutT.mission.body[lang]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Team */}
      <section className="py-12 md:py-[var(--section-py-lg)] bg-[var(--light-gray)]">
        <div className="section-container">
          <h2 className="h2-section mb-10 md:mb-16 text-center">
            {aboutT.team.heading[lang]}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 max-w-6xl mx-auto">
            {/* Founder Card 1 - Siddhant */}
            <div className="card-hover bg-white rounded-lg overflow-hidden h-full flex flex-col">
              <div className="img-hover-zoom aspect-[3/4]">
                <img
                  src={siddhantImg}
                  alt="Siddhant Rebello"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6 md:p-8 flex-1">
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
                  {aboutT.team.siddhant.role[lang]}
                </div>
                <p className="text-[14px] md:text-[15px] text-[var(--text-muted)] leading-relaxed">
                  {aboutT.team.siddhant.bio[lang]}
                </p>
              </div>
            </div>

            {/* Founder Card 2 - Sara */}
            <div className="card-hover bg-white rounded-lg overflow-hidden h-full flex flex-col">
              <div className="img-hover-zoom aspect-[3/4]">
                <img
                  src={saraImg}
                  alt="Sara Sarvestani"
                  className="w-full h-full object-cover object-[62%_top]"
                />
              </div>
              <div className="p-6 md:p-8 flex-1">
                <h3
                  className="text-[20px] md:text-[22px] mb-1"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  Sara Sarvestani
                </h3>
                <div
                  className="text-[14px] md:text-[15px] mb-4"
                  style={{ color: 'var(--industrial-blue)', fontWeight: 500 }}
                >
                  {aboutT.team.sara.role[lang]}
                </div>
                <p className="text-[14px] md:text-[15px] text-[var(--text-muted)] leading-relaxed">
                  {aboutT.team.sara.bio[lang]}
                </p>
              </div>
            </div>

            {/* Founder Card 3 - Wahib */}
            <div className="card-hover bg-white rounded-lg overflow-hidden h-full flex flex-col">
              <div className="img-hover-zoom aspect-[3/4]">
                <img
                  src={wahibImg}
                  alt="Wahib Farhat"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6 md:p-8 flex-1">
                <h3
                  className="text-[20px] md:text-[22px] mb-1"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  Wahib Farhat
                </h3>
                <div
                  className="text-[14px] md:text-[15px] mb-4"
                  style={{ color: 'var(--industrial-blue)', fontWeight: 500 }}
                >
                  {aboutT.team.wahib.role[lang]}
                </div>
                <p className="text-[14px] md:text-[15px] text-[var(--text-muted)] leading-relaxed">
                  {aboutT.team.wahib.bio[lang]}
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
            {aboutT.closing.body[lang]}
          </p>

          <button
            onClick={onContactClick}
            className="btn-primary w-full md:w-auto px-8 py-3.5"
          >
            {aboutT.closing.button[lang]}
          </button>
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
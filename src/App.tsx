import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { SplineProduct3DViewer } from './components/SplineProduct3DViewer';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { CustomSoftwareSection } from './components/CustomSoftwareSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { BenefitsSection } from './components/BenefitsSection';
import { IndustriesSection } from './components/IndustriesSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ImpactMethodologyPage } from './components/ImpactMethodologyPage';
import { AboutPage } from './components/AboutPage';
import { ProductPage } from './components/ProductPage';
import { SolutionPage } from './components/SolutionPage';
import { ContactPage } from './components/ContactPage';
import { ImpressumPage } from './components/ImpressumPage';
import { DatenschutzPage } from './components/DatenschutzPage';

type PageType = 'home-en' | 'home-de' | 'methodology-en' | 'methodology-de' | 'about-en' | 'about-de' | 'product-en' | 'product-de' | 'solution-en' | 'solution-de' | 'contact-en' | 'contact-de' | 'impressum-de' | 'datenschutz-de';

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [currentPage, setCurrentPage] = useState<PageType>('home-en');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (lang: 'EN' | 'DE', fromPage: 'home' | 'methodology' | 'about' | 'product' | 'solution' | 'contact') => {
    if (fromPage === 'home') {
      setCurrentPage(lang === 'EN' ? 'home-en' : 'home-de');
    } else if (fromPage === 'methodology') {
      setCurrentPage(lang === 'EN' ? 'methodology-en' : 'methodology-de');
    } else if (fromPage === 'about') {
      setCurrentPage(lang === 'EN' ? 'about-en' : 'about-de');
    } else if (fromPage === 'product') {
      setCurrentPage(lang === 'EN' ? 'product-en' : 'product-de');
    } else if (fromPage === 'solution') {
      setCurrentPage(lang === 'EN' ? 'solution-en' : 'solution-de');
    } else {
      setCurrentPage(lang === 'EN' ? 'contact-en' : 'contact-de');
    }
    window.scrollTo(0, 0);
  };

  const navigateToMethodology = () => {
    const currentLang = currentPage.includes('en') ? 'EN' : 'DE';
    setCurrentPage(currentLang === 'EN' ? 'methodology-en' : 'methodology-de');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    const currentLang = currentPage.includes('en') ? 'EN' : 'DE';
    setCurrentPage(currentLang === 'EN' ? 'home-en' : 'home-de');
    window.scrollTo(0, 0);
  };

  const navigateToAbout = () => {
    const currentLang = currentPage.includes('en') ? 'EN' : 'DE';
    setCurrentPage(currentLang === 'EN' ? 'about-en' : 'about-de');
    window.scrollTo(0, 0);
  };

  const navigateToProduct = () => {
    const currentLang = currentPage.includes('en') ? 'EN' : 'DE';
    setCurrentPage(currentLang === 'EN' ? 'product-en' : 'product-de');
    window.scrollTo(0, 0);
  };

  const navigateToSolution = () => {
    const currentLang = currentPage.includes('en') ? 'EN' : 'DE';
    setCurrentPage(currentLang === 'EN' ? 'solution-en' : 'solution-de');
    window.scrollTo(0, 0);
  };

  const navigateToContact = () => {
    const currentLang = currentPage.includes('en') ? 'EN' : 'DE';
    setCurrentPage(currentLang === 'EN' ? 'contact-en' : 'contact-de');
    window.scrollTo(0, 0);
  };

  const navigateToImpressum = () => {
    setCurrentPage('impressum-de');
    window.scrollTo(0, 0);
  };

  const navigateToDatenschutz = () => {
    setCurrentPage('datenschutz-de');
    window.scrollTo(0, 0);
  };

  // Render About Pages
  if (currentPage === 'about-en' || currentPage === 'about-de') {
    const currentLang = currentPage === 'about-en' ? 'EN' : 'DE';
    return (
      <AboutPage
        onNavigateHome={navigateToHome}
        currentLanguage={currentLang}
        onLanguageChange={(lang) => handleLanguageChange(lang, 'about')}
        onAboutClick={navigateToAbout}
        onProductClick={navigateToProduct}
        onSolutionClick={navigateToSolution}
        onImpactClick={navigateToMethodology}
        onContactClick={navigateToContact}
      />
    );
  }

  // Render Methodology Pages
  if (currentPage === 'methodology-en' || currentPage === 'methodology-de') {
    const currentLang = currentPage === 'methodology-en' ? 'EN' : 'DE';
    return (
      <ImpactMethodologyPage
        onNavigateHome={navigateToHome}
        currentLanguage={currentLang}
        onLanguageChange={(lang) => handleLanguageChange(lang, 'methodology')}
        onAboutClick={navigateToAbout}
        onProductClick={navigateToProduct}
        onSolutionClick={navigateToSolution}
        onImpactClick={navigateToMethodology}
        onContactClick={navigateToContact}
      />
    );
  }

  // Render Product Pages
  if (currentPage === 'product-en' || currentPage === 'product-de') {
    const currentLang = currentPage === 'product-en' ? 'EN' : 'DE';
    return (
      <ProductPage
        onNavigateHome={navigateToHome}
        onNavigateToMethodology={navigateToMethodology}
        currentLanguage={currentLang}
        onLanguageChange={(lang) => handleLanguageChange(lang, 'product')}
        onAboutClick={navigateToAbout}
        onProductClick={navigateToProduct}
        onSolutionClick={navigateToSolution}
        onImpactClick={navigateToMethodology}
        onContactClick={navigateToContact}
      />
    );
  }

  // Render Solution Pages
  if (currentPage === 'solution-en' || currentPage === 'solution-de') {
    const currentLang = currentPage === 'solution-en' ? 'EN' : 'DE';
    return (
      <SolutionPage
        onNavigateHome={navigateToHome}
        onNavigateToProduct={navigateToProduct}
        currentLanguage={currentLang}
        onLanguageChange={(lang) => handleLanguageChange(lang, 'solution')}
        onAboutClick={navigateToAbout}
        onProductClick={navigateToProduct}
        onSolutionClick={navigateToSolution}
        onImpactClick={navigateToMethodology}
        onContactClick={navigateToContact}
      />
    );
  }

  // Render Contact Pages
  if (currentPage === 'contact-en' || currentPage === 'contact-de') {
    const currentLang = currentPage === 'contact-en' ? 'EN' : 'DE';
    return (
      <ContactPage
        onNavigateHome={navigateToHome}
        currentLanguage={currentLang}
        onLanguageChange={(lang) => handleLanguageChange(lang, 'contact')}
        onAboutClick={navigateToAbout}
        onProductClick={navigateToProduct}
        onSolutionClick={navigateToSolution}
        onImpactClick={navigateToMethodology}
        onContactClick={navigateToContact}
      />
    );
  }

  // Render Impressum Page
  if (currentPage === 'impressum-de') {
    return (
      <ImpressumPage
        onNavigateHome={navigateToHome}
        currentLanguage="DE"
        onLanguageChange={(lang) => handleLanguageChange(lang, 'home')}
        onAboutClick={navigateToAbout}
        onProductClick={navigateToProduct}
        onSolutionClick={navigateToSolution}
        onImpactClick={navigateToMethodology}
        onContactClick={navigateToContact}
        onImpressumClick={navigateToImpressum}
        onDatenschutzClick={navigateToDatenschutz}
      />
    );
  }

  // Render Datenschutz Page
  if (currentPage === 'datenschutz-de') {
    return (
      <DatenschutzPage
        onNavigateHome={navigateToHome}
        currentLanguage="DE"
        onLanguageChange={(lang) => handleLanguageChange(lang, 'home')}
        onAboutClick={navigateToAbout}
        onProductClick={navigateToProduct}
        onSolutionClick={navigateToSolution}
        onImpactClick={navigateToMethodology}
        onContactClick={navigateToContact}
        onImpressumClick={navigateToImpressum}
        onDatenschutzClick={navigateToDatenschutz}
      />
    );
  }

  // Render Homepage (EN or DE)
  const currentLang = currentPage === 'home-en' ? 'EN' : 'DE';

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        currentLanguage={currentLang}
        onLanguageChange={(lang) => handleLanguageChange(lang, 'home')}
        onLogoClick={() => setCurrentPage('home-en')}
        onAboutClick={navigateToAbout}
        onProductClick={navigateToProduct}
        onSolutionClick={navigateToSolution}
        onImpactClick={navigateToMethodology}
        onContactClick={navigateToContact}
      />
      <HeroSection
        scrollY={scrollY}
        onContactClick={navigateToContact}
        onProductClick={navigateToProduct}
      />
      <SplineProduct3DViewer sceneUrl="https://prod.spline.design/wln1t3R2-Cx-fuah/scene.splinecode" />
      <ProblemSection />
      <SolutionSection />
      <CustomSoftwareSection />
      <HowItWorksSection />
      <BenefitsSection onNavigateToMethodology={navigateToMethodology} />
      <IndustriesSection />
      <CTASection onContactClick={navigateToContact} />
      <Footer
        onImpressumClick={navigateToImpressum}
        onDatenschutzClick={navigateToDatenschutz}
      />
    </div>
  );
}
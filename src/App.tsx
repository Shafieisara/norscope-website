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

// Map URL paths → PageType
const PATH_TO_PAGE: Record<string, PageType> = {
  '/': 'home-en',
  '/home': 'home-en',
  '/about': 'about-en',
  '/product': 'product-en',
  '/solution': 'solution-en',
  '/impact': 'methodology-en',
  '/contact': 'contact-en',
  '/impressum': 'impressum-de',
  '/datenschutz': 'datenschutz-de',
};

// Map PageType → URL path
const PAGE_TO_PATH: Record<PageType, string> = {
  'home-en': '/',
  'home-de': '/',
  'about-en': '/about',
  'about-de': '/about',
  'product-en': '/product',
  'product-de': '/product',
  'solution-en': '/solution',
  'solution-de': '/solution',
  'methodology-en': '/impact',
  'methodology-de': '/impact',
  'contact-en': '/contact',
  'contact-de': '/contact',
  'impressum-de': '/impressum',
  'datenschutz-de': '/datenschutz',
};

function pageFromPath(pathname: string): PageType {
  return PATH_TO_PAGE[pathname] ?? 'home-en';
}

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  // Initialise from the current URL so direct links and refreshes work
  const [currentPage, setCurrentPage] = useState<PageType>(() =>
    pageFromPath(window.location.pathname)
  );

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen to browser back / forward
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      const page: PageType = e.state?.page ?? pageFromPath(window.location.pathname);
      setCurrentPage(page);
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigate helper — pushes a real history entry
  const navigate = (page: PageType) => {
    const path = PAGE_TO_PATH[page];
    history.pushState({ page }, '', path);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleLanguageChange = (lang: 'EN' | 'DE', fromPage: 'home' | 'methodology' | 'about' | 'product' | 'solution' | 'contact') => {
    const suffix = lang === 'EN' ? 'en' : 'de';
    navigate(`${fromPage === 'methodology' ? 'methodology' : fromPage}-${suffix}` as PageType);
  };

  const navigateToHome = () => navigate(currentPage.includes('en') ? 'home-en' : 'home-de');
  const navigateToAbout = () => navigate(currentPage.includes('en') ? 'about-en' : 'about-de');
  const navigateToProduct = () => navigate(currentPage.includes('en') ? 'product-en' : 'product-de');
  const navigateToSolution = () => navigate(currentPage.includes('en') ? 'solution-en' : 'solution-de');
  const navigateToMethodology = () => navigate(currentPage.includes('en') ? 'methodology-en' : 'methodology-de');
  const navigateToContact = () => navigate(currentPage.includes('en') ? 'contact-en' : 'contact-de');
  const navigateToImpressum = () => navigate('impressum-de');
  const navigateToDatenschutz = () => navigate('datenschutz-de');

  // Shared footer & nav props
  const sharedNavProps = {
    onAboutClick: navigateToAbout,
    onProductClick: navigateToProduct,
    onSolutionClick: navigateToSolution,
    onImpactClick: navigateToMethodology,
    onContactClick: navigateToContact,
  };
  const sharedFooterProps = {
    ...sharedNavProps,
    onImpressumClick: navigateToImpressum,
    onDatenschutzClick: navigateToDatenschutz,
  };
  const currentLang = currentPage.includes('en') ? 'EN' as const : 'DE' as const;

  // ── Page rendering ──────────────────────────────────────────────────────────

  if (currentPage === 'about-en' || currentPage === 'about-de') {
    return (
      <AboutPage
        onNavigateHome={navigateToHome}
        currentLanguage={currentLang}
        onLanguageChange={(lang) => handleLanguageChange(lang, 'about')}
        {...sharedNavProps}
        {...sharedFooterProps}
      />
    );
  }

  if (currentPage === 'methodology-en' || currentPage === 'methodology-de') {
    return (
      <ImpactMethodologyPage
        onNavigateHome={navigateToHome}
        currentLanguage={currentLang}
        onLanguageChange={(lang) => handleLanguageChange(lang, 'methodology')}
        {...sharedNavProps}
        {...sharedFooterProps}
      />
    );
  }

  if (currentPage === 'product-en' || currentPage === 'product-de') {
    return (
      <ProductPage
        onNavigateHome={navigateToHome}
        onNavigateToMethodology={navigateToMethodology}
        currentLanguage={currentLang}
        onLanguageChange={(lang) => handleLanguageChange(lang, 'product')}
        {...sharedNavProps}
        {...sharedFooterProps}
      />
    );
  }

  if (currentPage === 'solution-en' || currentPage === 'solution-de') {
    return (
      <SolutionPage
        onNavigateHome={navigateToHome}
        onNavigateToProduct={navigateToProduct}
        currentLanguage={currentLang}
        onLanguageChange={(lang) => handleLanguageChange(lang, 'solution')}
        {...sharedNavProps}
        {...sharedFooterProps}
      />
    );
  }

  if (currentPage === 'contact-en' || currentPage === 'contact-de') {
    return (
      <ContactPage
        onNavigateHome={navigateToHome}
        currentLanguage={currentLang}
        onLanguageChange={(lang) => handleLanguageChange(lang, 'contact')}
        {...sharedNavProps}
        {...sharedFooterProps}
      />
    );
  }

  if (currentPage === 'impressum-de') {
    return (
      <ImpressumPage
        onNavigateHome={navigateToHome}
        currentLanguage="DE"
        onLanguageChange={(lang) => handleLanguageChange(lang, 'home')}
        {...sharedNavProps}
        {...sharedFooterProps}
      />
    );
  }

  if (currentPage === 'datenschutz-de') {
    return (
      <DatenschutzPage
        onNavigateHome={navigateToHome}
        currentLanguage="DE"
        onLanguageChange={(lang) => handleLanguageChange(lang, 'home')}
        {...sharedNavProps}
        {...sharedFooterProps}
      />
    );
  }

  // Homepage (default)
  return (
    <div className="min-h-screen bg-white">
      <Navigation
        currentLanguage={currentLang}
        onLanguageChange={(lang) => handleLanguageChange(lang, 'home')}
        onLogoClick={navigateToHome}
        activePage="home"
        {...sharedNavProps}
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
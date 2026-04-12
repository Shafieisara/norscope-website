import { useState, useEffect, lazy, Suspense } from 'react';
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

// Lazy-loaded page components — each gets its own JS chunk
const ImpactMethodologyPage = lazy(() => import('./components/ImpactMethodologyPage').then(m => ({ default: m.ImpactMethodologyPage })));
const AboutPage = lazy(() => import('./components/AboutPage').then(m => ({ default: m.AboutPage })));
const ProductPage = lazy(() => import('./components/ProductPage').then(m => ({ default: m.ProductPage })));
const SolutionPage = lazy(() => import('./components/SolutionPage').then(m => ({ default: m.SolutionPage })));
const ContactPage = lazy(() => import('./components/ContactPage').then(m => ({ default: m.ContactPage })));
const ImpressumPage = lazy(() => import('./components/ImpressumPage').then(m => ({ default: m.ImpressumPage })));
const DatenschutzPage = lazy(() => import('./components/DatenschutzPage').then(m => ({ default: m.DatenschutzPage })));

type PageType = 'home-en' | 'home-de' | 'methodology-en' | 'methodology-de' | 'about-en' | 'about-de' | 'product-en' | 'product-de' | 'solution-en' | 'solution-de' | 'contact-en' | 'contact-de' | 'impressum-de' | 'datenschutz-de';

// Map logical paths → PageType
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

// Map PageType → logical path
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

// Derive the current logical path from the URL hash (fallback to '/')
function getPathFromLocation(): string {
  const { hash } = window.location;
  if (hash && hash.length > 1) {
    const raw = hash.slice(1); // e.g. "/impressum" or "impressum"
    return raw.startsWith('/') ? raw : `/${raw}`;
  }
  return '/';
}

function pageFromPath(pathname: string): PageType {
  return PATH_TO_PAGE[pathname] ?? 'home-en';
}

// Minimal spinner shown while a lazy page chunk is loading
function PageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div
        className="w-8 h-8 rounded-full border-2 border-[var(--industrial-blue)] border-t-transparent animate-spin"
        aria-label="Loading..."
      />
    </div>
  );
}

export default function App() {
  // Initialise from the current hash-based URL so refreshes work on static hosting
  const [currentPage, setCurrentPage] = useState<PageType>(() =>
    pageFromPath(getPathFromLocation())
  );

  // Listen to hash changes (back / forward and in-app navigation)
  useEffect(() => {
    const handleHashChange = () => {
      const page: PageType = pageFromPath(getPathFromLocation());
      setCurrentPage(page);
      window.scrollTo(0, 0);
    };

    // Ensure state matches initial hash on mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update document title dynamically
  useEffect(() => {
    const isEn = currentPage.includes('en');
    const titles: Record<PageType, string> = {
      'home-en': 'Norscope — AR Glasses for Industrial Maintenance',
      'home-de': 'Norscope — AR-Brillen für die industrielle Wartung',
      'about-en': 'About Us — Norscope',
      'about-de': 'Über Uns — Norscope',
      'product-en': 'Our Product — Norscope',
      'product-de': 'Unser Produkt — Norscope',
      'solution-en': 'Industrial Solutions — Norscope',
      'solution-de': 'Industrielösungen — Norscope',
      'methodology-en': 'Impact & Methodology — Norscope',
      'methodology-de': 'Wirkung & Methodik — Norscope',
      'contact-en': 'Contact — Norscope',
      'contact-de': 'Kontakt — Norscope',
      'impressum-de': 'Impressum — Norscope',
      'datenschutz-de': 'Datenschutz — Norscope',
    };
    
    document.title = titles[currentPage] || 'Norscope';
  }, [currentPage]);

  // Navigate helper — uses hash-based routing so refreshes work without server rewrites
  const navigate = (page: PageType) => {
    const path = PAGE_TO_PATH[page];
    const newHash = path === '/' ? '' : path;
    if (newHash !== window.location.hash.slice(1)) {
      window.location.hash = newHash;
    } else {
      // If hash is the same, still ensure state and scroll are correct
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
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
      <Suspense fallback={<PageFallback />}>
        <AboutPage
          onNavigateHome={navigateToHome}
          currentLanguage={currentLang}
          onLanguageChange={(lang) => handleLanguageChange(lang, 'about')}
          {...sharedNavProps}
          {...sharedFooterProps}
        />
      </Suspense>
    );
  }

  if (currentPage === 'methodology-en' || currentPage === 'methodology-de') {
    return (
      <Suspense fallback={<PageFallback />}>
        <ImpactMethodologyPage
          onNavigateHome={navigateToHome}
          currentLanguage={currentLang}
          onLanguageChange={(lang) => handleLanguageChange(lang, 'methodology')}
          {...sharedNavProps}
          {...sharedFooterProps}
        />
      </Suspense>
    );
  }

  if (currentPage === 'product-en' || currentPage === 'product-de') {
    return (
      <Suspense fallback={<PageFallback />}>
        <ProductPage
          onNavigateHome={navigateToHome}
          onNavigateToMethodology={navigateToMethodology}
          currentLanguage={currentLang}
          onLanguageChange={(lang) => handleLanguageChange(lang, 'product')}
          {...sharedNavProps}
          {...sharedFooterProps}
        />
      </Suspense>
    );
  }

  if (currentPage === 'solution-en' || currentPage === 'solution-de') {
    return (
      <Suspense fallback={<PageFallback />}>
        <SolutionPage
          onNavigateHome={navigateToHome}
          onNavigateToProduct={navigateToProduct}
          currentLanguage={currentLang}
          onLanguageChange={(lang) => handleLanguageChange(lang, 'solution')}
          {...sharedNavProps}
          {...sharedFooterProps}
        />
      </Suspense>
    );
  }

  if (currentPage === 'contact-en' || currentPage === 'contact-de') {
    return (
      <Suspense fallback={<PageFallback />}>
        <ContactPage
          onNavigateHome={navigateToHome}
          currentLanguage={currentLang}
          onLanguageChange={(lang) => handleLanguageChange(lang, 'contact')}
          {...sharedNavProps}
          {...sharedFooterProps}
        />
      </Suspense>
    );
  }

  if (currentPage === 'impressum-de') {
    return (
      <Suspense fallback={<PageFallback />}>
        <ImpressumPage
          onNavigateHome={navigateToHome}
          currentLanguage="DE"
          onLanguageChange={(lang) => handleLanguageChange(lang, 'home')}
          {...sharedNavProps}
          {...sharedFooterProps}
        />
      </Suspense>
    );
  }

  if (currentPage === 'datenschutz-de') {
    return (
      <Suspense fallback={<PageFallback />}>
        <DatenschutzPage
          onNavigateHome={navigateToHome}
          currentLanguage="DE"
          onLanguageChange={(lang) => handleLanguageChange(lang, 'home')}
          {...sharedNavProps}
          {...sharedFooterProps}
        />
      </Suspense>
    );
  }

  // Homepage (default)
  return (
    <div className="min-h-screen bg-white">
      <Navigation
        currentLanguage={currentLang}
        onLanguageChange={(lang) => handleLanguageChange(lang, 'home')}
        onLogoClick={navigateToHome}
        currentPage="home"
        {...sharedNavProps}
      />
      <HeroSection
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
        {...sharedFooterProps}
      />
    </div>
  );
}
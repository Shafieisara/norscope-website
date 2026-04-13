import { useState, useEffect, lazy, Suspense, useRef } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
// Remove static import to enable component code-splitting
// import { SplineProduct3DViewer } from './components/SplineProduct3DViewer';
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
const FovSimulatorPage = lazy(() => import('./components/FovSimulatorPage').then(m => ({ default: m.FovSimulatorPage })));
const TrueArOverlayPage = lazy(() => import('./components/TrueArOverlayPage').then(m => ({ default: m.TrueArOverlayPage })));

// Lazy-loaded 3D Spline Viewer (Heavy dependency)
const SplineProduct3DViewer = lazy(() => import('./components/SplineProduct3DViewer').then(m => ({ default: m.SplineProduct3DViewer })));

// Wrapper to only trigger the lazy load when the user is about to scroll to the viewer
function LazySplineWrapper({ sceneUrl }: { sceneUrl: string }) {
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          observer.disconnect();
        }
      },
      // Load it when the user is within 600px of scrolling down to it
      { rootMargin: '600px' }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="min-h-[400px] md:min-h-[500px]">
      {hasIntersected ? (
        <Suspense fallback={<div className="h-[400px] md:h-[500px] w-full flex items-center justify-center"><div className="w-8 h-8 rounded-full border-2 border-[var(--industrial-blue)] border-t-transparent animate-spin"/></div>}>
          <SplineProduct3DViewer sceneUrl={sceneUrl} />
        </Suspense>
      ) : null}
    </div>
  );
}

type PageType = 'home-en' | 'home-de' | 'methodology-en' | 'methodology-de' | 'about-en' | 'about-de' | 'product-en' | 'product-de' | 'solution-en' | 'solution-de' | 'contact-en' | 'contact-de' | 'impressum-de' | 'datenschutz-de' | 'fov-simulator' | 'true-ar';

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
  '/fov': 'fov-simulator',
  '/true-ar': 'true-ar',
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
  'fov-simulator': '/fov',
  'true-ar': '/true-ar',
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

// Pages that never change with language
const LANG_FIXED: ReadonlySet<PageType> = new Set(['fov-simulator', 'true-ar']);

function pageFromPath(pathname: string, lang: 'EN' | 'DE'): PageType {
  const base = (PATH_TO_PAGE[pathname] ?? 'home-en') as PageType;
  if (LANG_FIXED.has(base)) return base;
  // Replace the language suffix with the current language
  const suffix = lang === 'DE' ? 'de' : 'en';
  return base.replace(/-(en|de)$/, `-${suffix}`) as PageType;
}

function getStoredLang(): 'EN' | 'DE' {
  try { return localStorage.getItem('norscope_lang') === 'DE' ? 'DE' : 'EN'; }
  catch { return 'EN'; }
}
function storeLang(lang: 'EN' | 'DE') {
  try { localStorage.setItem('norscope_lang', lang); } catch { /* ignore */ }
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
  // Language is the single source of truth — persisted in localStorage
  const [currentLang, setCurrentLang] = useState<'EN' | 'DE'>(() => getStoredLang());
  // Use a ref so the hashchange listener always reads the latest language without a stale closure
  const langRef = useRef<'EN' | 'DE'>(currentLang);

  // Initialise page from URL hash, honouring the persisted language
  const [currentPage, setCurrentPage] = useState<PageType>(() =>
    pageFromPath(getPathFromLocation(), getStoredLang())
  );

  // Keep langRef in sync whenever currentLang changes
  useEffect(() => { langRef.current = currentLang; }, [currentLang]);

  // Listen to hash changes (back / forward and in-app programmatic navigation)
  useEffect(() => {
    const handleHashChange = () => {
      // Always use langRef.current — never a stale closure value
      const page: PageType = pageFromPath(getPathFromLocation(), langRef.current);
      setCurrentPage(page);
      window.scrollTo(0, 0);
    };

    // Sync with current hash on mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []); // empty deps — intentional, we rely on langRef to avoid stale closure

  // Update document title dynamically
  useEffect(() => {
    const titles: Record<PageType, string> = {
      'home-en': 'Norscope - Offline AR Guidance',
      'home-de': 'Norscope - Offline AR Führung',
      'about-en': 'About Us - Norscope',
      'about-de': 'Über Uns - Norscope',
      'product-en': 'Our Product - Norscope',
      'product-de': 'Unser Produkt - Norscope',
      'solution-en': 'Industrial Solutions - Norscope',
      'solution-de': 'Industrielösungen - Norscope',
      'methodology-en': 'Impact & Methodology - Norscope',
      'methodology-de': 'Wirkung & Methodik - Norscope',
      'contact-en': 'Contact - Norscope',
      'contact-de': 'Kontakt - Norscope',
      'impressum-de': 'Impressum - Norscope',
      'datenschutz-de': 'Datenschutz - Norscope',
      'fov-simulator': 'FOV Simulator - Norscope',
      'true-ar': 'True AR WebXR - Norscope',
    };
    document.title = titles[currentPage] || 'Norscope';
  }, [currentPage]);

  // Navigate helper — hash-based routing; language is preserved via langRef
  const navigate = (page: PageType) => {
    const path = PAGE_TO_PATH[page];
    const newHash = path === '/' ? '' : path;
    if (newHash !== window.location.hash.slice(1)) {
      window.location.hash = newHash;
      // hashchange event will fire and call handleHashChange → setCurrentPage
    } else {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  const handleLanguageChange = (lang: 'EN' | 'DE') => {
    storeLang(lang);
    setCurrentLang(lang);
    langRef.current = lang;
    // Re-resolve the current page with the new language
    const newPage = pageFromPath(getPathFromLocation(), lang);
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
  };

  // Navigation helpers — always use currentLang (not currentPage string hacks)
  const navigateToHome        = () => navigate(currentLang === 'EN' ? 'home-en'        : 'home-de');
  const navigateToAbout       = () => navigate(currentLang === 'EN' ? 'about-en'       : 'about-de');
  const navigateToProduct     = () => navigate(currentLang === 'EN' ? 'product-en'     : 'product-de');
  const navigateToSolution    = () => navigate(currentLang === 'EN' ? 'solution-en'    : 'solution-de');
  const navigateToMethodology = () => navigate(currentLang === 'EN' ? 'methodology-en' : 'methodology-de');
  const navigateToContact     = () => navigate(currentLang === 'EN' ? 'contact-en'     : 'contact-de');
  const navigateToImpressum   = () => navigate('impressum-de');
  const navigateToDatenschutz = () => navigate('datenschutz-de');

  // Shared footer & nav props
  const sharedNavProps = {
    onAboutClick:    navigateToAbout,
    onProductClick:  navigateToProduct,
    onSolutionClick: navigateToSolution,
    onImpactClick:   navigateToMethodology,
    onContactClick:  navigateToContact,
  };
  const sharedFooterProps = {
    ...sharedNavProps,
    onImpressumClick:   navigateToImpressum,
    onDatenschutzClick: navigateToDatenschutz,
  };

  // ── Page rendering ──────────────────────────────────────────────────────────

  if (currentPage === 'about-en' || currentPage === 'about-de') {
    return (
      <Suspense fallback={<PageFallback />}>
        <AboutPage
          onNavigateHome={navigateToHome}
          currentLanguage={currentLang}
          onLanguageChange={handleLanguageChange}
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
          onLanguageChange={handleLanguageChange}
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
          onLanguageChange={handleLanguageChange}
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
          onLanguageChange={handleLanguageChange}
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
          onLanguageChange={handleLanguageChange}
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
          currentLanguage={currentLang}
          onLanguageChange={handleLanguageChange}
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
          currentLanguage={currentLang}
          onLanguageChange={handleLanguageChange}
          {...sharedNavProps}
          {...sharedFooterProps}
        />
      </Suspense>
    );
  }

  if (currentPage === 'fov-simulator') {
    return (
      <Suspense fallback={<PageFallback />}>
        <FovSimulatorPage />
      </Suspense>
    );
  }

  if (currentPage === 'true-ar') {
    return (
      <div className="flex flex-col min-h-screen">
        <Navigation
          currentLanguage={currentLang}
          onLanguageChange={handleLanguageChange}
          onLogoClick={navigateToHome}
          {...sharedNavProps}
          currentPage=""
        />
        <div className="flex-grow pt-20">
          <Suspense fallback={<PageFallback />}>
            <TrueArOverlayPage />
          </Suspense>
        </div>
      </div>
    );
  }

  // Homepage (default)
  return (
    <div className="min-h-screen bg-white">
      <Navigation
        currentLanguage={currentLang}
        onLanguageChange={handleLanguageChange}
        onLogoClick={navigateToHome}
        currentPage="home"
        {...sharedNavProps}
      />
      <HeroSection
        lang={currentLang}
        onContactClick={navigateToContact}
        onProductClick={navigateToProduct}
      />
      <LazySplineWrapper sceneUrl="https://prod.spline.design/wln1t3R2-Cx-fuah/scene.splinecode" />
      <ProblemSection lang={currentLang} />
      <SolutionSection lang={currentLang} />
      <CustomSoftwareSection lang={currentLang} />
      <HowItWorksSection lang={currentLang} />
      <BenefitsSection lang={currentLang} onNavigateToMethodology={navigateToMethodology} />
      <IndustriesSection lang={currentLang} />
      <CTASection lang={currentLang} onContactClick={navigateToContact} />
      <Footer
        lang={currentLang}
        {...sharedFooterProps}
      />
    </div>
  );
}
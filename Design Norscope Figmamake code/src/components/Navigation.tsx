import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Norscope Logo.svg';

type ActivePage = 'home' | 'product' | 'solution' | 'methodology' | 'about' | 'contact' | 'impressum' | 'datenschutz';

interface NavigationProps {
  currentLanguage?: 'EN' | 'DE';
  onLanguageChange?: (lang: 'EN' | 'DE') => void;
  onLogoClick?: () => void;
  onAboutClick?: () => void;
  onProductClick?: () => void;
  onSolutionClick?: () => void;
  onImpactClick?: () => void;
  onContactClick?: () => void;
  activePage?: ActivePage;
}

export function Navigation({ onLogoClick, onAboutClick, onProductClick, onSolutionClick, onImpactClick, onContactClick, activePage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-[var(--border-light)] z-50">
      {/* Top bar */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between relative">

        {/* Logo – centered on mobile, left-aligned on desktop */}
        <div
          className="cursor-pointer flex items-center
                     absolute left-1/2 -translate-x-1/2
                     lg:static lg:translate-x-0"
          onClick={onLogoClick}
        >
          {!logoError ? (
            <img
              src={logo}
              alt="Norscope Logo"
              className="w-32 md:w-40 h-auto"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="text-xl md:text-2xl tracking-tight" style={{ fontWeight: 600 }}>
              NORSCOPE
            </div>
          )}
        </div>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-8">
          <button
            onClick={(e) => { e.preventDefault(); onProductClick?.(); }}
            className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors"
            style={{ fontWeight: activePage === 'product' ? 700 : 400 }}
          >
            Product
          </button>
          <button
            onClick={(e) => { e.preventDefault(); onSolutionClick?.(); }}
            className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors"
            style={{ fontWeight: activePage === 'solution' ? 700 : 400 }}
          >
            Solutions
          </button>
          <button
            onClick={(e) => { e.preventDefault(); onImpactClick?.(); }}
            className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors"
            style={{ fontWeight: activePage === 'methodology' ? 700 : 400 }}
          >
            Impact &amp; Methodology
          </button>
          <button
            onClick={(e) => { e.preventDefault(); onAboutClick?.(); }}
            className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors"
            style={{ fontWeight: activePage === 'about' ? 700 : 400 }}
          >
            About
          </button>
          <button
            onClick={(e) => { e.preventDefault(); onContactClick?.(); }}
            className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors"
            style={{ fontWeight: activePage === 'contact' ? 700 : 400 }}
          >
            Contact
          </button>
        </div>

        {/* Right: Desktop CTA + Mobile hamburger */}
        <div className="flex items-center gap-4">
          {/* Desktop CTA */}
          <button
            onClick={() => onContactClick?.()}
            className="hidden lg:block px-6 py-2.5 rounded-md text-[15px] transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-r from-[var(--industrial-blue)] to-blue-700 hover:from-blue-600 hover:to-blue-800"
            style={{ color: 'white', fontWeight: 500 }}
          >
            Request Demo
          </button>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 transition-transform duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" style={{ color: 'var(--dark-text)' }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: 'var(--dark-text)' }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="lg:hidden bg-white border-t border-[var(--border-light)] overflow-hidden"
        style={{
          maxHeight: isMenuOpen ? '600px' : '0px',
          opacity: isMenuOpen ? 1 : 0,
          transition: 'max-height 0.35s ease-in-out, opacity 0.25s ease-in-out',
          pointerEvents: isMenuOpen ? 'auto' : 'none',
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          <button
            onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); onProductClick?.(); }}
            className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors py-2 text-left"
            style={{ fontWeight: activePage === 'product' ? 700 : 400 }}
          >
            Product
          </button>
          <button
            onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); onSolutionClick?.(); }}
            className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors py-2 text-left"
            style={{ fontWeight: activePage === 'solution' ? 700 : 400 }}
          >
            Solutions
          </button>
          <button
            onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); onImpactClick?.(); }}
            className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors py-2 text-left"
            style={{ fontWeight: activePage === 'methodology' ? 700 : 400 }}
          >
            Impact &amp; Methodology
          </button>
          <button
            onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); onAboutClick?.(); }}
            className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors py-2 text-left"
            style={{ fontWeight: activePage === 'about' ? 700 : 400 }}
          >
            About
          </button>
          <button
            onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); onContactClick?.(); }}
            className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors py-2 text-left"
            style={{ fontWeight: activePage === 'contact' ? 700 : 400 }}
          >
            Contact
          </button>

          <button
            onClick={() => { setIsMenuOpen(false); onContactClick?.(); }}
            className="px-6 py-2.5 rounded-md text-[15px] transition-all mt-2"
            style={{ backgroundColor: 'var(--industrial-blue)', color: 'white', fontWeight: 500 }}
          >
            Request Demo
          </button>
        </div>
      </div>
    </nav >
  );
}
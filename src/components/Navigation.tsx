import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Norscope Logo.svg';

interface NavigationProps {
  currentLanguage?: 'EN' | 'DE';
  onLanguageChange?: (lang: 'EN' | 'DE') => void;
  onLogoClick?: () => void;
  onAboutClick?: () => void;
  onProductClick?: () => void;
  onSolutionClick?: () => void;
  onImpactClick?: () => void;
  onContactClick?: () => void;
}

export function Navigation({ currentLanguage = 'EN', onLanguageChange, onLogoClick, onAboutClick, onProductClick, onSolutionClick, onImpactClick, onContactClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-[var(--border-light)] z-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8 lg:gap-16">
          <div
            className="cursor-pointer flex items-center"
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
              <div
                className="text-xl md:text-2xl tracking-tight"
                style={{ fontWeight: 600 }}
              >
                NORSCOPE
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={(e) => {
                e.preventDefault();
                onProductClick?.();
              }}
              className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors"
            >
              Product
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                onSolutionClick?.();
              }}
              className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors"
            >
              Solutions
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                onImpactClick?.();
              }}
              className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors"
            >
              Impact & Methodology
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                onAboutClick?.();
              }}
              className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors"
            >
              About
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                onContactClick?.();
              }}
              className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Desktop Right Section with Language Switcher and CTA */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Language Switcher */}
          <div className="flex items-center gap-2 text-[15px]">
            <button
              onClick={() => onLanguageChange?.('EN')}
              className="text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors"
              style={{ fontWeight: currentLanguage === 'EN' ? 600 : 400 }}
            >
              EN
            </button>
            <span className="text-[var(--dark-text)]">|</span>
            <button
              onClick={() => onLanguageChange?.('DE')}
              className="text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors"
              style={{ fontWeight: currentLanguage === 'DE' ? 600 : 400 }}
            >
              DE
            </button>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => onContactClick?.()}
            className="px-6 py-2.5 rounded-md text-[15px] transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-r from-[var(--industrial-blue)] to-blue-700 hover:from-blue-600 hover:to-blue-800"
            style={{
              color: 'white',
              fontWeight: 500
            }}
          >
            Request Demo
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" style={{ color: 'var(--dark-text)' }} />
          ) : (
            <Menu className="w-6 h-6" style={{ color: 'var(--dark-text)' }} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[var(--border-light)]">
          <div className="px-6 py-4 flex flex-col gap-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                onProductClick?.();
              }}
              className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors py-2 text-left"
            >
              Product
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                onSolutionClick?.();
              }}
              className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors py-2 text-left"
            >
              Solutions
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                onImpactClick?.();
              }}
              className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors py-2 text-left"
            >
              Impact & Methodology
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                onAboutClick?.();
              }}
              className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors py-2 text-left"
            >
              About
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                onContactClick?.();
              }}
              className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors py-2 text-left"
            >
              Contact
            </button>

            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2 text-[15px] py-2">
              <button
                onClick={() => {
                  onLanguageChange?.('EN');
                  setIsMenuOpen(false);
                }}
                className="text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors"
                style={{ fontWeight: currentLanguage === 'EN' ? 600 : 400 }}
              >
                EN
              </button>
              <span className="text-[var(--dark-text)]">|</span>
              <button
                onClick={() => {
                  onLanguageChange?.('DE');
                  setIsMenuOpen(false);
                }}
                className="text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors"
                style={{ fontWeight: currentLanguage === 'DE' ? 600 : 400 }}
              >
                DE
              </button>
            </div>

            <button
              onClick={() => {
                setIsMenuOpen(false);
                onContactClick?.();
              }}
              className="px-6 py-2.5 rounded-md text-[15px] transition-all mt-2"
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
      )}
    </nav>
  );
}
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Norscope Logo.svg';
import { navT, type Lang } from '../i18n/translations';

interface NavigationProps {
  currentLanguage?: Lang;
  onLanguageChange?: (lang: Lang) => void;
  onLogoClick?: () => void;
  onAboutClick?: () => void;
  onProductClick?: () => void;
  onSolutionClick?: () => void;
  onImpactClick?: () => void;
  onContactClick?: () => void;
  currentPage?: string;
}

export function Navigation({ currentLanguage = 'EN', onLanguageChange, onLogoClick, onAboutClick, onProductClick, onSolutionClick, onImpactClick, onContactClick, currentPage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const lang: Lang = currentLanguage;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-[var(--border-light)] z-50">
      {/* Top bar */}
      <div className="section-container h-20 flex items-center justify-between relative">

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
            style={{ fontWeight: currentPage?.startsWith('product') ? 700 : 400 }}
          >
            {navT.product[lang]}
          </button>
          <button
            onClick={(e) => { e.preventDefault(); onSolutionClick?.(); }}
            className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors"
            style={{ fontWeight: currentPage?.startsWith('solution') ? 700 : 400 }}
          >
            {navT.solutions[lang]}
          </button>
          <button
            onClick={(e) => { e.preventDefault(); onImpactClick?.(); }}
            className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors"
            style={{ fontWeight: currentPage?.startsWith('methodology') ? 700 : 400 }}
          >
            {navT.approach[lang]}
          </button>
          <button
            onClick={(e) => { e.preventDefault(); onAboutClick?.(); }}
            className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors"
            style={{ fontWeight: currentPage?.startsWith('about') ? 700 : 400 }}
          >
            {navT.about[lang]}
          </button>
          <button
            onClick={(e) => { e.preventDefault(); onContactClick?.(); }}
            className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors"
            style={{ fontWeight: currentPage?.startsWith('contact') ? 700 : 400 }}
          >
            {navT.contact[lang]}
          </button>
        </div>

        {/* Right: Language switcher + Desktop CTA + Mobile hamburger */}
        <div className="flex items-center gap-3">
          {/* Language switcher */}
          {onLanguageChange && (
            <div className="hidden lg:flex items-center gap-1 text-[13px]">
              <button
                onClick={() => onLanguageChange('EN')}
                className="px-2 py-1 rounded transition-colors"
                style={{
                  fontWeight: lang === 'EN' ? 700 : 400,
                  color: lang === 'EN' ? 'var(--industrial-blue)' : 'var(--text-muted)',
                }}
              >
                EN
              </button>
              <span className="text-[var(--border-light)]">|</span>
              <button
                onClick={() => onLanguageChange('DE')}
                className="px-2 py-1 rounded transition-colors"
                style={{
                  fontWeight: lang === 'DE' ? 700 : 400,
                  color: lang === 'DE' ? 'var(--industrial-blue)' : 'var(--text-muted)',
                }}
              >
                DE
              </button>
            </div>
          )}

          {/* Desktop CTA */}
          <button
            onClick={() => onContactClick?.()}
            className="btn-primary hidden lg:inline-flex px-6 py-2.5"
          >
            {navT.cta[lang]}
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
          maxHeight: isMenuOpen ? '700px' : '0px',
          opacity: isMenuOpen ? 1 : 0,
          transition: 'max-height 0.35s ease-in-out, opacity 0.25s ease-in-out',
          pointerEvents: isMenuOpen ? 'auto' : 'none',
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          <button
            onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); onProductClick?.(); }}
            className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors py-2 text-left"
            style={{ fontWeight: currentPage?.startsWith('product') ? 700 : 400 }}
          >
            {navT.product[lang]}
          </button>
          <button
            onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); onSolutionClick?.(); }}
            className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors py-2 text-left"
            style={{ fontWeight: currentPage?.startsWith('solution') ? 700 : 400 }}
          >
            {navT.solutions[lang]}
          </button>
          <button
            onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); onImpactClick?.(); }}
            className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors py-2 text-left"
            style={{ fontWeight: currentPage?.startsWith('methodology') ? 700 : 400 }}
          >
            {navT.approach[lang]}
          </button>
          <button
            onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); onAboutClick?.(); }}
            className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors py-2 text-left"
            style={{ fontWeight: currentPage?.startsWith('about') ? 700 : 400 }}
          >
            {navT.about[lang]}
          </button>
          <button
            onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); onContactClick?.(); }}
            className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors py-2 text-left"
            style={{ fontWeight: currentPage?.startsWith('contact') ? 700 : 400 }}
          >
            {navT.contact[lang]}
          </button>

          {/* Mobile language switcher */}
          {onLanguageChange && (
            <div className="flex items-center gap-2 py-2 border-t border-[var(--border-light)]">
              <span className="text-[13px] text-[var(--text-muted)]">Language:</span>
              <button
                onClick={() => { onLanguageChange('EN'); setIsMenuOpen(false); }}
                className="text-[13px] px-2 py-1 rounded"
                style={{ fontWeight: lang === 'EN' ? 700 : 400, color: lang === 'EN' ? 'var(--industrial-blue)' : 'var(--text-muted)' }}
              >
                EN
              </button>
              <span className="text-[var(--text-muted)]">|</span>
              <button
                onClick={() => { onLanguageChange('DE'); setIsMenuOpen(false); }}
                className="text-[13px] px-2 py-1 rounded"
                style={{ fontWeight: lang === 'DE' ? 700 : 400, color: lang === 'DE' ? 'var(--industrial-blue)' : 'var(--text-muted)' }}
              >
                DE
              </button>
            </div>
          )}

          <button
            onClick={() => { setIsMenuOpen(false); onContactClick?.(); }}
            className="btn-primary w-full py-2.5 mt-2"
          >
            {navT.cta[lang]}
          </button>
        </div>
      </div>
    </nav >
  );
}
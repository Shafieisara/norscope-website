interface FooterProps {
  onAboutClick?: () => void;
  onProductClick?: () => void;
  onSolutionClick?: () => void;
  onImpactClick?: () => void;
  onContactClick?: () => void;
  onImpressumClick?: () => void;
  onDatenschutzClick?: () => void;
}

export function Footer({ onAboutClick, onProductClick, onSolutionClick, onImpactClick, onContactClick, onImpressumClick, onDatenschutzClick }: FooterProps) {
  return (
    <footer className="py-12 md:py-16 border-t" style={{ backgroundColor: 'var(--dark-bg)', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 mb-10 md:mb-12">
          {/* Company */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="text-lg md:text-xl tracking-tight mb-4 md:mb-6" style={{ fontWeight: 600, color: 'white' }}>
              NORSCOPE
            </div>
            <p className="text-[13px] md:text-[14px] leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              Industrial augmented reality for the modern factory floor
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-[13px] md:text-[14px] mb-3 md:mb-4 uppercase tracking-wide" style={{ fontWeight: 600, color: 'rgba(255, 255, 255, 0.9)' }}>
              Product
            </h4>
            <ul className="space-y-2 md:space-y-2.5">
              <li>
                <button onClick={onProductClick} className="text-[13px] md:text-[14px] hover:text-white transition-colors cursor-pointer" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  Product
                </button>
              </li>
              <li>
                <button onClick={onSolutionClick} className="text-[13px] md:text-[14px] hover:text-white transition-colors cursor-pointer" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  Solution
                </button>
              </li>
              <li>
                <button onClick={onImpactClick} className="text-[13px] md:text-[14px] hover:text-white transition-colors cursor-pointer" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  Impact
                </button>
              </li>

            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[13px] md:text-[14px] mb-3 md:mb-4 uppercase tracking-wide" style={{ fontWeight: 600, color: 'rgba(255, 255, 255, 0.9)' }}>
              Company
            </h4>
            <ul className="space-y-2 md:space-y-2.5">
              <li>
                <button onClick={onAboutClick} className="text-[13px] md:text-[14px] hover:text-white transition-colors cursor-pointer" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  About
                </button>
              </li>
              <li>
                <a href="#" className="text-[13px] md:text-[14px] hover:text-white transition-colors" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-[13px] md:text-[14px] hover:text-white transition-colors" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  News
                </a>
              </li>
              <li>
                <button onClick={onContactClick} className="text-[13px] md:text-[14px] hover:text-white transition-colors cursor-pointer" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[13px] md:text-[14px] mb-3 md:mb-4 uppercase tracking-wide" style={{ fontWeight: 600, color: 'rgba(255, 255, 255, 0.9)' }}>
              Resources
            </h4>
            <ul className="space-y-2 md:space-y-2.5">
              <li>
                <a href="#" className="text-[13px] md:text-[14px] hover:text-white transition-colors" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-[13px] md:text-[14px] hover:text-white transition-colors" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-[13px] md:text-[14px] hover:text-white transition-colors" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-[13px] md:text-[14px] hover:text-white transition-colors" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[13px] md:text-[14px] mb-3 md:mb-4 uppercase tracking-wide" style={{ fontWeight: 600, color: 'rgba(255, 255, 255, 0.9)' }}>
              Legal
            </h4>
            <ul className="space-y-2 md:space-y-2.5">
              <li>
                <a href="#" className="text-[13px] md:text-[14px] hover:text-white transition-colors" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[13px] md:text-[14px] hover:text-white transition-colors" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  Terms of Service
                </a>
              </li>
              <li>
                <button
                  onClick={onImpressumClick}
                  className="text-[13px] md:text-[14px] hover:text-white transition-colors cursor-pointer"
                  style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                >
                  Impressum
                </button>
              </li>
              <li>
                <button
                  onClick={onDatenschutzClick}
                  className="text-[13px] md:text-[14px] hover:text-white transition-colors cursor-pointer"
                  style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                >
                  Datenschutz
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <p className="text-[12px] md:text-[13px] text-center" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            © 2026 Norscope. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
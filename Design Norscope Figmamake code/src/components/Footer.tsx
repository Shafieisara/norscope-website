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
  const linkStyle: React.CSSProperties = {
    color: 'rgba(255, 255, 255, 0.6)',
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    fontSize: '13px',
    transition: 'color 0.2s',
  };

  return (
    <footer
      className="py-8 border-t"
      style={{ backgroundColor: 'var(--dark-bg)', borderColor: 'rgba(255, 255, 255, 0.1)' }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col items-center gap-3 text-center">

        {/* Copyright */}
        <p className="text-[13px]" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
          © 2026 Norscope
        </p>

        {/* Navigation links */}
        <div
          className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[13px]"
          style={{ color: 'rgba(255, 255, 255, 0.4)' }}
        >
          <button
            onClick={onAboutClick}
            style={linkStyle}
            onMouseEnter={e => (e.currentTarget.style.color = 'white')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
          >
            About
          </button>
          <span>|</span>
          <button
            onClick={onProductClick}
            style={linkStyle}
            onMouseEnter={e => (e.currentTarget.style.color = 'white')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
          >
            Product
          </button>
          <span>|</span>
          <button
            onClick={onSolutionClick}
            style={linkStyle}
            onMouseEnter={e => (e.currentTarget.style.color = 'white')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
          >
            Solution
          </button>
          <span>|</span>
          <button
            onClick={onImpactClick}
            style={linkStyle}
            onMouseEnter={e => (e.currentTarget.style.color = 'white')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
          >
            Impact
          </button>
          <span>|</span>
          <button
            onClick={onContactClick}
            style={linkStyle}
            onMouseEnter={e => (e.currentTarget.style.color = 'white')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
          >
            Contact
          </button>
          <span>|</span>
          <button
            onClick={onImpressumClick}
            style={linkStyle}
            onMouseEnter={e => (e.currentTarget.style.color = 'white')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
          >
            Imprint
          </button>
          <span>|</span>
          <button
            onClick={onDatenschutzClick}
            style={linkStyle}
            onMouseEnter={e => (e.currentTarget.style.color = 'white')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
          >
            Privacy Policy
          </button>
        </div>

        {/* Tagline */}
        <p className="text-[12px]" style={{ color: 'rgba(255, 255, 255, 0.35)' }}>
          Founder-led startup initiative based in Germany
        </p>

      </div>
    </footer>
  );
}
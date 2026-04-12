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
    <footer className="py-8 border-t border-white/10 bg-[var(--dark-bg)]">
      <div className="section-container flex flex-col items-center gap-3 text-center">

        {/* Copyright */}
        <p className="text-[13px] text-white/50">
          © 2026 Norscope
        </p>

        {/* Navigation links */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[13px] text-white/40">
          <button onClick={onAboutClick} className="text-white/60 hover:text-white transition-colors">About</button>
          <span>|</span>
          <button onClick={onProductClick} className="text-white/60 hover:text-white transition-colors">Product</button>
          <span>|</span>
          <button onClick={onSolutionClick} className="text-white/60 hover:text-white transition-colors">Solution</button>
          <span>|</span>
          <button onClick={onImpactClick} className="text-white/60 hover:text-white transition-colors">Approach</button>
          <span>|</span>
          <button onClick={onContactClick} className="text-white/60 hover:text-white transition-colors">Contact</button>
          <span>|</span>
          <button onClick={onImpressumClick} className="text-white/60 hover:text-white transition-colors">Imprint</button>
          <span>|</span>
          <button onClick={onDatenschutzClick} className="text-white/60 hover:text-white transition-colors">Privacy Policy</button>
        </div>

        {/* Tagline */}
        <p className="text-[12px] text-white/35">
          Founder-led startup initiative based in Germany
        </p>

      </div>
    </footer>
  );
}
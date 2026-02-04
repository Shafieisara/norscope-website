interface CTASectionProps {
  onContactClick?: () => void;
}

export function CTASection({ onContactClick }: CTASectionProps) {
  return (
    <section className="py-16 md:py-32" style={{ backgroundColor: 'var(--dark-bg)' }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
        <h2
          className="text-[32px] md:text-[48px] tracking-tight mb-5 md:mb-6"
          style={{ fontWeight: 600, color: 'white' }}
        >
          Ready to modernize machine maintenance?
        </h2>
        <p className="text-[16px] md:text-[18px] leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
          Join leading manufacturers who trust Norscope to power their industrial AR operations
        </p>

        <button
          onClick={onContactClick}
          className="px-8 md:px-10 py-3.5 md:py-4 rounded-md text-[15px] md:text-[16px] transition-all hover:shadow-2xl hover:scale-105"
          style={{
            backgroundColor: 'var(--industrial-blue)',
            color: 'white',
            fontWeight: 500
          }}
        >
          Request Demo
        </button>
      </div>
    </section>
  );
}
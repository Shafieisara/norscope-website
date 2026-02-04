import { TrendingDown, Zap, AlertCircle, Shield } from 'lucide-react';

const benefits = [
  {
    icon: TrendingDown,
    title: 'Reduce Downtime',
    description: 'Cut unplanned maintenance time by up to 40% with instant access to procedures',
    metric: '40%',
    metricLabel: 'faster repairs'
  },
  {
    icon: Zap,
    title: 'Faster Onboarding',
    description: 'Train new technicians in weeks instead of months with guided AR workflows',
    metric: '3x',
    metricLabel: 'quicker training'
  },
  {
    icon: AlertCircle,
    title: 'Fewer Errors',
    description: 'Eliminate mistakes with step-by-step validation and real-time feedback',
    metric: '95%',
    metricLabel: 'error reduction'
  },
  {
    icon: Shield,
    title: 'Improved Safety',
    description: 'Enhance workplace safety with hazard warnings and compliance tracking',
    metric: '100%',
    metricLabel: 'compliance rate'
  }
];

interface BenefitsSectionProps {
  onNavigateToMethodology?: () => void;
}

export function BenefitsSection({ onNavigateToMethodology }: BenefitsSectionProps) {
  return (
    <section className="py-12 md:py-24" style={{ backgroundColor: 'var(--light-gray)' }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-10 md:mb-16">
          <h2
            className="text-[28px] md:text-[40px] tracking-tight mb-3 md:mb-4"
            style={{ fontWeight: 600, color: 'var(--dark-text)' }}
          >
            Measurable Impact
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#4A4A4A] max-w-2xl mx-auto">
            Transform your maintenance operations with proven results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white border border-[var(--border-light)] rounded-lg p-6 md:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
            >
              <div className="mb-5 md:mb-6">
                <benefit.icon
                  className="w-9 h-9 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{ color: 'var(--industrial-blue)', strokeWidth: 1.5 }}
                />
              </div>

              <div className="mb-5 md:mb-6">
                <div
                  className="text-[30px] md:text-[36px] mb-1 transition-transform duration-300 group-hover:scale-110"
                  style={{ fontWeight: 600, color: 'var(--industrial-blue)' }}
                >
                  {benefit.metric}
                </div>
                <div className="text-[12px] md:text-[13px] text-[#6B6B6B] uppercase tracking-wide">
                  {benefit.metricLabel}
                </div>
              </div>

              <h3
                className="text-[17px] md:text-[18px] mb-2 md:mb-3"
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                {benefit.title}
              </h3>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-[#6B6B6B]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* How we calculate button */}
        <div className="text-center mt-8 md:mt-10">
          <button
            onClick={onNavigateToMethodology}
            className="text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors underline"
          >
            How we calculate these numbers
          </button>
        </div>
      </div>
    </section>
  );
}
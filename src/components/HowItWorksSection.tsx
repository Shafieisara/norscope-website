import { Glasses, Scan, Navigation2, ClipboardCheck } from 'lucide-react';

const steps = [
  {
    icon: Glasses,
    title: 'Wear Device',
    description: 'Put on Norscope AR glasses for hands-free operation'
  },
  {
    icon: Scan,
    title: 'Scan Machine',
    description: 'System identifies equipment and loads procedures'
  },
  {
    icon: Navigation2,
    title: 'Follow AR Instructions',
    description: 'Visual guidance overlays show exact steps in real-time'
  },
  {
    icon: ClipboardCheck,
    title: 'Log Maintenance',
    description: 'Automatically document work and update records'
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-10 md:mb-16">
          <h2
            className="text-[28px] md:text-[40px] tracking-tight mb-3 md:mb-4"
            style={{ fontWeight: 600, color: 'var(--dark-text)' }}
          >
            How It Works
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#4A4A4A] max-w-2xl mx-auto">
            Four simple steps to transform your maintenance operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 relative">
          {/* Connection line - hidden on mobile */}
          <div
            className="hidden lg:block absolute left-[12.5%] right-[12.5%] h-[2px]"
            style={{ backgroundColor: 'var(--border-light)', top: '3.5rem' }}
          />

          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Number badge on top */}
              <div
                className="w-8 h-8 mx-auto mb-3 rounded-full inline-flex items-center justify-center text-[14px]"
                style={{
                  backgroundColor: 'var(--industrial-blue)',
                  color: 'white',
                  fontWeight: 600
                }}
              >
                {index + 1}
              </div>

              {/* Icon circle */}
              <div
                className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-5 md:mb-6 rounded-full flex items-center justify-center bg-white border-2"
                style={{ borderColor: 'var(--industrial-blue)' }}
              >
                <step.icon
                  className="w-9 h-9 md:w-10 md:h-10"
                  style={{ color: 'var(--industrial-blue)', strokeWidth: 1.5 }}
                />
              </div>

              <h3
                className="text-[17px] md:text-[18px] mb-2 md:mb-3"
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                {step.title}
              </h3>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-[#6B6B6B]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
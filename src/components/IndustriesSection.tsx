import { Factory, Zap, Car, Hammer, Workflow } from 'lucide-react';

const industries = [
  {
    icon: Factory,
    name: 'Manufacturing'
  },
  {
    icon: Zap,
    name: 'Energy'
  },
  {
    icon: Car,
    name: 'Automotive'
  },
  {
    icon: Hammer,
    name: 'Heavy Machinery'
  },
  {
    icon: Workflow,
    name: 'Process Industry'
  }
];

export function IndustriesSection() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-10 md:mb-16">
          <h2 
            className="text-[28px] md:text-[40px] tracking-tight mb-3 md:mb-4"
            style={{ fontWeight: 600, color: 'var(--dark-text)' }}
          >
            Trusted Across Industries
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#4A4A4A] max-w-2xl mx-auto">
            Norscope serves the world's most demanding industrial sectors
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-white border border-[var(--border-light)] rounded-lg p-6 md:p-8 hover:shadow-lg transition-all hover:border-[var(--industrial-blue)] cursor-pointer group"
            >
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 md:mb-4 transition-colors"
                  style={{ backgroundColor: 'var(--industrial-blue-light)' }}
                >
                  <industry.icon 
                    className="w-7 h-7 md:w-8 md:h-8 transition-colors" 
                    style={{ color: 'var(--industrial-blue)', strokeWidth: 1.5 }}
                  />
                </div>
                <h3 
                  className="text-[15px] md:text-[16px]"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  {industry.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
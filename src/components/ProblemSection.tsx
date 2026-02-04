import { Clock, Users, Cog, FileText } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Downtime Costs',
    description: 'Every hour of unplanned downtime costs manufacturers thousands in lost productivity and revenue.'
  },
  {
    icon: Users,
    title: 'Skill Shortage',
    description: 'Experienced technicians are retiring faster than new talent can be trained and deployed.'
  },
  {
    icon: Cog,
    title: 'Complex Machines',
    description: 'Modern industrial equipment requires specialized knowledge and precise maintenance procedures.'
  },
  {
    icon: FileText,
    title: 'Paper-Based Manuals',
    description: 'Traditional documentation is difficult to navigate during critical maintenance operations.'
  }
];

export function ProblemSection() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-10 md:mb-16">
          <h2
            className="text-[28px] md:text-[40px] tracking-tight mb-3 md:mb-4"
            style={{ fontWeight: 600, color: 'var(--dark-text)' }}
          >
            The Industrial Challenge
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#4A4A4A] max-w-2xl mx-auto">
            Manufacturing faces mounting pressure from complexity, workforce gaps, and rising operational costs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white border border-[var(--border-light)] rounded-lg p-6 md:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="mb-5 md:mb-6">
                <problem.icon
                  className="w-9 h-9 md:w-10 md:h-10 transition-transform duration-300 hover:scale-110"
                  style={{ color: 'var(--industrial-blue)', strokeWidth: 1.5 }}
                />
              </div>
              <h3
                className="text-[17px] md:text-[18px] mb-2 md:mb-3"
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                {problem.title}
              </h3>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-[#6B6B6B]">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { useState } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface ContactPageProps {
  onNavigateHome: () => void;
  currentLanguage: 'EN' | 'DE';
  onLanguageChange: (lang: 'EN' | 'DE') => void;
  onAboutClick?: () => void;
  onProductClick?: () => void;
  onSolutionClick?: () => void;
  onImpactClick?: () => void;
  onContactClick?: () => void;
}

export function ContactPage({
  onNavigateHome,
  currentLanguage,
  onLanguageChange,
  onAboutClick,
  onProductClick,
  onSolutionClick,
  onImpactClick,
  onContactClick
}: ContactPageProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    role: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        currentLanguage={currentLanguage}
        onLanguageChange={onLanguageChange}
        onLogoClick={onNavigateHome}
        onAboutClick={onAboutClick}
        onProductClick={onProductClick}
        onSolutionClick={onSolutionClick}
        onImpactClick={onImpactClick}
        onContactClick={onContactClick}
      />

      {/* Contact Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h1
              className="text-[36px] md:text-[52px] tracking-tight mb-4 md:mb-6"
              style={{ fontWeight: 600, color: 'var(--dark-text)' }}
            >
              Contact & Request Demo
            </h1>
            <p className="text-[16px] md:text-[18px] text-[#4A4A4A] leading-relaxed">
              Get in touch to discuss your maintenance workflows or request a product demonstration.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            <h2
              className="text-[24px] md:text-[32px] tracking-tight mb-8 md:mb-10"
              style={{ fontWeight: 600, color: 'var(--dark-text)' }}
            >
              Request a Demo
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-[15px] mb-2"
                  style={{ fontWeight: 500, color: 'var(--dark-text)' }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-[15px] rounded-md border border-[var(--border-light)] focus:outline-none focus:ring-2 focus:ring-[var(--industrial-blue)] focus:border-transparent transition-all"
                  style={{ color: 'var(--dark-text)' }}
                />
              </div>

              {/* Company / Organization */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-[15px] mb-2"
                  style={{ fontWeight: 500, color: 'var(--dark-text)' }}
                >
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-[15px] rounded-md border border-[var(--border-light)] focus:outline-none focus:ring-2 focus:ring-[var(--industrial-blue)] focus:border-transparent transition-all"
                  style={{ color: 'var(--dark-text)' }}
                />
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[15px] mb-2"
                  style={{ fontWeight: 500, color: 'var(--dark-text)' }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-[15px] rounded-md border border-[var(--border-light)] focus:outline-none focus:ring-2 focus:ring-[var(--industrial-blue)] focus:border-transparent transition-all"
                  style={{ color: 'var(--dark-text)' }}
                />
              </div>

              {/* Role / Position */}
              <div>
                <label
                  htmlFor="role"
                  className="block text-[15px] mb-2"
                  style={{ fontWeight: 500, color: 'var(--dark-text)' }}
                >
                  Role / Position
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-[15px] rounded-md border border-[var(--border-light)] focus:outline-none focus:ring-2 focus:ring-[var(--industrial-blue)] focus:border-transparent transition-all"
                  style={{ color: 'var(--dark-text)' }}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[15px] mb-2"
                  style={{ fontWeight: 500, color: 'var(--dark-text)' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 text-[15px] rounded-md border border-[var(--border-light)] focus:outline-none focus:ring-2 focus:ring-[var(--industrial-blue)] focus:border-transparent transition-all resize-y"
                  style={{ color: 'var(--dark-text)' }}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-md text-[15px] transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 bg-gradient-to-r from-[var(--industrial-blue)] to-blue-700 hover:from-blue-600 hover:to-blue-800"
                  style={{
                    color: 'white',
                    fontWeight: 500
                  }}
                >
                  Submit Request
                </button>
                <p className="text-[13px] text-[#6B6B6B] mt-4">
                  We will respond within a reasonable timeframe.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Alternative Contact Information */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            <h2
              className="text-[24px] md:text-[32px] tracking-tight mb-6 md:mb-8"
              style={{ fontWeight: 600, color: 'var(--dark-text)' }}
            >
              Direct Contact
            </h2>

            <div className="space-y-4">
              <div>
                <p className="text-[15px] text-[#6B6B6B] mb-1">Email</p>
                <p className="text-[17px]" style={{ color: 'var(--dark-text)' }}>
                  contact@norscope.de
                </p>
              </div>

              <div>
                <p className="text-[15px] text-[#6B6B6B] mb-1">Location</p>
                <p className="text-[17px]" style={{ color: 'var(--dark-text)' }}>
                  Germany
                </p>
                <p className="text-[14px] text-[#6B6B6B] mt-2">
                  Currently operating from Germany
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            <h2
              className="text-[24px] md:text-[32px] tracking-tight mb-6 md:mb-8"
              style={{ fontWeight: 600, color: 'var(--dark-text)' }}
            >
              Who This Is For
            </h2>

            <p className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed mb-6">
              Typical inquiries include:
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--industrial-blue)' }} />
                <span className="text-[15px] md:text-[17px] text-[#4A4A4A]">
                  Requesting a product demo
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--industrial-blue)' }} />
                <span className="text-[15px] md:text-[17px] text-[#4A4A4A]">
                  Discussing pilot deployments
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--industrial-blue)' }} />
                <span className="text-[15px] md:text-[17px] text-[#4A4A4A]">
                  Academic or research collaboration
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--industrial-blue)' }} />
                <span className="text-[15px] md:text-[17px] text-[#4A4A4A]">
                  General questions about the platform
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Note */}
      <section className="py-12 md:py-16 border-t border-[var(--border-light)]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            <p className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed">
              Norscope focuses on practical industrial deployments and meaningful collaboration. Please provide relevant context so we can respond efficiently.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

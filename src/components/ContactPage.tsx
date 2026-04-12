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
  onImpressumClick?: () => void;
  onDatenschutzClick?: () => void;
}

export function ContactPage({
  onNavigateHome,
  currentLanguage,
  onLanguageChange,
  onAboutClick,
  onProductClick,
  onSolutionClick,
  onImpactClick,
  onContactClick,
  onImpressumClick,
  onDatenschutzClick
}: ContactPageProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    role: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: 'a0c7aed0-52ce-462e-92f1-edaf91787f9e',
          subject: `Norscope Contact: ${formData.fullName || 'website visitor'}`,
          ...formData
        })
      });

      const result = await response.json();
      if (response.status === 200) {
        setIsSuccess(true);
        setFormData({ fullName: '', company: '', email: '', role: '', message: '' });
      } else {
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
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
        currentPage="contact"
      />

      {/* Contact Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="h1-page mb-4 md:mb-6">
              Contact & Discuss a Pilot
            </h1>
            <p className="p-body text-[var(--text-main)]">
              Get in touch to discuss your maintenance workflows or request a product demonstration.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 md:py-16">
        <div className="section-container">
          <div className="max-w-2xl">
            <h2 className="h2-section mb-8 md:mb-10">
              Request a Demo
            </h2>

            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center text-green-800">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-[20px] font-semibold mb-3">Message Sent Successfully!</h3>
                <p className="text-[16px] mb-6 inline-block opacity-90">Thank you for reaching out. We have received your request and will respond shortly.</p>
                <div>
                    <button 
                    onClick={() => setIsSuccess(false)}
                    className="btn-outline px-6 py-2.5 bg-white text-green-700 border-green-600 hover:bg-green-50"
                    >
                    Send Another Message
                    </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-[15px]">
                    {errorMessage}
                  </div>
                )}
                
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
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-3.5 rounded-md text-[15px] transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 bg-gradient-to-r from-[var(--industrial-blue)] to-blue-700 hover:from-blue-600 hover:to-blue-800 disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:-translate-y-0"
                  style={{
                    color: 'white',
                    fontWeight: 500
                  }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                       <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Submit Request'}
                </button>
                <p className="text-[13px] text-[#6B6B6B] mt-4">
                  We will respond within a reasonable timeframe.
                </p>
              </div>
            </form>
            )}
          </div>
        </div>
      </section>

      {/* Alternative Contact Information */}
      <section className="py-12 md:py-16 bg-[var(--light-gray)]">
        <div className="section-container">
          <div className="max-w-2xl">
            <h2 className="h2-section mb-6 md:mb-8">
              Direct Contact
            </h2>

            <div className="space-y-4">
              <div>
                <p className="text-[15px] text-[#6B6B6B] mb-1">Email</p>
                <a
                  href="mailto:contact@norscope.com"
                  className="text-[17px] hover:text-[var(--industrial-blue)] transition-colors"
                  style={{ color: 'var(--dark-text)' }}
                >
                  contact@norscope.com
                </a>
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
        <div className="section-container">
          <div className="max-w-2xl">
            <h2 className="h2-section mb-6 md:mb-8">
              Who This Is For
            </h2>

            <p className="p-body text-[var(--text-main)] mb-6">
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
        <div className="section-container">
          <div className="max-w-2xl">
            <p className="p-body text-[var(--text-main)]">
              Norscope focuses on practical industrial deployments and meaningful collaboration. Please provide relevant context so we can respond efficiently.
            </p>
          </div>
        </div>
      </section>

      <Footer
        onAboutClick={onAboutClick}
        onProductClick={onProductClick}
        onSolutionClick={onSolutionClick}
        onImpactClick={onImpactClick}
        onContactClick={onContactClick}
        onImpressumClick={onImpressumClick}
        onDatenschutzClick={onDatenschutzClick}
      />
    </div>
  );
}

import { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, AlertTriangle, ArrowDown, X, Users, TrendingDown, Mic, Hand, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { AnimatedCounter } from './AnimatedCounter';
import manualProblems from '../assets/impact-manual-problems.webp';
import arWorkflowImage from '../assets/impact-ar-workflow.webp';
import successImage from '../assets/impact-success.webp';
import { ImpactModal, ModalSection } from './ImpactModal';
import { impactT, type Lang } from '../i18n/translations';

interface ImpactMethodologyPageProps {
  onNavigateHome: () => void;
  currentLanguage?: Lang;
  onLanguageChange?: (lang: Lang) => void;
  onAboutClick?: () => void;
  onProductClick?: () => void;
  onSolutionClick?: () => void;
  onImpactClick?: () => void;
  onContactClick?: () => void;
  onImpressumClick?: () => void;
  onDatenschutzClick?: () => void;
}

export function ImpactMethodologyPage({ onNavigateHome, currentLanguage = 'EN', onLanguageChange, onAboutClick, onProductClick, onSolutionClick, onImpactClick, onContactClick, onImpressumClick, onDatenschutzClick }: ImpactMethodologyPageProps) {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const lang: Lang = currentLanguage;
  const currentPage = lang === 'EN' ? 'methodology-en' : 'methodology-de';

  const s1Challenges = impactT.section1.cards[lang];
  const s2Caps = impactT.section2.caps[lang];
  const s3Metrics = impactT.section3.metricCards[lang];
  const deployCards = impactT.deploymentFactors.cards[lang];
  const impactCards = impactT.impactCards.cards[lang];
  const pilotItems = impactT.pilotPlan.items[lang];
  const s1Icons = [Clock, AlertTriangle, Users, TrendingDown];

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        currentLanguage={lang}
        onLanguageChange={onLanguageChange}
        onLogoClick={onNavigateHome}
        onAboutClick={onAboutClick}
        onProductClick={onProductClick}
        onSolutionClick={onSolutionClick}
        onImpactClick={onImpactClick}
        onContactClick={onContactClick}
        currentPage={currentPage}
      />
      
      {/* Main Content */}
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-12 md:py-16 border-b border-[var(--border-light)]">
          <div className="section-container">
            {/* Back Button */}
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-2 text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{impactT.back[lang]}</span>
            </button>

            <div className="max-w-4xl">
              <h1 className="h1-page mb-3 md:mb-4">
                {impactT.pageTitle[lang]}
              </h1>
              <p className="text-[18px] md:text-[20px] text-[var(--text-main)] mb-4 leading-relaxed">
                {impactT.pageSubtitle[lang]}
              </p>
              <p className="text-[13px] text-[var(--text-muted)] leading-relaxed max-w-3xl">
                {impactT.disclaimer[lang]}
              </p>
            </div>
          </div>
        </section>

        {/* Section 1 - Baseline (Before AR) */}
        <section className="py-16 md:py-[var(--section-py-md)] bg-[var(--light-gray)]">
          <div className="section-container">
            <div className="text-center mb-12">
              <div 
                className="inline-block px-4 py-2 rounded-full mb-4"
                style={{ backgroundColor: '#FFF4E6', color: '#CC7722', fontSize: '14px', fontWeight: 600 }}
              >
                {impactT.section1.label[lang]}
              </div>
              <h2 className="h2-section mb-4">
                {impactT.section1.heading[lang]}
              </h2>
              <p className="p-body max-w-3xl mx-auto">
                {impactT.section1.subtitle[lang]}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Image */}
              <div className="relative h-[400px] rounded-lg overflow-hidden order-2 lg:order-1">
                <ImageWithFallback
                  src={manualProblems}
                  alt="Technician using paper manuals near industrial machine"
                  className="w-full h-full object-cover"
                />
                {/* Overlay labels */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-md border border-red-200">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-red-600" />
                    <span className="text-[13px] font-semibold text-red-600">{impactT.section1.overlayMTTR[lang]}</span>
                  </div>
                </div>
                <div className="absolute top-20 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-md border border-orange-200">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-600" />
                    <span className="text-[13px] font-semibold text-orange-600">{impactT.section1.overlayErrors[lang]}</span>
                  </div>
                </div>
                <div className="absolute top-36 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-md border border-amber-200">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-amber-600" />
                    <span className="text-[13px] font-semibold text-amber-600">{impactT.section1.overlayExperts[lang]}</span>
                  </div>
                </div>
              </div>

              {/* Challenges */}
              <div className="order-1 lg:order-2">
                <h3 
                  className="text-[24px] mb-6"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  {impactT.section1.challenges[lang]}
                </h3>
                <div className="space-y-4">
                  {s1Challenges.map((item, index) => {
                    const Icon = s1Icons[index];
                    return (
                      <div key={index} className="card-hover bg-white rounded-lg p-5">
                        <div className="flex items-start gap-3">
                          <div 
                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: 'var(--light-gray)' }}
                          >
                            <Icon className="w-5 h-5" style={{ color: 'var(--dark-text)' }} />
                          </div>
                          <div>
                            <div className="text-[15px] font-semibold text-[var(--dark-text)] mb-1">
                              {item.label}
                            </div>
                            <div className="text-[14px] text-[var(--text-muted)]">
                              {item.detail}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Arrow Connector */}
        <div className="flex justify-center py-6 bg-white">
          <div className="flex flex-col items-center">
            <ArrowDown className="w-8 h-8 mb-2" style={{ color: 'var(--industrial-blue)' }} />
            <span className="text-[13px] font-semibold" style={{ color: 'var(--industrial-blue)' }}>
              {impactT.arIntervention[lang]}
            </span>
          </div>
        </div>

        {/* Section 2 - AR Intervention */}
        <section className="py-16 md:py-[var(--section-py-md)] bg-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <div 
                className="inline-block px-4 py-2 rounded-full mb-4"
                style={{ backgroundColor: 'var(--industrial-blue-light)', color: 'var(--industrial-blue)', fontSize: '14px', fontWeight: 600 }}
              >
                {impactT.section2.label[lang]}
              </div>
              <h2 className="h2-section mb-4">
                {impactT.section2.heading[lang]}
              </h2>
              <p className="p-body max-w-3xl mx-auto">
                {impactT.section2.subtitle[lang]}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              {/* AR Features */}
              <div>
                <h3 
                  className="text-[24px] mb-6"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  {impactT.section2.capabilities[lang]}
                </h3>
                <div className="space-y-4 mb-8">
                  {s2Caps.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle 
                        className="w-5 h-5 mt-0.5 flex-shrink-0" 
                        style={{ color: 'var(--industrial-blue)' }}
                      />
                      <div>
                        <div className="text-[15px] font-semibold text-[var(--dark-text)] mb-1">
                          {item.label}
                        </div>
                        <div className="text-[14px] text-[var(--text-muted)]">
                          {item.detail}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interaction Icons */}
                <div className="flex gap-4">
                  <div className="card-hover bg-[var(--light-gray)] rounded-lg px-4 py-3 flex items-center gap-2">
                    <Mic className="w-5 h-5" style={{ color: 'var(--industrial-blue)' }} />
                    <span className="text-[13px] font-semibold text-[var(--dark-text)]">{impactT.section2.voiceControl[lang]}</span>
                  </div>
                  <div className="card-hover bg-[var(--light-gray)] rounded-lg px-4 py-3 flex items-center gap-2">
                    <Hand className="w-5 h-5" style={{ color: 'var(--industrial-blue)' }} />
                    <span className="text-[13px] font-semibold text-[var(--dark-text)]">{impactT.section2.handsFree[lang]}</span>
                  </div>
                </div>
              </div>

              {/* Image with AR visualization */}
              <div className="relative h-[450px] rounded-lg overflow-hidden">
                <ImageWithFallback
                  src={arWorkflowImage}
                  alt="Technician wearing AR smart glasses in industrial setting"
                  className="w-full h-full object-cover"
                />
                
                {/* AR Overlay Examples (subtle, semi-transparent) */}
                <div className="absolute top-16 right-8 bg-blue-500/20 backdrop-blur-sm border-2 border-blue-400/60 px-4 py-2 rounded-md">
                  <div className="text-[14px] font-bold text-blue-900">STEP 3/8</div>
                  <div className="text-[12px] text-blue-800">Remove bolt A3</div>
                </div>
                
                <div className="absolute top-40 right-8">
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-md border border-blue-300">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-[12px] font-semibold text-blue-900">Component A3</span>
                  </div>
                  <svg className="absolute -left-8 top-2" width="32" height="24" viewBox="0 0 32 24">
                    <path d="M0 12 L28 12" stroke="#3B82F6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#3B82F6" />
                      </marker>
                    </defs>
                  </svg>
                </div>

                <div className="absolute bottom-16 right-8 bg-amber-500/20 backdrop-blur-sm border-2 border-amber-400/60 px-4 py-2 rounded-md">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-900" />
                    <span className="text-[12px] font-semibold text-amber-900">Torque: 45 Nm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Arrow Connector */}
        <div className="flex justify-center py-6" style={{ backgroundColor: 'var(--light-gray)' }}>
          <div className="flex flex-col items-center">
            <ArrowDown className="w-8 h-8 mb-2" style={{ color: '#059669' }} />
            <span className="text-[13px] font-semibold text-green-700">
              {impactT.measuredImpact[lang]}
            </span>
          </div>
        </div>

        {/* Section 3 - Measured Impact */}
        <section className="py-16 md:py-[var(--section-py-md)] bg-[var(--light-gray)]">
          <div className="section-container">
            <div className="text-center mb-12">
              <div 
                className="inline-block px-4 py-2 rounded-full mb-4"
                style={{ backgroundColor: '#DCFCE7', color: '#059669', fontSize: '14px', fontWeight: 600 }}
              >
                {impactT.section3.label[lang]}
              </div>
              <h2 className="h2-section mb-4">
                {impactT.section3.heading[lang]}
              </h2>
              <p className="p-body max-w-3xl mx-auto">
                {impactT.section3.subtitle[lang]}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Image */}
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <ImageWithFallback
                  src={successImage}
                  alt="Confident technician after successful AR-assisted maintenance"
                  className="w-full h-full object-cover"
                />
                {/* Success indicators */}
                <div className="absolute top-6 right-6 bg-green-50/95 backdrop-blur-sm px-4 py-2 rounded-md border border-green-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-[13px] font-semibold text-green-700">{impactT.section3.taskComplete[lang]}</span>
                  </div>
                </div>
              </div>

              {/* Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { value: 21, color: '#0066CC', sup: '¹' },
                  { value: 26, color: '#059669', sup: '¹' },
                  { value: 13, color: '#0066CC', sup: '²' },
                  { value: 25, color: '#059669', sup: '²' },
                ].map((item, index) => (
                  <div key={index} className="card-hover bg-white rounded-lg p-6">
                    <div className="text-[36px] mb-2" style={{ fontWeight: 700, color: item.color }}>
                      <AnimatedCounter
                        end={item.value}
                        prefix=""
                        suffix="%"
                        className="inline"
                      />
                      <sup className="text-[18px] ml-0.5" style={{ fontWeight: 600 }}>{item.sup}</sup>
                    </div>
                    <div 
                      className="text-[16px] mb-2"
                      style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                    >
                      {s3Metrics[index].label}
                    </div>
                    <div className="text-[13px] text-[var(--text-muted)] leading-relaxed">
                      {s3Metrics[index].detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sources Block */}
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-white border border-[var(--border-light)] rounded-lg p-6">
                <h4 className="text-[15px] mb-4" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
                  {impactT.section3.sourcesTitle[lang]}
                </h4>
                <div className="space-y-3">
                  <p className="text-[13px] text-[var(--text-main)] leading-relaxed">
                    <span style={{ fontWeight: 600 }}>1.</span> {impactT.section3.source1[lang]}
                  </p>
                  <p className="text-[13px] text-[var(--text-main)] leading-relaxed">
                    <span style={{ fontWeight: 600 }}>2.</span> {impactT.section3.source2[lang]}
                  </p>
                </div>
              </div>

              {/* Disclaimer Note */}
              <div className="bg-white border border-[var(--border-light)] rounded-lg p-5">
                <p className="text-[13px] text-[var(--text-muted)] leading-relaxed text-center">
                  {impactT.section3.disclaimer[lang]}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Model Inputs Panel */}
        <section className="py-16 md:py-[var(--section-py-lg)] bg-[var(--light-gray)]">
          <div className="section-container">
            <h2 className="h2-section mb-3">
              {impactT.deploymentFactors.heading[lang]}
            </h2>
            <p className="p-body mb-12 max-w-3xl">
              {impactT.deploymentFactors.subtitle[lang]}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px]">
              {deployCards.map((card, i) => (
                <div key={i} className="card-hover bg-white rounded-lg p-8">
                  <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--industrial-blue-light)' }}>
                    {/* Simple colored square icon — same as original */}
                    <div className="w-6 h-6 rounded" style={{ backgroundColor: 'var(--industrial-blue)' }}></div>
                  </div>
                  <h3 
                    className="text-[18px] mb-3"
                    style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-[15px] text-[var(--text-main)] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Metric Cards */}
        <section className="py-16 md:py-[var(--section-py-lg)] border-t border-[var(--border-light)]">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactCards.map((card, i) => (
                <div key={i} className="card-hover bg-white rounded-lg p-8">
                  <div 
                    className="text-[22px] leading-tight mb-3"
                    style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                  >
                    {card.title}
                  </div>
                  <p className="text-[15px] text-[var(--text-muted)] mb-6 leading-relaxed">
                    {card.desc}
                  </p>
                  <button
                    onClick={() => setOpenModal(card.modal)}
                    className="px-4 py-2 rounded-md text-[14px] border border-[var(--industrial-blue)] hover:bg-[var(--industrial-blue-light)] transition-colors"
                    style={{ color: 'var(--industrial-blue)', fontWeight: 500 }}
                  >
                    {impactT.impactCards.viewModel[lang]}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Validation Plan Section */}
        <section className="py-16 md:py-[var(--section-py-lg)] bg-[var(--light-gray)]">
          <div className="section-container">
            <h2 className="h2-section mb-8">
              {impactT.pilotPlan.heading[lang]}
            </h2>
            
            <div className="bg-white border border-[var(--border-light)] rounded-lg p-8 max-w-4xl">
              <ul className="space-y-4">
                {pilotItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span 
                      className="inline-block w-6 h-6 rounded-full mr-3 flex-shrink-0 flex items-center justify-center text-white text-[13px]"
                      style={{ backgroundColor: 'var(--industrial-blue)', fontWeight: 600 }}
                    >
                      {index + 1}
                    </span>
                    <span className="text-[15px] text-[var(--text-main)] leading-relaxed pt-0.5">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Repairs Modal */}
      <ImpactModal isOpen={openModal === 'repairs'} onClose={() => setOpenModal(null)}>
        <h3 className="text-[24px] mb-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
          {impactT.modals.repairs.title[lang]}
        </h3>

        <ModalSection title={impactT.modals.repairs.trad[lang]}>
          <ul className="text-[14px] text-[var(--text-main)] space-y-2 ml-5">
            {impactT.modals.repairs.tradItems[lang].map((item, i) => <li key={i} className="list-disc">{item}</li>)}
          </ul>
        </ModalSection>

        <ModalSection title={impactT.modals.repairs.ar[lang]}>
          <ul className="text-[14px] text-[var(--text-main)] space-y-2 ml-5">
            {impactT.modals.repairs.arItems[lang].map((item, i) => <li key={i} className="list-disc">{item}</li>)}
          </ul>
        </ModalSection>

        <ModalSection title={impactT.modals.repairs.published[lang]}>
          <p className="text-[14px] text-[var(--text-main)] leading-relaxed">
            {impactT.modals.repairs.pubText[lang]}
          </p>
        </ModalSection>

        <ModalSection title={impactT.modals.repairs.expected[lang]}>
          <p className="text-[14px] text-[var(--text-main)] leading-relaxed">
            {impactT.modals.repairs.expText[lang]}
          </p>
        </ModalSection>

        <ModalSection title={impactT.modals.repairs.conditions[lang]}>
          <ul className="text-[14px] text-[var(--text-main)] space-y-2 ml-5">
            {impactT.modals.repairs.condItems[lang].map((item, i) => <li key={i} className="list-disc">{item}</li>)}
          </ul>
        </ModalSection>

        <div className="mt-6 pt-4 border-t border-[var(--border-light)]">
          <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">
            {impactT.modals.repairs.footer[lang]}
          </p>
        </div>
      </ImpactModal>

      {/* Training Modal */}
      <ImpactModal isOpen={openModal === 'training'} onClose={() => setOpenModal(null)}>
        <h3 className="text-[24px] mb-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
          {impactT.modals.training.title[lang]}
        </h3>

        <ModalSection title={impactT.modals.training.trad[lang]}>
          <ul className="text-[14px] text-[var(--text-main)] space-y-2 ml-5">
            {impactT.modals.training.tradItems[lang].map((item, i) => <li key={i} className="list-disc">{item}</li>)}
          </ul>
        </ModalSection>

        <ModalSection title={impactT.modals.training.ar[lang]}>
          <ul className="text-[14px] text-[var(--text-main)] space-y-2 ml-5">
            {impactT.modals.training.arItems[lang].map((item, i) => <li key={i} className="list-disc">{item}</li>)}
          </ul>
        </ModalSection>

        <ModalSection title={impactT.modals.training.published[lang]}>
          <p className="text-[14px] text-[var(--text-main)] leading-relaxed">
            {impactT.modals.training.pubText[lang]}
          </p>
        </ModalSection>

        <ModalSection title={impactT.modals.training.expected[lang]}>
          <p className="text-[14px] text-[var(--text-main)] leading-relaxed">
            {impactT.modals.training.expText[lang]}
          </p>
        </ModalSection>

        <ModalSection title={impactT.modals.training.conditions[lang]}>
          <ul className="text-[14px] text-[var(--text-main)] space-y-2 ml-5">
            {impactT.modals.training.condItems[lang].map((item, i) => <li key={i} className="list-disc">{item}</li>)}
          </ul>
        </ModalSection>

        <div className="mt-6 pt-4 border-t border-[var(--border-light)]">
          <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">
            {impactT.modals.training.footer[lang]}
          </p>
        </div>
      </ImpactModal>

      {/* Errors Modal */}
      <ImpactModal isOpen={openModal === 'errors'} onClose={() => setOpenModal(null)}>
        <h3 className="text-[24px] mb-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
          {impactT.modals.errors.title[lang]}
        </h3>

        <ModalSection title={impactT.modals.errors.sources[lang]}>
          <ul className="text-[14px] text-[var(--text-main)] space-y-2 ml-5">
            {impactT.modals.errors.srcItems[lang].map((item, i) => <li key={i} className="list-disc">{item}</li>)}
          </ul>
        </ModalSection>

        <ModalSection title={impactT.modals.errors.controls[lang]}>
          <ul className="text-[14px] text-[var(--text-main)] space-y-2 ml-5">
            {impactT.modals.errors.ctrlItems[lang].map((item, i) => <li key={i} className="list-disc">{item}</li>)}
          </ul>
        </ModalSection>

        <ModalSection title={impactT.modals.errors.published[lang]}>
          <p className="text-[14px] text-[var(--text-main)] leading-relaxed">
            {impactT.modals.errors.pubText[lang]}
          </p>
        </ModalSection>

        <ModalSection title={impactT.modals.errors.expected[lang]}>
          <p className="text-[14px] text-[var(--text-main)] leading-relaxed">
            {impactT.modals.errors.expText[lang]}
          </p>
        </ModalSection>

        <ModalSection title={impactT.modals.errors.conditions[lang]}>
          <ul className="text-[14px] text-[var(--text-main)] space-y-2 ml-5">
            {impactT.modals.errors.condItems[lang].map((item, i) => <li key={i} className="list-disc">{item}</li>)}
          </ul>
        </ModalSection>

        <div className="mt-6 pt-4 border-t border-[var(--border-light)]">
          <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">
            {impactT.modals.errors.footer[lang]}
          </p>
        </div>
      </ImpactModal>

      {/* Compliance Modal */}
      <ImpactModal isOpen={openModal === 'compliance'} onClose={() => setOpenModal(null)}>
        <h3 className="text-[24px] mb-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
          {impactT.modals.compliance.title[lang]}
        </h3>

        <ModalSection title={impactT.modals.compliance.trad[lang]}>
          <ul className="text-[14px] text-[var(--text-main)] space-y-2 ml-5">
            {impactT.modals.compliance.tradItems[lang].map((item, i) => <li key={i} className="list-disc">{item}</li>)}
          </ul>
        </ModalSection>

        <ModalSection title={impactT.modals.compliance.system[lang]}>
          <ul className="text-[14px] text-[var(--text-main)] space-y-2 ml-5">
            {impactT.modals.compliance.sysItems[lang].map((item, i) => <li key={i} className="list-disc">{item}</li>)}
          </ul>
        </ModalSection>

        <ModalSection title={impactT.modals.compliance.result[lang]}>
          <div className="bg-[var(--industrial-blue-light)] border-l-4 rounded-md p-4"
            style={{ borderColor: 'var(--industrial-blue)' }}
          >
            <p className="text-[15px]" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
              {impactT.modals.compliance.resultText[lang]}
            </p>
          </div>
        </ModalSection>

        <ModalSection title={impactT.modals.compliance.clarification[lang]}>
          <p className="text-[14px] text-[var(--text-main)] leading-relaxed">
            {impactT.modals.compliance.clarText[lang]}
          </p>
        </ModalSection>
      </ImpactModal>

      <Footer
        lang={lang}
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
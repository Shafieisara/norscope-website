import { useState } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ImpactModal, ModalSection, ModalTable, ModalFormula } from './ImpactModal';
import { ArrowDown, ArrowLeft, Clock, AlertTriangle, Users, TrendingDown, CheckCircle, TrendingUp, Mic, Hand } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Import local images
import manualProblems from '../assets/impact-manual-problems.png';
import arWorkflowImage from '../assets/impact-ar-workflow.png';
import successImage from '../assets/impact-success.png';

interface ImpactMethodologyPageProps {
  onNavigateHome: () => void;
  currentLanguage?: 'EN' | 'DE';
  onLanguageChange?: (lang: 'EN' | 'DE') => void;
  onAboutClick?: () => void;
  onProductClick?: () => void;
  onSolutionClick?: () => void;
  onImpactClick?: () => void;
  onContactClick?: () => void;
}

export function ImpactMethodologyPage({ onNavigateHome, currentLanguage = 'EN', onLanguageChange, onAboutClick, onProductClick, onSolutionClick, onImpactClick, onContactClick }: ImpactMethodologyPageProps) {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const modelInputs = [
    { label: 'Average maintenance task duration', value: '50 minutes' },
    { label: 'Diagnosis time share', value: '30%' },
    { label: 'Manual information lookup share', value: '20%' },
    { label: 'Execution time share', value: '50%' },
    { label: 'Training duration (traditional)', value: '12 weeks' },
    { label: 'Training duration (AR-assisted)', value: '4 weeks' },
    { label: 'Error rate (manual procedures)', value: '20 per 100 jobs' },
    { label: 'Error rate (AR validated)', value: '1–4 per 100 jobs' },
  ];

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

      {/* Main Content */}
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-12 md:py-16 border-b border-[var(--border-light)]">
          <div className="max-w-[1200px] mx-auto px-8 md:px-12">
            {/* Back Button */}
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-2 text-[15px] text-[var(--dark-text)] hover:text-[var(--industrial-blue)] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <div className="max-w-4xl">
              <h1
                className="text-[40px] md:text-[48px] tracking-tight mb-6"
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                Impact Methodology
              </h1>
              <p className="text-[18px] md:text-[20px] text-[#4A4A4A] mb-4 leading-relaxed">
                A process-based model for quantifying operational improvements in industrial AR-assisted maintenance
              </p>
              <p className="text-[13px] text-[#6B6B6B] leading-relaxed max-w-3xl">
                All values shown are modeled estimates based on standard industrial maintenance processes and published benchmark ranges.
                Actual results depend on machine complexity, operator skill level, and workflow standardization.
              </p>
            </div>
          </div>
        </section>

        {/* Three-Section Vertical Flow */}

        {/* Section 1 - Baseline (Before AR) */}
        <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--light-gray)' }}>
          <div className="max-w-[1200px] mx-auto px-8 md:px-12">
            <div className="text-center mb-12">
              <div
                className="inline-block px-4 py-2 rounded-full mb-4"
                style={{ backgroundColor: '#FFF4E6', color: '#CC7722', fontSize: '14px', fontWeight: 600 }}
              >
                SECTION 1
              </div>
              <h2
                className="text-[32px] md:text-[40px] tracking-tight mb-4"
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                Baseline: Traditional Maintenance Workflow
              </h2>
              <p className="text-[17px] text-[#4A4A4A] max-w-3xl mx-auto">
                Current state of industrial maintenance operations before AR implementation
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Image */}
              <div className="relative h-[650px] rounded-lg overflow-hidden order-2 lg:order-1">
                <ImageWithFallback
                  src={manualProblems}
                  alt="Technician using paper manuals near industrial machine"
                  className="w-full h-full object-cover"
                />
                {/* Overlay labels */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-md border border-red-200">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-red-600" />
                    <span className="text-[13px] font-semibold text-red-600">High MTTR</span>
                  </div>
                </div>
                <div className="absolute top-20 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-md border border-orange-200">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-600" />
                    <span className="text-[13px] font-semibold text-orange-600">Manual Errors</span>
                  </div>
                </div>
                <div className="absolute top-36 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-md border border-amber-200">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-amber-600" />
                    <span className="text-[13px] font-semibold text-amber-600">Expert Dependency</span>
                  </div>
                </div>
              </div>

              {/* Challenges */}
              <div className="order-1 lg:order-2">
                <h3
                  className="text-[24px] mb-6"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  Operational Challenges
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Clock, label: 'Extended repair times', detail: 'Average 50 minutes per task' },
                    { icon: AlertTriangle, label: 'High error rates', detail: '20 errors per 100 jobs' },
                    { icon: Users, label: 'Long training periods', detail: '12 weeks to independence' },
                    { icon: TrendingDown, label: 'Inconsistent execution', detail: 'Procedural variation across teams' }
                  ].map((item, index) => (
                    <div key={index} className="bg-white border border-[var(--border-light)] rounded-lg p-5">
                      <div className="flex items-start gap-3">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: 'var(--light-gray)' }}
                        >
                          <item.icon className="w-5 h-5" style={{ color: 'var(--dark-text)' }} />
                        </div>
                        <div>
                          <div className="text-[15px] font-semibold text-[var(--dark-text)] mb-1">
                            {item.label}
                          </div>
                          <div className="text-[14px] text-[#6B6B6B]">
                            {item.detail}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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
              AR INTERVENTION
            </span>
          </div>
        </div>

        {/* Section 2 - AR Intervention */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-8 md:px-12">
            <div className="text-center mb-12">
              <div
                className="inline-block px-4 py-2 rounded-full mb-4"
                style={{ backgroundColor: 'var(--industrial-blue-light)', color: 'var(--industrial-blue)', fontSize: '14px', fontWeight: 600 }}
              >
                SECTION 2
              </div>
              <h2
                className="text-[32px] md:text-[40px] tracking-tight mb-4"
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                AR-Assisted Maintenance Workflow
              </h2>
              <p className="text-[17px] text-[#4A4A4A] max-w-3xl mx-auto">
                Norscope platform provides contextual, step-by-step guidance through optical AR smart glasses
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              {/* AR Features */}
              <div>
                <h3
                  className="text-[24px] mb-6"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  Core AR Capabilities
                </h3>
                <div className="space-y-4 mb-8">
                  {[
                    { label: 'Step-by-step visual guidance', detail: 'Contextual instructions anchored to machine components' },
                    { label: 'Component identification', detail: 'Visual overlays highlight relevant parts and tools' },
                    { label: 'Validation checkpoints', detail: 'Mandatory confirmation gates at critical steps' },
                    { label: 'Hands-free operation', detail: 'Voice commands and gesture control' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: 'var(--industrial-blue)' }}
                      />
                      <div>
                        <div className="text-[15px] font-semibold text-[var(--dark-text)] mb-1">
                          {item.label}
                        </div>
                        <div className="text-[14px] text-[#6B6B6B]">
                          {item.detail}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interaction Icons */}
                <div className="flex gap-4">
                  <div className="bg-[var(--light-gray)] border border-[var(--border-light)] rounded-lg px-4 py-3 flex items-center gap-2">
                    <Mic className="w-5 h-5" style={{ color: 'var(--industrial-blue)' }} />
                    <span className="text-[13px] font-semibold text-[var(--dark-text)]">Voice Control</span>
                  </div>
                  <div className="bg-[var(--light-gray)] border border-[var(--border-light)] rounded-lg px-4 py-3 flex items-center gap-2">
                    <Hand className="w-5 h-5" style={{ color: 'var(--industrial-blue)' }} />
                    <span className="text-[13px] font-semibold text-[var(--dark-text)]">Hands-Free</span>
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
                <div className="absolute top-16 right-8 bg-white/95 backdrop-blur-sm border-2 border-blue-300 px-4 py-2 rounded-md shadow-md">
                  <div className="text-[14px] font-bold text-blue-900">STEP 4/8</div>
                  <div className="text-[12px] text-blue-800">Tighten Bolt B7</div>
                </div>

                <div className="absolute top-40 right-8">
                  <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-md border border-blue-300 shadow-md">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-[12px] font-semibold text-blue-900">Flange Assembly</span>
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

                <div className="absolute bottom-16 right-8 bg-white/95 backdrop-blur-sm border-2 border-amber-300 px-4 py-2 rounded-md shadow-md">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-900" />
                    <span className="text-[12px] font-semibold text-amber-900">Torque: 120 Nm</span>
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
              MEASURED IMPACT
            </span>
          </div>
        </div>

        {/* Section 3 - Measured Impact */}
        <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--light-gray)' }}>
          <div className="max-w-[1200px] mx-auto px-8 md:px-12">
            <div className="text-center mb-12">
              <div
                className="inline-block px-4 py-2 rounded-full mb-4"
                style={{ backgroundColor: '#DCFCE7', color: '#059669', fontSize: '14px', fontWeight: 600 }}
              >
                SECTION 3
              </div>
              <h2
                className="text-[32px] md:text-[40px] tracking-tight mb-4"
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                Measured Operational Impact
              </h2>
              <p className="text-[17px] text-[#4A4A4A] max-w-3xl mx-auto">
                Quantifiable improvements in maintenance efficiency and quality metrics
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
                    <span className="text-[13px] font-semibold text-green-700">Task Complete</span>
                  </div>
                </div>
              </div>

              {/* Metric Cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { metric: '↓ 40%', label: 'MTTR', detail: 'Mean Time To Repair', color: '#0066CC' },
                  { metric: '↓ 95%', label: 'Errors', detail: 'Procedural errors', color: '#059669' },
                  { metric: '↑ 85%', label: 'First-Time Fix', detail: 'Success rate', color: '#0066CC' },
                  { metric: '3×', label: 'Training Speed', detail: 'Faster onboarding', color: '#059669' }
                ].map((item, index) => (
                  <div key={index} className="bg-white border border-[var(--border-light)] rounded-lg p-6">
                    <div
                      className="text-[36px] mb-2"
                      style={{ fontWeight: 700, color: item.color }}
                    >
                      {item.metric}
                    </div>
                    <div
                      className="text-[16px] mb-1"
                      style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                    >
                      {item.label}
                    </div>
                    <div className="text-[13px] text-[#6B6B6B]">
                      {item.detail}
                    </div>
                    <div className="mt-3 pt-3 border-t border-[var(--border-light)]">
                      <CheckCircle className="w-4 h-4" style={{ color: item.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Model Inputs Panel */}
        <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--light-gray)' }}>
          <div className="max-w-[1440px] mx-auto px-12">
            <h2
              className="text-[32px] tracking-tight mb-8"
              style={{ fontWeight: 600, color: 'var(--dark-text)' }}
            >
              Typical Model Inputs (example configuration)
            </h2>

            <div className="bg-white border border-[var(--border-light)] rounded-lg p-8 max-w-4xl">
              <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                {modelInputs.map((input, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-baseline py-3 border-b border-[var(--border-light)]"
                  >
                    <span className="text-[15px] text-[#4A4A4A]">{input.label}</span>
                    <span
                      className="text-[15px] ml-4"
                      style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                    >
                      {input.value}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-[13px] text-[#6B6B6B] mt-6">
                Input values are adjusted per customer environment during deployment planning.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Metric Cards */}
        <section className="py-16 md:py-24 border-t border-[var(--border-light)]">
          <div className="max-w-[1440px] mx-auto px-12">
            <div className="grid grid-cols-4 gap-6">
              {/* Card 1: Faster repairs */}
              <div className="bg-white border border-[var(--border-light)] rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div
                  className="text-[48px] mb-2"
                  style={{ fontWeight: 600, color: 'var(--industrial-blue)' }}
                >
                  40%
                </div>
                <div
                  className="text-[18px] mb-6"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  Faster repairs
                </div>
                <button
                  onClick={() => setOpenModal('repairs')}
                  className="px-4 py-2 rounded-md text-[14px] border border-[var(--industrial-blue)] hover:bg-[var(--industrial-blue-light)] transition-colors"
                  style={{ color: 'var(--industrial-blue)', fontWeight: 500 }}
                >
                  View calculation
                </button>
              </div>

              {/* Card 2: Quicker training */}
              <div className="bg-white border border-[var(--border-light)] rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div
                  className="text-[48px] mb-2"
                  style={{ fontWeight: 600, color: 'var(--industrial-blue)' }}
                >
                  3×
                </div>
                <div
                  className="text-[18px] mb-6"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  Quicker training
                </div>
                <button
                  onClick={() => setOpenModal('training')}
                  className="px-4 py-2 rounded-md text-[14px] border border-[var(--industrial-blue)] hover:bg-[var(--industrial-blue-light)] transition-colors"
                  style={{ color: 'var(--industrial-blue)', fontWeight: 500 }}
                >
                  View calculation
                </button>
              </div>

              {/* Card 3: Error reduction */}
              <div className="bg-white border border-[var(--border-light)] rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div
                  className="text-[48px] mb-2"
                  style={{ fontWeight: 600, color: 'var(--industrial-blue)' }}
                >
                  95%
                </div>
                <div
                  className="text-[18px] mb-6"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  Error reduction
                </div>
                <button
                  onClick={() => setOpenModal('errors')}
                  className="px-4 py-2 rounded-md text-[14px] border border-[var(--industrial-blue)] hover:bg-[var(--industrial-blue-light)] transition-colors"
                  style={{ color: 'var(--industrial-blue)', fontWeight: 500 }}
                >
                  View calculation
                </button>
              </div>

              {/* Card 4: Compliance tracking */}
              <div className="bg-white border border-[var(--border-light)] rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div
                  className="text-[28px] leading-tight mb-2"
                  style={{ fontWeight: 600, color: 'var(--industrial-blue)' }}
                >
                  System-enforced
                </div>
                <div
                  className="text-[18px] mb-6"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  Compliance tracking
                </div>
                <button
                  onClick={() => setOpenModal('compliance')}
                  className="px-4 py-2 rounded-md text-[14px] border border-[var(--industrial-blue)] hover:bg-[var(--industrial-blue-light)] transition-colors"
                  style={{ color: 'var(--industrial-blue)', fontWeight: 500 }}
                >
                  View calculation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Validation Plan Section */}
        <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--light-gray)' }}>
          <div className="max-w-[1440px] mx-auto px-12">
            <h2
              className="text-[32px] tracking-tight mb-8"
              style={{ fontWeight: 600, color: 'var(--dark-text)' }}
            >
              Pilot Validation Plan
            </h2>

            <div className="bg-white border border-[var(--border-light)] rounded-lg p-8 max-w-4xl">
              <ul className="space-y-4">
                {[
                  'Measure baseline task duration per machine type',
                  'Measure AR-assisted task duration',
                  'Track training time to independent operation',
                  'Record error frequency per job',
                  'Track compliance step completion rate',
                  'Compare deltas after 4, 8, and 12 weeks'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span
                      className="inline-flex w-6 h-6 rounded-full mr-3 flex-shrink-0 items-center justify-center text-white text-[13px]"
                      style={{ backgroundColor: 'var(--industrial-blue)', fontWeight: 600 }}
                    >
                      {index + 1}
                    </span>
                    <span className="text-[15px] text-[#4A4A4A] leading-relaxed pt-0.5">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Modals */}
      {/* Repairs Modal */}
      <ImpactModal isOpen={openModal === 'repairs'} onClose={() => setOpenModal(null)}>
        <h3
          className="text-[24px] mb-6"
          style={{ fontWeight: 600, color: 'var(--dark-text)' }}
        >
          Repair Time Reduction – Calculation Model
        </h3>

        <ModalSection title="Baseline process model:">
          <ModalTable rows={[
            { label: 'Fault diagnosis', value: '15 min' },
            { label: 'Manual / document lookup', value: '10 min' },
            { label: 'Repair execution', value: '25 min' },
          ]} />
          <div className="mt-3 text-[15px]" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
            Total baseline: 50 minutes
          </div>
        </ModalSection>

        <ModalSection title="AR-assisted process model:">
          <ModalTable rows={[
            { label: 'Visual diagnosis support', value: '8 min' },
            { label: 'Contextual AR instructions', value: '2 min' },
            { label: 'Guided execution', value: '20 min' },
          ]} />
          <div className="mt-3 text-[15px]" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
            Total with AR: 30 minutes
          </div>
        </ModalSection>

        <ModalSection title="Formula:">
          <ModalFormula
            formula="(50 − 30) / 50 = 0.40"
            result="40% faster task completion"
          />
        </ModalSection>

        <ModalSection title="Assumptions:">
          <ul className="text-[14px] text-[#4A4A4A] space-y-2 ml-5">
            <li className="list-disc">Digital step-by-step guidance removes most document lookup</li>
            <li className="list-disc">Visual overlays reduce diagnostic iteration</li>
            <li className="list-disc">Rework probability decreases</li>
            <li className="list-disc">Technician follows standardized workflow</li>
          </ul>
        </ModalSection>

        <ModalSection title="Conservative pilot target:">
          <p className="text-[14px] text-[#4A4A4A] leading-relaxed">
            25–35% reduction expected during first deployments<br />
            40% achievable for standardized repeatable tasks
          </p>
        </ModalSection>
      </ImpactModal>

      {/* Training Modal */}
      <ImpactModal isOpen={openModal === 'training'} onClose={() => setOpenModal(null)}>
        <h3
          className="text-[24px] mb-6"
          style={{ fontWeight: 600, color: 'var(--dark-text)' }}
        >
          Technician Training Acceleration – Calculation Model
        </h3>

        <ModalSection title="Baseline training structure:">
          <ModalTable rows={[
            { label: 'Classroom / documentation', value: '2 weeks' },
            { label: 'Shadowing experienced technician', value: '6 weeks' },
            { label: 'Supervised execution', value: '4 weeks' },
          ]} />
          <div className="mt-3 text-[15px]" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
            Total: 12 weeks
          </div>
        </ModalSection>

        <ModalSection title="AR-assisted training structure:">
          <ModalTable rows={[
            { label: 'Digital procedure walkthrough', value: '1 week' },
            { label: 'Guided execution with AR', value: '2 weeks' },
            { label: 'Supervised verification', value: '1 week' },
          ]} />
          <div className="mt-3 text-[15px]" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
            Total: 4 weeks
          </div>
        </ModalSection>

        <ModalSection title="Formula:">
          <ModalFormula
            formula="12 / 4 = 3"
            result="3× faster onboarding"
          />
        </ModalSection>

        <ModalSection title="Assumptions:">
          <ul className="text-[14px] text-[#4A4A4A] space-y-2 ml-5">
            <li className="list-disc">Procedures are digitized</li>
            <li className="list-disc">Workflows are repeatable</li>
            <li className="list-disc">AR system enforces correct sequencing</li>
            <li className="list-disc">Supervisor involvement decreases</li>
          </ul>
        </ModalSection>

        <ModalSection title="Conservative pilot target:">
          <p className="text-[14px] text-[#4A4A4A]">
            2× to 2.5× improvement in first deployment phase
          </p>
        </ModalSection>
      </ImpactModal>

      {/* Errors Modal */}
      <ImpactModal isOpen={openModal === 'errors'} onClose={() => setOpenModal(null)}>
        <h3
          className="text-[24px] mb-6"
          style={{ fontWeight: 600, color: 'var(--dark-text)' }}
        >
          Human Error Reduction – Calculation Model
        </h3>

        <ModalSection title="Baseline:">
          <p className="text-[15px]" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
            20 errors per 100 jobs
          </p>
        </ModalSection>

        <ModalSection title="AR-assisted workflow:">
          <ul className="text-[14px] text-[#4A4A4A] space-y-2 ml-5">
            <li className="list-disc">Mandatory step confirmation</li>
            <li className="list-disc">Visual part identification</li>
            <li className="list-disc">Tool validation</li>
            <li className="list-disc">Safety gate enforcement</li>
          </ul>
          <div className="mt-4 text-[15px]" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
            Expected: 1–4 errors per 100 jobs
          </div>
        </ModalSection>

        <ModalSection title="Formula (best case):">
          <ModalFormula
            formula="(20 − 1) / 20 = 95%"
            result="Up to 95% reduction"
          />
        </ModalSection>

        <ModalSection title="Realistic deployment expectation:">
          <div className="bg-[var(--light-gray)] rounded-md p-4">
            <ModalTable rows={[
              { label: 'Pilot', value: '60–70%' },
              { label: 'Mature deployment', value: '75–85%' },
              { label: 'Highly standardized processes', value: 'up to 95%' },
            ]} />
          </div>
        </ModalSection>

        <ModalSection title="Assumptions:">
          <ul className="text-[14px] text-[#4A4A4A] space-y-2 ml-5">
            <li className="list-disc">Procedures fully digitized</li>
            <li className="list-disc">Operators follow system prompts</li>
            <li className="list-disc">No hardware failures</li>
            <li className="list-disc">Controlled environment</li>
          </ul>
        </ModalSection>
      </ImpactModal>

      {/* Compliance Modal */}
      <ImpactModal isOpen={openModal === 'compliance'} onClose={() => setOpenModal(null)}>
        <h3
          className="text-[24px] mb-6"
          style={{ fontWeight: 600, color: 'var(--dark-text)' }}
        >
          Compliance Enforcement – System Model
        </h3>

        <ModalSection title="Traditional compliance:">
          <ul className="text-[14px] text-[#4A4A4A] space-y-2 ml-5">
            <li className="list-disc">Paper checklists</li>
            <li className="list-disc">Manual signatures</li>
            <li className="list-disc">Non-verifiable execution</li>
            <li className="list-disc">Missing logs</li>
          </ul>
        </ModalSection>

        <ModalSection title="Norscope system:">
          <ul className="text-[14px] text-[#4A4A4A] space-y-2 ml-5">
            <li className="list-disc">Mandatory workflow steps</li>
            <li className="list-disc">Digital safety confirmations</li>
            <li className="list-disc">Timestamped logs</li>
            <li className="list-disc">Operator identification</li>
            <li className="list-disc">Audit trail storage</li>
          </ul>
        </ModalSection>

        <ModalSection title="Result:">
          <div className="bg-[var(--industrial-blue-light)] border-l-4 rounded-md p-4"
            style={{ borderColor: 'var(--industrial-blue)' }}
          >
            <p className="text-[15px]" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
              Compliance checks are enforced at every workflow step.
            </p>
          </div>
        </ModalSection>

        <ModalSection title="Clarification:">
          <p className="text-[14px] text-[#4A4A4A] leading-relaxed">
            This refers to system-enforced compliance, not human perfection.
          </p>
        </ModalSection>
      </ImpactModal>

      <Footer />
    </div>
  );
}
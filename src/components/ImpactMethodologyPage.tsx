import { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, AlertTriangle, ArrowDown, X, Users, TrendingDown, Mic, Hand, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { AnimatedCounter } from './AnimatedCounter';
import manualProblems from '../assets/impact-manual-problems.webp';
import arWorkflowImage from '../assets/impact-ar-workflow.webp';
import successImage from '../assets/impact-success.webp';
import { ImpactModal, ModalSection, ModalTable, ModalFormula } from './ImpactModal';

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
  const currentPage = currentLanguage === 'EN' ? 'methodology-en' : 'methodology-de';

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
        currentPage={currentPage}
      />
      
      {/* Main Content */}
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-12 md:py-16 border-b border-[var(--border-light)]">
          <div className="max-w-[var(--container-max)] mx-auto px-8 md:px-12">
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
                className="text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] tracking-tight mb-3 md:mb-4" 
                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
              >
                Approach
              </h1>
              <p className="text-[18px] md:text-[20px] text-[var(--text-main)] mb-4 leading-relaxed">
                A structured framework for evaluating operational improvement in industrial maintenance
              </p>
              <p className="text-[13px] text-[var(--text-muted)] leading-relaxed max-w-3xl">
                All values shown are modeled estimates based on standard industrial maintenance processes and published benchmark ranges. 
                Actual results depend on machine complexity, operator skill level, and workflow standardization.
              </p>
            </div>
          </div>
        </section>

        {/* Three-Section Vertical Flow */}
        
        {/* Section 1 - Baseline (Before AR) */}
        <section className="py-16 md:py-[var(--section-py-md)]" style={{ backgroundColor: 'var(--light-gray)' }}>
          <div className="max-w-[var(--container-max)] mx-auto px-8 md:px-12">
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
              <p className="text-[17px] text-[var(--text-main)] max-w-3xl mx-auto">
                Current state of industrial maintenance operations before AR implementation
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
                    { icon: Clock, label: 'Extended repair times', detail: 'Manual lookup, interpretation, and troubleshooting slow task completion.' },
                    { icon: AlertTriangle, label: 'Higher error risk', detail: 'Critical steps may be skipped, repeated, or performed inconsistently.' },
                    { icon: Users, label: 'Long onboarding cycles', detail: 'New technicians require more time to reach independent execution.' },
                    { icon: TrendingDown, label: 'Inconsistent execution', detail: 'Procedures vary across operators, teams, and shifts.' }
                  ].map((item, index) => (
                    <div key={index} className="card-hover bg-white rounded-lg p-5">
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
                          <div className="text-[14px] text-[var(--text-muted)]">
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
        <section className="py-16 md:py-[var(--section-py-md)] bg-white">
          <div className="max-w-[var(--container-max)] mx-auto px-8 md:px-12">
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
              <p className="text-[17px] text-[var(--text-main)] max-w-3xl mx-auto">
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
                    <span className="text-[13px] font-semibold text-[var(--dark-text)]">Voice Control</span>
                  </div>
                  <div className="card-hover bg-[var(--light-gray)] rounded-lg px-4 py-3 flex items-center gap-2">
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
              MEASURED IMPACT
            </span>
          </div>
        </div>

        {/* Section 3 - Measured Impact */}
        <section className="py-16 md:py-[var(--section-py-md)]" style={{ backgroundColor: 'var(--light-gray)' }}>
          <div className="max-w-[var(--container-max)] mx-auto px-8 md:px-12">
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
                Illustrative Impact Benchmarks
              </h2>
              <p className="text-[17px] text-[var(--text-main)] max-w-3xl mx-auto">
                Published examples from industrial AR task-support studies
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
                  { value: 21, prefix: '', suffix: '%', superscript: '¹', label: 'Faster task completion', detail: 'Peer-reviewed industrial repair-task study', color: '#0066CC' },
                  { value: 26, prefix: '', suffix: '%', superscript: '¹', label: 'Lower perceived workload', detail: 'Peer-reviewed industrial repair-task study', color: '#059669' },
                  { value: 13, prefix: '', suffix: '%', superscript: '²', label: 'Less maintenance time', detail: 'Industrial maintenance AR case study', color: '#0066CC' },
                  { value: 25, prefix: '', suffix: '%', superscript: '²', label: 'Fewer errors', detail: 'Industrial maintenance AR case study', color: '#059669' }
                ].map((item, index) => (
                  <div key={index} className="card-hover bg-white rounded-lg p-6">
                    <div className="text-[36px] mb-2" style={{ fontWeight: 700, color: item.color }}>
                      <AnimatedCounter
                        end={item.value}
                        prefix={item.prefix}
                        suffix={item.suffix}
                        className="inline"
                      />
                      <sup className="text-[18px] ml-0.5" style={{ fontWeight: 600 }}>{item.superscript}</sup>
                    </div>
                    <div 
                      className="text-[16px] mb-2"
                      style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                    >
                      {item.label}
                    </div>
                    <div className="text-[13px] text-[var(--text-muted)] leading-relaxed">
                      {item.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sources Block */}
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-white border border-[var(--border-light)] rounded-lg p-6">
                <h4 className="text-[15px] mb-4" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
                  Sources
                </h4>
                <div className="space-y-3">
                  <p className="text-[13px] text-[var(--text-main)] leading-relaxed">
                    <span style={{ fontWeight: 600 }}>1.</span> Eversberg, L. et al. (2023), <em>Evaluating digital work instructions with augmented reality versus paper-based documents for manual object-specific repair tasks in a case study with experienced workers.</em> The International Journal of Advanced Manufacturing Technology. Reported 21% faster task completion and 26% lower perceived workload.
                  </p>
                  <p className="text-[13px] text-[var(--text-main)] leading-relaxed">
                    <span style={{ fontWeight: 600 }}>2.</span> <em>Augmented Industrial Maintenance (AIM): A Case Study for Evaluating and Comparing with Paper and Video Media Supports.</em> Reported 13% less maintenance time using AR glasses and 25% fewer errors than paper-based maintenance in the cited case-study summary.
                  </p>
                </div>
              </div>

              {/* Disclaimer Note */}
              <div className="bg-white border border-[var(--border-light)] rounded-lg p-5">
                <p className="text-[13px] text-[var(--text-muted)] leading-relaxed text-center">
                  These figures are published reference examples from industrial AR studies and do not represent validated Norscope pilot results. Outcomes depend on workflow design, equipment, operator experience, and deployment conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Model Inputs Panel */}
        <section className="py-16 md:py-[var(--section-py-lg)]" style={{ backgroundColor: 'var(--light-gray)' }}>
          <div className="max-w-[var(--container-max)] mx-auto px-12">
            <h2 
              className="text-[32px] tracking-tight mb-3"
              style={{ fontWeight: 600, color: 'var(--dark-text)' }}
            >
              What Shapes Deployment Impact
            </h2>
            <p className="text-[17px] text-[var(--text-main)] mb-12 max-w-3xl">
              Operational outcomes depend on workflow structure, task complexity, operator experience, and deployment conditions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px]">
              {/* Card 1: Task Complexity */}
              <div className="card-hover bg-white rounded-lg p-8">
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--industrial-blue-light)' }}>
                  <div className="w-6 h-6 rounded" style={{ backgroundColor: 'var(--industrial-blue)' }}></div>
                </div>
                <h3 
                  className="text-[18px] mb-3"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  Task Complexity
                </h3>
                <p className="text-[15px] text-[var(--text-main)] leading-relaxed">
                  Complex, multi-step procedures create more room for guided support and error reduction.
                </p>
              </div>

              {/* Card 2: Workflow Standardization */}
              <div className="card-hover bg-white rounded-lg p-8">
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--industrial-blue-light)' }}>
                  <div className="grid grid-cols-2 gap-1 w-6 h-6">
                    <div className="rounded-sm" style={{ backgroundColor: 'var(--industrial-blue)' }}></div>
                    <div className="rounded-sm" style={{ backgroundColor: 'var(--industrial-blue)' }}></div>
                    <div className="rounded-sm" style={{ backgroundColor: 'var(--industrial-blue)' }}></div>
                    <div className="rounded-sm" style={{ backgroundColor: 'var(--industrial-blue)' }}></div>
                  </div>
                </div>
                <h3 
                  className="text-[18px] mb-3"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  Workflow Standardization
                </h3>
                <p className="text-[15px] text-[var(--text-main)] leading-relaxed">
                  Repeatable and well-defined processes are easier to digitize and scale across teams.
                </p>
              </div>

              {/* Card 3: Operator Experience */}
              <div className="card-hover bg-white rounded-lg p-8">
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--industrial-blue-light)' }}>
                  <Users className="w-6 h-6" style={{ color: 'var(--industrial-blue)' }} />
                </div>
                <h3 
                  className="text-[18px] mb-3"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  Operator Experience
                </h3>
                <p className="text-[15px] text-[var(--text-main)] leading-relaxed">
                  Structured guidance is especially valuable where onboarding time or skill variation is high.
                </p>
              </div>

              {/* Card 4: Information Accessibility */}
              <div className="card-hover bg-white rounded-lg p-8">
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--industrial-blue-light)' }}>
                  <div className="w-6 h-6 flex flex-col gap-1">
                    <div className="h-1 rounded-full" style={{ backgroundColor: 'var(--industrial-blue)' }}></div>
                    <div className="h-1 rounded-full w-4/5" style={{ backgroundColor: 'var(--industrial-blue)' }}></div>
                    <div className="h-1 rounded-full" style={{ backgroundColor: 'var(--industrial-blue)' }}></div>
                    <div className="h-1 rounded-full w-3/5" style={{ backgroundColor: 'var(--industrial-blue)' }}></div>
                  </div>
                </div>
                <h3 
                  className="text-[18px] mb-3"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  Information Accessibility
                </h3>
                <p className="text-[15px] text-[var(--text-main)] leading-relaxed">
                  The more a task depends on manuals, memory, or external lookup, the more contextual AR support can help.
                </p>
              </div>

              {/* Card 5: Deployment Environment */}
              <div className="card-hover bg-white rounded-lg p-8">
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--industrial-blue-light)' }}>
                  <div className="relative w-6 h-6">
                    <div className="absolute inset-0 border-2 rounded" style={{ borderColor: 'var(--industrial-blue)' }}></div>
                    <div className="absolute top-1/2 left-0 w-full h-0.5" style={{ backgroundColor: 'var(--industrial-blue)', transform: 'translateY(-50%)' }}></div>
                  </div>
                </div>
                <h3 
                  className="text-[18px] mb-3"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  Deployment Environment
                </h3>
                <p className="text-[15px] text-[var(--text-main)] leading-relaxed">
                  Connectivity, noise, safety constraints, and physical access influence system design and usability.
                </p>
              </div>

              {/* Card 6: Equipment Consistency */}
              <div className="card-hover bg-white rounded-lg p-8">
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--industrial-blue-light)' }}>
                  <div className="flex gap-1 items-end w-6 h-6">
                    <div className="w-1.5 h-4 rounded-sm" style={{ backgroundColor: 'var(--industrial-blue)' }}></div>
                    <div className="w-1.5 h-5 rounded-sm" style={{ backgroundColor: 'var(--industrial-blue)' }}></div>
                    <div className="w-1.5 h-6 rounded-sm" style={{ backgroundColor: 'var(--industrial-blue)' }}></div>
                  </div>
                </div>
                <h3 
                  className="text-[18px] mb-3"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  Equipment Consistency
                </h3>
                <p className="text-[15px] text-[var(--text-main)] leading-relaxed">
                  Standardized equipment and repeatable layouts are easier to support than highly variable machine setups.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metric Cards */}
        <section className="py-16 md:py-[var(--section-py-lg)] border-t border-[var(--border-light)]">
          <div className="max-w-[var(--container-max)] mx-auto px-12">
            <div className="grid grid-cols-4 gap-6">
              {/* Card 1: Faster Repair Workflows */}
              <div className="card-hover bg-white rounded-lg p-8">
                <div 
                  className="text-[22px] leading-tight mb-3"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  Faster Repair Workflows
                </div>
                <p className="text-[15px] text-[var(--text-muted)] mb-6 leading-relaxed">
                  Reduced document lookup and more guided execution
                </p>
                <button
                  onClick={() => setOpenModal('repairs')}
                  className="px-4 py-2 rounded-md text-[14px] border border-[var(--industrial-blue)] hover:bg-[var(--industrial-blue-light)] transition-colors"
                  style={{ color: 'var(--industrial-blue)', fontWeight: 500 }}
                >
                  View model
                </button>
              </div>

              {/* Card 2: Accelerated Technician Training */}
              <div className="card-hover bg-white rounded-lg p-8">
                <div 
                  className="text-[22px] leading-tight mb-3"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  Accelerated Technician Training
                </div>
                <p className="text-[15px] text-[var(--text-muted)] mb-6 leading-relaxed">
                  Structured guidance for faster task learning
                </p>
                <button
                  onClick={() => setOpenModal('training')}
                  className="px-4 py-2 rounded-md text-[14px] border border-[var(--industrial-blue)] hover:bg-[var(--industrial-blue-light)] transition-colors"
                  style={{ color: 'var(--industrial-blue)', fontWeight: 500 }}
                >
                  View model
                </button>
              </div>

              {/* Card 3: Lower Execution Error Risk */}
              <div className="card-hover bg-white rounded-lg p-8">
                <div 
                  className="text-[22px] leading-tight mb-3"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  Lower Execution Error Risk
                </div>
                <p className="text-[15px] text-[var(--text-muted)] mb-6 leading-relaxed">
                  Step-based workflows reduce procedural ambiguity
                </p>
                <button
                  onClick={() => setOpenModal('errors')}
                  className="px-4 py-2 rounded-md text-[14px] border border-[var(--industrial-blue)] hover:bg-[var(--industrial-blue-light)] transition-colors"
                  style={{ color: 'var(--industrial-blue)', fontWeight: 500 }}
                >
                  View model
                </button>
              </div>

              {/* Card 4: System-Enforced Compliance */}
              <div className="card-hover bg-white rounded-lg p-8">
                <div 
                  className="text-[22px] leading-tight mb-3"
                  style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                >
                  System-Enforced Compliance
                </div>
                <p className="text-[15px] text-[var(--text-muted)] mb-6 leading-relaxed">
                  Traceable workflow steps and digital confirmations
                </p>
                <button
                  onClick={() => setOpenModal('compliance')}
                  className="px-4 py-2 rounded-md text-[14px] border border-[var(--industrial-blue)] hover:bg-[var(--industrial-blue-light)] transition-colors"
                  style={{ color: 'var(--industrial-blue)', fontWeight: 500 }}
                >
                  View model
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Validation Plan Section */}
        <section className="py-16 md:py-[var(--section-py-lg)]" style={{ backgroundColor: 'var(--light-gray)' }}>
          <div className="max-w-[var(--container-max)] mx-auto px-12">
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

      {/* Modals */}
      {/* Repairs Modal */}
      <ImpactModal isOpen={openModal === 'repairs'} onClose={() => setOpenModal(null)}>
        <h3 
          className="text-[24px] mb-6"
          style={{ fontWeight: 600, color: 'var(--dark-text)' }}
        >
          Repair Time Reduction – Illustrative Model
        </h3>

        <ModalSection title="Traditional workflow">
          <ul className="text-[14px] text-[var(--text-main)] space-y-2 ml-5">
            <li className="list-disc">Fault diagnosis</li>
            <li className="list-disc">Manual document lookup</li>
            <li className="list-disc">Interpretation of instructions</li>
            <li className="list-disc">Repair execution</li>
            <li className="list-disc">Rework or repeated checks</li>
          </ul>
        </ModalSection>

        <ModalSection title="AR-assisted workflow">
          <ul className="text-[14px] text-[var(--text-main)] space-y-2 ml-5">
            <li className="list-disc">Visual diagnostic support</li>
            <li className="list-disc">Contextual instructions at point of use</li>
            <li className="list-disc">Guided execution</li>
            <li className="list-disc">Reduced need for manual lookup</li>
            <li className="list-disc">Fewer repeated checks</li>
          </ul>
        </ModalSection>

        <ModalSection title="Published indication">
          <p className="text-[14px] text-[var(--text-main)] leading-relaxed">
            Peer-reviewed industrial case studies report faster task completion with AR-assisted digital work instructions.
          </p>
        </ModalSection>

        <ModalSection title="Expected impact">
          <p className="text-[14px] text-[var(--text-main)] leading-relaxed">
            Reduced task time through faster diagnosis, less document handling, and more consistent execution.
          </p>
        </ModalSection>

        <ModalSection title="Conditions">
          <ul className="text-[14px] text-[var(--text-main)] space-y-2 ml-5">
            <li className="list-disc">Procedures are digitized</li>
            <li className="list-disc">Workflow steps are repeatable</li>
            <li className="list-disc">Instructions are clear and machine-specific</li>
            <li className="list-disc">Operators follow the guided process</li>
          </ul>
        </ModalSection>

        <div className="mt-6 pt-4 border-t border-[var(--border-light)]">
          <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">
            This model illustrates directional operational impact based on workflow design logic and published industrial AR findings. Actual results depend on equipment type, workflow quality, operator experience, and deployment conditions.
          </p>
        </div>
      </ImpactModal>

      {/* Training Modal */}
      <ImpactModal isOpen={openModal === 'training'} onClose={() => setOpenModal(null)}>
        <h3 
          className="text-[24px] mb-6"
          style={{ fontWeight: 600, color: 'var(--dark-text)' }}
        >
          Technician Training Acceleration – Capability Logic
        </h3>

        <ModalSection title="Traditional training">
          <ul className="text-[14px] text-[var(--text-main)] space-y-2 ml-5">
            <li className="list-disc">Documentation study</li>
            <li className="list-disc">Shadowing experienced staff</li>
            <li className="list-disc">Supervised execution</li>
            <li className="list-disc">Gradual independence</li>
          </ul>
        </ModalSection>

        <ModalSection title="AR-supported training">
          <ul className="text-[14px] text-[var(--text-main)] space-y-2 ml-5">
            <li className="list-disc">Guided walkthroughs</li>
            <li className="list-disc">Contextual visual instructions</li>
            <li className="list-disc">Step confirmation during execution</li>
            <li className="list-disc">Reduced need for manual lookup</li>
            <li className="list-disc">Reduced dependency on constant supervision</li>
          </ul>
        </ModalSection>

        <ModalSection title="Published indication">
          <p className="text-[14px] text-[var(--text-main)] leading-relaxed">
            Industrial AR training research indicates improved support for task learning and faster progression in structured workflows.
          </p>
        </ModalSection>

        <ModalSection title="Expected impact">
          <p className="text-[14px] text-[var(--text-main)] leading-relaxed">
            Faster progression toward independent task execution in structured maintenance environments.
          </p>
        </ModalSection>

        <ModalSection title="Conditions">
          <ul className="text-[14px] text-[var(--text-main)] space-y-2 ml-5">
            <li className="list-disc">Procedures are standardized</li>
            <li className="list-disc">Guidance content is well prepared</li>
            <li className="list-disc">Repetitive task patterns exist</li>
            <li className="list-disc">Supervisors use the system consistently</li>
          </ul>
        </ModalSection>

        <div className="mt-6 pt-4 border-t border-[var(--border-light)]">
          <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">
            This model illustrates directional operational impact based on workflow design logic and published industrial AR findings. Actual results depend on equipment type, workflow quality, operator experience, and deployment conditions.
          </p>
        </div>
      </ImpactModal>

      {/* Errors Modal */}
      <ImpactModal isOpen={openModal === 'errors'} onClose={() => setOpenModal(null)}>
        <h3 
          className="text-[24px] mb-6"
          style={{ fontWeight: 600, color: 'var(--dark-text)' }}
        >
          Human Error Reduction – Control Logic
        </h3>

        <ModalSection title="Common sources of error">
          <ul className="text-[14px] text-[var(--text-main)] space-y-2 ml-5">
            <li className="list-disc">Missed process steps</li>
            <li className="list-disc">Incorrect part identification</li>
            <li className="list-disc">Wrong tool or sequence selection</li>
            <li className="list-disc">Inconsistent execution across operators</li>
          </ul>
        </ModalSection>

        <ModalSection title="Norscope control mechanisms">
          <ul className="text-[14px] text-[var(--text-main)] space-y-2 ml-5">
            <li className="list-disc">Step-by-step workflow guidance</li>
            <li className="list-disc">Visual part and task confirmation</li>
            <li className="list-disc">Mandatory step acknowledgment</li>
            <li className="list-disc">Embedded sequence control</li>
          </ul>
        </ModalSection>

        <ModalSection title="Published indication">
          <p className="text-[14px] text-[var(--text-main)] leading-relaxed">
            Industrial AR studies report reduced execution errors in guided task environments, especially for structured and repeatable procedures.
          </p>
        </ModalSection>

        <ModalSection title="Expected impact">
          <p className="text-[14px] text-[var(--text-main)] leading-relaxed">
            Lower execution error risk through guided workflows, clearer task context, and reduced procedural ambiguity.
          </p>
        </ModalSection>

        <ModalSection title="Conditions">
          <ul className="text-[14px] text-[var(--text-main)] space-y-2 ml-5">
            <li className="list-disc">Procedures are digitized correctly</li>
            <li className="list-disc">Operators follow prompts</li>
            <li className="list-disc">Hardware and recognition systems function reliably</li>
            <li className="list-disc">Workflow design matches the real task</li>
          </ul>
        </ModalSection>

        <div className="mt-6 pt-4 border-t border-[var(--border-light)]">
          <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">
            This model illustrates directional operational impact based on workflow design logic and published industrial AR findings. Actual results depend on equipment type, workflow quality, operator experience, and deployment conditions.
          </p>
        </div>
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
          <ul className="text-[14px] text-[var(--text-main)] space-y-2 ml-5">
            <li className="list-disc">Paper checklists</li>
            <li className="list-disc">Manual signatures</li>
            <li className="list-disc">Non-verifiable execution</li>
            <li className="list-disc">Missing logs</li>
          </ul>
        </ModalSection>

        <ModalSection title="Norscope system:">
          <ul className="text-[14px] text-[var(--text-main)] space-y-2 ml-5">
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
          <p className="text-[14px] text-[var(--text-main)] leading-relaxed">
            This refers to system-enforced compliance, not human perfection.
          </p>
        </ModalSection>
      </ImpactModal>

      <Footer />
    </div>
  );
}
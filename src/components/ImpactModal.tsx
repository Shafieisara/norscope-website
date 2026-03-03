import { X } from 'lucide-react';

interface ImpactModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function ImpactModal({ isOpen, onClose, children }: ImpactModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Modal content */}
      <div 
        className="relative bg-white rounded-lg max-w-[600px] w-full mx-4 max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-100 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" style={{ color: 'var(--dark-text)' }} />
        </button>
        
        {/* Modal body */}
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
}

interface ModalSectionProps {
  title: string;
  children: React.ReactNode;
}

export function ModalSection({ title, children }: ModalSectionProps) {
  return (
    <div className="mb-6">
      <h4 
        className="text-[15px] mb-3"
        style={{ fontWeight: 600, color: 'var(--dark-text)' }}
      >
        {title}
      </h4>
      {children}
    </div>
  );
}

interface ModalTableProps {
  rows: Array<{ label: string; value: string }>;
}

export function ModalTable({ rows }: ModalTableProps) {
  return (
    <div className="space-y-2">
      {rows.map((row, index) => (
        <div 
          key={index}
          className="flex justify-between items-center py-2 border-b border-[var(--border-light)]"
        >
          <span className="text-[14px] text-[#6B6B6B]">{row.label}</span>
          <span className="text-[14px]" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
            {row.value}
          </span>
        </div>
      ))}
    </div>
  );
}

interface ModalFormulaProps {
  formula: string;
  result: string;
}

export function ModalFormula({ formula, result }: ModalFormulaProps) {
  return (
    <div className="bg-[var(--light-gray)] rounded-md p-4 my-4">
      <div className="text-[14px] mb-2" style={{ color: 'var(--dark-text)', fontFamily: 'monospace' }}>
        {formula}
      </div>
      <div 
        className="text-[16px]"
        style={{ fontWeight: 600, color: 'var(--industrial-blue)' }}
      >
        {result}
      </div>
    </div>
  );
}

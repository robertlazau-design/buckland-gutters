import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { QuoteEstimatorForm } from './QuoteEstimatorForm';

interface QuoteModalProps {
  isOpen: boolean;
  presetScope?: string;
  projectReference?: string;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  presetScope,
  projectReference,
  onClose,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-heading"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white border border-neutral-200 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-5 sm:px-7 py-4 border-b border-neutral-200 bg-[#F4F5F7]">
          <div>
            <p className="text-xs font-mono text-neutral-500">Buckland Sheet Metal · Site Measure Intake</p>
            <h2 id="quote-modal-heading" className="font-display text-lg sm:text-xl font-bold text-[#0A0A0A]">
              Request a Residential Quote
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close quote request modal"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-neutral-300 bg-white text-[#0A0A0A] hover:bg-neutral-100 cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 sm:p-7 max-h-[82vh] overflow-y-auto">
          <QuoteEstimatorForm
            initialScope={presetScope}
            projectReference={projectReference}
            compact={true}
            onSuccessClose={onClose}
          />
        </div>
      </div>
    </div>
  );
};

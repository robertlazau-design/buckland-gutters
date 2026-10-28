import React, { useEffect, useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';

export interface QuoteFormProps {
  initialScope?: string;
  projectReference?: string;
  compact?: boolean;
  onSuccessClose?: () => void;
}

interface QuoteReceipt {
  referenceId: string;
  createdAt: string;
  summary: {
    fullName: string;
    townOrAddress: string;
    projectScope: string;
    materialPreference: string;
    stories: string;
    timeline: string;
  };
}

const SCOPE_OPTIONS = [
  'Seamless Gutters & Downspouts',
  'Standing-Seam Metal Roofing',
  'Full Roof + Gutter Envelope',
  'Custom Copper & Flashing',
  'Repair / Ice-Dam Evaluation',
];

const MATERIAL_OPTIONS = [
  'Recommend on site',
  '.032" Heavy-Gauge Aluminum',
  '24-Gauge Kynar 500® Steel',
  '16 oz. Architectural Copper',
  'Galvalume / Natural Zinc-Coat',
];

const STORY_OPTIONS = ['1 Story / Ranch', '2 Stories', '2.5–3 Stories / Steep Pitch', 'New Construction Plans'];

const TIMELINE_OPTIONS = [
  'Active leak / Urgent',
  'Next 30–60 days',
  'Planning for next season',
  'Comparing specs & budget',
];

export const QuoteEstimatorForm: React.FC<QuoteFormProps> = ({
  initialScope,
  projectReference,
  compact = false,
  onSuccessClose,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [townOrAddress, setTownOrAddress] = useState('');
  const [projectScope, setProjectScope] = useState(
    initialScope && SCOPE_OPTIONS.includes(initialScope)
      ? initialScope
      : 'Seamless Gutters & Downspouts'
  );
  const [materialPreference, setMaterialPreference] = useState('Recommend on site');
  const [stories, setStories] = useState('2 Stories');
  const [timeline, setTimeline] = useState('Next 30–60 days');
  const [notes, setNotes] = useState(
    projectReference ? `Interested in specifications similar to: ${projectReference}` : ''
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [receipt, setReceipt] = useState<QuoteReceipt | null>(null);

  useEffect(() => {
    if (initialScope) {
      const matched = SCOPE_OPTIONS.find((opt) =>
        opt.toLowerCase().includes(initialScope.toLowerCase().split(' ')[0])
      );
      if (matched) setProjectScope(matched);
    }
  }, [initialScope]);

  useEffect(() => {
    if (projectReference) {
      setNotes(`Interested in specifications similar to: ${projectReference}`);
    }
  }, [projectReference]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage(null);

    if (fullName.trim().length < 2) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!phone.trim() && !email.trim()) {
      setErrorMessage('Please provide either a phone number or an email address.');
      return;
    }

    if (phone.trim() && phone.replace(/\D/g, '').length < 7) {
      setErrorMessage('Please enter a valid 7-to-10-digit phone number.');
      return;
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMessage('Please enter a valid email address (for example, name@domain.com).');
      return;
    }

    if (townOrAddress.trim().length < 2) {
      setErrorMessage('Please enter your town or street address so we can verify service area.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          townOrAddress,
          projectScope,
          materialPreference,
          stories,
          timeline,
          notes,
        }),
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || 'Unable to log quote request right now.');
      }

      setReceipt(payload as QuoteReceipt);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Something went wrong submitting your request.';
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (receipt) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="bg-[#F4F5F7] border border-neutral-200 rounded-2xl p-6 sm:p-7 space-y-5 text-left"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-[#EC5B0E] shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-mono text-xs text-neutral-500 tabular-nums mb-1">
              Shop Inquiry Reference: <strong className="text-[#0A0A0A]">{receipt.referenceId}</strong>
            </p>
            <h3 className="font-display text-xl font-bold text-[#0A0A0A]">
              Site Measure Request Logged for {receipt.summary.fullName}
            </h3>
            <p className="text-sm text-neutral-600 mt-1.5 leading-[1.6]">
              Our shop has recorded your project specifications for{' '}
              <strong className="text-[#0A0A0A]">{receipt.summary.townOrAddress}</strong>. A Buckland sheet metal
              mechanic will follow up to confirm exterior ladder access and measure timing.
            </p>
          </div>
        </div>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-neutral-200 text-xs font-mono tabular-nums">
          <div>
            <dt className="text-neutral-500 font-sans">Primary Scope</dt>
            <dd className="text-[#0A0A0A] mt-0.5">{receipt.summary.projectScope}</dd>
          </div>
          <div>
            <dt className="text-neutral-500 font-sans">Material Interest</dt>
            <dd className="text-[#0A0A0A] mt-0.5">{receipt.summary.materialPreference}</dd>
          </div>
          <div>
            <dt className="text-neutral-500 font-sans">Roofline Height</dt>
            <dd className="text-[#0A0A0A] mt-0.5">{receipt.summary.stories}</dd>
          </div>
          <div>
            <dt className="text-neutral-500 font-sans">Target Window</dt>
            <dd className="text-[#0A0A0A] mt-0.5">{receipt.summary.timeline}</dd>
          </div>
        </dl>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => {
              setReceipt(null);
              setNotes('');
            }}
            className="px-5 py-2.5 min-h-[40px] text-xs font-semibold text-[#0A0A0A] bg-white border border-neutral-300 hover:bg-neutral-100 rounded-full cursor-pointer"
          >
            Submit Another Property
          </button>
          {onSuccessClose && (
            <button
              type="button"
              onClick={onSuccessClose}
              className="px-5 py-2.5 min-h-[40px] text-xs font-semibold text-white bg-[#0A0A0A] hover:bg-[#EC5B0E] rounded-full cursor-pointer"
            >
              Done
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 text-left">
      {errorMessage && (
        <div
          role="alert"
          className="flex items-start gap-2.5 p-3.5 rounded-xl bg-orange-50 border border-[#EC5B0E] text-xs sm:text-sm text-[#0A0A0A]"
        >
          <AlertCircle className="w-4 h-4 text-[#C94705] shrink-0 mt-0.5" aria-hidden="true" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Scope Selection */}
      <fieldset>
        <legend className="block text-xs sm:text-sm font-semibold text-[#0A0A0A] mb-2.5">
          What does your roofline need?
        </legend>
        <div className="flex flex-wrap gap-2">
          {SCOPE_OPTIONS.map((scope) => {
            const active = projectScope === scope;
            return (
              <button
                key={scope}
                type="button"
                onClick={() => setProjectScope(scope)}
                aria-pressed={active}
                className={`px-3.5 py-2 min-h-[40px] text-xs font-semibold rounded-full border transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  active
                    ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                    : 'bg-white text-neutral-600 border-neutral-300 hover:border-[#0A0A0A] hover:text-[#0A0A0A]'
                }`}
              >
                {scope}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Contact Identity Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={compact ? 'modal-name' : 'page-name'} className="block text-xs font-semibold text-[#0A0A0A] mb-1.5">
            Full Name <span className="text-[#C94705]">*</span>
          </label>
          <input
            id={compact ? 'modal-name' : 'page-name'}
            type="text"
            required
            autoComplete="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g. Thomas Mercer"
            className="w-full min-h-[44px] px-4 py-2.5 text-sm bg-white text-[#0A0A0A] placeholder:text-neutral-400 border border-neutral-300 rounded-xl focus:border-[#EC5B0E]"
          />
        </div>

        <div>
          <label htmlFor={compact ? 'modal-town' : 'page-town'} className="block text-xs font-semibold text-[#0A0A0A] mb-1.5">
            Town or Street Address <span className="text-[#C94705]">*</span>
          </label>
          <input
            id={compact ? 'modal-town' : 'page-town'}
            type="text"
            required
            autoComplete="street-address"
            value={townOrAddress}
            onChange={(e) => setTownOrAddress(e.target.value)}
            placeholder="Street & Town for ladder measure"
            className="w-full min-h-[44px] px-4 py-2.5 text-sm bg-white text-[#0A0A0A] placeholder:text-neutral-400 border border-neutral-300 rounded-xl focus:border-[#EC5B0E]"
          />
        </div>

        <div>
          <label htmlFor={compact ? 'modal-phone' : 'page-phone'} className="block text-xs font-semibold text-[#0A0A0A] mb-1.5">
            Phone Number
          </label>
          <input
            id={compact ? 'modal-phone' : 'page-phone'}
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(000) 000-0000"
            className="w-full min-h-[44px] px-4 py-2.5 text-sm font-mono tabular-nums bg-white text-[#0A0A0A] placeholder:text-neutral-400 border border-neutral-300 rounded-xl focus:border-[#EC5B0E]"
          />
        </div>

        <div>
          <label htmlFor={compact ? 'modal-email' : 'page-email'} className="block text-xs font-semibold text-[#0A0A0A] mb-1.5">
            Email Address (for written spec PDF)
          </label>
          <input
            id={compact ? 'modal-email' : 'page-email'}
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full min-h-[44px] px-4 py-2.5 text-sm bg-white text-[#0A0A0A] placeholder:text-neutral-400 border border-neutral-300 rounded-xl focus:border-[#EC5B0E]"
          />
        </div>
      </div>

      {/* Material, Stories & Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor={compact ? 'modal-material' : 'page-material'} className="block text-xs font-semibold text-[#0A0A0A] mb-1.5">
            Preferred Metal
          </label>
          <select
            id={compact ? 'modal-material' : 'page-material'}
            value={materialPreference}
            onChange={(e) => setMaterialPreference(e.target.value)}
            className="w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-white text-[#0A0A0A] border border-neutral-300 rounded-xl focus:border-[#EC5B0E]"
          >
            {MATERIAL_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={compact ? 'modal-stories' : 'page-stories'} className="block text-xs font-semibold text-[#0A0A0A] mb-1.5">
            Home Height
          </label>
          <select
            id={compact ? 'modal-stories' : 'page-stories'}
            value={stories}
            onChange={(e) => setStories(e.target.value)}
            className="w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-white text-[#0A0A0A] border border-neutral-300 rounded-xl focus:border-[#EC5B0E]"
          >
            {STORY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={compact ? 'modal-timeline' : 'page-timeline'} className="block text-xs font-semibold text-[#0A0A0A] mb-1.5">
            Target Timing
          </label>
          <select
            id={compact ? 'modal-timeline' : 'page-timeline'}
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-white text-[#0A0A0A] border border-neutral-300 rounded-xl focus:border-[#EC5B0E]"
          >
            {TIMELINE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Project Notes */}
      <div>
        <label htmlFor={compact ? 'modal-notes' : 'page-notes'} className="block text-xs font-semibold text-[#0A0A0A] mb-1.5">
          Roofline or Drainage Notes (optional)
        </label>
        <textarea
          id={compact ? 'modal-notes' : 'page-notes'}
          rows={compact ? 3 : 4}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Describe overflowing corners, ice dams, fascia condition, chimney leaks, or desired color finish..."
          className="w-full px-4 py-2.5 text-sm bg-white text-[#0A0A0A] placeholder:text-neutral-400 border border-neutral-300 rounded-xl focus:border-[#EC5B0E]"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 min-h-[48px] text-sm font-semibold text-white bg-[#EC5B0E] hover:bg-[#D14B06] disabled:opacity-60 disabled:cursor-not-allowed rounded-full transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              <span>Sending to Shop...</span>
            </>
          ) : (
            <span>Request Written Quote</span>
          )}
        </button>

        <p className="text-xs text-neutral-500">
          Reviewed directly by Buckland Sheet Metal—never sold to lead brokers.
        </p>
      </div>
    </form>
  );
};

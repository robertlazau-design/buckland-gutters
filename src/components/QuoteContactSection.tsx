import React from 'react';
import { SITE_VISIT_STEPS } from '../data/catalog';
import { BUSINESS } from '../data/business';
import { QuoteEstimatorForm } from './QuoteEstimatorForm';

interface QuoteContactSectionProps {
  presetScope?: string;
  onOpenQuoteModal: (presetScope?: string) => void;
}

export const QuoteContactSection: React.FC<QuoteContactSectionProps> = ({
  presetScope,
  onOpenQuoteModal,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="bg-white pt-4 pb-10 sm:pb-14">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Signature Rounded Soft-Panel Container */}
        <div className="bg-[#F4F5F7] rounded-3xl px-5 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20 space-y-12 sm:space-y-16">
          {/* Centered Friendly Editorial Callout */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-display font-medium tracking-tight text-[#0A0A0A] text-[clamp(2rem,3.8vw,3.15rem)] leading-[1.1]">
              Gutters Overflowing or Leaking?
            </h2>
            <p className="text-sm sm:text-lg text-neutral-600">
              A second-generation family business comes out, measures and gives you a written quote. No sales pitch.
            </p>
          </div>

          {/* 3-Step Process Row */}
          <div id="process" className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SITE_VISIT_STEPS.map((item) => (
              <div
                key={item.step}
                className="bg-white border border-neutral-200/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-mono text-neutral-500 mb-3">
                    <span className="text-[#C94705] font-semibold">0{Number(item.step)}</span>
                    <span>{item.duration}</span>
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#0A0A0A] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-[1.6]">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Info + Quote Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start pt-2">
            <div className="lg:col-span-4 space-y-5">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0A0A0A]">
                Contact Buckland Gutters
              </h3>
              <p className="text-sm text-neutral-600 leading-[1.6]">
                Tell us about your home and what’s going on with your gutters. We’ll get back to you to set up a time to measure.
              </p>

              <dl className="space-y-3.5 pt-3 border-t border-neutral-200 text-xs sm:text-sm">
                <div>
                  <dt className="text-neutral-500 mb-0.5">Phone</dt>
                  <dd className="font-mono font-medium text-[#0A0A0A] tabular-nums">
                    {BUSINESS.phone}
                  </dd>
                </div>
                <div>
                  <dt className="text-neutral-500 mb-0.5">Email</dt>
                  <dd className="font-mono text-[#0A0A0A]">
                    {BUSINESS.email}
                  </dd>
                </div>
                <div>
                  <dt className="text-neutral-500 mb-0.5">Service Area</dt>
                  <dd className="font-mono text-[#0A0A0A]">
                    {BUSINESS.serviceArea}
                  </dd>
                </div>
                <div>
                  <dt className="text-neutral-500 mb-0.5">License</dt>
                  <dd className="font-mono text-[#0A0A0A] tabular-nums">
                    Oregon CCB {BUSINESS.ccb}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-8 bg-white border border-neutral-200 rounded-2xl p-5 sm:p-8">
              <QuoteEstimatorForm initialScope={presetScope} />
            </div>
          </div>

          {/* Integrated Minimalist Footer Inside Soft Panel */}
          <footer className="pt-8 border-t border-neutral-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <a
                href="#top"
                className="inline-flex items-center gap-2 font-display text-base sm:text-lg font-extrabold tracking-tight text-[#0A0A0A]"
              >
                <svg width="26" height="20" viewBox="0 0 26 20" fill="none" aria-hidden="true">
                  <path d="M2 15L9 3" stroke="#EC5B0E" strokeWidth="2.4" strokeLinecap="round" />
                  <path d="M6.5 16L13.5 4" stroke="#EC5B0E" strokeWidth="2.4" strokeLinecap="round" />
                  <path d="M11 17L17.5 6L24 17" stroke="#0A0A0A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>BUCKLAND GUTTERS</span>
              </a>
              <span className="text-xs text-neutral-500">
                © {currentYear} {BUSINESS.name}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium text-neutral-600">
              <a href="#craft" className="hover:text-[#0A0A0A] whitespace-nowrap">
                Our Story
              </a>
              <a href="#systems" className="hover:text-[#0A0A0A] whitespace-nowrap">
                Services
              </a>
              <a href="#projects" className="hover:text-[#0A0A0A] whitespace-nowrap">
                Our Projects
              </a>
              <a href="#process" className="hover:text-[#0A0A0A] whitespace-nowrap">
                How It Works
              </a>
              <button
                type="button"
                onClick={() => onOpenQuoteModal()}
                className="font-semibold text-[#C94705] hover:underline underline-offset-4 whitespace-nowrap cursor-pointer"
              >
                Get a Quote
              </button>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

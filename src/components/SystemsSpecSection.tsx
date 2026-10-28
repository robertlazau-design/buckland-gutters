import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/catalog';
import { ResilientImage } from './ResilientImage';

interface SystemsSpecSectionProps {
  onOpenQuoteModal: (presetScope?: string) => void;
}

export const SystemsSpecSection: React.FC<SystemsSpecSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeId, setActiveId] = useState<string>(SERVICES[0].id);

  const activeService =
    SERVICES.find((item) => item.id === activeId) ?? SERVICES[0];

  return (
    <section id="systems" className="bg-white pt-16 sm:pt-24 lg:pt-28 pb-16 sm:pb-24 relative overflow-hidden border-b border-neutral-100">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left 6 Columns: Angled Sky-Wedge Stage + Comparison Table */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden bg-[#EAF5FF] pt-6 px-6 pb-0 border border-[#D4E9FC]">
              {/* Angled Geometric Architectural Sky Wedge */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-[68%] bg-[#CBE7FF] -skew-y-6 origin-bottom-left pointer-events-none"
              />

              <div className="relative z-10 flex items-center justify-between gap-2 mb-4">
                <span className="font-mono text-xs font-medium text-[#0A0A0A] tabular-nums">
                  {activeService.index} · What You Get
                </span>
                <span className="font-mono text-xs text-[#C94705]">
                  Placeholder Photo
                </span>
              </div>

              <div className="relative z-10 aspect-[16/10] rounded-t-xl overflow-hidden bg-[#0A0A0A] border-x border-t border-black/10 shadow-md">
                <ResilientImage
                  src={activeService.image}
                  alt={activeService.imageAlt}
                  fallbackLabel={activeService.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dark Base Strip */}
              <div className="relative z-10 -mx-6 bg-[#111317] text-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 border-t-2 border-[#2A2F37]">
                <p className="text-xs text-neutral-300 max-w-[44ch] leading-snug">
                  {activeService.summary}
                </p>
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal(activeService.quotePreset)}
                  className="px-4 py-2 min-h-[38px] text-xs font-semibold text-white bg-[#EC5B0E] hover:bg-[#D14B06] rounded-full transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Quote This
                </button>
              </div>
            </div>

            {/* Compact Side-by-Side Comparison Table */}
            <div className="border border-neutral-200 rounded-xl overflow-hidden bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F4F5F7] border-b border-neutral-200 text-xs font-semibold text-neutral-600">
                    <th scope="col" className="py-2.5 px-3.5">Detail</th>
                    <th scope="col" className="py-2.5 px-3.5 text-[#0A0A0A]">Buckland Standard</th>
                    <th scope="col" className="py-2.5 px-3.5">Typical Low Bid</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-xs tabular-nums">
                  {activeService.specs.map((spec) => (
                    <tr key={spec.label}>
                      <td className="py-3 px-3.5 font-semibold text-[#0A0A0A] align-top">
                        {spec.label}
                      </td>
                      <td className="py-3 px-3.5 font-mono text-[#0A0A0A] align-top">
                        {spec.bucklandSpec}
                      </td>
                      <td className="py-3 px-3.5 text-neutral-500 align-top">
                        {spec.typical}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right 6 Columns: Oversized 01–04 Services List with Circular Arrow Controls */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="mb-8">
              <p className="text-xs font-semibold tracking-wider text-neutral-500 mb-2">
                What We Install
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0A0A0A] tracking-tight">
                Services
              </h2>
            </div>

            <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
              {SERVICES.map((row) => {
                const isSelected = row.id === activeId;
                return (
                  <div key={row.id} className="py-5 sm:py-6">
                    <button
                      type="button"
                      onClick={() => setActiveId(row.id)}
                      aria-expanded={isSelected}
                      className="w-full group flex items-center justify-between gap-4 text-left cursor-pointer"
                    >
                      <div className="flex items-start gap-2.5 sm:gap-3.5">
                        <span
                          className={`font-mono text-xs sm:text-sm font-semibold tabular-nums mt-1 transition-colors ${
                            isSelected ? 'text-[#C94705]' : 'text-neutral-500'
                          }`}
                        >
                          {row.index}
                        </span>
                        <span
                          className={`font-display text-xl sm:text-3xl lg:text-[34px] leading-[1.15] tracking-tight transition-colors ${
                            isSelected
                              ? 'font-semibold text-[#0A0A0A]'
                              : 'font-normal text-neutral-700 group-hover:text-[#0A0A0A]'
                          }`}
                        >
                          {row.title}
                        </span>
                      </div>

                      <span
                        className={`inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border shrink-0 transition-all duration-200 ${
                          isSelected
                            ? 'bg-[#EC5B0E] border-[#EC5B0E] text-white rotate-45'
                            : 'bg-white border-neutral-300 text-[#0A0A0A] group-hover:border-[#0A0A0A]'
                        }`}
                        aria-hidden="true"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>

            <p className="mt-5 text-xs text-neutral-500">
              Pick a service above to see what sets our work apart, or{' '}
              <button
                type="button"
                onClick={() => onOpenQuoteModal(activeService.quotePreset)}
                className="font-semibold text-[#C94705] hover:underline underline-offset-4 cursor-pointer"
              >
                get a free quote for {activeService.title.toLowerCase()}
              </button>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

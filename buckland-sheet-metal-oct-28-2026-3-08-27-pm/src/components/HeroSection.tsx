import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { HERO_IMAGE } from '../data/catalog';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onOpenQuoteModal: (presetScope?: string) => void;
}

const RIBBON_DISCIPLINES = [
  'RESIDENTIAL STANDING-SEAM ROOFING',
  'SEAMLESS .032" HEAVY-GAUGE GUTTERS',
  '16 OZ. HAND-SOLDERED COPPER',
  'CUSTOM CHIMNEY & VALLEY FLASHING',
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="top" className="bg-white overflow-hidden">
      {/* Upper Poster Typography Stage */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 pt-6 sm:pt-10 pb-6 sm:pb-8">
        <div className="flex flex-col">
          <p className="text-xs sm:text-sm font-medium text-neutral-500 mb-2 flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>Buckland Sheet Metal</span>
            <span aria-hidden="true">·</span>
            <span>Second-Generation Family Shop</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-[#C94705]">[PLACEHOLDER: Service County &amp; Towns]</span>
          </p>

          <h1 className="font-display font-medium tracking-[-0.04em] text-[#0A0A0A] leading-[0.96]">
            <span className="block text-[clamp(2.5rem,7.8vw,6.9rem)]">
              CUSTOM GUTTERS
            </span>
            <span className="block text-right text-[#EC5B0E] font-medium tracking-[-0.02em] text-[clamp(1.35rem,3.4vw,3rem)] mt-1 sm:mt-2">
              &amp; STANDING-SEAM ROOFING
            </span>
          </h1>

          <div className="mt-2 sm:mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p className="text-sm sm:text-base text-neutral-600 max-w-[54ch]">
              Heavy-gauge continuous gutters, soldered copper joinery, and concealed-clip metal roofs built in-house to outlast the framing.
            </p>
            <p className="font-display text-right text-lg sm:text-2xl lg:text-3xl font-normal text-neutral-400 tracking-tight tabular-nums shrink-0">
              EST. [PLACEHOLDER: YEAR]
            </p>
          </div>
        </div>
      </div>

      {/* Full-Bleed Architectural Roof & Copper Gutter Hero Stage */}
      <div className="max-w-[1320px] mx-auto px-0 sm:px-6 lg:px-10">
        <div className="relative aspect-[16/10] sm:aspect-[21/10] w-full overflow-hidden sm:rounded-t-2xl bg-[#0A0A0A]">
          <ResilientImage
            src={HERO_IMAGE.src}
            alt={HERO_IMAGE.alt}
            eager={true}
            fallbackLabel="Standing-Seam Metal Roof & Copper Gutter Return"
            className="w-full h-full object-cover object-center"
          />

          {/* Measured Contrast Scrim for Action Reachability */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-4 sm:p-7 lg:p-9 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="text-white space-y-1">
              <p className="font-mono text-xs text-neutral-300 tabular-nums">
                24-Ga Kynar 500® Steel · .032&quot; Aluminum · 16 oz. Architectural Copper
              </p>
              <p className="text-xs sm:text-sm text-neutral-200">
                Direct Shop Line: <span className="font-mono text-white">[PLACEHOLDER: Shop Phone Number]</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onOpenQuoteModal('Seamless Gutters & Downspouts')}
                className="inline-flex items-center gap-2 px-6 py-3 min-h-[46px] text-xs sm:text-sm font-semibold text-white bg-[#EC5B0E] hover:bg-[#D14B06] rounded-full transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Request a Site Measure</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </button>

              <a
                href="#projects"
                className="inline-flex items-center justify-center px-5 py-3 min-h-[46px] text-xs sm:text-sm font-semibold text-white bg-white/15 hover:bg-white/25 backdrop-blur-xs rounded-full transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                Featured Work
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Bleed Pitch-Black Discipline Ribbon */}
      <div className="bg-[#080808] text-white py-5 sm:py-6 border-y border-neutral-900 overflow-hidden">
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 px-6">
          {[...RIBBON_DISCIPLINES, ...RIBBON_DISCIPLINES].map((label, idx) => (
            <div key={`${label}-${idx}`} className="inline-flex items-center gap-4 shrink-0">
              {/* Architectural Gable / Gutter Line Icon */}
              <svg
                width="26"
                height="22"
                viewBox="0 0 26 22"
                fill="none"
                aria-hidden="true"
                className="text-neutral-300 shrink-0"
              >
                <path
                  d="M2 15L13 5L24 15M6 12.5V19H20V12.5M9.5 9.5L16.5 16"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-serif text-base sm:text-xl tracking-wide text-neutral-100 whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

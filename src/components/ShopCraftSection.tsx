import React from 'react';
import { RESIDENTIAL_PROJECTS, SHOP_IMAGE } from '../data/catalog';
import { BUSINESS } from '../data/business';
import { ResilientImage } from './ResilientImage';

interface ShopCraftSectionProps {
  onOpenQuoteModal?: (presetScope?: string) => void;
}

export const ShopCraftSection: React.FC<ShopCraftSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="craft" className="bg-[#080808] text-white py-20 sm:py-28 lg:py-32 tracking-[0.01em]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">
          {/* Left 6 Columns: Overlapping Dual-Frame Editorial Composition */}
          <div className="lg:col-span-6 relative pb-12 sm:pb-20 pr-6 sm:pr-16">
            {/* Primary Tall Frame */}
            <div className="w-[82%] sm:w-[76%] aspect-[4/5] overflow-hidden bg-[#141414]">
              <ResilientImage
                src={RESIDENTIAL_PROJECTS[0].image}
                alt={RESIDENTIAL_PROJECTS[0].imageAlt}
                fallbackLabel="Seamless Gutters on a Portland Home"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlapping Foreground Shop Frame */}
            <div className="absolute right-0 bottom-0 w-[60%] sm:w-[54%] aspect-[4/4.6] overflow-hidden bg-[#141414] border-8 border-[#080808] shadow-2xl">
              <ResilientImage
                src={SHOP_IMAGE.src}
                alt={SHOP_IMAGE.alt}
                fallbackLabel="Buckland Shop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right 6 Columns: Family Story + Highlight Metrics */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-5">
              <p className="text-xs font-semibold tracking-wider text-neutral-400">
                Our Story
              </p>

              <h2 className="font-display font-normal text-white text-[clamp(2rem,3.7vw,3.25rem)] leading-[1.1] tracking-tight">
                Two Generations
                <span className="block">of Portland</span>
                <span className="block">Gutters</span>
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-[1.65] max-w-[54ch]">
                Buckland is a second-generation family business, and gutters are the only thing we do. [PLACEHOLDER: the family story in Greg’s words: who started it, when, and how he took it over.]
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal?.('Seamless Gutters & Downspouts')}
                  className="px-7 py-3 min-h-[44px] text-xs sm:text-sm font-semibold text-[#0A0A0A] bg-white hover:bg-[#EC5B0E] hover:text-white rounded-full transition-colors duration-150 whitespace-nowrap cursor-pointer"
                >
                  Get a Free Quote
                </button>
                <span className="font-mono text-xs text-neutral-400">
                  Serving {BUSINESS.serviceArea}
                </span>
              </div>
            </div>

            {/* 3-Column Bold Orange Metric Strip */}
            <dl className="pt-6 border-t border-[#222222] grid grid-cols-3 gap-4 sm:gap-8 tabular-nums">
              <div className="flex flex-col-reverse">
                <dt className="text-xs sm:text-sm text-neutral-300 mt-1">
                  Generation, Family Owned
                </dt>
                <dd className="font-display text-2xl sm:text-4xl font-bold text-[#F97316]">
                  2nd
                </dd>
              </div>

              <div className="flex flex-col-reverse">
                <dt className="text-xs sm:text-sm text-neutral-300 mt-1">
                  Gutters, Nothing Else
                </dt>
                <dd className="font-display text-2xl sm:text-4xl font-bold text-[#F97316]">
                  100%
                </dd>
              </div>

              <div className="flex flex-col-reverse">
                <dt className="text-xs sm:text-sm text-neutral-300 mt-1">
                  Oregon CCB License
                </dt>
                <dd className="font-display text-lg sm:text-2xl font-bold text-[#F97316] break-words">
                  {BUSINESS.ccb}
                </dd>
              </div>
            </dl>

            {/* Homeowner Review Placeholders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#121212] border border-[#242424] rounded-xl p-4">
                <p className="font-mono text-xs text-[#F97316] mb-1">
                  [PLACEHOLDER: Customer Review #1]
                </p>
                <p className="text-xs text-neutral-400 leading-[1.55]">
                  A real Google review, word for word, with the customer’s permission.
                </p>
                <p className="font-mono text-[11px] text-neutral-500 mt-2">
                  — [PLACEHOLDER: First Name · Neighborhood]
                </p>
              </div>

              <div className="bg-[#121212] border border-[#242424] rounded-xl p-4">
                <p className="font-mono text-xs text-[#F97316] mb-1">
                  [PLACEHOLDER: Customer Review #2]
                </p>
                <p className="text-xs text-neutral-400 leading-[1.55]">
                  A real Google review, word for word, with the customer’s permission.
                </p>
                <p className="font-mono text-[11px] text-neutral-500 mt-2">
                  — [PLACEHOLDER: First Name · Neighborhood]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { HERO_IMAGE, RESIDENTIAL_PROJECTS, SHOP_IMAGE } from '../data/catalog';
import { ResilientImage } from './ResilientImage';

interface SolutionsMosaicSectionProps {
  onOpenQuoteModal: (presetScope?: string) => void;
}

const MOSAIC_TILES = [
  {
    src: RESIDENTIAL_PROJECTS[0].image,
    alt: RESIDENTIAL_PROJECTS[0].imageAlt,
    label: 'Seamless Gutters',
  },
  {
    src: RESIDENTIAL_PROJECTS[1].image,
    alt: RESIDENTIAL_PROJECTS[1].imageAlt,
    label: 'Copper Half-Round',
  },
  {
    src: SHOP_IMAGE.src,
    alt: SHOP_IMAGE.alt,
    label: 'In the Shop',
  },
  {
    src: HERO_IMAGE.src,
    alt: HERO_IMAGE.alt,
    label: 'Downspout Return',
  },
  {
    src: RESIDENTIAL_PROJECTS[2].image,
    alt: RESIDENTIAL_PROJECTS[2].imageAlt,
    label: 'Gutter Replacement',
  },
  {
    src: RESIDENTIAL_PROJECTS[0].image,
    alt: RESIDENTIAL_PROJECTS[0].imageAlt,
    label: 'Downspouts',
  },
];

export const SolutionsMosaicSection: React.FC<SolutionsMosaicSectionProps> = ({
  onOpenQuoteModal,
}) => {
  return (
    <section id="solutions" className="bg-white py-16 sm:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left 5 Columns: Crisp Editorial Statement + Solid Pill CTA */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs font-semibold tracking-wider text-neutral-500">
              Gutters Are All We Do
            </p>

            <h2 className="font-display text-[clamp(2rem,3.8vw,3.35rem)] leading-[1.08] tracking-tight text-[#0A0A0A] font-normal">
              Measured and Formed
              <span className="block">for Your Home,</span>
              <span className="block font-extrabold text-[#EC5B0E] mt-1">
                Not Off the Shelf
              </span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 leading-[1.65] max-w-[46ch]">
              Every gutter run is measured on your house and formed in one continuous piece. No seams along the run means fewer places for Portland rain to drip, leak or rot your fascia.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
              <button
                type="button"
                onClick={() => onOpenQuoteModal('Seamless Gutters & Downspouts')}
                className="px-7 py-3.5 min-h-[46px] text-xs sm:text-sm font-semibold text-white bg-[#0A0A0A] hover:bg-[#EC5B0E] rounded-full transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer self-start"
              >
                Get a Free Quote
              </button>

              <p className="text-xs text-neutral-500 leading-[1.5] max-w-[28ch]">
                We look at your roofline with you and explain what your home needs.
              </p>
            </div>
          </div>

          {/* Right 7 Columns: Signature Angled (-8deg) Photo Mosaic */}
          <div className="lg:col-span-7 relative py-4 sm:py-6">
            <div className="-rotate-6 sm:-rotate-8 scale-[1.02] sm:scale-105 origin-center">
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 bg-white p-2">
                {MOSAIC_TILES.map((tile, idx) => (
                  <a
                    key={`${tile.label}-${idx}`}
                    href="#projects"
                    aria-label={`See ${tile.label} in our work`}
                    className={`group relative block aspect-square overflow-hidden bg-neutral-900 shadow-sm ${
                      idx === 1 || idx === 4 ? 'translate-y-3 sm:translate-y-4' : ''
                    }`}
                  >
                    <ResilientImage
                      src={tile.src}
                      alt={tile.alt}
                      fallbackLabel={tile.label}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-2.5 py-2 text-[11px] font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                      {tile.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

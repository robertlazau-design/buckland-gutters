import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: (presetScope?: string) => void;
}

const NAV_ITEMS = [
  { label: 'Services', href: '/#systems' },
  { label: 'Our Work', href: '/#projects' },
  { label: 'Our Story', href: '/#craft' },
  { label: 'Contact', href: '/#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single brand link with emblem */}
        <a
          href="/"
          className="inline-flex items-center gap-2 font-display text-base sm:text-lg font-extrabold tracking-tight text-[#0A0A0A] whitespace-nowrap shrink-0"
        >
          <svg
            width="26"
            height="20"
            viewBox="0 0 26 20"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
          >
            <path d="M2 15L9 3" stroke="#EC5B0E" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M6.5 16L13.5 4" stroke="#EC5B0E" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M11 17L17.5 6L24 17" stroke="#0A0A0A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>
            BUCKLAND<span className="hidden min-[420px]:inline"> GUTTERS</span>
          </span>
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#0A0A0A] underline-offset-4 hover:underline transition-colors duration-150 whitespace-nowrap shrink-0 py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single solid pill-black primary action */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => onOpenQuoteModal()}
            className="px-5 py-2.5 min-h-[40px] text-xs sm:text-sm font-semibold text-white bg-[#0A0A0A] hover:bg-[#EC5B0E] rounded-full transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Get a Quote
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 text-[#0A0A0A] hover:bg-neutral-100 transition-colors duration-150 cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Mobile navigation"
          className="md:hidden bg-white border-b border-neutral-200 px-4 py-3 space-y-1"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center min-h-[44px] px-2 text-sm font-semibold text-[#0A0A0A] hover:text-[#C94705] border-b border-neutral-100 last:border-b-0"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

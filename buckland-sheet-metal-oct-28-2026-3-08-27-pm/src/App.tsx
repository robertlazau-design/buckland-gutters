/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SolutionsMosaicSection } from './components/SolutionsMosaicSection';
import { ShopCraftSection } from './components/ShopCraftSection';
import { SystemsSpecSection } from './components/SystemsSpecSection';
import { ProjectGallery } from './components/ProjectGallery';
import { QuoteContactSection } from './components/QuoteContactSection';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [modalScope, setModalScope] = useState<string | undefined>(undefined);
  const [modalProjectRef, setModalProjectRef] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (presetScope?: string, projectReference?: string) => {
    setModalScope(presetScope);
    setModalProjectRef(projectReference);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0A0A0A]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0A0A0A] focus:text-white focus:rounded-full focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      <main id="main-content" className="flex-1">
        <HeroSection onOpenQuoteModal={handleOpenQuoteModal} />
        <SolutionsMosaicSection onOpenQuoteModal={handleOpenQuoteModal} />
        <ShopCraftSection onOpenQuoteModal={handleOpenQuoteModal} />
        <SystemsSpecSection onOpenQuoteModal={handleOpenQuoteModal} />
        <ProjectGallery onOpenQuoteModal={handleOpenQuoteModal} />
        <QuoteContactSection
          presetScope={modalScope}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      </main>

      <QuoteModal
        isOpen={quoteModalOpen}
        presetScope={modalScope}
        projectReference={modalProjectRef}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}

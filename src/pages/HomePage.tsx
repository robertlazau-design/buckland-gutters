import type { OpenQuoteModal } from '../App';
import { HeroSection } from '../components/HeroSection';
import { SolutionsMosaicSection } from '../components/SolutionsMosaicSection';
import { ShopCraftSection } from '../components/ShopCraftSection';
import { SystemsSpecSection } from '../components/SystemsSpecSection';
import { ProjectGallery } from '../components/ProjectGallery';
import { QuoteContactSection } from '../components/QuoteContactSection';

export function HomePage({ onOpenQuoteModal }: { onOpenQuoteModal: OpenQuoteModal }) {
  return (
    <>
      <HeroSection onOpenQuoteModal={onOpenQuoteModal} />
      <SolutionsMosaicSection onOpenQuoteModal={onOpenQuoteModal} />
      <SystemsSpecSection onOpenQuoteModal={onOpenQuoteModal} />
      <ProjectGallery onOpenQuoteModal={onOpenQuoteModal} />
      <ShopCraftSection onOpenQuoteModal={onOpenQuoteModal} />
      <QuoteContactSection onOpenQuoteModal={onOpenQuoteModal} />
    </>
  );
}

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { QuoteModal } from './components/QuoteModal';
import { PageMeta } from './components/PageMeta';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';

export type OpenQuoteModal = (presetScope?: string, projectReference?: string) => void;

// The whole site, minus the router. In the browser it runs inside BrowserRouter (below);
// at build time src/entry-server.tsx renders it inside StaticRouter to pre-render each page.
export function AppShell() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [modalScope, setModalScope] = useState<string | undefined>(undefined);
  const [modalProjectRef, setModalProjectRef] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal: OpenQuoteModal = (presetScope, projectReference) => {
    setModalScope(presetScope);
    setModalProjectRef(projectReference);
    setQuoteModalOpen(true);
  };

  return (
    <>
      <PageMeta />
      <div className="min-h-screen flex flex-col bg-white text-[#0A0A0A]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0A0A0A] focus:text-white focus:rounded-full focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>

        <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

        <main id="main-content" className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <QuoteModal
          isOpen={quoteModalOpen}
          presetScope={modalScope}
          projectReference={modalProjectRef}
          onClose={() => setQuoteModalOpen(false)}
        />
      </div>
      <Analytics />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface QuoteSubmission {
  id: string;
  createdAt: string;
  fullName: string;
  phone: string;
  email: string;
  townOrAddress: string;
  projectScope: string;
  materialPreference: string;
  stories: string;
  timeline: string;
  notes: string;
}

const submissions: QuoteSubmission[] = [];

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, '');
  return digits.length >= 7;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '1mb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true, count: submissions.length });
  });

  app.post('/api/quotes', (req, res) => {
    const body = req.body ?? {};
    const fullName = String(body.fullName ?? '').trim();
    const phone = String(body.phone ?? '').trim();
    const email = String(body.email ?? '').trim();
    const townOrAddress = String(body.townOrAddress ?? '').trim();
    const projectScope = String(body.projectScope ?? 'Seamless Gutters & Downspouts').trim();
    const materialPreference = String(body.materialPreference ?? 'Recommend on site').trim();
    const stories = String(body.stories ?? '2 Stories').trim();
    const timeline = String(body.timeline ?? 'Next 30–60 days').trim();
    const notes = String(body.notes ?? '').trim();

    if (fullName.length < 2) {
      res.status(400).json({ error: 'Please enter your name so our shop knows who to ask for.' });
      return;
    }

    if (!phone && !email) {
      res.status(400).json({ error: 'Please provide a phone number or email address for your written quote.' });
      return;
    }

    if (phone && !isValidPhone(phone)) {
      res.status(400).json({ error: 'Please enter a valid 7-to-10-digit phone number.' });
      return;
    }

    if (email && !isValidEmail(email)) {
      res.status(400).json({ error: 'Please enter a valid email address.' });
      return;
    }

    if (townOrAddress.length < 2) {
      res.status(400).json({ error: 'Please include your town or street address to confirm service area.' });
      return;
    }

    const sequence = String(1040 + submissions.length + 1);
    const submission: QuoteSubmission = {
      id: `BSM-${sequence}`,
      createdAt: new Date().toISOString(),
      fullName,
      phone,
      email,
      townOrAddress,
      projectScope,
      materialPreference,
      stories,
      timeline,
      notes,
    };

    submissions.push(submission);

    res.status(201).json({
      referenceId: submission.id,
      createdAt: submission.createdAt,
      summary: {
        fullName: submission.fullName,
        townOrAddress: submission.townOrAddress,
        projectScope: submission.projectScope,
        materialPreference: submission.materialPreference,
        stories: submission.stories,
        timeline: submission.timeline,
      },
    });
  });

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Buckland Sheet Metal server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();

# Buckland Gutters website

Client site built and maintained by Robert Lazau (Golden Boy Productions) for Greg Buckland,
Buckland Gutters, Portland, OR. Second-generation family gutter business.
Not launched yet: no domain, placeholders and AI sample photos still on the site.

## Robert Lazau's rules (from his Golden Boy HQ rulebook)
- Never commit to main. Feature branch + pull request; Robert merges.
- Keep commits few: Vercel caps builds per day.
- Never invent business facts (prices, hours, years, reviews, licenses, service areas). Use what's on the site or ask.
- Contact forms run on Robert's paid Web3Forms account (key in src/lib/submitForm.ts), never the client's.
- Never submit the forms as a test. Robert sends the test.
- Check the Vercel preview before calling a pull request ready.
- Never handle passwords, codes or tokens.

## Scope
- Gutters only: seamless aluminum/steel, copper, replacement, downspouts. No roofing or flashing
  (the AI Studio export invented those from a roofing template; Robert removed them).
- `[CONFIRM: ...]` = a detail AI Studio suggested that Greg hasn't confirmed.
  `[PLACEHOLDER: ...]` = a fact still needed from Greg. None may remain at launch.
- The photos in src/assets/images are AI-generated placeholders. Replace with real job photos before launch.

## Stack
- Vite + React 19 + React Router 7 + Tailwind 4. Hosted on Vercel (project buckland-gutters).
- Started as a Google AI Studio export; its Express server and Gemini code were removed.

## How pages get to Google
- `npm run build` = client build, then a server build of src/entry-server.tsx, then scripts/prerender.mjs.
- prerender.mjs writes one HTML file per page (dist/index.html, ...) with that page's
  title, description, canonical, share tags and full text, plus dist/404.html (noindex).
- vercel.json: cleanUrls serves /services from services.html; unknown paths get 404.html with a 404 status.
  A new page needs a route in src/App.tsx AND an entry in src/data/pages.ts.
- In the browser, src/main.tsx renders the app over the pre-rendered HTML (createRoot, no hydration).
- Code that runs during render must work without a browser (no window/document/localStorage outside
  effects or try/catch), or the build fails. Content must be visible at rest: no scroll-triggered
  fade-ins that start at opacity 0.

## Launch checklist
- Every [CONFIRM]/[PLACEHOLDER] answered; real photos in.
- Web3Forms key for Buckland created on Robert's account and set in src/lib/submitForm.ts.
- Domain added in Vercel; SITE_URL in src/data/pages.ts and the canonical/og:url in index.html updated.
- Remove `<meta name="robots" content="noindex">` from index.html; public/robots.txt allows all and
  points to a new public/sitemap.xml.
- LocalBusiness JSON-LD in index.html with confirmed facts only.
- Google Business Profile, Search Console (Greg's Google account, Robert as Owner), Bing + IndexNow.

## Files
- src/data/business.ts: name, phone, email, service area, CCB#, year. Change contact details here.
- src/data/catalog.ts: services, gallery projects, estimate steps, quote form choices.
- src/data/pages.ts: every page's title and description.
- index.html: shared head and fonts.

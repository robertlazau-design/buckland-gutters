// Title and description for every page. Used twice: scripts/prerender.mjs bakes them into each
// page's HTML at build time (what Google, Bing and link previews read), and PageMeta keeps the tab
// title right as visitors click around. Keep titles to 60 characters or less and descriptions to
// 155, with the main search phrase first.
// TODO at launch: switch SITE_URL to the real domain (and add it to Vercel).
export const SITE_URL = 'https://buckland-gutters.vercel.app';

export const PAGES: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Seamless Gutters in Portland, OR | Buckland Gutters',
    description: 'Seamless aluminum, steel and copper gutters and downspouts in Portland, OR, installed by a second-generation family business that does only gutters.',
  },
};

export const NOT_FOUND_TITLE = 'Page Not Found | Buckland Gutters';

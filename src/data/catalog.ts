// Services, projects and the estimate steps shown on the site.
//
// The photos are AI-generated placeholders from Google AI Studio. Replace every one with a real
// Buckland job photo before launch; never present them as Buckland's own work on the live site.
//
// [CONFIRM: ...] marks a detail AI Studio suggested that Greg has not confirmed yet.
// [PLACEHOLDER: ...] marks a fact we still need from him. Both must be gone before launch.
import gutterReturnImg from '../assets/images/placeholder-gutter-return.jpg';
import copperHalfRoundImg from '../assets/images/placeholder-copper-half-round.jpg';
import twoStoryGuttersImg from '../assets/images/placeholder-two-story-gutters.jpg';
import shopBrakeImg from '../assets/images/placeholder-shop-brake.jpg';

export interface ServiceSpecification {
  id: string;
  index: string;
  title: string;
  quotePreset: string;
  summary: string;
  image: string;
  imageAlt: string;
  specs: {
    label: string;
    bucklandSpec: string;
    typical: string;
  }[];
}

export type ProjectFilterCategory = 'all' | 'seamless' | 'copper' | 'replacement';

export interface ResidentialProject {
  id: string;
  title: string;
  category: Exclude<ProjectFilterCategory, 'all'>;
  categoryLabel: string;
  neighborhood: string;
  profileSpec: string;
  material: string;
  scopeSummary: string;
  craftDetail: string;
  image: string;
  imageAlt: string;
}

export const QUOTE_SCOPES = [
  'Seamless Gutters & Downspouts',
  'Copper Gutters',
  'Gutter Replacement',
  'Downspouts & Drainage',
  'Not sure yet',
];

export const HERO_IMAGE = {
  src: gutterReturnImg,
  alt: 'Placeholder image: copper half-round gutter and downspout return on a clapboard home.',
};

export const SHOP_IMAGE = {
  src: shopBrakeImg,
  alt: 'Placeholder image: sheet-metal bending brake and coils of gutter metal in a shop.',
};

export const SERVICES: ServiceSpecification[] = [
  {
    id: 'seamless',
    index: '01',
    title: 'Seamless Gutters',
    quotePreset: 'Seamless Gutters & Downspouts',
    summary:
      'Formed at your home in one continuous length for each run of roofline, so there are no joints along the run to drip or pull apart in Portland’s long rainy season.',
    image: twoStoryGuttersImg,
    imageAlt: 'Placeholder image: two-story home with dark seamless gutters and downspouts.',
    specs: [
      {
        label: 'Material',
        bucklandSpec: 'Aluminum or steel, baked-on enamel finish',
        typical: 'Snap-together sections from the hardware store',
      },
      {
        label: 'Gutter Size',
        bucklandSpec: '[CONFIRM: 5" and 6" K-style]',
        typical: '5" on every house, whatever the roof size',
      },
      {
        label: 'Metal Thickness',
        bucklandSpec: '[CONFIRM: .032" aluminum]',
        typical: 'Thinner coil that dents under a ladder',
      },
      {
        label: 'Hangers',
        bucklandSpec: '[CONFIRM: hidden screw hangers, spacing]',
        typical: 'Spikes that work loose from wet fascia',
      },
    ],
  },
  {
    id: 'copper',
    index: '02',
    title: 'Copper Gutters',
    quotePreset: 'Copper Gutters',
    summary:
      'Copper gutters and downspouts for homes that deserve them. Copper weathers from bright to brown to green and lasts for generations.',
    image: copperHalfRoundImg,
    imageAlt: 'Placeholder image: copper half-round gutter on brass brackets with a round outlet.',
    specs: [
      {
        label: 'Profiles',
        bucklandSpec: '[CONFIRM: half-round and K-style]',
        typical: 'Painted aluminum in a “copper” color',
      },
      {
        label: 'Copper Weight',
        bucklandSpec: '[CONFIRM: 16 oz. copper]',
        typical: 'Thin copper that buckles',
      },
      {
        label: 'Joints',
        bucklandSpec: '[CONFIRM: soldered seams and outlets]',
        typical: 'Caulked joints that peel in a few winters',
      },
    ],
  },
  {
    id: 'replacement',
    index: '03',
    title: 'Gutter Replacement',
    quotePreset: 'Gutter Replacement',
    summary:
      'We take down the old gutters, haul them away and hang a new seamless system, so overflowing corners and leaking joints are gone for good.',
    image: gutterReturnImg,
    imageAlt: 'Placeholder image: new gutter and downspout return on a home’s corner.',
    specs: [
      {
        label: 'Old Gutters',
        bucklandSpec: 'Removed and hauled away',
        typical: 'Left in a pile by the driveway',
      },
      {
        label: 'Fascia',
        bucklandSpec: '[CONFIRM: checked and repaired before hanging]',
        typical: 'New gutters hung on rotten boards',
      },
      {
        label: 'Warranty',
        bucklandSpec: '[PLACEHOLDER: Buckland workmanship warranty]',
        typical: 'Unclear or verbal only',
      },
    ],
  },
  {
    id: 'downspouts',
    index: '04',
    title: 'Downspouts & Drainage',
    quotePreset: 'Downspouts & Drainage',
    summary:
      'Downspouts sized and placed to carry a Portland downpour away from your foundation, siding and walkways.',
    image: twoStoryGuttersImg,
    imageAlt: 'Placeholder image: downspouts on the corners of a two-story home.',
    specs: [
      {
        label: 'Downspout Size',
        bucklandSpec: '[CONFIRM: 2"x3" and 3"x4"]',
        typical: 'One small size for every roof',
      },
      {
        label: 'Placement',
        bucklandSpec: 'Planned from how much roof drains to each corner',
        typical: 'Wherever the old ones were',
      },
      {
        label: 'Materials',
        bucklandSpec: 'Aluminum, steel or copper to match the gutters',
        typical: 'Mismatched parts',
      },
    ],
  },
];

export const RESIDENTIAL_PROJECTS: ResidentialProject[] = [
  {
    id: 'two-story-seamless',
    title: 'Two-Story Seamless Gutter System',
    category: 'seamless',
    categoryLabel: 'Seamless Gutters',
    neighborhood: '[PLACEHOLDER: Neighborhood]',
    profileSpec: '[CONFIRM: 6" K-style · 3"x4" downspouts]',
    material: '[CONFIRM: aluminum, color]',
    scopeSummary: '[PLACEHOLDER: what the job was, in one or two sentences]',
    craftDetail: '[PLACEHOLDER: one detail worth pointing out]',
    image: twoStoryGuttersImg,
    imageAlt: 'Placeholder image: two-story home with dark seamless gutters.',
  },
  {
    id: 'copper-half-round',
    title: 'Copper Half-Round Gutters',
    category: 'copper',
    categoryLabel: 'Copper Gutters',
    neighborhood: '[PLACEHOLDER: Neighborhood]',
    profileSpec: '[CONFIRM: 6" half-round · 4" round downspout]',
    material: '[CONFIRM: 16 oz. copper]',
    scopeSummary: '[PLACEHOLDER: what the job was, in one or two sentences]',
    craftDetail: '[PLACEHOLDER: one detail worth pointing out]',
    image: copperHalfRoundImg,
    imageAlt: 'Placeholder image: copper half-round gutter with brass brackets.',
  },
  {
    id: 'corner-replacement',
    title: 'Gutter Replacement and Downspout Return',
    category: 'replacement',
    categoryLabel: 'Gutter Replacement',
    neighborhood: '[PLACEHOLDER: Neighborhood]',
    profileSpec: '[CONFIRM: profile and downspout size]',
    material: '[CONFIRM: material]',
    scopeSummary: '[PLACEHOLDER: what the job was, in one or two sentences]',
    craftDetail: '[PLACEHOLDER: one detail worth pointing out]',
    image: gutterReturnImg,
    imageAlt: 'Placeholder image: gutter and downspout return at a home’s corner.',
  },
];

export const SITE_VISIT_STEPS = [
  {
    step: '01',
    title: 'We Measure Your Home',
    duration: '[PLACEHOLDER: how long a visit takes]',
    detail:
      'Someone from Buckland looks at your roofline, fascia and where the water needs to go. No sales pitch.',
  },
  {
    step: '02',
    title: 'You Get a Written Quote',
    duration: '[PLACEHOLDER: quote turnaround]',
    detail:
      'A clear written quote that lists the material, gutter size, downspouts and price, so you can compare it with any other bid.',
  },
  {
    step: '03',
    title: 'We Install and Clean Up',
    duration: 'Scheduled around the weather',
    detail:
      'Gutters are formed at your home in continuous lengths. The old gutters and every scrap go with us when we leave.',
  },
];

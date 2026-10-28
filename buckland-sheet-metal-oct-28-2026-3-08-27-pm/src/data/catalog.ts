import heroCraftImg from '../assets/images/hero_standing_seam_craft_1793042380195.jpg';
import copperHalfroundImg from '../assets/images/project_copper_halfround_1793042382522.jpg';
import charcoalRoofImg from '../assets/images/project_charcoal_standing_seam_1793042383300.jpg';
import chimneyFlashingImg from '../assets/images/project_custom_chimney_flashing_1793042384861.jpg';
import shopBrakeImg from '../assets/images/shop_sheet_metal_brake_1793042384661.jpg';

export type SystemCategoryId = 'gutters' | 'roofing' | 'flashing';

export interface SystemSpecification {
  id: SystemCategoryId;
  index: string;
  title: string;
  shortLabel: string;
  summary: string;
  problemSolved: string;
  image: string;
  imageAlt: string;
  specs: {
    label: string;
    bucklandSpec: string;
    builderDefault: string;
  }[];
  profilesAvailable: string[];
}

export type ProjectFilterCategory = 'all' | 'roofing' | 'gutters' | 'copper';

export interface ResidentialProject {
  id: string;
  title: string;
  category: Exclude<ProjectFilterCategory, 'all'>;
  categoryLabel: string;
  townPlaceholder: string;
  profileSpec: string;
  materialGauge: string;
  scopeSummary: string;
  craftDetail: string;
  image: string;
  imageAlt: string;
  featuredWide?: boolean;
}

export const HERO_IMAGE = {
  src: heroCraftImg,
  alt: 'Residential standing-seam charcoal metal roof meeting a hand-seamed copper half-round gutter and mitered return downspout on a clapboard home.',
};

export const SHOP_IMAGE = {
  src: shopBrakeImg,
  alt: 'Inside the Buckland Sheet Metal workshop showing a heavy sheet-metal bending brake, layout square, hand snips, and coils of Galvalume steel and raw architectural copper.',
};

export const SYSTEM_SPECIFICATIONS: SystemSpecification[] = [
  {
    id: 'gutters',
    index: '01',
    title: 'Continuous Heavy-Gauge Gutters & Downspouts',
    shortLabel: 'Seamless Gutters',
    summary:
      'Run continuous on-site to the exact foot of your fascia board—eliminating intermediate lap seams that drip, separate in freeze-thaw cycles, and rot sill plates.',
    problemSolved:
      'Stops foundation washout, basement seepage, and fascia board decay caused by undersized 5-inch troughs and wide-spaced spike-and-ferrule fasteners.',
    image: copperHalfroundImg,
    imageAlt:
      'Close-up of a 16-ounce architectural copper half-round gutter supported by heavy brass brackets and connected to a soldered round copper outlet.',
    specs: [
      {
        label: 'Aluminum Wall Thickness',
        bucklandSpec: '.032" heavy architectural coil',
        builderDefault: '.024"–.027" light coil (buckles under ladder/ice)',
      },
      {
        label: 'Copper Weight Option',
        bucklandSpec: '16 oz. & 20 oz. cold-rolled copper',
        builderDefault: 'Painted aluminum "copper-look" only',
      },
      {
        label: 'Hanger Spacing',
        bucklandSpec: '16"–24" O.C. hidden structural screw hangers',
        builderDefault: '36"+ spikes that pull out of wet rafter tails',
      },
      {
        label: 'Corners & Outlets',
        bucklandSpec: 'Hand-cut miters & oversized 3"x4" or 4" round drops',
        builderDefault: 'Snap-on plastic strip miters & 2"x3" bottleneck drops',
      },
    ],
    profilesAvailable: [
      '5" & 6" Seamless K-Style (.032" Aluminum)',
      '6" Architectural Half-Round (16 oz. Copper or Galvalume)',
      'Custom Box & Fascia-Integrated Gutters',
      '3"x4" Corrugated & 3"/4" Smooth Round Downspouts',
    ],
  },
  {
    id: 'roofing',
    index: '02',
    title: 'Concealed-Fastener Standing-Seam Metal Roofing',
    shortLabel: 'Standing-Seam Roofing',
    summary:
      'Interlocking vertical-rib panels anchored with concealed expansion clips—zero exposed neoprene washer screws to dry out, crack, or back out over decades of thermal movement.',
    problemSolved:
      'Replaces curling asphalt shingles that shed granules into gutters every storm with a high-wind, snow-shedding steel or copper envelope.',
    image: charcoalRoofImg,
    imageAlt:
      'Two-story residential gable home finished with a matte slate-gray standing-seam metal roof, snow retention rails, and matching heavy-gauge gutters.',
    specs: [
      {
        label: 'Panel Substrate',
        bucklandSpec: '24-gauge Galvalume steel or 16 oz. copper',
        builderDefault: '26–29 gauge thin agricultural/barn rib panel',
      },
      {
        label: 'Finish Chemistry',
        bucklandSpec: '70% PVDF (Kynar 500® / Hylar 5000®) resin',
        builderDefault: 'SMP polyester paint (chalks & fades unevenly)',
      },
      {
        label: 'Fastening Method',
        bucklandSpec: 'Concealed floating stainless clips for thermal travel',
        builderDefault: 'Exposed face-screws piercing the weather plane',
      },
      {
        label: 'Valleys, Ridge & Eaves',
        bucklandSpec: 'Shop-formed hemmed drip edge & vented z-closure ridge',
        builderDefault: 'Exposed foam closures that birds & ice dislodge',
      },
    ],
    profilesAvailable: [
      '1.5" Mechanical Double-Lock Standing Seam (Low & Steep Slope)',
      '1.75" Snap-Lock Architectural Seam',
      'Custom Porch, Dormer & Bay-Window Accent Roofs',
      'Color-Matched Bar-Style Snow Retention Systems',
    ],
  },
  {
    id: 'flashing',
    index: '03',
    title: 'Brake-Formed Masonry Flashing & Soldered Joinery',
    shortLabel: 'Custom Flashing & Copper',
    summary:
      'Where roofs actually leak is rarely the open field—it is chimneys, dormers, dead valleys, and skylight curbs. Every flashing transition is bent on our shop brake to fit your masonry.',
    problemSolved:
      'Eliminates reliance on tubes of roof caulk and tar patches by mechanically locking water away from stone, brick, and cedar intersections.',
    image: chimneyFlashingImg,
    imageAlt:
      'Hand-soldered 16-ounce copper chimney saddle cricket and stepped counter-flashing let cleanly into fieldstone mortar joints on a standing-seam roof.',
    specs: [
      {
        label: 'Chimney & Wall Reglets',
        bucklandSpec: '2-piece step & diamond-cut mortar counter-flashing',
        builderDefault: 'Surface-caulked aluminum bent against brick face',
      },
      {
        label: 'Behind-Chimney Drainage',
        bucklandSpec: 'Custom brake-formed & silver/50-50 soldered cricket',
        builderDefault: 'Shingle-wrapped dead pocket that traps snowmelt',
      },
      {
        label: 'Collector Heads & Scuppers',
        bucklandSpec: 'Shop-fabricated copper/zinc leader heads & overflows',
        builderDefault: 'Off-the-shelf thin stamped tin',
      },
      {
        label: 'Workmanship Guarantee',
        bucklandSpec: '[PLACEHOLDER: Buckland Written Workmanship Warranty Term]',
        builderDefault: '1-year subcontractor pass-through',
      },
    ],
    profilesAvailable: [
      'Soldered Copper Chimney Crickets & Step/Counter Flashing',
      'Custom Dormer Cheek, Apron & Headwall Flashings',
      'Architectural Leader Heads / Conductor Boxes',
      'Custom Louvers, Finials & Drip-Edge Restorations',
  ],
  },
];

export const RESIDENTIAL_PROJECTS: ResidentialProject[] = [
  {
    id: 'gable-standing-seam-envelope',
    title: 'Full Gable Standing-Seam Roof & K-Style Drainage System',
    category: 'roofing',
    categoryLabel: 'Standing-Seam Roof + Gutters',
    townPlaceholder: '[PLACEHOLDER: Town / Neighborhood]',
    profileSpec: '1.5" Concealed-Clip Seam · 6" Seamless K-Style',
    materialGauge: '24-Ga Matte Slate PVDF Steel · .032" Dark Bronze Aluminum',
    scopeSummary:
      'Complete tear-off and installation of 24-gauge standing-seam panels across main gable, dormers, and wrap-around farmer’s porch, paired with bar-style snow guards over entries and continuous 6-inch gutters.',
    craftDetail:
      'Custom hemmed eaves lock directly over the gutter apron so wind-driven rain cannot wick behind the fascia board.',
    image: charcoalRoofImg,
    imageAlt:
      'Two-story white clapboard residential home featuring a matte slate standing-seam metal roof, snow guards over walkways, and dark bronze seamless gutters.',
    featuredWide: true,
  },
  {
    id: 'cedar-shingle-halfround-copper',
    title: '16 oz. Half-Round Copper Gutter & Round Outlet Assembly',
    category: 'copper',
    categoryLabel: 'Custom Copper Gutters',
    townPlaceholder: '[PLACEHOLDER: Town / Neighborhood]',
    profileSpec: '6" Single-Bead Half-Round · 4" Smooth Round Drop',
    materialGauge: '16 oz. Cold-Rolled Copper · Cast Brass Brackets',
    scopeSummary:
      'Fabricated and hung 16-ounce natural copper half-round gutters with external cast-brass circle hangers spaced 24 inches on center, matched with hand-soldered star outlets and two-piece elbows.',
    craftDetail:
      '50/50 tin-lead soldered seams fluxed and sweat-joined so natural brown-to-verdigris patina develops without sealant failure.',
    image: copperHalfroundImg,
    imageAlt:
      'Detail photograph of 16-ounce natural copper half-round gutter with heavy brass brackets and hand-soldered outlet against white fascia and cedar shingles.',
  },
  {
    id: 'fieldstone-chimney-cricket',
    title: 'Fieldstone Masonry Chimney Cricket & Stepped Reglet Flashing',
    category: 'copper',
    categoryLabel: 'Custom Flashing & Joinery',
    townPlaceholder: '[PLACEHOLDER: Town / Neighborhood]',
    profileSpec: 'Custom Brake-Bent Saddle Cricket · Cut-In Step Reglet',
    materialGauge: '16 oz. Architectural Copper over High-Temp Ice & Water Shield',
    scopeSummary:
      'Engineered a custom-pitched copper saddle behind a wide fieldstone chimney stack that previously trapped ice dams, cut counter-flashing cleanly into mortar joints, and locked base flanges into adjacent standing seams.',
    craftDetail:
      'Zero exposed caulk joints in the primary water channel; mortar joints tucked with stainless wedges and breathable masonry sealant.',
    image: chimneyFlashingImg,
    imageAlt:
      'Hand-soldered copper chimney saddle cricket and stepped counter-flashing around a natural fieldstone chimney intersecting a dark standing-seam metal roof.',
  },
  {
    id: 'clapboard-eave-return-miter',
    title: 'Porch Roof Standing-Seam & Patinated Copper Return',
    category: 'gutters',
    categoryLabel: 'Gutters + Porch Roof',
    townPlaceholder: '[PLACEHOLDER: Town / Neighborhood]',
    profileSpec: 'Standing-Seam Shed Porch · Half-Round Copper Return',
    materialGauge: '24-Ga Charcoal Steel · 16 oz. Weathered Copper',
    scopeSummary:
      'Integrated lower-slope standing-seam porch roof drainage into a custom offset downspout return hugging the corner trim board to keep walkways dry and clear of ice.',
    craftDetail:
      'Custom two-angle rectangular-to-half-round downspout offset fabricated in-shop to clear projecting historic cornice molding.',
    image: heroCraftImg,
    imageAlt:
      'Close exterior elevation of a dark charcoal standing-seam porch roof feeding into a patinated copper gutter and custom offset downspout return.',
  },
];

export const SITE_VISIT_STEPS = [
  {
    step: '01',
    title: 'Direct Mechanic Measure — Not a Commission Sales Pitch',
    duration: '25–40 min on site',
    detail:
      'An actual Buckland sheet-metal specialist inspects your rafter tails, fascia pitch, valley transitions, and downspout discharge paths from the ground and ladder. You do not need to sit through a two-hour kitchen-table presentation.',
  },
  {
    step: '02',
    title: 'Itemized Gauge, Profile & Flashing Proposal',
    duration: '[PLACEHOLDER: Quote Turnaround, e.g. 48–72 hrs]',
    detail:
      'You receive a clear written specification listing exact metal thickness (.032" aluminum, 24-ga steel, or 16 oz. copper), hanger spacing, downspout sizes, and line-item pricing—so you can compare apples to apples.',
  },
  {
    step: '03',
    title: 'Shop Pre-Fabrication & Clean Residential Install',
    duration: 'Scheduled around clear weather',
    detail:
      'Custom flashings and miters are bent on our shop brake before the truck arrives; seamless gutters and panels are formed cleanly at the curb, with magnetic nail sweeps and full scrap haul-away before handoff.',
  },
];

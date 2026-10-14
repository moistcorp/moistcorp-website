export type Product = {
  id: string;
  slug: string;
  name: string;
  summary: string;
  images: readonly [string, string];
  fabric: readonly string[];
  fit: readonly string[];
  construction: readonly string[];
  finishing: readonly string[];
  customisation: readonly string[];
  variants?: readonly {
    name: string;
    image: string;
    detail: string;
  }[];
  variantSection?: {
    label: string;
    title: string;
    copy: string;
  };
};

export const products: readonly Product[] = [
  {
    id: "001",
    slug: "t-shirts",
    name: "T-shirts",
    summary: "Jersey T-shirts developed for everyday, premium and merchandise programs.",
    images: ["/products/tshirt.jpg", "/products/tshirts-2.jpg"],
    fabric: ["Combed cotton jersey", "Organic cotton options", "Cotton-elastane blends", "Weight selected to product brief"],
    fit: ["Regular", "Relaxed", "Oversized", "Custom block development"],
    construction: ["Ribbed crew neck", "Shoulder reinforcement", "Coverstitched hems", "Single-needle or twin-needle detailing"],
    finishing: ["Enzyme or silicone wash", "Garment dye options", "Pre-shrink treatment", "Measurement and appearance inspection"],
    customisation: ["Screen printing", "Custom artwork placement", "Custom labels, trims and packaging"],
  },
  {
    id: "002",
    slug: "hoodies",
    name: "Hoodies",
    summary: "Pullover and zip hoodie programs engineered around the required weight, hand feel and silhouette.",
    images: ["/products/hoodie.jpg", "/products/hoodies-2.jpg"],
    fabric: ["Brushed cotton fleece", "French terry", "Cotton-polyester blends", "Recycled fibre options"],
    fit: ["Regular", "Relaxed", "Oversized", "Cropped or extended body"],
    construction: ["Pullover or zip-through", "Single or double-layer hood", "Kangaroo or welt pockets", "Rib cuff and hem construction"],
    finishing: ["Brushed or loopback interior", "Garment wash options", "Pre-shrink treatment", "Shape and seam inspection"],
    customisation: ["Screen printing", "Custom artwork placement", "Custom drawcords and hardware", "Custom labels and packaging"],
  },
  {
    id: "003",
    slug: "sweatshirts",
    name: "Sweatshirts",
    summary: "Crewneck and specialty sweatshirt programs with controlled structure and consistent finishing.",
    images: ["/products/sweatshirt-4.png", "/products/sweatshirt-5.png"],
    fabric: ["Brushed fleece", "French terry", "Cotton-rich blends", "Recycled fibre options"],
    fit: ["Regular", "Relaxed", "Oversized", "Drop-shoulder development"],
    construction: ["Crew or specialty neckline", "Set-in or raglan sleeve", "Rib cuff, neck and hem", "Reinforced stress points"],
    finishing: ["Softener wash", "Garment dye options", "Pre-shrink treatment", "Measurement and appearance inspection"],
    customisation: ["Screen printing", "Custom artwork placement", "Custom labels and packaging"],
    variants: [
      {
        name: "Floral Gradient",
        image: "/products/sweatshirt-4.png",
        detail: "Crewneck sweatshirt with monochrome floral artwork and a gradient screen-print treatment.",
      },
      {
        name: "Distressed Gradient",
        image: "/products/sweatshirt-5.png",
        detail: "Oversized crewneck with gradient screen printing and distressed surface detailing.",
      },
      {
        name: "Sleeve Graphic",
        image: "/products/sweatshirts-3.jpg",
        detail: "Classic crewneck with screen-printed artwork placed across both sleeves.",
      },
      {
        name: "Washed Crewneck",
        image: "/products/sweatshirt.jpg",
        detail: "Minimal crewneck developed with a washed finish and clean construction.",
      },
    ],
    variantSection: {
      label: "PROGRAM 003 / PRODUCT EXAMPLES",
      title: "ONE PROGRAM. MULTIPLE DIRECTIONS.",
      copy: "Sweatshirt programs can be developed across artwork, wash and surface treatments while retaining controlled fit and construction.",
    },
  },
  {
    id: "004",
    slug: "cargo-pants",
    name: "Cargo pants",
    summary: "Utility-led woven bottoms with configurable pockets, hardware and fit architecture.",
    images: ["/products/cargo.jpg", "/products/cargo-1.jpg"],
    fabric: ["Cotton twill", "Ripstop", "Stretch woven", "Washed canvas options"],
    fit: ["Straight", "Relaxed", "Tapered", "Custom rise and leg profile"],
    construction: ["Cargo pocket systems", "Reinforced seat and stress points", "Zip or button fly", "Fixed, elasticated or adjustable waist"],
    finishing: ["Garment wash options", "Enzyme or pigment finish", "Hardware inspection", "Measurement and seam-strength checks"],
    customisation: ["Screen printing", "Custom pocket layout", "Branded buttons and hardware", "Custom labels and packaging"],
  },
  {
    id: "005",
    slug: "shorts",
    name: "Shorts",
    summary: "Knit and woven shorts developed for leisure, active and utility-led collections.",
    images: ["/products/shorts6.jpg", "/products/shorts-1.webp"],
    fabric: ["French terry", "Cotton jersey", "Cotton twill", "Performance woven options"],
    fit: ["Regular", "Relaxed", "Athletic", "Custom inseam and rise"],
    construction: ["Elasticated waistband", "Internal or external drawcord", "Side, welt or patch pockets", "Reinforced stress points"],
    finishing: ["Garment wash options", "Pre-shrink treatment", "Hardware and drawcord checks", "Measurement inspection"],
    customisation: ["Screen printing", "Custom trims", "Branded drawcords and hardware", "Custom labels and packaging"],
  },
  {
    id: "006",
    slug: "tote-bags",
    name: "Tote bags",
    summary: "Reusable fabric bags developed for retail, merchandise and promotional programs.",
    images: ["/products/totebag.jpg", "/products/totebag.jpg"],
    fabric: ["Cotton canvas", "Cotton twill", "Recycled cotton options", "Weight selected to carrying requirement"],
    fit: ["Standard", "Oversized", "Gusseted", "Custom dimensions"],
    construction: ["Reinforced handle attachment", "Flat or boxed base", "Lined or unlined", "Optional internal pocket and closure"],
    finishing: ["Natural or dyed fabric", "Garment wash options", "Load-point inspection", "Final appearance inspection"],
    customisation: ["Screen printing", "Custom handles and closures", "Custom labels and packaging"],
  },
  {
    id: "007",
    slug: "waffle-full-sleeves",
    name: "Waffle Full Sleeves",
    summary: "Full-sleeve waffle-knit tops developed as one program across three screen-printed artwork editions.",
    images: ["/products/saint_grace_waffle.png", "/products/phantom_crown_waffle.png"],
    fabric: ["Waffle-knit fabric", "Textured thermal surface", "Weight selected to product brief"],
    fit: ["Relaxed", "Oversized", "Full sleeve", "Custom block development"],
    construction: ["Ribbed crew neck", "Drop-shoulder sleeve", "Distressed or ripped raw-edge hem and cuffs", "Reinforced shoulder seams"],
    finishing: ["Screen printing", "Rhinestone application on Starfall Ripped", "Distressed edge finishing", "Measurement and appearance inspection"],
    customisation: ["Screen printing", "Body and sleeve artwork placement", "Optional rhinestone artwork", "Custom labels, trims and packaging"],
    variants: [
      {
        name: "Saint Grace",
        image: "/products/saint_grace_waffle.png",
        detail: "All-over screen-printed artwork with distressed edge detailing.",
      },
      {
        name: "Phantom Crown",
        image: "/products/phantom_crown_waffle.png",
        detail: "Oversized screen-printed artwork across the body and sleeves.",
      },
      {
        name: "Starfall Ripped",
        image: "/products/starfall_ripped_waffle.png",
        detail: "Screen-printed artwork, rhinestone embellishment and ripped raw edges.",
      },
    ],
    variantSection: {
      label: "PROGRAM 007 / ARTWORK EDITIONS",
      title: "ONE PROGRAM. THREE EDITIONS.",
      copy: "All three waffle full-sleeve designs share the same product program, with artwork and finishing specified by edition.",
    },
  },
] as const;

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

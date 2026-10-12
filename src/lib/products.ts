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
    customisation: ["Screen print", "Embroidery", "Heat transfer", "Custom labels, trims and packaging"],
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
    customisation: ["Print and embroidery", "Appliqué", "Custom drawcords and hardware", "Custom labels and packaging"],
  },
  {
    id: "003",
    slug: "sweatshirts",
    name: "Sweatshirts",
    summary: "Crewneck and specialty sweatshirt programs with controlled structure and consistent finishing.",
    images: ["/products/sweatshirt.jpg", "/products/sweatshirts-3.jpg"],
    fabric: ["Brushed fleece", "French terry", "Cotton-rich blends", "Recycled fibre options"],
    fit: ["Regular", "Relaxed", "Oversized", "Drop-shoulder development"],
    construction: ["Crew or specialty neckline", "Set-in or raglan sleeve", "Rib cuff, neck and hem", "Reinforced stress points"],
    finishing: ["Softener wash", "Garment dye options", "Pre-shrink treatment", "Measurement and appearance inspection"],
    customisation: ["Screen print", "Embroidery", "Appliqué and patches", "Custom labels and packaging"],
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
    customisation: ["Custom pocket layout", "Branded buttons and hardware", "Embroidery and patches", "Custom labels and packaging"],
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
    customisation: ["Print and embroidery", "Custom trims", "Branded drawcords and hardware", "Custom labels and packaging"],
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
    customisation: ["Screen print", "Embroidery", "Custom handles and closures", "Custom labels and packaging"],
  },
] as const;

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

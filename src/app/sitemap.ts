import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const productPages = products.map(({ slug }) => ({ url: `https://moistcorp.com/products/${slug}`, lastModified: "2026-10-15", priority: 0.7 }));
  return [
    { url: "https://moistcorp.com", lastModified: "2026-10-15", priority: 1.0 },
    { url: "https://moistcorp.com/about", lastModified: "2026-07-01", priority: 0.8 },
    { url: "https://moistcorp.com/capabilities", lastModified: "2026-10-12", priority: 0.8 },
    { url: "https://moistcorp.com/products", lastModified: "2026-10-12", priority: 0.9 },
    ...productPages,
    { url: "https://moistcorp.com/infrastructure", lastModified: "2026-10-02", priority: 0.8 },
    { url: "https://moistcorp.com/case-studies", lastModified: "2026-10-04", priority: 0.8 },
    ...caseStudies.map(({ slug }) => ({ url: `https://moistcorp.com/case-studies/${slug}`, lastModified: "2026-10-04", priority: 0.7 })),
    { url: "https://moistcorp.com/contact", lastModified: "2026-07-01", priority: 0.7 },
    { url: "https://moistcorp.com/blog", lastModified: "2026-07-01", priority: 0.6 },
    {
      url: "https://moistcorp.com/blog/ai-supply-chain-apparel-manufacturing",
      lastModified: "2026-06-08",
      priority: 0.5,
    },
    {
      url: "https://moistcorp.com/blog/inventory-financial-risk-apparel-brands",
      lastModified: "2026-06-08",
      priority: 0.5,
    },
  ]
}

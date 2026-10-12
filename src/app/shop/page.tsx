import type { Metadata } from "next";
import { ArrowLink, ImagePanel, SystemLabel } from "@/components/System";

export const metadata: Metadata = {
  title: "Shop — Coming Soon | Moist Corp",
  description: "The Moist Corp online shop is coming soon.",
  alternates: { canonical: "/shop" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Shop — Coming Soon | Moist Corp",
    description: "The Moist Corp online shop is coming soon.",
    url: "/shop",
    images: ["/products/tshirt.jpg"],
    type: "website",
  },
};

export default function ShopPage() {
  return <main id="main-content" className="shop-coming-soon grid-light">
    <div className="container shop-coming-soon-grid">
      <div className="shop-coming-soon-copy">
        <SystemLabel>RETAIL CHANNEL / PRE-LAUNCH</SystemLabel>
        <p className="shop-status"><span aria-hidden="true" />COMING SOON</p>
        <h1>THE SHOP<br />IS TAKING<br />SHAPE.</h1>
        <p>We’re preparing the first Moist Corp online release. Until then, explore what we manufacture or speak with our team about a production project.</p>
        <div className="button-row"><ArrowLink href="/products">EXPLORE PRODUCTS</ArrowLink><ArrowLink href="/contact" secondary>CONTACT THE TEAM</ArrowLink></div>
      </div>
      <ImagePanel src="/products/tshirt.jpg" alt="Moist Corp apparel product preview" code="MC / SHOP PREVIEW" caption="RETAIL RELEASE / IN DEVELOPMENT" priority className="shop-coming-soon-image" />
    </div>
  </main>;
}

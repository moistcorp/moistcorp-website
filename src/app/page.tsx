import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Moist Corp | Clothing Manufacturer India",
  description:
    "Moist Corp is a clothing manufacturer helping apparel brands with product development, sourcing, manufacturing, quality assurance and logistics.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Moist Corp | Clothing Manufacturer India",
    description:
      "Moist Corp is a clothing manufacturer helping apparel brands with product development, sourcing, manufacturing, quality assurance and logistics.",
    url: "/",
    siteName: "Moist Corp",
    images: ["/factory-6.jpg"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moist Corp | Clothing Manufacturer India",
    description:
      "Moist Corp is a clothing manufacturer helping apparel brands with product development, sourcing, manufacturing, quality assurance and logistics.",
    images: ["/factory-6.jpg"],
  },
};

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">
              Clothing Manufacturer India - Greater Noida
            </p>

            <h1>
              We Build Supply Chains For Apparel Brands
            </h1>

            <p className="hero-text">
              From product development and fabric sourcing to sampling,
              manufacturing, quality control and delivery - Moist Corp
              manages the full production process so you don&apos;t have to.
            </p>

            <div className="hero-buttons">
              <a href="/contact" className="btn-primary">
                Start Your Project
              </a>
              <a
                href="/moist-corp-capability-deck.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Capability Deck
              </a>
            </div>

            <div className="hero-trust">
              <span>✓ 50 Piece MOQ</span>
              <span>✓ Under 35 Day Turnaround</span>
              <span>✓ Based in Greater Noida, India</span>
              <span>✓ Replies Within 24 Hours</span>
            </div>
          </div>

          <div>
            <Image
              src="/factory-6.jpg"
              alt="Moist Corp Clothing Manufacturer India"
              width={960}
              height={1280}
              className="hero-image"
              priority
              sizes="(max-width: 768px) 90vw, 45vw"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-strip">
        <div className="container stats-grid">
          <div>
            <strong>46,000+</strong>
            <span>SQ FT Infrastructure</span>
          </div>
          <div>
            <strong>98%</strong>
            <span>On-Time Delivery</span>
          </div>
          <div>
            <strong>&lt;35 Days</strong>
            <span>Production Cycle</span>
          </div>
          <div>
            <strong>50 PCS</strong>
            <span>Starting MOQ</span>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="social-proof-strip">
        <div className="container">
          <p className="social-proof-text">
            Trusted by independent apparel brands, cafes, and companies across India
          </p>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="section">
        <div className="container">
          <h2>Who We Work With</h2>

          <div className="grid">
            <div className="card">
              <h3 className="card-title">New Brand Founders</h3>
              <p className="card-desc">
                Launching your first collection? We work with founders from
                sampling through to bulk production, with a starting MOQ of
                just 50 pieces. No experience needed - we guide you through
                the full process.
              </p>
            </div>

            <div className="card">
              <h3 className="card-title">Scaling Apparel Brands</h3>
              <p className="card-desc">
                Already running but need a more reliable production partner?
                We plug into your existing workflow and deliver consistent
                quality at volume - with timelines you can actually build
                a launch calendar around.
              </p>
            </div>

            <div className="card">
              <h3 className="card-title">Companies & Cafes</h3>
              <p className="card-desc">
                Need branded merch, staff uniforms, or welcome kits? We
                handle custom apparel for businesses - hoodies, tees, tote
                bags and more - with small runs welcome from 50 pieces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM VS SOLUTION */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2>Why Brands Switch To Moist Corp</h2>

          <div className="compare-grid">

            <div className="compare-col compare-old">
              <h3 className="compare-heading">The Old Way</h3>
              <ul className="compare-list">
                <li>High MOQs that force overcommitting on volume</li>
                <li>Timelines quoted but never honoured</li>
                <li>No visibility into where your order actually is</li>
                <li>Chasing suppliers for updates that never come</li>
                <li>Delayed launches and dead inventory</li>
                <li>Multiple vendors to manage for one product</li>
              </ul>
            </div>

            <div className="compare-col compare-new">
              <h3 className="compare-heading">The Moist Corp Way</h3>
              <ul className="compare-list">
                <li>Start from 50 pieces - scale as you grow</li>
                <li>Production cycle confirmed before order is placed</li>
                <li>Full transparency at every stage of production</li>
                <li>Proactive communication - you are never left waiting</li>
                <li>98% on-time delivery, under 35 days</li>
                <li>One partner handles the entire process end to end</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* THE MOIST CORP MODEL */}
      <section id="model" className="section" style={{ paddingTop: 0 }}>
        <div className="container model-grid">

          <div className="model-text">
            <h2>The Moist Corp Model</h2>
            <p>Most brands coordinate multiple production partners.</p>
            <p>We coordinate the entire ecosystem.</p>
            <p>
              Rather than relying on a single factory, Moist Corp builds
              product-specific supply chains by combining specialist
              manufacturers, quality systems and production oversight
              into one streamlined process.
            </p>
            <p>This creates:</p>
            <ul className="model-list">
              <li>Better Quality</li>
              <li>Faster Development</li>
              <li>Higher Visibility</li>
              <li>Lower Risk</li>
              <li>Scalable Production</li>
            </ul>
          </div>

          <div>
            <Image
              src="/factory-4.jpg"
              alt="Moist Corp production model inside the manufacturing facility"
              width={750}
              height={1000}
              className="hero-image"
              sizes="(max-width: 768px) 90vw, 45vw"
            />
          </div>

        </div>
      </section>

      {/* PRODUCT GALLERY */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2>Products We Manufacture</h2>

          <div className="product-gallery">
            <div className="gallery-item">
              <Image src="/products/tshirt.jpg" alt="T-Shirts" width={800} height={1000} sizes="(max-width: 768px) 45vw, 33vw" />
              <div className="gallery-tags">
                <span className="gallery-tag">T-Shirts</span>
              </div>
            </div>

            <div className="gallery-item">
              <Image src="/products/hoodie.jpg" alt="Hoodies" width={1280} height={1230} sizes="(max-width: 768px) 45vw, 33vw" />
              <div className="gallery-tags">
                <span className="gallery-tag">Hoodies</span>
              </div>
            </div>

            <div className="gallery-item">
              <Image src="/products/sweatshirt.jpg" alt="Sweatshirts" width={720} height={960} sizes="(max-width: 768px) 45vw, 33vw" />
              <div className="gallery-tags">
                <span className="gallery-tag">Sweatshirts</span>
              </div>
            </div>

            <div className="gallery-item">
              <Image src="/products/cargo.jpg" alt="Cargo Pants" width={2160} height={2880} sizes="(max-width: 768px) 45vw, 33vw" />
              <div className="gallery-tags">
                <span className="gallery-tag">Cargo Pants</span>
              </div>
            </div>

            <div className="gallery-item">
              <Image src="/products/totebag.jpg" alt="Tote Bags" width={2000} height={2000} sizes="(max-width: 768px) 45vw, 33vw" />
              <div className="gallery-tags">
                <span className="gallery-tag">Tote Bags</span>
              </div>
            </div>

            <div className="gallery-item">
              <Image src="/products/shorts6.jpg" alt="Shorts" width={1000} height={1000} sizes="(max-width: 768px) 45vw, 33vw" />
              <div className="gallery-tags">
                <span className="gallery-tag">Shorts</span>
              </div>
            </div>
          </div>

          <div className="gallery-cta">
            <a href="/products" className="btn-secondary">
              View All Products
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container narrow">
          <h2>Common Questions</h2>

          <div className="faq-list">

            <div className="faq-item">
              <h3 className="faq-question">What is your minimum order quantity?</h3>
              <p className="faq-answer">
                Our starting MOQ is 50 pieces per style. This makes us
                accessible to brand founders launching their first collection
                as well as established labels running smaller seasonal drops.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">How long does production take?</h3>
              <p className="faq-answer">
                Our production cycle runs under 35 days from confirmed order
                to finished goods. Sampling timelines are discussed and agreed
                before any order is placed.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Do you work with first-time brand founders?</h3>
              <p className="faq-answer">
                Yes. A significant part of our work is with founders launching
                their first collection. We guide you through the full process -
                from technical specifications and sampling through to bulk
                production and delivery.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">What products do you manufacture?</h3>
              <p className="faq-answer">
                We manufacture T-shirts, hoodies, sweatshirts, cargo pants,
                shorts, joggers, shirts, tank tops, baby tees, skirts, and
                tote bags. If you need something not listed, get in touch
                and we will assess whether we can help.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Can I visit the factory?</h3>
              <p className="faq-answer">
                Yes. Our facility is based in Greater Noida, Uttar Pradesh.
                We welcome client visits - reach out through the contact page
                to arrange a time.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section home-cta">
        <div className="container narrow" style={{ textAlign: "center" }}>
          <h2>Ready To Start Production?</h2>
          <p style={{ fontSize: "18px", color: "#555", marginBottom: "32px" }}>
            Tell us what you need. We will get back to you within 24 hours.
          </p>
          <div className="hero-buttons" style={{ justifyContent: "center" }}>
            <a href="/contact" className="btn-primary">
              Start Your Project
            </a>
            <a
              href="https://wa.me/919971510083?text=Hi%2C%20I%20found%20Moist%20Corp%20online%20and%20would%20like%20to%20know%20more%20about%20your%20manufacturing%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}

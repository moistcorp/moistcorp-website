import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">
              Clothing Manufacturer India
            </p>

            <h1>
              We Build Supply Chains For Apparel Brands
            </h1>

            <p className="hero-text">
              From product development and fabric sourcing to sampling, manufacturing, quality control and delivery — Moist Corp manages the full production process so you don't have to.
            </p>

            <div className="hero-buttons">
              <a href="/contact" className="btn-primary">
                Start Your Project
              </a>

              <a
                href="/moist-corp-capability-deck.pdf"
                target="_blank"
                className="btn-secondary"
              >
                Capability Deck
              </a>
            </div>
          </div>

          <div>
            <Image
              src="/factory-6.jpg"
              alt="Moist Corp Factory"
              width={1200}
              height={800}
              className="hero-image"
              priority
            />
          </div>
        </div>
      </section>

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

      {/* THE MOIST CORP MODEL */}
      <section id="model" className="section">
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
              src="/factory-5.jpg"
              alt="Moist Corp Model"
              width={800}
              height={600}
              className="hero-image"
            />
          </div>

        </div>
      </section>

      {/* PRODUCT GALLERY */}
      <section className="section">
        <div className="container">
          <h2>Products We Manufacture</h2>

          <div className="product-gallery">
            <div className="gallery-item">
              <Image src="/products/tshirt.webp" alt="T-Shirts" width={600} height={750} />
              <div className="gallery-tags">
                <span className="gallery-tag">T-Shirts</span>
              </div>
            </div>

            <div className="gallery-item">
              <Image src="/products/hoodie.jpg" alt="Hoodies" width={600} height={750} />
              <div className="gallery-tags">
                <span className="gallery-tag">Hoodies</span>
              </div>
            </div>

            <div className="gallery-item">
              <Image src="/products/sweatshirt.jpg" alt="Sweatshirts" width={600} height={750} />
              <div className="gallery-tags">
                <span className="gallery-tag">Sweatshirts</span>
              </div>
            </div>

            <div className="gallery-item">
              <Image src="/products/cargo.jpg" alt="Cargo Pants" width={600} height={750} />
              <div className="gallery-tags">
                <span className="gallery-tag">Cargo Pants</span>
              </div>
            </div>

            <div className="gallery-item">
              <Image src="/products/totebag.webp" alt="Tote Bags" width={600} height={750} />
              <div className="gallery-tags">
                <span className="gallery-tag">Tote Bags</span>
              </div>
            </div>

            <div className="gallery-item">
              <Image src="/products/shorts.webp" alt="Shorts" width={600} height={750} />
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

    </main>
  );
}

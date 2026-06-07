import Image from "next/image";

export default function Home() {
  return (
    <main>

      {/* Header */}

      <header className="header">
        <div className="container header-content">

          <div className="logo">
            <Image
              src="/moistcorp-logo.png"
              alt="Moist Corp"
              width={75}
              height={70}
              priority
            />
          </div>

          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#products">Products</a>
            <a href="#printing">Printing</a>
            <a href="#contact">Contact</a>
          </nav>

        </div>
      </header>

      {/* Hero */}

      <section className="hero">
        <div className="container">

          <h1>
            Manufacturing Built For Modern Brands
          </h1>

          <p>
            Moist Corp helps brands manufacture apparel,
            merchandise, and custom products with complete
            transparency, quality control, and supply chain support.
          </p>

          <a href="#contact" className="button">
            Start Your Project
          </a>

        </div>
      </section>

      {/* Services */}

      <section id="services" className="section grey">
        <div className="container">

          <h2>Our Services</h2>

          <div className="grid">

            <div className="card">
              <h3>Manufacturing</h3>
              <p>End-to-end apparel production.</p>
            </div>

            <div className="card">
              <h3>Quality Control</h3>
              <p>Multi-stage inspections before shipment.</p>
            </div>

            <div className="card">
              <h3>Printing</h3>
              <p>Premium garment decoration solutions.</p>
            </div>

            <div className="card">
              <h3>Logistics</h3>
              <p>Shipment coordination and tracking.</p>
            </div>

          </div>

        </div>
      </section>

      {/* Products */}

      <section id="products" className="section">
        <div className="container">

          <h2>Products We Manufacture</h2>

          <div className="grid">
            <div className="card">Classic T-Shirt</div>
            <div className="card">Boxy T-Shirt</div>
            <div className="card">Classic Hoodie</div>
            <div className="card">Boxy Hoodie</div>
            <div className="card">Sweatshirts</div>
            <div className="card">Tote Bags</div>
          </div>

        </div>
      </section>

      {/* Printing */}

      <section id="printing" className="section grey">
        <div className="container">

          <h2>Printing Techniques</h2>

          <div className="grid">
            <div className="card">Digital Printing</div>
            <div className="card">Screen Printing</div>
            <div className="card">Puff Printing</div>
            <div className="card">Embroidery</div>
            <div className="card">3D Embroidery</div>
            <div className="card">Reflective Heat Transfer</div>
          </div>

        </div>
      </section>

      {/* Contact */}

      <section id="contact" className="section contact">
        <div className="container">

          <h2>Let's Build Your Next Collection</h2>

          <p>
            Get in touch to discuss your manufacturing requirements.
          </p>

          <a
            href="mailto:info@moistcorp.com"
            className="button"
          >
            Contact Us
          </a>

        </div>
      </section>

    </main>
  );
}
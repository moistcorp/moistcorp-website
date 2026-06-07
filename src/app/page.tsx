import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="header">
  <div className="container header-inner">
    <Image
      src="/moistcorp-logo.png"
      alt="Moist Corp"
      width={75}
      height={70}
      priority
    />
  </div>
</header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">
              Manufacturing Partner For Modern Apparel Brands
            </p>

            <h1>
              Premium Clothing Manufacturer For Modern Apparel Brands
            </h1>

            <p className="hero-text">
              Moist Corp helps apparel brands with product development,
              sourcing, sampling, manufacturing, quality assurance and
              logistics.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">
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

      <section id="process" className="section grey">
        <div className="container">
          <h2>The Moist Corp Process</h2>

          <div className="grid">
            <div className="card">01 Product Development</div>
            <div className="card">02 Fabric & Trim Sourcing</div>
            <div className="card">03 Sampling</div>
            <div className="card">04 Manufacturing</div>
            <div className="card">05 Quality Assurance</div>
            <div className="card">06 Logistics</div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <h2>Our Services</h2>

          <div className="grid">
            <div className="card">Product Development</div>
            <div className="card">Fabric & Trim Sourcing</div>
            <div className="card">Sampling</div>
            <div className="card">Manufacturing</div>
            <div className="card">Quality Assurance</div>
            <div className="card">Logistics Coordination</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Products We Manufacture</h2>

          <div className="grid">
            <div className="card">T-Shirts</div>
            <div className="card">Hoodies</div>
            <div className="card">Sweatshirts</div>
            <div className="card">Cargo Pants</div>
            <div className="card">Joggers</div>
            <div className="card">Shorts</div>
            <div className="card">Shirts</div>
            <div className="card">Tank Tops</div>
          </div>
        </div>
      </section>

      ```tsx
<section
  id="contact"
  className="section cta"
>
  <div className="container narrow">

    <h2>
      Get A Manufacturing Quote
    </h2>

    <p>
      Tell us about your project and our team will get back to you.
    </p>

    <form
      action="https://formsubmit.co/irahulsig@gmail.com"
      method="POST"
      className="quote-form"
    >

      <input
        type="hidden"
        name="_subject"
        value="New Moist Corp Website Inquiry"
      />

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
      />

      <input
        type="text"
        name="brand"
        placeholder="Brand Name"
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
      />

      <select
        name="product"
        required
      >
        <option value="">
          Product Category
        </option>

        <option>T-Shirts</option>
        <option>Hoodies</option>
        <option>Sweatshirts</option>
        <option>Joggers</option>
        <option>Shorts</option>
        <option>Cargo Pants</option>
      </select>

      <select
        name="quantity"
        required
      >
        <option value="">
          Expected Quantity
        </option>

        <option>50-100 pcs</option>
        <option>100-300 pcs</option>
        <option>300-500 pcs</option>
        <option>500+ pcs</option>
      </select>

      <textarea
        name="message"
        placeholder="Tell us about your project"
        rows={6}
      />

      <button
        type="submit"
        className="btn-primary"
      >
        Request Quote
      </button>

    </form>

  </div>
</section>
```


  <footer className="footer">
  <div className="container footer-simple">

    <div className="footer-contact">

      <p>
        Greater Noida, Uttar Pradesh, India
      </p>

      <p>
        info@moistcorp.com
      </p>

      <p>
        www.moistcorp.com
      </p>

    </div>

    <div className="footer-bottom">
      <p>
        © 2026 Moist Corp. All Rights Reserved.
      </p>
    </div>

  </div>
</footer>
    </main>
  );
}
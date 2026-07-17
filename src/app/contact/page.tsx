import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us | Moist Corp — Clothing Manufacturer India",
  description:
    "Get in touch with Moist Corp to start your apparel manufacturing project. Based in Greater Noida, India — product development, sourcing, manufacturing, QA and logistics for clothing brands.",
  alternates: {
    canonical: "https://moistcorp.com/contact",
  },
  openGraph: {
    title: "Contact Moist Corp | Clothing Manufacturer India",
    description:
      "Start your apparel manufacturing project with Moist Corp — product development, sourcing, manufacturing, QA and logistics for clothing brands, based in Greater Noida, India.",
    url: "https://moistcorp.com/contact",
    siteName: "Moist Corp",
    images: ["/factory-5.jpg"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Moist Corp | Clothing Manufacturer India",
    description:
      "Start your apparel manufacturing project with Moist Corp — product development, sourcing, manufacturing, QA and logistics for clothing brands.",
    images: ["/factory-5.jpg"],
  },
};

export default function ContactPage() {
  return (
    <main>

      <section className="section">
        <div className="container contact-layout">

          {/* LEFT COLUMN: text + image */}
          <div className="contact-left">

            <h1>Contact Us</h1>

            <p className="hero-text">
              Want To Lead The New Age Of Apparel Manufacturing?
            </p>

            <p className="hero-text">
              Contact us to discover how Moist Corp can help elevate your products,
              optimize production, reduce costs, shorten lead times and streamline
              manufacturing operations.
            </p>

            <p className="hero-text">
              Whether you are launching a new brand, scaling an existing business
              or looking for a more reliable production partner, our team can
              support you through every stage of the manufacturing process.
            </p>

            <p className="hero-text">
              Tell us more about your business, products and objectives, and we'll
              assess whether Moist Corp is the right manufacturing partner for
              your needs.
            </p>

            <Image
              src="/factory-5.jpg"
              alt="Moist Corp Factory"
              width={800}
              height={550}
              className="contact-image"
            />

          </div>

          {/* RIGHT COLUMN: form */}
          <div className="contact-right">

            <h2>Contact Form</h2>

            <form
              action="https://formsubmit.co/irahulsig@gmail.com"
              method="POST"
              className="contact-form"
            >

              <input
                type="hidden"
                name="_subject"
                value="New Moist Corp Inquiry"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <div className="form-grid">

                <div>
                  <label>First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                  />
                </div>

                <div>
                  <label>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                  />
                </div>

                <div>
                  <label>Company Name *</label>
                  <input
                    type="text"
                    name="company"
                    required
                  />
                </div>

                <div>
                  <label>Website URL</label>
                  <input
                    type="url"
                    name="website"
                  />
                </div>

                <div>
                  <label>Business Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                  />
                </div>

                <div>
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                  />
                </div>

                <div>
                  <label>Monthly Order Quantity</label>

                  <select name="quantity">
                    <option>50 - 200 pcs</option>
                    <option>200 - 500 pcs</option>
                    <option>500 - 1000 pcs</option>
                    <option>1000+ pcs</option>
                  </select>
                </div>

                <div>
                  <label>Product Category</label>

                  <select name="category">
                    <option>T-Shirts</option>
                    <option>Hoodies</option>
                    <option>Sweatshirts</option>
                    <option>Shorts</option>
                    <option>Joggers</option>
                    <option>Multiple Products</option>
                  </select>
                </div>

              </div>

              <div className="message-field">

                <label>Project Details</label>

                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us about your products, target quantity, timelines and manufacturing requirements."
                />

              </div>

              <button
                type="submit"
                className="btn-primary"
              >
                Submit Inquiry
              </button>

            </form>

          </div>

        </div>
      </section>

    </main>
  );
}

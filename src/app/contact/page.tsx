import { Metadata } from "next";
import Image from "next/image";
import ContactForm from "../../components/ContactForm";

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
              Tell us more about your business, products and objectives, and we&apos;ll
              assess whether Moist Corp is the right manufacturing partner for
              your needs.
            </p>

            <Image
              src="/factory-5.jpg"
              alt="Moist Corp apparel manufacturing facility"
              width={800}
              height={1000}
              className="contact-image"
              sizes="(max-width: 768px) 90vw, 45vw"
            />

          </div>

          {/* RIGHT COLUMN: form */}
          <div className="contact-right">

            <h2>Contact Form</h2>

            <ContactForm />

          </div>

        </div>
      </section>

    </main>
  );
}

import type { Metadata } from "next";
import Header from "./components/header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://moistcorp.com"),
  title: {
    default: "Moist Corp | Clothing Manufacturer India",
    template: "%s",
  },
  description:
    "Moist Corp is a clothing manufacturer helping apparel brands with product development, sourcing, manufacturing, quality assurance and logistics.",
  keywords: [
    "clothing manufacturer India",
    "apparel manufacturer India",
    "custom clothing manufacturing",
    "private label clothing manufacturer",
    "t-shirt manufacturer India",
    "hoodie manufacturer India",
    "Greater Noida clothing manufacturer",
  ],
  openGraph: {
    title: "Moist Corp | Clothing Manufacturer India",
    description:
      "Moist Corp is a clothing manufacturer helping apparel brands with product development, sourcing, manufacturing, quality assurance and logistics.",
    siteName: "Moist Corp",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moist Corp | Clothing Manufacturer India",
    description:
      "Moist Corp is a clothing manufacturer helping apparel brands with product development, sourcing, manufacturing, quality assurance and logistics.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  additionalType: "https://schema.org/Manufacturer",
  name: "Moist Corp",
  url: "https://moistcorp.com",
  logo: "https://moistcorp.com/logo2.png",
  description:
    "Moist Corp is a clothing manufacturer helping apparel brands with product development, sourcing, manufacturing, quality assurance and logistics.",
  email: "info@moistcorp.com",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "K-320",
      addressLocality: "Greater Noida",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Q-5",
      addressLocality: "Greater Noida",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
  ],
  sameAs: [
    "https://instagram.com/moist.corp",
    "https://linkedin.com/company/moist-corp",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />

        <Header />

        {children}

        <footer className="footer">
          <div className="container">

            <div className="footer-top">

              <div className="footer-col">
                <p className="footer-company-name">Moist Corp</p>
                <p>info@moistcorp.com</p>
                <p>www.moistcorp.com</p>
                <div className="social-links">
                  <a
                    href="https://instagram.com/moist.corp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://linkedin.com/company/moist-corp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="footer-companies">
                <div className="footer-col">
                  <p className="footer-company-name">K-320</p>
                  <p>Greater Noida, Uttar Pradesh, India</p>
                </div>

                <div className="footer-col">
                  <p className="footer-company-name">Q-5</p>
                  <p>Greater Noida, Uttar Pradesh, India</p>
                </div>
              </div>

            </div>

            <div className="footer-bottom">
              <p>© 2026 Moist Corp. All Rights Reserved.</p>
              <div className="footer-legal">
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms">Terms &amp; Conditions</a>
              </div>
            </div>

          </div>
        </footer>

        {/* FLOATING WHATSAPP BUTTON */}
        <a
          href="https://wa.me/918800711169?text=Hi%2C%20I%20found%20Moist%20Corp%20online%20and%20would%20like%20to%20know%20more%20about%20your%20manufacturing%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="28"
            height="28"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="whatsapp-label">Chat with us</span>
        </a>

      </body>
    </html>
  );
}

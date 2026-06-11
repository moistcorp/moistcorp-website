import type { Metadata } from "next";
import Header from "./components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moist Corp | Clothing Manufacturer India",
  description:
    "Moist Corp is a clothing manufacturer helping apparel brands with product development, sourcing, manufacturing, quality assurance and logistics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <Header />

        {children}

        <footer className="footer">
          <div className="container">

            <div className="footer-top">

              <div className="footer-col">
                <p>Greater Noida, Uttar Pradesh, India</p>
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

      </body>
    </html>
  );
}

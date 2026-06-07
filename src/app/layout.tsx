import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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

        {/* HEADER */}

        <header className="header">
          <div className="container header-inner">

            <Link href="/">
              <Image
                src="/moistcorp-logo.png"
                alt="Moist Corp"
                width={85}
                height={80}
                priority
              />
            </Link>

            <nav className="nav">
              <Link href="/about">About</Link>
            </nav>

          </div>
        </header>

        {/* PAGE CONTENT */}

        {children}

        {/* FOOTER */}

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

      </body>
    </html>
  );
}
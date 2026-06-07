import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata = {
  title: "Moist Corp",
  description: "Manufacturing Built For Modern Brands",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
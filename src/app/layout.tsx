import "./globals.css";

export const metadata = {
  title: "Moist Corp | Clothing Manufacturer India",
  description:
    "Clothing manufacturer in India offering product development, sourcing, sampling, manufacturing, quality control and logistics.",
  keywords: [
    "clothing manufacturer india",
    "apparel manufacturer india",
    "private label clothing manufacturer",
    "garment manufacturer india",
    "low MOQ clothing manufacturer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

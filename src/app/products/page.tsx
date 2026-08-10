import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Custom Clothing Manufacturing | T-Shirts, Hoodies & More — Moist Corp",
  description:
    "Browse the apparel categories Moist Corp manufactures — custom t-shirts, hoodies, sweatshirts, cargo pants, shorts and tote bags. Private label and bulk production from our Greater Noida, India facility.",
  alternates: {
    canonical: "https://moistcorp.com/products",
  },
  openGraph: {
    title: "Custom Clothing Manufacturing | Moist Corp",
    description:
      "Custom t-shirts, hoodies, sweatshirts, cargo pants, shorts and tote bags — private label and bulk apparel manufacturing from Greater Noida, India.",
    url: "https://moistcorp.com/products",
    siteName: "Moist Corp",
    images: ["/product-4.jpg"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Clothing Manufacturing | Moist Corp",
    description:
      "Custom t-shirts, hoodies, sweatshirts, cargo pants, shorts and tote bags — private label and bulk apparel manufacturing from Greater Noida, India.",
    images: ["/product-4.jpg"],
  },
};

const categories = [
  {
    name: "T-Shirts",
    slug: "tshirts",
    images: [
      { src: "/products/tshirt.jpg", width: 800, height: 1000, brand: "" },
      { src: "/products/tshirts-2.jpg", width: 1536, height: 2048, brand: "" },
      { src: "/products/tshirts-3.jpg", width: 1536, height: 2048, brand: "" },
      { src: "/products/tshirts-4.jpg", width: 960, height: 1280, brand: "" },
      { src: "/products/tshirts-5.jpg", width: 960, height: 1280, brand: "" },
      { src: "/products/tshirts-6.jpg", width: 960, height: 1280, brand: "" },
      { src: "/products/tshirts-7.jpg", width: 1202, height: 1280, brand: "" },
      { src: "/products/tshirts-8.jpg", width: 960, height: 1280, brand: "" },
      { src: "/products/tshirts-9.jpg", width: 780, height: 1040, brand: "" },
    ],
  },
  {
    name: "Shorts",
    slug: "shorts",
    images: [
      { src: "/products/shorts-1.webp", width: 2160, height: 2880, brand: "" },
      { src: "/products/shorts-2.jpg", width: 659, height: 879, brand: "" },
      { src: "/products/shorts-3.jpg", width: 600, height: 800, brand: "" },
    ],
  },
  {
    name: "Cargo Pants",
    slug: "cargo-pants",
    images: [
      { src: "/products/cargo-1.jpg", width: 2160, height: 2880, brand: "" },
      { src: "/products/cargo.jpg", width: 2160, height: 2880, brand: "" },
    ],
  },
  
  {
    name: "Sweatshirts",
    slug: "sweatshirts",
    images: [
      { src: "/products/sweatshirts-1.jpg", width: 800, height: 1000, brand: "" },
      { src: "/products/sweatshirts-2.jpg", width: 1500, height: 2000, brand: "" },
      { src: "/products/sweatshirts-3.jpg", width: 1500, height: 2000, brand: "" },
      { src: "/products/sweatshirt.jpg", width: 720, height: 960, brand: "" },
      { src: "/products/sweatshirts-5.jpg", width: 960, height: 1280, brand: "" },
      { src: "/products/sweatshirts-6.jpg", width: 960, height: 1280, brand: "" },
    ],
  },
  {
    name: "Hoodies",
    slug: "hoodies",
    images: [
      { src: "/products/hoodies-1.jpg", width: 800, height: 1000, brand: "" },
      { src: "/products/hoodies-2.jpg", width: 1500, height: 2000, brand: "" },
      { src: "/products/hoodies-3.jpg", width: 800, height: 1000, brand: "" },
      { src: "/products/hoodie.jpg", width: 1280, height: 1230, brand: "" },
    ],
  },
  
  
  {
    name: "Tote Bags",
    slug: "tote-bags",
    images: [
      { src: "/products/totebag.jpg", width: 2000, height: 2000, brand: "" },
    ],
  },
];

export default function ProductsPage() {
  return (
    <main>

      <section className="section">
        <div className="container">

          <h1 className="products-heading">Products</h1>
          <p className="products-subheading">
            Everything we manufacture, built to your spec.
          </p>

        </div>
      </section>

      {categories.map((cat) => (
        <section key={cat.slug} className="products-category">
          <div className="container">

            <h2 className="category-title">{cat.name}</h2>

            <div className="products-grid">
              {cat.images.map((img, i) => (
                <div key={i} className="products-grid-item">
                  <Image
                    src={img.src}
                    alt={`${cat.name} ${i + 1}`}
                    width={img.width}
                    height={img.height}
                    sizes="(max-width: 768px) 45vw, 30vw"
                  />
                </div>
              ))}
            </div>

          </div>
        </section>
      ))}

      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <p style={{ marginBottom: "24px", fontSize: "18px", color: "#555" }}>
            Don&apos;t see what you&apos;re looking for? We manufacture custom products too.
          </p>
          <a href="/contact" className="btn-primary">
            Start Your Project
          </a>
        </div>
      </section>

    </main>
  );
}

import Image from "next/image";

const categories = [
  {
    name: "T-Shirts",
    slug: "tshirts",
    images: [
      { src: "/products/tshirts-1.jpg", brand: "" },
      { src: "/products/tshirts-2.jpg", brand: "" },
      { src: "/products/tshirts-3.jpg", brand: "" },
      { src: "/products/tshirts-4.jpg", brand: "" },
      { src: "/products/tshirts-5.jpg", brand: "" },
      { src: "/products/tshirts-6.jpg", brand: "" },
      { src: "/products/tshirts-7.jpg", brand: "" },
      { src: "/products/tshirts-8.jpg", brand: "" },
      { src: "/products/tshirts-9.jpg", brand: "" },
    ],
  },
  {
    name: "Shorts",
    slug: "shorts",
    images: [
      { src: "/products/shorts-1.webp", brand: "" },
      { src: "/products/shorts-2.jpg", brand: "" },
      { src: "/products/shorts-3.jpg", brand: "" },
    ],
  },
  {
    name: "Cargo Pants",
    slug: "cargo-pants",
    images: [
      { src: "/products/cargo-1.jpg", brand: "" },
      { src: "/products/cargo-2.jpg", brand: "" },
    ],
  },
  
  {
    name: "Sweatshirts",
    slug: "sweatshirts",
    images: [
      { src: "/products/sweatshirts-1.jpg", brand: "" },
      { src: "/products/sweatshirts-2.jpg", brand: "" },
      { src: "/products/sweatshirts-3.jpg", brand: "" },
      { src: "/products/sweatshirts-4.jpg", brand: "" },
      { src: "/products/sweatshirts-5.jpg", brand: "" },
      { src: "/products/sweatshirts-6.jpg", brand: "" },
    ],
  },
  {
    name: "Hoodies",
    slug: "hoodies",
    images: [
      { src: "/products/hoodies-1.jpg", brand: "" },
      { src: "/products/hoodies-2.jpg", brand: "" },
      { src: "/products/hoodies-3.jpg", brand: "" },
      { src: "/products/hoodies-4.jpg", brand: "" },
    ],
  },
  
  
  {
    name: "Tote Bags",
    slug: "tote-bags",
    images: [
      { src: "/products/totebag.jpg", brand: "" },
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
                    width={600}
                    height={750}
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
            Don't see what you're looking for? We manufacture custom products too.
          </p>
          <a href="/contact" className="btn-primary">
            Start Your Project
          </a>
        </div>
      </section>

    </main>
  );
}

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Apparel Manufacturing Insights — Moist Corp",
  description:
    "Insights on apparel manufacturing, supply chain risk and building better clothing brands, from the Moist Corp team in Greater Noida, India.",
  alternates: {
    canonical: "https://moistcorp.com/blog",
  },
  openGraph: {
    title: "Blog | Apparel Manufacturing Insights — Moist Corp",
    description:
      "Insights on apparel manufacturing, supply chain risk and building better clothing brands, from the Moist Corp team.",
    url: "https://moistcorp.com/blog",
    siteName: "Moist Corp",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Apparel Manufacturing Insights — Moist Corp",
    description:
      "Insights on apparel manufacturing, supply chain risk and building better clothing brands, from the Moist Corp team.",
  },
};

const posts = [
  {
    slug: "inventory-financial-risk-apparel-brands",
    title: "Why Inventory Is One of the Biggest Financial Risks for Apparel Brands",
    date: "June 8, 2026",
    category: "Supply Chain",
    excerpt:
      "Unsold stock doesn't just sit there — it actively destroys margins. Here's why inventory risk in fashion is a structural supply chain problem, not a forecasting one.",
  },
  {
    slug: "ai-supply-chain-apparel-manufacturing",
    title: "Why AI Is Exposing the Broken Supply Chain Model in Apparel Manufacturing",
    date: "June 8, 2026",
    category: "Manufacturing",
    excerpt:
      "AI tools can now predict supply chain failures weeks in advance. But for most clothing brands, that speed of insight is useless without the operational structure to act on it.",
  },
];

export default function BlogPage() {
  return (
    <main>

      <section className="section">
        <div className="container">
          <h1 className="products-heading">Blog</h1>
          <p className="products-subheading">
            Insights on apparel manufacturing, supply chain, and building better brands.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="blog-grid">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <div className="blog-card-meta">
                  <span className="blog-tag">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <span className="blog-read-more">Read Article →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

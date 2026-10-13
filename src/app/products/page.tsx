import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProjectCTA, SectionHeader, SystemLabel } from "@/components/System";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Apparel Products We Manufacture | Moist Corp",
  description: "Explore T-shirts, hoodies, sweatshirts, cargo pants, shorts, tote bags and waffle full sleeves manufactured by Moist Corp.",
  alternates: { canonical: "/products" },
  openGraph: { title: "Apparel Products | Moist Corp", description: "Explore product categories, fabrics, fits, construction and finishing options.", url: "/products", images: ["/products/tshirt.jpg"], type: "website" },
};

export default function ProductsPage(){return <main id="main-content">
  <section className="page-hero simple-hero grid-light"><div className="container"><SystemLabel>PRODUCT REGISTER / MC-P01</SystemLabel><h1>PRODUCTS<br />WE MAKE.</h1><p>Explore the apparel and textile products supported by our development and manufacturing system.</p></div></section>
  <section className="section product-index"><div className="container"><SectionHeader index="01" label="PRODUCT CATEGORIES" title="SELECT A PRODUCT." copy="Open any category to review available fabrics, fits, construction methods, finishing and customisation." /><div className="catalogue-grid">{products.map((product)=><Link href={`/products/${product.slug}`} key={product.id} className="catalogue-card product-card"><div className="catalogue-images"><div><Image src={product.images[0]} alt={`${product.name} manufacturing example`} fill sizes="(max-width: 760px) 50vw, (max-width: 1100px) 25vw, 17vw" /></div><div><Image src={product.images[1]} alt={`${product.name} product detail`} fill sizes="(max-width: 760px) 50vw, (max-width: 1100px) 25vw, 17vw" /></div></div><div className="catalogue-info"><span>PROGRAM {product.id}</span><h2>{product.name}</h2><p><span>VIEW MATERIALS + CONSTRUCTION</span><strong aria-hidden="true">↗</strong></p></div></Link>)}</div></div></section>
  <ProjectCTA />
</main>}

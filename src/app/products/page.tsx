import type { Metadata } from "next";
import Image from "next/image";
import { ProjectCTA, SectionHeader, SystemLabel } from "@/components/System";

export const metadata: Metadata = { title: "Apparel Manufacturing Capabilities | Moist Corp", description: "Product development, sampling and apparel manufacturing capabilities for T-shirts, hoodies, sweatshirts, cargo pants, shorts and tote bags.", alternates: { canonical: "/products" }, openGraph: { title: "Apparel Manufacturing Capabilities | Moist Corp", description: "Product systems and production capability from Greater Noida, India.", url: "/products", images: ["/product-4.jpg"], type: "website" } };
const products = [["001","T-shirts","/products/tshirt.jpg","/products/tshirts-2.jpg"],["002","Hoodies","/products/hoodie.jpg","/products/hoodies-2.jpg"],["003","Sweatshirts","/products/sweatshirt.jpg","/products/sweatshirts-3.jpg"],["004","Cargo pants","/products/cargo.jpg","/products/cargo-1.jpg"],["005","Shorts","/products/shorts6.jpg","/products/shorts-1.webp"],["006","Tote bags","/products/totebag.jpg","/products/totebag.jpg"]];
export default function ProductsPage(){return <main id="main-content">
  <section className="page-hero simple-hero grid-light"><div className="container"><SystemLabel>CAPABILITY REGISTER / MC-C01</SystemLabel><h1>PRODUCTS<br />BUILT THROUGH<br />ONE SYSTEM.</h1><p>Development, materials and manufacturing coordinated across the categories apparel brands use most.</p></div></section>
  <section className="section capability-overview"><div className="container"><SectionHeader index="MC" label="CAPABILITIES" title={<>EVERY STAGE.<br />ACCOUNTED FOR.</>} /><dl className="capability-details">{[
    ["Product development", "Sampling, technical development, fit refinement and construction guidance."],
    ["Sourcing", "Fabric, trims and material coordination through one sourcing network."],
    ["Manufacturing", "Cutting, sewing and finishing against approved specifications."],
    ["Quality control", "Inline quality checks and final inspection before release."],
    ["Logistics", "Packing, documentation and dispatch coordination."],
  ].map(([title, copy]) => <div key={title}><dt>{title}</dt><dd>{copy}</dd></div>)}</dl></div></section>
  <section className="section"><div className="container"><SectionHeader index="01" label="PRODUCT SYSTEMS" title="CORE PROGRAMS." copy="Current product categories supported by the Moist Corp production network." /><div className="catalogue-grid">{products.map(([id,name,image,image2])=><article key={id} className="catalogue-card"><div className="catalogue-images"><div><Image src={image} alt={`${name} manufacturing example`} fill sizes="(max-width: 700px) 50vw, (max-width: 1100px) 25vw, 17vw" /></div><div><Image src={image2} alt={`${name} product detail`} fill sizes="(max-width: 700px) 50vw, (max-width: 1100px) 25vw, 17vw" /></div></div><div className="catalogue-info"><span>PROGRAM {id}</span><h2>{name}</h2><p>DEVELOPMENT / PRODUCTION / DELIVERY</p></div></article>)}</div></div></section>
  <ProjectCTA />
</main>}

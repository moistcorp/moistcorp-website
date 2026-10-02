import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLink, ImagePanel, ProjectCTA, SectionHeader, StatusIndicator, SystemLabel } from "@/components/System";

export const metadata: Metadata = {
  title: "Moist Corp | Apparel Production Infrastructure India",
  description: "Apparel production infrastructure for brands: product development, materials, sampling, manufacturing, quality control and logistics, coordinated from Greater Noida, India.",
  alternates: { canonical: "/" },
  openGraph: { title: "Moist Corp | Apparel Production Infrastructure", description: "One controlled production system for apparel brands.", url: "/", siteName: "Moist Corp", images: ["/factory-6.jpg"], locale: "en_IN", type: "website" },
  twitter: { card: "summary_large_image", title: "Moist Corp | Apparel Production Infrastructure", description: "One controlled production system for apparel brands.", images: ["/factory-6.jpg"] },
};

const stages = [
  ["01", "Development", "Technical packs, patterns and construction guidance make each product production-ready."],
  ["02", "Materials", "Fabrics, threads, labels, zippers and trims coordinated through one sourcing network."],
  ["03", "Sampling", "Proto, fit and pre-production samples refined before bulk manufacturing begins."],
  ["04", "Manufacturing", "Cutting, stitching and finishing managed against an agreed production schedule."],
  ["05", "Quality control", "Inline checks and final inspection maintain control through the production run."],
  ["06", "Logistics", "Packing, documentation and freight coordination take finished goods to delivery."],
];

const programs = [
  ["001", "T-shirts", "/products/tshirt.jpg"], ["002", "Hoodies", "/products/hoodie.jpg"], ["003", "Sweatshirts", "/products/sweatshirt.jpg"],
  ["004", "Cargo pants", "/products/cargo.jpg"], ["005", "Shorts", "/products/shorts6.jpg"], ["006", "Tote bags", "/products/totebag.jpg"],
];

const faqs = [
  ["What is Moist Corp's minimum order quantity?", "Our starting MOQ is 50 pieces per style, supporting both first collections and smaller seasonal drops."],
  ["How long does production take?", "Our production cycle runs under 35 days from confirmed order to finished goods. Sampling timelines are agreed before an order is placed."],
  ["Do you work with first-time brand founders?", "Yes. We guide founders through specifications, sampling, bulk production and delivery."],
  ["What products do you manufacture?", "We manufacture T-shirts, hoodies, sweatshirts, cargo pants, shorts, joggers, shirts, tank tops, baby tees, skirts and tote bags."],
  ["Can I visit the facility?", "Yes. Our facility is in Greater Noida, Uttar Pradesh. Contact our team to arrange a visit."],
];

export default function Home() {
  return <main>
    <section className="home-hero grid-light"><div className="container hero-layout"><div className="hero-copy">
      <SystemLabel>MOIST CORP / APPAREL SYSTEMS</SystemLabel>
      <h1>WE BUILD THE<br />INFRASTRUCTURE<br />BEHIND APPAREL<br />BRANDS.</h1>
      <p>Product development, materials, sampling, manufacturing, quality control and logistics—coordinated through one production system.</p>
      <div className="button-row"><ArrowLink href="/contact">INITIATE PROJECT</ArrowLink><ArrowLink href="/products" secondary>EXPLORE CAPABILITIES</ArrowLink></div>
      <div className="hero-status"><StatusIndicator>SYSTEM STATUS / OPERATIONAL</StatusIndicator><span>GREATER NOIDA / INDIA</span></div>
    </div><ImagePanel src="/factory-6.jpg" alt="Garment production at Moist Corp's Greater Noida facility" code="MC-F01 / PRODUCTION FLOOR" caption="FACILITY 01 / GREATER NOIDA" priority className="hero-panel" /></div></section>

    <section className="metrics"><div className="container"><SystemLabel>MC / OPERATING PARAMETERS</SystemLabel><div className="metric-grid">
      {[['46,000+', 'SQ FT', 'PRODUCTION INFRASTRUCTURE'], ['98.0%', '', 'ON-TIME DELIVERY'], ['<35', 'DAYS', 'PRODUCTION CYCLE'], ['50', 'PCS', 'STARTING MOQ']].map(([value, unit, label], i) => <div className="metric" key={label}><span>0{i + 1}</span><strong>{value} <small>{unit}</small></strong><p>{label}</p></div>)}
    </div></div></section>

    <section className="section production-system"><div className="container"><SectionHeader index="01" label="OPERATING SYSTEM" title={<>ONE PRODUCTION<br />SYSTEM.</>} copy="You design the product. We coordinate everything required to produce it." />
      <ol className="process-flow">{stages.map(([number, title, copy]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol>
    </div></section>

    <section className="section infrastructure-preview grid-dark"><div className="container"><SectionHeader light index="02" label="INFRASTRUCTURE" title={<>46,000+ SQ FT<br />UNDER CONTROL.</>} copy="Cutting, stitching, finishing, quality control and packing coordinated from Greater Noida." />
      <div className="infrastructure-media"><Image src="/factory-4.jpg" alt="Moist Corp apparel production floor" fill sizes="100vw" /><div className="media-overlay"><span>FACILITY / GREATER NOIDA</span><span>MC-F01-PRD</span></div></div>
      <div className="infrastructure-footer"><p>Facility 01 supports the complete manufacturing sequence with production oversight at every stage.</p><ArrowLink href="/infrastructure">EXPLORE INFRASTRUCTURE</ArrowLink></div>
    </div></section>

    <section className="section comparison"><div className="container"><SectionHeader index="03" label="SYSTEM COMPARISON" title={<>REPLACE FRAGMENTATION<br />WITH CONTROL.</>} />
      <div className="comparison-grid"><div className="comparison-panel legacy"><SystemLabel>LEGACY PRODUCTION MODEL</SystemLabel>
        {['High MOQ', 'Limited visibility', 'Vendor fragmentation', 'Timeline variance', 'Inventory exposure'].map((item, i) => <div key={item}><span>ERR / 0{i + 1}</span><p>{item}</p></div>)}</div>
        <div className="comparison-panel controlled"><SystemLabel>MOIST CORP SYSTEM</SystemLabel>{['Lower entry MOQ', 'Controlled timelines', 'Production visibility', 'Centralized management', 'Scalable capacity'].map((item, i) => <div key={item}><span>OK / 0{i + 1}</span><p>{item}</p></div>)}</div></div>
    </div></section>

    <section className="section programs"><div className="container"><SectionHeader index="04" label="PRODUCT PROGRAMS / 001–006" title={<>BUILT TO<br />YOUR SPEC.</>} copy="Core apparel categories developed and produced through the same controlled operating system." />
      <div className="program-grid">{programs.map(([id, name, image]) => <Link className="program-card" href="/products" key={id}><div className="program-image"><Image src={image} alt={name} fill sizes="(max-width: 700px) 50vw, 33vw" /></div><div className="program-info"><span>PROGRAM {id}</span><h3>{name}</h3><p>VIEW PROGRAM <b>↗</b></p></div></Link>)}</div>
    </div></section>

    <section className="supply-chain grid-dark"><div className="container supply-chain-inner"><div><SystemLabel light>MOIST CORP / OPERATIONS</SystemLabel><h2>CONTROL<br />THE SUPPLY<br />CHAIN.</h2></div><div><p>Moist Corp coordinates development, sourcing, manufacturing, quality and logistics—reducing the vendor handoffs, unclear timelines and production blind spots that create risk.</p><ArrowLink href="/about">VIEW OPERATING MODEL</ArrowLink></div></div></section>

    <section className="section intelligence"><div className="container"><SectionHeader index="05" label="INTELLIGENCE" title="FIELD REPORTS." copy="Research and operating perspectives for better apparel production." />
      <div className="report-grid"><Report id="MC-INT-001" category="SUPPLY CHAIN" title="Why inventory is one of fashion's biggest financial risks" href="/blog/inventory-financial-risk-apparel-brands" />
        <Report id="MC-INT-002" category="MANUFACTURING" title="Why AI is exposing the broken supply chain model in apparel manufacturing" href="/blog/ai-supply-chain-apparel-manufacturing" /></div>
    </div></section>

    <section className="section faq-section"><div className="container narrow"><SectionHeader index="06" label="FAQ / PUBLIC RECORD" title="ESSENTIAL DATA." />
      <div className="faq-list">{faqs.map(([question, answer], i) => <details key={question}><summary><span>FAQ / 0{i + 1}</span><strong>{question}</strong><i aria-hidden="true">+</i></summary><p>{answer}</p></details>)}</div>
    </div></section><ProjectCTA />
  </main>;
}

function Report({ id, category, title, href }: { id: string; category: string; title: string; href: string }) {
  return <Link href={href} className="report-card"><div><span>INTELLIGENCE REPORT</span><span>{id}</span></div><p>{category}</p><h3>{title}</h3><footer><span>08 JUN 2026</span><strong>ACCESS REPORT ↗</strong></footer></Link>;
}

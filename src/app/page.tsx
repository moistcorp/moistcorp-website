import type { Metadata } from "next";
import { SelectedProjects } from "@/components/CaseStudy";
import { ArrowLink, ImagePanel, ProjectCTA, SectionHeader, SystemLabel } from "@/components/System";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Moist Corp | Apparel Production Infrastructure India",
  description: "Apparel production infrastructure for brands: product development, materials, sampling, manufacturing, quality control and logistics through one coordinated system.",
  alternates: { canonical: "/" },
  openGraph: { title: "Moist Corp | Apparel Production Infrastructure", description: "One controlled production system for apparel brands.", url: "/", siteName: "Moist Corp", images: ["/factory-6.jpeg"], locale: "en_IN", type: "website" },
  twitter: { card: "summary_large_image", title: "Moist Corp | Apparel Production Infrastructure", description: "One controlled production system for apparel brands.", images: ["/factory-6.jpeg"] },
};

const stages = [
  ["01", "DEVELOP", "Sampling, technical development and production preparation."],
  ["02", "SOURCE", "Fabric, trims and material coordination."],
  ["03", "MAKE", "Cutting, sewing, finishing and quality control."],
  ["04", "REPLENISH", "Repeat production designed to keep successful products in supply."],
];

export default function Home() {
  return <main id="main-content">
    <section className="home-hero grid-light"><div className="container hero-layout"><div className="hero-copy">
      <h1>DEVELOP.<br />MAKE.<br />REPLENISH.</h1>
      <p>We develop, manufacture and replenish apparel for brands - from first sample to ongoing production.</p>
      <div className="button-row"><ArrowLink href="/contact">INITIATE PROJECT</ArrowLink><ArrowLink href="/capabilities" secondary>EXPLORE CAPABILITIES</ArrowLink></div>
      <div className="hero-status"><span>MC-Q5 / MC-K320</span><span>STATUS / OPERATIONAL</span></div>
    </div><ImagePanel src="/factory-6.jpeg" alt="Garment production at a Moist Corp manufacturing facility" code="MC / PRODUCTION FLOOR" caption="APPAREL MANUFACTURING / OPERATIONS" priority className="hero-panel" /></div></section>

    <section className="metrics"><div className="container"><SystemLabel>MC / OPERATING PARAMETERS</SystemLabel><div className="metric-grid">
      {[['46,000+', 'SQ FT', 'PRODUCTION INFRASTRUCTURE'], ['98.0%', '', 'ON-TIME DELIVERY'], ['<35', 'DAYS', 'PRODUCTION CYCLE'], ['72', 'HOURS', 'SAMPLE DEVELOPMENT']].map(([value, unit, label], i) => <div className="metric" key={label}><span>0{i + 1}</span><strong>{value} <small>{unit}</small></strong><p>{label}</p></div>)}
    </div></div></section>

    <section className="section production-system"><div className="container"><SectionHeader index="01" label="OPERATING SYSTEM" title={<>FROM DEVELOPMENT<br />TO CONTINUOUS SUPPLY.</>} copy="We take products from development and sourcing through manufacturing, delivery and repeat production." />
      <ol className="process-flow">{stages.map(([number, title, copy]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol>
    </div></section>

    <section className="section selected-projects"><div className="container"><SectionHeader index="02" label="CASE STUDIES" title={<>SELECTED<br />PROJECTS.</>} copy="Project records showing merchandise development and focused production in execution." />
      <SelectedProjects studies={caseStudies} />
    </div></section>

    <section className="supply-chain grid-dark"><div className="container supply-chain-inner"><div><SystemLabel light>MOIST CORP / OPERATIONS</SystemLabel><h2>CONTROL<br />THE SUPPLY<br />CHAIN.</h2></div><div><p>Moist Corp coordinates development, sourcing, manufacturing, quality and logistics—reducing the vendor handoffs, unclear timelines and production blind spots that create risk.</p><ArrowLink href="/about">VIEW OPERATING MODEL</ArrowLink></div></div></section>

    <ProjectCTA />
  </main>;
}

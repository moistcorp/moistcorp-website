import type { Metadata } from "next";
import { ImagePanel, ProjectCTA, SectionHeader, SystemLabel } from "@/components/System";

export const metadata: Metadata = { title: "Apparel Production Infrastructure | Moist Corp", description: "Explore Moist Corp's 46,000+ sq ft apparel production infrastructure supporting cutting, stitching, finishing, quality and packing.", alternates: { canonical: "/infrastructure" }, openGraph: { title: "Production Infrastructure | Moist Corp", description: "46,000+ sq ft of coordinated apparel production infrastructure.", url: "/infrastructure", images: ["/factory-4.jpg"], type: "website" } };
const archive = [
  ["MC / PRODUCTION", "Production floor", "Garment panels arranged along the production tables.", "/factory-5.jpg", "Garment panels laid out on long production tables"],
  ["MC / PRINTING", "Print execution", "Apparel printing equipment within the manufacturing environment.", "/factory-6.jpg", "Carousel screen-printing equipment at Moist Corp"],
  ["MC / MATERIAL DETAIL", "Prepared components", "Printed garment panels before assembly.", "/factory-2.jpg", "Printed black garment panels laid flat on a work surface"],
];
const operations = [
  ["Cutting", "Material preparation and cutting organized against approved production specifications."],
  ["Assembly", "Garment construction managed through the approved sequence and production schedule."],
  ["Finishing", "Finished pieces prepared for inspection, presentation and packing."],
  ["Quality control", "Inline checks and final inspection applied before finished goods are released."],
  ["Packing & dispatch", "Packing, documentation and freight handoff coordinated for delivery."],
];
export default function InfrastructurePage(){return <main id="main-content">
  <section className="page-hero infrastructure-hero grid-dark"><div className="container page-hero-grid"><div><SystemLabel light>FACILITY ACCESS / PUBLIC</SystemLabel><h1>PRODUCTION<br />INFRASTRUCTURE.</h1><p>46,000+ square feet supporting the controlled movement of apparel from cut components to finished goods.</p><div className="facility-status"><span>MC-Q5 / MC-K320</span><span>STATUS / OPERATIONAL</span></div></div><ImagePanel src="/factory-1.jpg" alt="Exterior and entrance of a Moist Corp manufacturing facility" code="MC / MANUFACTURING ARCHIVE" caption="MANUFACTURING FACILITY / OPERATIONS" priority /></div></section>
  <section className="section"><div className="container"><SectionHeader index="01" label="MANUFACTURING SEQUENCE" title={<>THE FLOOR,<br />BY FUNCTION.</>} copy="Production moves through defined areas with oversight at each stage." /><dl className="capability-details">{operations.map(([title,copy])=><div key={title}><dt>{title}</dt><dd>{copy}</dd></div>)}</dl></div></section>
  <section className="section"><div className="container"><SectionHeader index="02" label="MANUFACTURING ARCHIVE" title="INSIDE THE OPERATION." copy="Production environments and apparel details from the Moist Corp archive." /><div className="facility-grid infrastructure-archive-grid">{archive.map(([code,title,copy,image,alt])=><article key={code} className="facility-card"><ImagePanel src={image} alt={alt} code={code} caption={title.toUpperCase()} /><div><span>APPAREL SYSTEMS / OPERATIONS</span><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>
  <ProjectCTA />
</main>}

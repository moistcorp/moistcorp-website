import type { Metadata } from "next";
import { ProjectCTA, SectionHeader, SystemLabel } from "@/components/System";

export const metadata: Metadata = {
  title: "Apparel Manufacturing Capabilities | Moist Corp",
  description: "Product development, sourcing, apparel manufacturing, quality control and logistics coordinated through one production system.",
  alternates: { canonical: "/capabilities" },
  openGraph: { title: "Apparel Manufacturing Capabilities | Moist Corp", description: "Development and production capability from Greater Noida, India.", url: "/capabilities", images: ["/product-4.jpg"], type: "website" },
};

const capabilities = [
  ["Product development", "Sampling, technical development, fit refinement and construction guidance."],
  ["Sourcing", "Fabric, trims and material coordination through one sourcing network."],
  ["Manufacturing", "Cutting, sewing and finishing against approved specifications."],
  ["Quality control", "Inline quality checks and final inspection before release."],
  ["Logistics", "Packing, documentation and dispatch coordination."],
];

export default function CapabilitiesPage() {
  return <main id="main-content">
    <section className="page-hero simple-hero grid-light"><div className="container"><SystemLabel>CAPABILITY REGISTER / MC-C01</SystemLabel><h1>ONE SYSTEM.<br />EVERY STAGE<br />ACCOUNTED FOR.</h1><p>Development, materials and manufacturing coordinated from the first sample through delivery.</p></div></section>
    <section className="section capability-overview"><div className="container"><SectionHeader index="01" label="CAPABILITIES" title={<>DEVELOPMENT<br />TO DELIVERY.</>} copy="A connected operating model reduces handoffs and keeps product, quality and timelines aligned." /><dl className="capability-details">{capabilities.map(([title, copy]) => <div key={title}><dt>{title}</dt><dd>{copy}</dd></div>)}</dl></div></section>
    <ProjectCTA />
  </main>;
}

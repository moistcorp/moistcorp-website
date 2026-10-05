import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/CaseStudy";
import { ProjectCTA, SectionHeader, SystemLabel } from "@/components/System";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Apparel Manufacturing Case Studies | Moist Corp",
  description: "Selected merchandise development and apparel manufacturing projects executed by Moist Corp.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Apparel Manufacturing Case Studies | Moist Corp",
    description: "Selected project records from Moist Corp.",
    url: "/case-studies",
    type: "website",
  },
};

export default function CaseStudiesPage() {
  return <main id="main-content">
    <section className="simple-hero case-studies-intro grid-light"><div className="container">
      <SystemLabel>PROJECT RECORDS / PUBLIC</SystemLabel>
      <h1>CASE<br />STUDIES.</h1>
      <p>Selected records of merchandise development and apparel production executed through the Moist Corp operating system.</p>
    </div></section>
    <section className="section case-studies-index"><div className="container">
      <SectionHeader index="MC" label="SELECTED PROJECTS" title={<>PROOF OF<br />EXECUTION.</>} copy="Focused project records showing how development guidance and manufacturing coordination move work toward completion." />
      <div className="case-study-grid">{caseStudies.map((study) => <CaseStudyCard key={study.projectId} study={study} />)}</div>
    </div></section>
    <ProjectCTA />
  </main>;
}

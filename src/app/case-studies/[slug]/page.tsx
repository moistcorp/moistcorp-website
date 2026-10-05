import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseStudyGallery, CaseStudyMedia } from "@/components/CaseStudy";
import { ArrowLink, ProjectCTA, SystemLabel } from "@/components/System";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: study.seo.title,
    description: study.seo.description,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      title: study.seo.title,
      description: study.seo.description,
      url: `/case-studies/${study.slug}`,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return <main id="main-content" className="case-study-page">
    <article>
      <header className="case-study-hero grid-dark"><div className="container">
        <div className="case-study-breadcrumb"><Link href="/case-studies">CASE STUDIES</Link><span>/</span><span>{study.projectId}</span></div>
        <div className="case-study-hero-grid">
          <div><SystemLabel light>{study.eyebrow}</SystemLabel><h1>{study.client}</h1><h2>{study.title}</h2></div>
          <div className="case-study-intro"><p>{study.intro}</p><div className="button-row"><ArrowLink href="/contact">INITIATE A PROJECT</ArrowLink><ArrowLink href="/products" secondary>VIEW CAPABILITIES</ArrowLink></div></div>
        </div>
        <dl className="case-study-metadata">{study.metadata.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      </div></header>

      <section className="case-study-hero-image"><div className="container"><CaseStudyMedia image={study.images[0]} projectId={study.projectId} hero /></div></section>

      <section className="case-study-story section"><div className="container">
        {study.sections.slice(0, 2).map((section) => <section className="case-study-story-row" key={section.index}>
          <div><span>{section.index}</span><h2>{section.title}</h2></div><p>{section.copy}</p>
        </section>)}
      </div></section>

      <section className="case-study-gallery"><CaseStudyGallery images={study.images.slice(1, 3)} projectId={study.projectId} /></section>

      <section className="case-study-story section"><div className="container">
        {study.sections.slice(2).map((section) => <section className="case-study-story-row" key={section.index}>
          <div><span>{section.index}</span><h2>{section.title}</h2></div><p>{section.copy}</p>
        </section>)}
      </div></section>

      <section className="case-study-gallery case-study-gallery-final"><CaseStudyGallery images={study.images.slice(3)} projectId={study.projectId} /></section>
    </article>
    <ProjectCTA />
  </main>;
}

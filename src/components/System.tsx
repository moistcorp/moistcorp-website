import Image from "next/image";
import Link from "next/link";

export function SystemLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`system-label${light ? " system-label-light" : ""}`}>{children}</p>;
}

export function SectionHeader({ index, label, title, copy, light = false }: { index: string; label: string; title: React.ReactNode; copy?: string; light?: boolean }) {
  return <header className={`section-header${light ? " section-header-light" : ""}`}>
    <div className="section-index"><span>{index}</span><span>{label}</span></div><div className="section-rule" />
    <div className="section-heading-row"><h2>{title}</h2>{copy && <p>{copy}</p>}</div>
  </header>;
}

export function StatusIndicator({ children = "Operational" }: { children?: React.ReactNode }) {
  return <span className="status-indicator"><span aria-hidden="true" />{children}</span>;
}

export function ArrowLink({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) {
  return <Link href={href} className={secondary ? "button button-secondary" : "button button-primary"}><span>{children}</span><span aria-hidden="true">↗</span></Link>;
}

export function ImagePanel({ src, alt, code, caption, priority = false, className = "" }: { src: string; alt: string; code: string; caption: string; priority?: boolean; className?: string }) {
  return <figure className={`image-panel ${className}`}><div className="image-panel-code">{code}</div>
    <div className="image-panel-media"><Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 768px) 100vw, 50vw" /></div>
    <figcaption><span>FIG.</span><span>{caption}</span></figcaption></figure>;
}

export function ProjectCTA() {
  return <section className="project-cta grid-dark"><div className="container project-cta-inner"><div>
    <SystemLabel light>PROJECT INTAKE / PUBLIC ACCESS</SystemLabel><h2>READY TO<br />BUILD?</h2></div>
    <div className="project-cta-copy"><StatusIndicator>ACCEPTING PROJECTS</StatusIndicator>
      <p>Submit your production requirements for evaluation by the Moist Corp team.</p><ArrowLink href="/contact">INITIATE PROJECT</ArrowLink>
    </div></div></section>;
}

import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import Link from "next/link";
import type { CaseStudy, CaseStudyImage } from "@/lib/case-studies";

function hasPublicImage(src: string) {
  return existsSync(join(process.cwd(), "public", src.replace(/^\//, "")));
}

export function CaseStudyMedia({
  image,
  projectId,
  hero = false,
}: {
  image: CaseStudyImage;
  projectId: string;
  hero?: boolean;
}) {
  const available = hasPublicImage(image.src);

  return <figure className={`case-study-media${hero ? " case-study-media-hero" : ""}`}>
    <div className="case-study-media-frame">
      {available ? <Image
        src={image.src}
        alt={image.alt}
        fill
        preload={hero}
        sizes={hero ? "(max-width: 1440px) 100vw, 1360px" : "(max-width: 760px) 100vw, 50vw"}
        style={{ objectPosition: image.position ?? "center" }}
      /> : <div className="case-study-placeholder" role="img" aria-label={`${image.label} image awaiting project photography`}>
        <span>{projectId}</span>
        <strong>IMAGE RECORD<br />PENDING</strong>
        <small>{image.key.replaceAll("-", " ")}</small>
      </div>}
    </div>
    <figcaption><span>{projectId}</span><span>{image.label}</span></figcaption>
  </figure>;
}

export function CaseStudyGallery({
  images,
  projectId,
}: {
  images: ReadonlyArray<CaseStudyImage>;
  projectId: string;
}) {
  const availableImages = images.filter(({ src }) => hasPublicImage(src));
  const visibleImages = availableImages.length > 0 ? availableImages : images;

  return <div className={`container case-study-gallery-grid${visibleImages.length === 1 ? " case-study-gallery-single" : ""}`}>
    {visibleImages.map((image) => <CaseStudyMedia key={image.key} image={image} projectId={projectId} />)}
  </div>;
}

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return <Link className="case-study-card" href={`/case-studies/${study.slug}`}>
    <CaseStudyMedia image={study.images[0]} projectId={study.projectId} />
    <div className="case-study-card-copy">
      <div><span>{study.projectId}</span><span>STATUS / COMPLETED</span></div>
      <h2>{study.client}</h2>
      <p>{study.cardTitle}</p>
      <span className="case-study-card-link">VIEW CASE STUDY <b aria-hidden="true">↗</b></span>
    </div>
  </Link>;
}

export function SelectedProjects({ studies }: { studies: ReadonlyArray<CaseStudy> }) {
  return <div className="selected-project-list">
    {studies.map((study, index) => <Link href={`/case-studies/${study.slug}`} key={study.projectId}>
      <span>0{index + 1}</span>
      <div><small>{study.projectId}</small><h3>{study.client}</h3><p>{study.cardTitle}</p></div>
      <strong>VIEW CASE STUDY <i aria-hidden="true">↗</i></strong>
    </Link>)}
  </div>;
}

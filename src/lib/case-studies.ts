export type CaseStudyImage = {
  key: string;
  label: string;
  src: string;
  alt: string;
  position?: string;
};

export type CaseStudy = {
  slug: "alienkind" | "grantiro";
  projectId: "MC-CS-001" | "MC-CS-002";
  client: string;
  eyebrow: string;
  cardTitle: string;
  title: string;
  intro: string;
  metadata: ReadonlyArray<readonly [string, string]>;
  sections: ReadonlyArray<{
    index: string;
    title: string;
    copy: string;
  }>;
  images: ReadonlyArray<CaseStudyImage>;
  seo: {
    title: string;
    description: string;
  };
};

export const caseStudies: ReadonlyArray<CaseStudy> = [
  {
    slug: "alienkind",
    projectId: "MC-CS-001",
    client: "Alienkind",
    eyebrow: "Merchandise Development",
    cardTitle: "Merchandise Development",
    title: "FROM MERCHANDISE IDEA TO LAUNCH.",
    intro:
      "Alienkind is a Bangalore-based fast-food brand that approached Moist Corp to develop merchandise for the brand. Moist Corp supported the project through product development and manufacturing guidance, helping translate the concept into a production-ready execution and supporting the successful launch of the collection.",
    metadata: [
      ["PROJECT", "MC-CS-001"],
      ["CLIENT", "ALIENKIND"],
      ["TYPE", "MERCHANDISE DEVELOPMENT"],
      ["STATUS", "COMPLETED"],
    ],
    sections: [
      {
        index: "01",
        title: "The brief",
        copy: "Alienkind wanted to create merchandise that could extend the brand beyond its physical food business.",
      },
      {
        index: "02",
        title: "Development",
        copy: "Moist Corp guided the development process, helping translate Alienkind's brand direction into products that could progress toward manufacturing. The work focused on practical production considerations and refinement toward a launchable result.",
      },
      {
        index: "03",
        title: "Execution",
        copy: "Once the merchandise direction was ready, the project progressed from development into production with Moist Corp coordinating the manufacturing process.",
      },
      {
        index: "04",
        title: "Outcome",
        copy: "Alienkind successfully launched its merchandise, extending the brand into a physical apparel product developed and produced with Moist Corp.",
      },
    ],
    images: [
      {
        key: "hero",
        label: "Finished merchandise",
        src: "/images/case-studies/alienkind/alienkind-hero.jpg",
        alt: "Alienkind merchandise produced with Moist Corp.",
      },
      {
        key: "brand-context",
        label: "Brand context",
        src: "/images/case-studies/alienkind/alienkind-brand-context.jpg",
        alt: "Alienkind merchandise in the brand environment.",
      },
      {
        key: "product-detail",
        label: "Product detail",
        src: "/images/case-studies/alienkind/alienkind-product-detail.jpg",
        alt: "Alienkind merchandise production detail.",
      },
      {
        key: "development",
        label: "Development record",
        src: "/images/case-studies/alienkind/alienkind-development.jpg",
        alt: "Alienkind merchandise development sample.",
      },
      {
        key: "launch",
        label: "Launch record",
        src: "/images/case-studies/alienkind/alienkind-launch.jpg",
        alt: "Alienkind merchandise after launch.",
      },
    ],
    seo: {
      title: "Alienkind Merchandise Development — Moist Corp Case Study",
      description:
        "How Moist Corp supported Alienkind in developing and launching branded merchandise.",
    },
  },
  {
    slug: "grantiro",
    projectId: "MC-CS-002",
    client: "Grantiro",
    eyebrow: "100-Piece Production Run",
    cardTitle: "100-Piece Production Run",
    title: "A FOCUSED PRODUCTION RUN, EXECUTED.",
    intro:
      "Grantiro is an Indian clothing brand that worked with Moist Corp to manufacture a production run of 100 pants. The project demonstrates Moist Corp's ability to execute focused production quantities through a structured manufacturing and quality-control process.",
    metadata: [
      ["PROJECT", "MC-CS-002"],
      ["CLIENT", "GRANTIRO"],
      ["TYPE", "APPAREL MANUFACTURING"],
      ["PRODUCTION", "100 PCS"],
      ["STATUS", "COMPLETED"],
    ],
    sections: [
      {
        index: "01",
        title: "The requirement",
        copy: "Grantiro required manufacturing execution for an order of 100 pants.",
      },
      {
        index: "02",
        title: "Production",
        copy: "Moist Corp coordinated the focused production run through its established manufacturing process, moving the order through production and quality control.",
      },
      {
        index: "03",
        title: "Execution",
        copy: "The work centered on the controlled execution and completion of the 100-piece pant order.",
      },
      {
        index: "04",
        title: "Outcome",
        copy: "A completed production run of 100 pants was delivered for Grantiro.",
      },
    ],
    images: [
      {
        key: "hero",
        label: "Finished pants",
        src: "/images/case-studies/grantiro/grantiro-hero.jpg",
        alt: "Grantiro pants manufactured by Moist Corp.",
      },
      {
        key: "full-garment",
        label: "Full garment",
        src: "/images/case-studies/grantiro/grantiro-full-garment.jpg",
        alt: "Full view of Grantiro pants manufactured by Moist Corp.",
      },
      {
        key: "construction-detail",
        label: "Construction detail",
        src: "/images/case-studies/grantiro/grantiro-construction-detail.jpg",
        alt: "Grantiro pants construction detail.",
      },
      {
        key: "production",
        label: "Production record",
        src: "/images/case-studies/grantiro/grantiro-production.jpg",
        alt: "Grantiro pants during production.",
      },
      {
        key: "completed-order",
        label: "Completed order",
        src: "/images/case-studies/grantiro/grantiro-completed-order.jpg",
        alt: "Grantiro 100-piece production run.",
      },
    ],
    seo: {
      title: "Grantiro 100-Piece Production Run — Moist Corp Case Study",
      description:
        "A Moist Corp apparel manufacturing project producing a 100-piece pant run for Indian clothing brand Grantiro.",
    },
  },
] as const;

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

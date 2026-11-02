export type CaseStudyImage = {
  key: string;
  label: string;
  src: string;
  alt: string;
  position?: string;
  fit?: "cover" | "contain";
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
      "Alienkind is a Bangalore-based fast-food brand that approached Moist Corp to develop a merchandise collection. We translated its graphic direction into heavyweight, production-ready T-shirts made from 260 GSM cotton French terry, then managed printing and finishing through launch.",
    metadata: [
      ["PROJECT", "MC-CS-001"],
      ["CLIENT", "ALIENKIND"],
      ["TYPE", "MERCHANDISE DEVELOPMENT"],
      ["FABRIC", "260 GSM COTTON FRENCH TERRY"],
      ["PRINT", "SCREEN PRINT"],
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
        title: "Fabric & development",
        copy: "We developed the T-shirts in 260 GSM cotton French terry, balancing a substantial hand feel with the comfort and drape needed for an everyday merchandise piece.",
      },
      {
        index: "03",
        title: "Print & finishing",
        copy: "Alienkind's detailed artwork was screen printed across the garments. A softener and silicone wash completed the finishing process, giving the fabric a smoother, softer hand feel.",
      },
      {
        index: "04",
        title: "Outcome",
        copy: "The finished collection carried Alienkind's visual world into a heavyweight apparel product with sharp print detail and a smooth, comfortable finish, ready for the brand's merchandise launch.",
      },
    ],
    images: [
      {
        key: "hero",
        label: "Finished garment / cobalt",
        src: "/images/case-studies/alienkind/BLUE-BACK_9f6865d8-b6dd-4235-ac18-cfa707066f7d.jpg.webp",
        alt: "Model wearing the cobalt Alienkind screen-printed French terry T-shirt produced by Moist Corp.",
        position: "center 58%",
        fit: "contain",
      },
      {
        key: "black-blue-full",
        label: "Screen print / black and blue",
        src: "/images/case-studies/alienkind/Back_Full_7ce67aac-ca0e-48ae-9140-17300a265ddb.jpg.webp",
        alt: "Full view of the black Alienkind T-shirt with blue, white, and grey screen-printed artwork.",
      },
      {
        key: "black-green-full",
        label: "Screen print / black and green",
        src: "/images/case-studies/alienkind/Back_Full_2e628022-18f4-4b72-9889-f0f70c5c86bb.jpg.webp",
        alt: "Full view of the black Alienkind T-shirt with green, white, and grey screen-printed artwork.",
      },
      {
        key: "blue-print-detail",
        label: "Print detail / cobalt",
        src: "/images/case-studies/alienkind/Back_Closeup_07c51d94-a067-46b3-9c90-714a9d4d916b.jpg.webp",
        alt: "Close-up of the detailed white, grey, and blue screen print on cobalt French terry fabric.",
      },
      {
        key: "black-print-detail",
        label: "Print detail / black",
        src: "/images/case-studies/alienkind/Back_Closeup_c84ab976-6d4b-46ee-ae2a-06399128cefd.jpg.webp",
        alt: "Close-up of the layered blue, white, grey, and black screen print on Alienkind merchandise.",
      },
    ],
    seo: {
      title: "Alienkind Merchandise Development — Moist Corp Case Study",
      description:
        "How Moist Corp developed Alienkind merchandise in 260 GSM cotton French terry with screen printing and a softener and silicone wash.",
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
        src: "/images/case-studies/grantiro/Change_sunflowers_with_daisies_2K_202607082155.jpg.webp",
        alt: "Front view of Grantiro black pants with embroidered daisies, manufactured by Moist Corp.",
        position: "center 58%",
      },
      {
        key: "garment-detail",
        label: "Garment detail",
        src: "/images/case-studies/grantiro/Change_sunflowers_to_daisies_2K_202607091541.jpg.webp",
        alt: "Side view showing the embroidered daisy artwork on Grantiro pants manufactured by Moist Corp.",
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

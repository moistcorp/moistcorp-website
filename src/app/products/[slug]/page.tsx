import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLink, ProjectCTA, SectionHeader, SystemLabel } from "@/components/System";
import { getProduct, products } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const description = `${product.name} manufacturing options from Moist Corp, including fabric, fit, construction, finishing and customisation.`;
  return {
    title: `${product.name} Manufacturing | Moist Corp`,
    description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: { title: `${product.name} Manufacturing | Moist Corp`, description, url: `/products/${product.slug}`, images: [product.images[0]], type: "website" },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const specifications = [
    ["Fabric options", product.fabric],
    ["Fit options", product.fit],
    ["Construction", product.construction],
    ["Finishing + quality", product.finishing],
    ["Customisation", product.customisation],
  ] as const;

  return <main id="main-content" className="product-detail-page">
    <section className="product-detail-hero grid-light"><div className="container">
      <div className="product-breadcrumb"><Link href="/products">PRODUCTS</Link><span>/</span><span>PROGRAM {product.id}</span></div>
      <div className="product-detail-hero-grid"><div><SystemLabel>PRODUCT PROGRAM / {product.id}</SystemLabel><h1>{product.name}</h1><p>{product.summary}</p><div className="button-row"><ArrowLink href="/contact">DEVELOP THIS PRODUCT</ArrowLink><ArrowLink href="/products" secondary>ALL PRODUCTS</ArrowLink></div></div><div className="product-detail-image"><Image src={product.images[0]} alt={`${product.name} manufacturing example`} fill preload sizes="(max-width: 760px) 100vw, 48vw" /></div></div>
    </div></section>
    <section className="section product-specifications"><div className="container"><SectionHeader index="01" label="PRODUCT SPECIFICATION" title={<>BUILD THE<br />RIGHT VERSION.</>} copy="Each program is developed against the brand's tech pack, target fit, material direction and performance requirements." />
      <div className="product-spec-layout"><div className="product-spec-image"><Image src={product.images[1]} alt={`${product.name} fabric and construction detail`} fill sizes="(max-width: 760px) 100vw, 42vw" /></div><dl className="product-spec-list">{specifications.map(([label, values], index) => <div key={label}><dt><span>0{index + 1}</span>{label}</dt><dd>{values.map((value) => <span key={value}>{value}</span>)}</dd></div>)}</dl></div>
      <p className="product-spec-note">The options shown are a development starting point. Final fabric, measurements, construction, trims and finishing are confirmed through sampling and approved specifications.</p>
    </div></section>
    {product.variants && <section className="section product-variants"><div className="container"><SectionHeader index="02" label="PROGRAM 007 / ARTWORK EDITIONS" title="ONE PROGRAM. THREE EDITIONS." copy="All three waffle full-sleeve designs share the same product program, with artwork and finishing specified by edition." /><div className="product-variant-grid">{product.variants.map((variant) => <article key={variant.name}><div><Image src={variant.image} alt={`${variant.name} waffle full-sleeve`} fill sizes="(max-width: 760px) 100vw, 33vw" /></div><span>PROGRAM {product.id}</span><h2>{variant.name}</h2><p>{variant.detail}</p></article>)}</div></div></section>}
    <ProjectCTA />
  </main>;
}

import Image from "next/image";

export default function AboutPage() {
  return (
    <main>

      <section className="hero">
        <div className="container hero-grid">

          <div>
            <p className="eyebrow">
              ABOUT MOIST CORP
            </p>

            <h1>
              Built To Simplify Apparel Manufacturing
            </h1>

            <p className="hero-text">
              Moist Corp was created to solve one of the biggest challenges faced by
              apparel brands: managing a fragmented manufacturing process.
            </p>

            <p className="hero-text">
              Many brands work with multiple suppliers, factories and service
              providers to bring a product to life. This often leads to
              communication gaps, inconsistent quality, delayed deliveries and
              limited visibility throughout production.
            </p>

            <p className="hero-text">
              Moist Corp brings product development, sourcing, sampling,
              manufacturing, quality assurance and logistics together into one
              coordinated system.
            </p>
          </div>

          <div>
            <Image
              src="/factory-1.jpg"
              alt="Moist Corp Manufacturing Facility"
              width={1200}
              height={800}
              className="hero-image"
              priority
            />
          </div>

        </div>
      </section>

    </main>
  );
}
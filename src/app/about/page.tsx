import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Moist Corp — Clothing Manufacturer India",
  description:
    "Moist Corp is a clothing manufacturer based in Greater Noida, India, built to solve the MOQ, transparency and timeline problems that hold apparel brands back.",
};

export default function AboutPage() {
  return (
    <main>

      {/* HERO WITH IMAGE SIDE BY SIDE */}
      <section className="hero">
        <div className="container about-hero-grid">

          <div>
            <p className="eyebrow">About Moist Corp</p>
            <h1>
              We Build Supply Chains For Apparel Brands
            </h1>
            <p className="hero-text">
              A clothing manufacturer in Greater Noida built around one idea -
              that apparel brands deserve a production partner that actually
              delivers what it promises.
            </p>
          </div>

          <div>
            <Image
              src="/factory-1.jpg"
              alt="Moist Corp Factory Greater Noida"
              width={1200}
              height={800}
              className="hero-image"
              priority
            />
          </div>

        </div>
      </section>

      {/* THE STORY */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container narrow">
          <h2>Why Moist Corp Exists</h2>

          <div className="about-story">

            <p>
              Clothing brands in India have been dealing with the same set of
              problems for years. They find a manufacturer, get quoted a
              reasonable timeline, place an order - and then the waiting begins.
              Weeks pass. Follow-ups go unanswered or are met with vague
              reassurances. The promised delivery date comes and goes. By the
              time the order finally arrives, the season has shifted, the launch
              window has closed, and the brand is left holding inventory it can
              no longer sell at full price.
            </p>

            <p>
              This is not a rare experience. It is the standard one. And it is
              not just a logistics problem - it is a business-killing problem.
              A delayed collection launch does not just mean late revenue. It
              means missed trend windows, broken retailer commitments, wasted
              marketing spend, and capital locked inside dead inventory that
              was never moved at the right time.
            </p>

            <p>
              The other problem was MOQ. Most manufacturers in India are set up
              to serve large buyers - brands placing thousands of units per style.
              For an independent brand launching a new collection or testing a
              new product, the minimum order quantities being demanded were simply
              unworkable. Founders were being forced to either overcommit on
              volume and take on serious inventory risk, or go without a
              manufacturer entirely and try to piece together production through
              unreliable small-scale vendors.
            </p>

            <p>
              Moist Corp was built to solve both of these problems directly.
              We started with a simple belief: a clothing brand should be able
              to work with a manufacturer that has a low starting MOQ, gives
              honest timelines, and actually honours them. That sounds basic.
              In practice, it is rare enough that it became the foundation of
              everything we do.
            </p>

            <p>
              We built our operation in Greater Noida around transparency and
              speed. Every client gets a clear production timeline before an
              order is confirmed. Every stage of production is visible. When
              something changes - and in manufacturing, things occasionally do
              - we communicate it immediately, not after it has already caused
              a problem. Our production cycle runs under 35 days. Our on-time
              delivery rate is 98%. Our starting MOQ is 50 pieces.
            </p>

            <p>
              These are not marketing numbers. They are the direct result of
              building a manufacturing operation specifically for the kinds of
              brands that the rest of the industry was not serving properly -
              independent labels, emerging designers, and growing apparel
              businesses that needed a partner they could actually build on.
            </p>

          </div>
        </div>
      </section>

      {/* THE NUMBERS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2>By The Numbers</h2>

          <div className="about-stats">

            <div className="about-stat">
              <strong>46,000+</strong>
              <span>SQ FT Infrastructure</span>
              <p>
                Our Greater Noida facility covers over 46,000 square feet
                of production space - cutting, stitching, finishing, QC
                and packing all under one roof.
              </p>
            </div>

            <div className="about-stat">
              <strong>98%</strong>
              <span>On-Time Delivery</span>
              <p>
                Brands build launch calendars around our timelines. We take
                delivery commitments seriously - 98% of orders ship on or
                before the agreed date.
              </p>
            </div>

            <div className="about-stat">
              <strong>&lt;35 Days</strong>
              <span>Production Cycle</span>
              <p>
                From confirmed order to finished goods, our production cycle
                runs under 35 days - significantly faster than the industry
                average of 60 to 90 days.
              </p>
            </div>

            <div className="about-stat">
              <strong>50 PCS</strong>
              <span>Starting MOQ</span>
              <p>
                We work with brands at every stage. Our minimum order
                quantity starts at just 50 pieces - making us accessible
                to founders launching their first collection.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT WE HANDLE */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2>What We Handle</h2>

          <div className="grid">
            <div className="card">
              <h3 className="card-title">Product Development</h3>
              <p className="card-desc">
                Technical packs, pattern making, and construction guidance
                to bring your designs into production-ready specifications.
              </p>
            </div>

            <div className="card">
              <h3 className="card-title">Fabric & Trim Sourcing</h3>
              <p className="card-desc">
                We source fabrics, threads, labels, zippers and all trims
                through our established supplier network - no separate
                vendor management needed on your end.
              </p>
            </div>

            <div className="card">
              <h3 className="card-title">Sampling</h3>
              <p className="card-desc">
                Proto samples, fit samples, and pre-production samples
                reviewed and refined until the product is exactly right
                before bulk production begins.
              </p>
            </div>

            <div className="card">
              <h3 className="card-title">Manufacturing</h3>
              <p className="card-desc">
                In-house cutting, stitching, and finishing across all
                product categories - T-shirts, hoodies, cargo pants,
                joggers, tote bags and more.
              </p>
            </div>

            <div className="card">
              <h3 className="card-title">Quality Assurance</h3>
              <p className="card-desc">
                Multi-stage QC across production - inline checks during
                manufacturing and a final inspection before goods are
                packed and shipped.
              </p>
            </div>

            <div className="card">
              <h3 className="card-title">Logistics</h3>
              <p className="card-desc">
                Packing, documentation, and coordination with freight
                partners for domestic and international delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0, textAlign: "center" }}>
        <div className="container narrow">
          <h2>Want To Work Together?</h2>
          <p style={{ marginBottom: "32px", fontSize: "18px", color: "#555" }}>
            Tell us about your brand and what you are looking to produce.
            We will assess whether Moist Corp is the right fit and get
            back to you within 24 hours.
          </p>
          <a href="/contact" className="btn-primary">
            Start Your Project
          </a>
        </div>
      </section>

    </main>
  );
}

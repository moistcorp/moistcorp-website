import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Moist Corp",
  description: "Terms and Conditions for Moist Corp — Clothing Manufacturer India.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <main>
      <article className="blog-article">
        <div className="container narrow">

          <div className="blog-post-header">
            <h1>Terms and Conditions</h1>
            <p className="blog-post-meta">Last updated: June 2026</p>
          </div>

          <div className="blog-post-body">

            <p>
              By accessing or using moistcorp.com, you agree to be bound by the following
              Terms and Conditions. Please read them carefully before using this website.
            </p>

            <h2>Use of Website</h2>
            <p>
              This website is intended to provide information about Moist Corp and its
              manufacturing services. You may use this website for lawful purposes only.
              You must not use the website in any way that causes, or may cause, damage
              to the website or impairment of its availability or accessibility.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website — including text, images, logos, and design —
              is the property of Moist Corp and is protected by applicable intellectual
              property laws. You may not reproduce, distribute, or use any content from
              this website without our prior written permission.
            </p>

            <h2>Inquiry and Contact Forms</h2>
            <p>
              Submitting an inquiry through our website does not constitute a binding
              agreement or contract between you and Moist Corp. All manufacturing
              engagements are subject to a separate written agreement signed by both
              parties. We reserve the right to decline any inquiry at our discretion.
            </p>

            <h2>No Warranties</h2>
            <p>
              This website is provided on an &quot;as is&quot; basis. Moist Corp makes no warranties,
              express or implied, regarding the accuracy, completeness, or reliability of
              any information on this website. We reserve the right to change or remove
              content at any time without notice.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Moist Corp shall not be liable for
              any direct, indirect, incidental, or consequential loss or damage arising
              from your use of, or inability to use, this website or any content on it.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites including Instagram
              and LinkedIn. These links are provided for convenience only. Moist Corp
              has no control over the content of those websites and accepts no
              responsibility for them.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance
              with the laws of India. Any disputes arising in connection with these
              terms shall be subject to the exclusive jurisdiction of the courts
              of Uttar Pradesh, India.
            </p>

            <h2>Changes to These Terms</h2>
            <p>
              We may revise these Terms and Conditions at any time by updating this page.
              Continued use of the website after any changes constitutes your acceptance
              of the revised terms.
            </p>

            <h2>Contact</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact
              us at info@moistcorp.com.
            </p>

          </div>
        </div>
      </article>
    </main>
  );
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Moist Corp",
  description: "Privacy Policy for Moist Corp — Clothing Manufacturer India.",
};

export default function PrivacyPage() {
  return (
    <main>
      <article className="blog-article">
        <div className="container narrow">

          <div className="blog-post-header">
            <h1>Privacy Policy</h1>
            <p className="blog-post-meta">Last updated: June 2026</p>
          </div>

          <div className="blog-post-body">

            <p>
              This Privacy Policy explains how Moist Corp ("we", "us", "our") collects,
              uses, and protects information submitted through moistcorp.com.
            </p>

            <h2>Information We Collect</h2>
            <p>
              When you submit an inquiry or contact form on our website, we collect the
              information you provide — including your name, email address, phone number,
              company name, and project details. We do not collect any information
              automatically beyond standard web server logs.
            </p>

            <h2>How We Use Your Information</h2>
            <p>
              Information submitted through our contact or inquiry forms is used solely
              to respond to your request and assess whether Moist Corp is a suitable
              manufacturing partner for your needs. We do not use your information for
              unsolicited marketing and we do not sell or share your data with third parties.
            </p>

            <h2>Data Storage</h2>
            <p>
              Inquiry submissions are processed via FormSubmit and delivered to our internal
              team email. We retain this information only for as long as is necessary to
              respond to and manage your inquiry.
            </p>

            <h2>Cookies</h2>
            <p>
              Our website does not use tracking cookies or third-party analytics tools.
              No personal data is collected through cookies.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to external platforms such as Instagram and
              LinkedIn. We are not responsible for the privacy practices of those platforms.
              We encourage you to review their privacy policies independently.
            </p>

            <h2>Your Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of any
              personal information you have submitted to us. To make such a request,
              contact us at info@moistcorp.com.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be
              reflected on this page with an updated date. Continued use of the website
              following any changes constitutes acceptance of the revised policy.
            </p>

            <h2>Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us
              at info@moistcorp.com.
            </p>

          </div>
        </div>
      </article>
    </main>
  );
}

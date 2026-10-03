"use client";

import { FormEvent, useRef, useState } from "react";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionState("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result: { success?: boolean } = await response.json();

      if (!response.ok || !result.success) {
        throw new Error("Unable to submit inquiry.");
      }

      formRef.current?.reset();
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
    }
  }

  const isSubmitting = submissionState === "submitting";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="companyWebsiteConfirmation">Leave this field empty</label>
        <input
          id="companyWebsiteConfirmation"
          type="text"
          name="companyWebsiteConfirmation"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <fieldset><legend><span>01</span> CONTACT DETAILS</legend><div className="form-grid">
        <div>
          <label htmlFor="firstName">First name <span>/ REQUIRED</span></label>
          <input id="firstName" autoComplete="given-name" type="text" name="firstName" required maxLength={100} />
        </div>

        <div>
          <label htmlFor="lastName">Last name <span>/ REQUIRED</span></label>
          <input id="lastName" autoComplete="family-name" type="text" name="lastName" required maxLength={100} />
        </div>

        <div>
          <label htmlFor="company">Company name <span>/ REQUIRED</span></label>
          <input id="company" autoComplete="organization" type="text" name="company" required maxLength={150} />
        </div>

        <div>
          <label htmlFor="website">Website URL</label>
          <input id="website" autoComplete="url" type="url" name="website" maxLength={200} />
        </div>

        <div>
          <label htmlFor="email">Business email <span>/ REQUIRED</span></label>
          <input id="email" autoComplete="email" type="email" name="email" required maxLength={254} />
        </div>

        <div>
          <label htmlFor="phone">Phone number</label>
          <input id="phone" autoComplete="tel" type="tel" name="phone" maxLength={40} />
        </div>

      </div></fieldset><fieldset><legend><span>02</span> PRODUCTION REQUIREMENTS</legend><div className="form-grid"><div>
          <label htmlFor="quantity">Monthly order quantity <span>/ REQUIRED</span></label>
          <select id="quantity" name="quantity" required defaultValue="">
            <option value="">Select quantity</option>
            <option value="50 - 200 pcs">50 - 200 pcs</option>
            <option value="200 - 500 pcs">200 - 500 pcs</option>
            <option value="500 - 1000 pcs">500 - 1000 pcs</option>
            <option value="1000+ pcs">1000+ pcs</option>
          </select>
        </div>

        <div>
          <label htmlFor="category">Product category <span>/ REQUIRED</span></label>
          <select id="category" name="category" required defaultValue="">
            <option value="">Select product category</option>
            <option value="T-Shirts">T-Shirts</option>
            <option value="Hoodies">Hoodies</option>
            <option value="Sweatshirts">Sweatshirts</option>
            <option value="Shorts">Shorts</option>
            <option value="Joggers">Joggers</option>
            <option value="Multiple Products">Multiple Products</option>
          </select>
        </div>
      </div></fieldset>

      <fieldset><legend><span>03</span> PROJECT DETAILS</legend><div className="message-field">
        <label htmlFor="message">Project details</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          maxLength={5000}
          placeholder="Tell us about your products, target quantity, timelines and manufacturing requirements."
        />
      </div></fieldset>

      <button type="submit" className="btn-primary" disabled={isSubmitting}>
        {isSubmitting ? "SUBMITTING..." : "SUBMIT PROJECT ↗"}
      </button>

      <p
        className={`form-status form-status-${submissionState}`}
        role="status"
        aria-live="polite"
      >
        {submissionState === "success" && (
          <>
            PROJECT RECEIVED. Your inquiry has been received.
            <br />
            Our team will get back to you shortly.
          </>
        )}
        {submissionState === "error" && (
          <>
            We couldn&apos;t submit your inquiry. Please try again.
          </>
        )}
      </p>
    </form>
  );
}

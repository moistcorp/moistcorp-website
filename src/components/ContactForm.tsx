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

      <div className="form-grid">
        <div>
          <label htmlFor="firstName">First Name *</label>
          <input id="firstName" type="text" name="firstName" required maxLength={100} />
        </div>

        <div>
          <label htmlFor="lastName">Last Name *</label>
          <input id="lastName" type="text" name="lastName" required maxLength={100} />
        </div>

        <div>
          <label htmlFor="company">Company Name *</label>
          <input id="company" type="text" name="company" required maxLength={150} />
        </div>

        <div>
          <label htmlFor="website">Website URL</label>
          <input id="website" type="url" name="website" maxLength={200} />
        </div>

        <div>
          <label htmlFor="email">Business Email *</label>
          <input id="email" type="email" name="email" required maxLength={254} />
        </div>

        <div>
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" type="tel" name="phone" maxLength={40} />
        </div>

        <div>
          <label htmlFor="quantity">Monthly Order Quantity *</label>
          <select id="quantity" name="quantity" required defaultValue="">
            <option value="">Select quantity</option>
            <option value="50 - 200 pcs">50 - 200 pcs</option>
            <option value="200 - 500 pcs">200 - 500 pcs</option>
            <option value="500 - 1000 pcs">500 - 1000 pcs</option>
            <option value="1000+ pcs">1000+ pcs</option>
          </select>
        </div>

        <div>
          <label htmlFor="category">Product Category *</label>
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
      </div>

      <div className="message-field">
        <label htmlFor="message">Project Details</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          maxLength={5000}
          placeholder="Tell us about your products, target quantity, timelines and manufacturing requirements."
        />
      </div>

      <button type="submit" className="btn-primary" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
      </button>

      <p
        className={`form-status form-status-${submissionState}`}
        role="status"
        aria-live="polite"
      >
        {submissionState === "success" && (
          <>
            Thank you. Your inquiry has been received.
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

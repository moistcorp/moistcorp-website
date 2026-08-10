"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <main className="section">
      <div className="container narrow">
        <p className="eyebrow">Something went wrong</p>
        <h1>We couldn&apos;t load this page.</h1>
        <p className="hero-text">
          Please try again, or return to the homepage.
        </p>
        <button type="button" className="btn-primary" onClick={() => reset()}>
          Try Again
        </button>
      </div>
    </main>
  );
}

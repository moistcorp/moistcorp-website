import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section">
      <div className="container narrow">
        <p className="eyebrow">Page not found</p>
        <h1>That page isn&apos;t available.</h1>
        <p className="hero-text">
          The page may have moved, or the address may be incorrect.
        </p>
        <Link href="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    </main>
  );
}

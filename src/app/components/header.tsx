"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="container header-inner">

        <Link href="/" onClick={() => setMenuOpen(false)}>
          <Image
            src="/logo.png"
            alt="Moist Corp"
            width={120}
            height={40}
            priority
          />
        </Link>

        <nav className="desktop-nav">
          <Link
            href="/about"
            className={`nav-link ${pathname === "/about" ? "nav-active" : ""}`}
          >
            About
          </Link>
          <Link
            href="/products"
            className={`nav-link ${pathname === "/products" ? "nav-active" : ""}`}
          >
            Products
          </Link>
          <Link
            href="/blog"
            className={`nav-link ${pathname === "/blog" ? "nav-active" : ""}`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="btn-primary nav-cta"
          >
            Start Your Project
          </Link>
        </nav>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {menuOpen && (
        <nav className="mobile-nav">
          <Link
            href="/about"
            className={pathname === "/about" ? "nav-active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/products"
            className={pathname === "/products" ? "nav-active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/blog"
            className={pathname === "/blog" ? "nav-active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="mobile-nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Start Your Project
          </Link>
        </nav>
      )}

    </header>
  );
}

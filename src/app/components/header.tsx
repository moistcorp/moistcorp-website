"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">

        <Link href="/">
          <Image
            src="/logo2.png"
            alt="Moist Corp"
            width={95}
            height={90}
            priority
          />
        </Link>

        <nav className="desktop-nav">
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-nav">

          <Link href="/about">About</Link>

          <Link href="/products">Products</Link>

          <Link href="/blog">Blog</Link>

          <Link href="/contact">Contact</Link>

        </div>
      )}
    </header>
  );
}
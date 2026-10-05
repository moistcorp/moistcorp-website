"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [["Corporation", "/about"], ["Capabilities", "/products"], ["Infrastructure", "/infrastructure"], ["Case Studies", "/case-studies"], ["Intelligence", "/blog"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (event.key === "Tab") {
        const last = document.querySelector<HTMLAnchorElement>("#mobile-navigation a:last-child");
        if (event.shiftKey && document.activeElement === toggleRef.current) {
          event.preventDefault(); last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault(); toggleRef.current?.focus();
        }
      }
    };
    const onResize = () => { if (window.innerWidth > 1100) setOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return <header className="site-header"><div className="header-shell">
    <Link className="brand" href="/" aria-label="Moist Corp home"><Image src="/logo2.png" alt="" width={42} height={42} preload />
      <span><strong>MOIST CORP</strong><small>APPAREL SYSTEMS</small></span></Link>
    <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([label, href]) => <Link key={href} href={href} aria-current={isCurrent(href) ? "page" : undefined}>{label}</Link>)}</nav>
    <div className="header-actions">
      <Link href="/contact" className="nav-cta">INITIATE PROJECT <span>↗</span></Link>
      <button ref={toggleRef} className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}><span /><span /></button>
    </div></div>
    <nav id="mobile-navigation" className="mobile-nav" data-open={open} inert={!open} aria-label="Mobile navigation">
      {links.map(([label, href], index) => <Link key={href} href={href} aria-current={isCurrent(href) ? "page" : undefined} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</Link>)}
      <Link href="/contact" onClick={() => setOpen(false)}><span>06</span>Initiate project</Link>
    </nav></header>;
}

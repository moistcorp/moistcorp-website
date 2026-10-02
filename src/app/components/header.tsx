"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [["Corporation", "/about"], ["Capabilities", "/products"], ["Infrastructure", "/infrastructure"], ["Intelligence", "/blog"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  return <header className="site-header"><div className="header-shell">
    <Link className="brand" href="/" aria-label="Moist Corp home"><Image src="/logo2.png" alt="" width={42} height={42} priority />
      <span><strong>MOIST CORP</strong><small>APPAREL SYSTEMS</small></span></Link>
    <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>)}</nav>
    <div className="header-actions"><span className="header-status"><i />SYSTEMS ONLINE</span>
      <Link href="/contact" className="nav-cta">INITIATE PROJECT <span>↗</span></Link>
      <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}><span /><span /></button>
    </div></div>
    <nav id="mobile-navigation" className="mobile-nav" data-open={open} aria-label="Mobile navigation">
      {links.map(([label, href], index) => <Link key={href} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</Link>)}
      <Link href="/contact" onClick={() => setOpen(false)}><span>05</span>Initiate project</Link>
    </nav></header>;
}

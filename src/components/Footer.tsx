import Link from "next/link";
import { StatusIndicator } from "./System";

const links = [["Corporation", "/about"], ["Capabilities", "/products"], ["Infrastructure", "/infrastructure"], ["Intelligence", "/blog"], ["Project intake", "/contact"]];

export default function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-main"><div className="footer-brand"><span>MOIST CORP</span><small>APPAREL SYSTEMS</small></div>
      <nav aria-label="Footer navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <div className="footer-contact"><a href="mailto:info@moistcorp.com">info@moistcorp.com</a><p>K-320 &amp; Q-5<br />Greater Noida, Uttar Pradesh<br />India</p>
        <div><a href="https://instagram.com/moist.corp">Instagram</a><a href="https://linkedin.com/company/moist-corp">LinkedIn</a></div></div></div>
    <div className="footer-meta"><span>MC WEB SYSTEM</span><StatusIndicator>SYSTEMS ONLINE</StatusIndicator><span>INDIA / GREATER NOIDA</span>
      <span>© {new Date().getFullYear()} MOIST CORP</span><span><Link href="/privacy-policy">PRIVACY</Link> · <Link href="/terms">TERMS</Link></span></div>
  </div></footer>;
}

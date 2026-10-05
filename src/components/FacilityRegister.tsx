import Link from "next/link";
import { SectionHeader } from "./System";

import { facilities } from "@/lib/facilities";

export function FacilityRegister({ detailed = false }: { detailed?: boolean }) {
  return <section className="section facility-register">
    <div className="container">
      <SectionHeader index="MC" label="OUR FACILITIES" title={<>TWO FACILITIES.<br />ONE OPERATING MODEL.</>}
        copy="Our manufacturing network connects apparel development, production and delivery through one coordinated team." />
      <div className="facility-register-grid">
        {facilities.map(({ name, code, anchor }) => <article key={code} id={detailed ? anchor : undefined} className="facility-record">
          <div className="facility-record-meta"><span>{code}</span><span>MANUFACTURING FACILITY</span></div>
          <h3>{name}</h3>
          <p>STATUS / OPERATIONAL</p>
          <Link href={detailed ? "/contact" : `/infrastructure#${anchor}`}>
            {detailed ? "ARRANGE A FACILITY VISIT" : "EXPLORE INFRASTRUCTURE"}<span aria-hidden="true">↗</span>
          </Link>
        </article>)}
      </div>
    </div>
  </section>;
}

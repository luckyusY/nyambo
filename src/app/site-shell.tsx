"use client";

import Link from "next/link";
import { useState } from "react";
import { menuGroups } from "./site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Inkindi decor Kigali home">
          Inkindi decor Kigali
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/about">Story</Link>
          <Link href="/private-events/weddings">Services</Link>
          <Link href="/case-studies">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <button className="menu-button" type="button" onClick={() => setOpen(true)} aria-label="Open menu">
          <span />
          <span />
          <em>Menu</em>
        </button>
      </header>

      {open ? (
        <div className="menu-panel" role="dialog" aria-modal="true" aria-label="Site menu">
          <button className="close-button" type="button" onClick={() => setOpen(false)} aria-label="Close menu">
            Close Menu
          </button>
          <div className="menu-columns">
            {menuGroups.map((group) => (
              <section key={group.title}>
                <h2>{group.title}</h2>
                {group.links.map(([label, href]) => (
                  <Link key={href} href={href} onClick={() => setOpen(false)}>
                    {label}
                  </Link>
                ))}
              </section>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-brand">Inkindi decor Kigali</div>
      <div>
        <h2>Get in touch</h2>
        <p>Phone: +250 780 000 000</p>
        <p>E-mail: hello@inkindidecorkigali.rw</p>
        <p>Kigali, Rwanda</p>
      </div>
      <div>
        <h2>Services</h2>
        <Link href="/private-events/kigali">Private events</Link>
        <Link href="/corporate/corporate-events">Corporate events</Link>
        <Link href="/venues">Venues</Link>
        <Link href="/private-events/weddings">Weddings</Link>
      </div>
    </footer>
  );
}

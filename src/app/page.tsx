"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/assets/images/event-04.jfif", alt: "Concert stage lighting in Kigali", w: 1080, h: 723 },
  { src: "/assets/images/event-11.jfif", alt: "White floral wedding stage", w: 1280, h: 960 },
  { src: "/assets/images/event-14.jfif", alt: "Green aisle with circular lighting", w: 939, h: 1080 },
  { src: "/assets/images/event-01.jfif", alt: "Corporate gala dinner under pink draping", w: 960, h: 540 },
  { src: "/assets/images/event-19.jfif", alt: "Outdoor poolside event venue in Rwanda", w: 810, h: 1080 },
  { src: "/assets/images/event-16.jpeg", alt: "Floral arch entrance", w: 907, h: 1080 },
  { src: "/assets/images/event-10.jfif", alt: "Stage production with green beams", w: 1080, h: 719 },
  { src: "/assets/images/event-18.jpeg", alt: "Gold floral ceiling installation", w: 1080, h: 821 },
];

const services = [
  ["Private Celebrations", "Weddings, introductions, birthdays, and family milestones shaped with warmth and precision."],
  ["Corporate Events", "Launches, conferences, galas, and protocol-ready experiences for teams and guests."],
  ["Production & Styling", "Stage design, florals, lighting, seating, sound, vendor direction, and day-of flow."],
];

const stats = [
  ["04", "signature event worlds"],
  ["360", "guest journey planning"],
  ["RW", "rooted in Rwanda"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<(typeof images)[number] | null>(null);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Nyambo home">
          Nyambo
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#story">Story</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <span />
          <span />
        </button>
      </header>

      {menuOpen ? (
        <div className="menu-panel" role="dialog" aria-modal="true" aria-label="Site menu">
          <button className="close-button" type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            ×
          </button>
          <a onClick={() => setMenuOpen(false)} href="#story">Story</a>
          <a onClick={() => setMenuOpen(false)} href="#services">Services</a>
          <a onClick={() => setMenuOpen(false)} href="#gallery">Gallery</a>
          <a onClick={() => setMenuOpen(false)} href="#contact">Contact</a>
        </div>
      ) : null}

      <section className="hero" id="home">
        <video className="hero-video" autoPlay muted loop playsInline poster="/assets/images/event-10.jfif">
          <source src="/assets/videos/moment-05.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">Kigali based event design and production</p>
          <h1>Nyambo</h1>
          <p>
            We design gatherings in Rwanda with atmosphere, hospitality, and the kind of detail guests remember after the lights come down.
          </p>
          <a className="primary-link" href="#contact">Begin an event</a>
        </div>
      </section>

      <section className="intro" id="story">
        <p className="section-kicker">Our way</p>
        <h2>Celebrations with presence, production with calm.</h2>
        <p>
          Nyambo brings together event styling, guest experience, venue transformation, and technical production for refined weddings, corporate galas, cultural moments, and destination celebrations across Rwanda.
        </p>
      </section>

      <section className="feature-grid" aria-label="Event highlights">
        <div className="portrait-tile">
          <Image src="/assets/images/event-03.jfif" alt="Warm stage detail" width={719} height={1080} sizes="(max-width: 900px) 100vw, 38vw" />
        </div>
        <div className="text-tile">
          <p className="section-kicker">Designed in layers</p>
          <h2>Florals, light, sound, flow, and the quiet choreography between them.</h2>
          <p>
            From first sketch to final guest departure, our team keeps the feeling clear and the logistics invisible.
          </p>
        </div>
        <div className="wide-tile">
          <Image src="/assets/images/event-12.jfif" alt="Elegant white and gold wedding setup" width={1280} height={960} sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-heading">
          <p className="section-kicker">What we do</p>
          <h2>One team for the full event picture.</h2>
        </div>
        <div className="service-list">
          {services.map(([title, body]) => (
            <article className="service-item" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stats-band" aria-label="Nyambo strengths">
        {stats.map(([number, label]) => (
          <div key={label}>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="gallery-section" id="gallery">
        <div className="section-heading">
          <p className="section-kicker">Seen in the room</p>
          <h2>Moments from recent productions.</h2>
        </div>
        <div className="gallery">
          {images.map((image, index) => (
            <button className={`gallery-image span-${index % 3}`} key={image.src} type="button" onClick={() => setActiveImage(image)}>
              <Image src={image.src} alt={image.alt} width={image.w} height={image.h} sizes="(max-width: 700px) 100vw, 33vw" />
            </button>
          ))}
        </div>
      </section>

      <section className="video-row" aria-label="Event films">
        <video controls muted poster="/assets/images/event-01.jfif">
          <source src="/assets/videos/moment-02.mp4" type="video/mp4" />
        </video>
        <video controls muted poster="/assets/images/event-14.jfif">
          <source src="/assets/videos/moment-06.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="testimonial">
        <p>
          “Nyambo made the room feel intentional from the entrance to the last song. Every detail had a reason, and the whole evening moved beautifully.”
        </p>
        <span>Client note, Kigali</span>
      </section>

      <footer className="footer" id="contact">
        <div>
          <p className="section-kicker">Start with a date, a place, or a feeling</p>
          <h2>Let’s shape your Rwanda event.</h2>
        </div>
        <div className="footer-actions">
          <a href="mailto:hello@nyambo.rw">hello@nyambo.rw</a>
          <a href="tel:+250780000000">+250 780 000 000</a>
          <span>Kigali, Rwanda</span>
        </div>
      </footer>

      {activeImage ? (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActiveImage(null)}>
          <button type="button" aria-label="Close image">×</button>
          <Image src={activeImage.src} alt={activeImage.alt} width={activeImage.w} height={activeImage.h} sizes="90vw" />
        </div>
      ) : null}
    </main>
  );
}

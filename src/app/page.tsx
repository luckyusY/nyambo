import Image from "next/image";
import Link from "next/link";
import { images } from "./site-data";
import { SiteFooter, SiteHeader } from "./site-shell";

const partyPics = [images[3], images[10], images[13], images[0], images[15], images[18], images[9], images[17], images[7], images[11], images[14], images[16]];

const featureSections = [
  {
    title: "Corporate Events",
    href: "/corporate/corporate-events",
    image: images[9],
    body:
      "In a connected world of teams, partners, and clients, nothing replaces the energy of a beautifully run room. Inkindi decor Kigali plans launches, conferences, dinners, and staff celebrations with polished production and warm hospitality.",
  },
  {
    title: "Luxury Private Events",
    href: "/private-events/kigali",
    image: images[11],
    body:
      "From intimate dinners to full-scale parties, our private event planning brings together styling, catering direction, florals, entertainment, guest flow, and on-the-day coordination.",
  },
  {
    title: "Venues",
    href: "/venues",
    image: images[18],
    body:
      "Looking for the right Rwanda venue? We help source and transform hotels, gardens, halls, private homes, and outdoor settings into spaces that fit the occasion.",
  },
  {
    title: "Weddings",
    href: "/private-events/weddings",
    image: images[15],
    body:
      "Inkindi decor Kigali weddings are about the feeling in the room: meaningful ceremony, beautiful flow, considered styling, and a team quietly managing every detail.",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="home-hero">
        <Image src={images[9]} alt="Inkindi decor Kigali event stage with lighting" fill priority sizes="100vw" />
        <div className="hero-card">
          <p>Party Planner Rwanda</p>
          <h1>Inkindi decor Kigali</h1>
          <span>
            An event planning and production company in Rwanda creating private parties, weddings, corporate gatherings, and immersive celebrations with bespoke styling, technical production, and memorable hospitality.
          </span>
          <div className="hero-actions">
            <Link href="/contact">Get in touch</Link>
            <Link href="/private-events/kigali">Plan an event</Link>
          </div>
        </div>
      </section>

      <section className="who-section">
        <div>
          <p className="small-heading">Who are we?</p>
          <h2>We bring the occasion. You bring the people.</h2>
        </div>
        <div>
          <p>
            Inkindi decor Kigali is a Kigali-based event company with creativity, production discipline, and guest experience at the heart of every brief. Our clients are not just throwing a party or booking a room. Together, we create lasting memories that live in the minds of guests long after the music ends.
          </p>
          <Link className="outline-link" href="/about">Get to know us</Link>
        </div>
      </section>

      <section className="callout-strip">
        <Link href="/contact">Get in touch</Link>
        <span>Call us anytime on: +250 780 000 000</span>
      </section>

      <section className="pics-section">
        <p className="small-heading">Our favourite party pics</p>
        <div className="picture-wall">
          {partyPics.map((src, index) => (
            <Image
              key={src}
              className={`pic-${index % 5}`}
              src={src}
              alt="Inkindi decor Kigali event production"
              width={900}
              height={900}
              sizes="(max-width: 700px) 50vw, 25vw"
            />
          ))}
        </div>
        <Link className="center-link" href="/case-studies">See more</Link>
      </section>

      <section className="feature-list">
        {featureSections.map((section, index) => (
          <article className="feature-row" key={section.title}>
            <div className="feature-copy">
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              <Link href={section.href}>Find out more</Link>
            </div>
            <Image src={section.image} alt={section.title} width={1100} height={820} sizes="(max-width: 900px) 100vw, 50vw" />
            {index === 1 ? (
              <div className="mini-stack">
                <Image src={images[2]} alt="Inkindi decor Kigali detail" width={500} height={760} />
                <Image src={images[4]} alt="Inkindi decor Kigali lighting detail" width={500} height={760} />
              </div>
            ) : null}
          </article>
        ))}
      </section>

      <section className="reviews-section">
        <p className="small-heading">What people are saying about our event planning</p>
        <div className="reviews-grid">
          <blockquote>
            <Image src={images[8]} alt="Gala setup" width={600} height={400} />
            <p>Inkindi decor Kigali created the most beautiful evening for our family. The room, timing, and details were all handled with real care.</p>
            <cite>Private client</cite>
          </blockquote>
          <blockquote>
            <Image src={images[0]} alt="Corporate dinner setup" width={600} height={400} />
            <p>The team brought calm to a complex corporate event and made the whole production feel effortless for our guests.</p>
            <cite>Kigali organization</cite>
          </blockquote>
          <blockquote>
            <Image src={images[12]} alt="Wedding venue" width={600} height={400} />
            <p>From the first plan to the last song, everything felt intentional, elegant, and completely personal.</p>
            <cite>Wedding couple</cite>
          </blockquote>
        </div>
      </section>

      <section className="inspiration-section">
        <p className="small-heading">Get inspired</p>
        <div className="inspiration-grid">
          <Link href="/case-studies">
            <Image src={images[14]} alt="Wedding inspiration" width={900} height={1100} />
            <h3>Wedding Party in Kigali</h3>
            <p>How to plan a bespoke celebration with rhythm and meaning.</p>
          </Link>
          <Link href="/blog">
            <Image src={images[17]} alt="Venue inspiration" width={900} height={1100} />
            <h3>Rwanda Venue Ideas</h3>
            <p>A practical guide for choosing a venue that fits the guest journey.</p>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

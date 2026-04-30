import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MovingPictures, Reveal } from "../motion-layer";
import { images, pageContent } from "../site-data";
import { SiteFooter, SiteHeader } from "../site-shell";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  return Object.keys(pageContent).map((slug) => ({ slug: slug.split("/") }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = pageContent[slug.join("/")];

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} | Inkindi decor Kigali`,
    description: page.intro,
  };
}

export default async function ContentPage({ params }: Props) {
  const { slug } = await params;
  const page = pageContent[slug.join("/")];

  if (!page) {
    notFound();
  }

  return (
    <main>
      <SiteHeader />

      <section className="sub-hero">
        <Image src={page.image} alt={page.title} fill priority sizes="100vw" />
        <Reveal>
          <p>{page.kicker}</p>
          <h1>{page.title}</h1>
          <span>{page.hero}</span>
        </Reveal>
      </section>

      <section className="sub-intro">
        <Reveal className="sub-intro-label">
          <p className="small-heading">{page.kicker}</p>
          <Image src={page.image} alt={`${page.title} detail`} width={460} height={600} sizes="(max-width: 900px) 100vw, 26vw" />
        </Reveal>
        <Reveal className="sub-intro-copy">
          <h2>{page.intro}</h2>
          {page.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
      </section>

      <MovingPictures images={[images[3], images[10], images[13], images[0], images[15], images[18], images[9]]} />

      <section className="sub-gallery">
        {[images[1], images[10], images[13], images[15], images[18], images[7], images[2], images[4], images[8]].map((src) => (
          <Image key={src} src={src} alt="Inkindi decor Kigali event detail" width={900} height={900} sizes="(max-width: 700px) 50vw, 33vw" />
        ))}
      </section>

      <section className="process-section">
        <p className="small-heading">How it works</p>
        <div>
          <article>
            <span>01</span>
            <h2>Concept</h2>
            <p>We define the event feeling, guest journey, venue needs, style direction, budget shape, and production requirements.</p>
          </article>
          <article>
            <span>02</span>
            <h2>Planning</h2>
            <p>We build the supplier team, timeline, floor plan, styling details, technical brief, and all the quiet logistics.</p>
          </article>
          <article>
            <span>03</span>
            <h2>Delivery</h2>
            <p>On event day, Inkindi decor Kigali manages setup, suppliers, guest flow, stage cues, troubleshooting, and final breakdown.</p>
          </article>
        </div>
      </section>

      <section className="page-cta">
        <h2>Ready to plan something memorable?</h2>
        <Link href="/contact">Get in touch</Link>
      </section>

      <SiteFooter />
    </main>
  );
}

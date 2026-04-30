import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    title: `${page.title} | Nyambo`,
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
        <div>
          <p>{page.kicker}</p>
          <h1>{page.title}</h1>
          <span>{page.hero}</span>
        </div>
      </section>

      <section className="sub-intro">
        <p className="small-heading">{page.kicker}</p>
        <h2>{page.intro}</h2>
        <div>
          {page.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="sub-gallery">
        {[images[1], images[10], images[13], images[15], images[18], images[7]].map((src) => (
          <Image key={src} src={src} alt="Nyambo event detail" width={900} height={900} sizes="(max-width: 700px) 50vw, 33vw" />
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
            <p>On event day, Nyambo manages setup, suppliers, guest flow, stage cues, troubleshooting, and final breakdown.</p>
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

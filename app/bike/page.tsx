import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { bike, components } from "@/data/bike";
import { HashDetailsOpener } from "@/components/hash-details-opener";

export const metadata: Metadata = {
  title: "My Tour De France Bike · Jaron A Wright",
  description:
    "Madone SLR 7 AXS Gen 8. Frame, groupset, wheels, and the reasoning behind every component.",
};

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export default function BikePage() {
  return (
    <main id="main" className="article bike-page">
      <nav>
        <Link href="/" className="back-link">
          ← Jaron A Wright
        </Link>
      </nav>

      <figure className="bike-figure">
        <Image
          className="bike-photo"
          src="/assets/bike.png"
          alt="Jaron's custom Trek Madone SLR build."
          width={2528}
          height={1684}
          priority
          sizes="(min-width: 640px) 32rem, 100vw"
        />
      </figure>

      <article>
        <header className="article-header bike-header">
          <p className="bike-eyebrow">
            <span>{bike.year}</span>
            <span aria-hidden="true">·</span>
            <span>{bike.generation}</span>
          </p>
          <h1>{bike.name}</h1>
          <p className="article-meta">A custom build, piece by piece.</p>
        </header>

        <dl className="spec-grid">
          <div>
            <dt>Frame</dt>
            <dd>{bike.frameColor}</dd>
          </div>
          <div>
            <dt>Size</dt>
            <dd>{bike.size}</dd>
          </div>
          <div>
            <dt>Weight</dt>
            <dd>{bike.estimatedWeight}</dd>
          </div>
          <div>
            <dt>Wheels</dt>
            <dd>{bike.wheels}</dd>
          </div>
          <div>
            <dt>Groupset</dt>
            <dd>Force AXS</dd>
          </div>
          <div>
            <dt>Parts</dt>
            <dd>{components.length}</dd>
          </div>
        </dl>

        <aside className="wip" role="note">
          <span className="wip-dot" aria-hidden="true" />
          <p>
            <strong>Work in progress.</strong> The build is still coming
            together. Once the bike is complete, I&apos;ll post photos here
            soon.
          </p>
        </aside>

        <section className="exhibit" aria-labelledby="exhibit-heading">
          <div className="exhibit-intro">
            <h2 id="exhibit-heading">The Build</h2>
            <p>
              Every component was chosen on purpose. Tap any entry to read the
              reasoning.
            </p>
          </div>

          <ol className="exhibit-list">
            {components.map((c) => (
              <li key={c.position} className="exhibit-row">
                <details id={slug(c.name)} className="exhibit-item">
                  <summary>
                    <span className="exhibit-number" aria-hidden="true">
                      {c.position}
                    </span>
                    <div className="exhibit-head">
                      <span className="exhibit-category">{c.category}</span>
                      <span className="exhibit-name">{c.name}</span>
                      <span className="exhibit-tagline">{c.tagline}</span>
                    </div>
                    <span className="exhibit-chevron" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </summary>
                  <div className="exhibit-detail">
                    <p>{c.detail}</p>
                    {c.images && (
                      <div className="exhibit-images">
                        {c.images.map((img) => (
                          <Image
                            key={img.src}
                            src={img.src}
                            alt={img.alt}
                            width={700}
                            height={700}
                            sizes="(min-width: 640px) 16rem, 100vw"
                          />
                        ))}
                      </div>
                    )}
                    {c.url && c.brand && (
                      <a
                        className="exhibit-link"
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${c.brand} (opens in new tab)`}
                      >
                        <span className="exhibit-link-label">{c.brand}</span>
                        <span className="exhibit-arrow" aria-hidden="true">
                          ↗
                        </span>
                      </a>
                    )}
                  </div>
                </details>
              </li>
            ))}
          </ol>
        </section>
      </article>
      <HashDetailsOpener />
    </main>
  );
}

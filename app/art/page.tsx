import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wolf Wright Stories · Jaron A Wright",
  description: "Wolf Wright Stories, a collection of art by Jaron A Wright.",
};

export default function ArtPage() {
  return (
    <main id="main" className="article">
      <nav>
        <Link href="/" className="back-link">
          ← Jaron A Wright
        </Link>
      </nav>

      <figure className="artwork-figure">
        <Image
          className="artwork"
          src="/assets/art-1.PNG"
          alt="Wolf Wright Stories, a retro comic-book cover: a werewolf looms over a man in a purple jacket carrying a woman in red, standing in a graveyard with tombstones reading Jaron Wright and Diana Wolf."
          width={1696}
          height={2528}
          priority
        />
      </figure>

      <article>
        <header className="article-header">
          <h1>Wolf Wright Stories</h1>
          <p className="article-meta">Comic book cover art</p>
        </header>

        <div className="prose">
          <p>
            Wolf Wright Stories is a collection of art documenting the
            adventures my girlfriend and I have been on. Jaron A Wright and
            Diana Wolf, rendered as the leads of their own comic book.
          </p>
          <p>
            Roy Lichtenstein is my favorite artist I&apos;ve ever seen. The
            bold lines, the Ben Day dots, the way a pulpy comic panel can hold
            real feeling. This is my small homage.
          </p>
          <p>
            More pieces are in progress. I&apos;ll put them up here soon.
          </p>
        </div>
      </article>
    </main>
  );
}

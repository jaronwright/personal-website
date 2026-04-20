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
            Wolf Wright Stories is an ongoing series of comic book covers
            starring me and my girlfriend Diana, both of us reimagined as the
            leads of our own adventures. Every cover comes from something
            Diana and I actually lived, just turned up a notch for the page.
            Her last name is Wolf, mine is Wright; the title kind of wrote
            itself.
          </p>
          <p>
            I found Roy Lichtenstein at the MoMA in New York, on the first
            trip Diana and I ever took together, and he&apos;s been my
            favorite artist ever since. We&apos;re modern and contemporary
            people at heart, so any new city we land in, the local MoMA or MCA
            is the first stop. Lichtenstein is one of the artists who stuck.
            The bold lines. The Ben Day dots. The fact that he put comic
            panels on gallery walls and made them belong there. He&apos;s neck
            and neck with Keith Haring in our personal canon (you&apos;ll find
            Haring over on my{" "}
            <Link href="/bike#pedal-mafia-keith-haring">bike page</Link>).
          </p>
          <p>
            The cover on this page came out of that first New York trip. I got
            home, started messing around with AI, and asked it to put Diana
            and me in Lichtenstein&apos;s world. This is what came back. I
            liked it enough that Diana and I now have t-shirts with the cover
            art printed on them.
          </p>
          <p>
            More pieces are in the works. I&apos;ll post them here as they
            come.
          </p>
        </div>
      </article>
    </main>
  );
}

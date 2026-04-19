import Image from "next/image";
import Link from "next/link";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MediumIcon,
} from "@/components/icons";

const elsewhere = [
  {
    name: "Medium",
    href: "https://medium.com/@jaron.a.wright",
    Icon: MediumIcon,
  },
  {
    name: "GitHub",
    href: "https://github.com/jaronwright",
    Icon: GitHubIcon,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/jaron.wright",
    Icon: InstagramIcon,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/jaronwright",
    Icon: LinkedInIcon,
  },
];

export default function Home() {
  return (
    <main id="main">
      <header>
        <div className="avatar">
          <Image
            src="/assets/profile-photo.jpeg"
            alt="Jaron A Wright"
            width={288}
            height={288}
            priority
          />
        </div>
        <h1>Jaron A Wright</h1>
      </header>

      <section className="bio" aria-label="About">
        <p>
          Hey, I&apos;m Jaron. I grew up in Colorado, spent time in Boston for
          business school and a few other places along the way, and these days
          I&apos;m in Chicago.
        </p>
        <p>
          I work on AI tooling at a highly regulated Fortune 100 company, which
          mostly means sitting in rooms with senior leaders and helping them
          think through what agentic coding means before it means something
          they can&apos;t take back. The answers are rarely clean. That&apos;s
          the part I like.
        </p>
        <p>
          Outside of work I&apos;m usually on a bike, lifting, on a yoga mat,
          or losing at poker to my friends. I&apos;ve circled the globe thrice
          and collected 42 countries along the way.
        </p>
        <p>
          I also build things. Agents. Apps. A custom road bike I&apos;ve been
          piecing together since fall. I run on bikes, books, borders, and the
          kind of problems that don&apos;t have a clean answer yet.
        </p>
        <p>This is where I keep what I&apos;ve made.</p>
      </section>

      <section className="list" aria-labelledby="building-heading">
        <h2 id="building-heading">Building</h2>
        <ul>
          <li>
            <a
              href="https://workouts.jaronwright.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="item-name">
                Workout Tracker
                <span className="sr-only"> (opens in new tab)</span>
              </span>
              <span className="item-desc">
                An app for tracking and planning workouts. Create an account
                and come compete with me and my friends.
              </span>
            </a>
          </li>
          <li>
            <div className="item">
              <span className="item-name">
                TruthAI <em aria-hidden="true">soon</em>
                <span className="sr-only">, coming soon</span>
              </span>
              <span className="item-desc">
                Summarizing the voice of large communities.
              </span>
            </div>
          </li>
          <li>
            <Link href="/bike">
              <span className="item-name">My Tour De France Bike</span>
              <span className="item-desc">
                The build, piece by piece. Finished photos coming soon.
              </span>
            </Link>
          </li>
          <li>
            <Link href="/art">
              <span className="item-name">Wolf Wright Stories</span>
              <span className="item-desc">
                A collection of stories told through art.
              </span>
            </Link>
          </li>
        </ul>
      </section>

      <section className="list" aria-labelledby="elsewhere-heading">
        <h2 id="elsewhere-heading">Elsewhere</h2>
        <ul className="links">
          {elsewhere.map(({ name, href, Icon }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer me"
              >
                <Icon className="icon" aria-hidden="true" />
                <span className="link-name">
                  {name}
                  <span className="sr-only"> (opens in new tab)</span>
                </span>
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

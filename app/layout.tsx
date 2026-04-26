import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";

const themeInitScript = `(() => {
  try {
    const t = localStorage.getItem('theme');
    const cl = document.documentElement.classList;
    if (t === 'light') cl.add('light');
    else if (t === 'retro') cl.add('retro');
  } catch (e) {}
})();`;

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jaron A Wright",
  description: "Jaron A Wright, builder and cyclist.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF7" },
    { media: "(prefers-color-scheme: dark)", color: "#0E0E0D" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            ★ Welcome to my homepage! ★ Best viewed in Netscape Navigator at 800×600 ★ Sign the guestbook! ★ You are visitor #00042 ★ Welcome to my homepage! ★ Best viewed in Netscape Navigator at 800×600 ★ Sign the guestbook! ★ You are visitor #00042 ★
          </div>
        </div>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}

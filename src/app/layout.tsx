import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const heading = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600"],
});

const nav = [
  { href: "/essays", label: "Essays" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const metadata: Metadata = {
  title: {
    default: "The Explorer",
    template: "%s · The Explorer",
  },
  description: "Essays on geopolitics, society, history, and ideas.",
  metadataBase: new URL("https://example.com"),
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${body.variable} ${heading.variable} antialiased`}>
        <div className="relative min-h-dvh">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(75,93,129,0.22),_transparent_60%)]"
          />

          <div className="relative mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-5 pb-10 pt-8 sm:px-8 lg:px-0">
            <header className="text-center">
              <p className="font-sans text-[0.7rem] uppercase tracking-[0.3em] text-muted/90">
                Personal essays
              </p>
              <Link href="/">
                <h1 className="mt-4 font-heading text-5xl tracking-tight text-ink sm:text-6xl md:text-[4.25rem] md:leading-[1.05]">
                  The Explorer
                </h1>
              </Link>
              <p className="mx-auto mt-4 max-w-2xl font-sans text-sm leading-relaxed text-muted">
                Essays on geopolitics, society, history, and ideas—written for
                slow reading and quiet reflection.
              </p>
              <nav
                aria-label="Primary"
                className="mt-6 flex justify-center gap-6 font-sans text-xs uppercase tracking-[0.18em] text-muted"
              >
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="underline decoration-transparent underline-offset-4 hover:decoration-current"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-8 h-px w-full bg-black/10" />
            </header>

            <main className="mt-10 flex-1 pb-6">{children}</main>

            <footer className="mt-4 pb-2 text-center text-xs font-sans text-muted">
              © {year} The Explorer
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}

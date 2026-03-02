import Link from "next/link";

const nav = [
  { href: "/essays", label: "Essays" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="mx-auto w-full max-w-[72rem] px-5 pt-10 sm:px-10">
      <div className="flex items-baseline justify-between gap-6">
        <Link
          href="/"
          className="font-heading text-lg tracking-tight text-ink"
        >
          The Explorer
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-5">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-sm text-muted underline decoration-transparent underline-offset-4 hover:decoration-current"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-6 h-px w-full bg-black/10" />
    </header>
  );
}


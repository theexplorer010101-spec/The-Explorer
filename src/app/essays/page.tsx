import { Metadata } from "next";
import Link from "next/link";
import { getAllEssayMeta } from "@/lib/essays";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Essays",
  description: "A clean list of essays, notes, and explorations.",
};

export const dynamic = "force-static";

export default function EssaysPage() {
  const essays = getAllEssayMeta();

  return (
    <section>
      <header className="max-w-[46rem]">
        <h2 className="font-heading text-2xl tracking-tight text-ink sm:text-3xl">
          Essays
        </h2>
        <p className="mt-3 font-sans text-sm leading-relaxed text-muted">
          A small archive of long-form pieces. No hot takes—only things that
          still feel worth reading after the week has passed.
        </p>
      </header>

      <div className="mt-9 space-y-4">
        {essays.map((e) => (
          <article
            key={e.slug}
            className="group rounded-2xl border border-black/7 bg-white/70 px-5 py-5 transition-colors hover:border-accent/45"
          >
            <p className="font-sans text-[0.7rem] uppercase tracking-[0.2em] text-muted/90">
              <time dateTime={e.date}>{formatDate(e.date)}</time>
            </p>
            <h3 className="mt-3 font-heading text-xl tracking-tight text-ink">
              <Link
                href={`/essays/${e.slug}`}
                className="underline decoration-transparent underline-offset-4 group-hover:decoration-current"
              >
                {e.title}
              </Link>
            </h3>
            <p className="mt-3 max-w-[70ch] font-sans text-sm leading-relaxed text-muted">
              {e.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}


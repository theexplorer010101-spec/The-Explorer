import Link from "next/link";
import { getAllEssayMeta } from "@/lib/essays";
import { formatDate } from "@/lib/format";

export default function Home() {
  const essays = getAllEssayMeta().slice(0, 3);

  return (
    <section aria-labelledby="latest-heading">
      <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-start">
        <div className="space-y-6">
          <div className="rounded-3xl border border-black/7 bg-white/70 px-6 py-6 shadow-[0_18px_45px_rgba(15,23,42,0.10)] backdrop-blur-sm sm:px-8 sm:py-7">
            <p className="font-sans text-xs uppercase tracking-[0.22em] text-muted">
              Notebook
            </p>
            <p className="mt-4 font-heading text-xl tracking-tight text-ink">
              A calm place to follow questions—not headlines.
            </p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-muted">
              Essays appear occasionally, not on a schedule. The aim is to sit
              with complexity long enough that easy answers feel suspicious.
            </p>
          </div>

          <div className="hidden text-xs font-sans text-muted/80 md:block">
            <p>
              New pieces are added quietly. The archive is small on purpose, so
              each essay has room to breathe.
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between gap-4">
            <h2
              id="latest-heading"
              className="font-heading text-lg tracking-tight text-ink"
            >
              Latest essays
            </h2>
            <Link
              href="/essays"
              className="font-sans text-xs uppercase tracking-[0.18em] text-muted underline decoration-transparent underline-offset-4 hover:decoration-current"
            >
              View all
            </Link>
          </div>

          <div className="mt-5 space-y-4">
            {essays.map((e) => (
              <article
                key={e.slug}
                className="group rounded-2xl border border-black/7 bg-white/70 px-5 py-4 transition-colors hover:border-accent/45"
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
                <p className="mt-3 line-clamp-3 max-w-[40rem] font-sans text-sm leading-relaxed text-muted">
                  {e.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

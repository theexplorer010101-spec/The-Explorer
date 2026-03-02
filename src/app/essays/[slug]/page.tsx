import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllEssayMeta, getEssayBySlug, getEssaySlugs } from "@/lib/essays";
import { formatDate } from "@/lib/format";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getEssaySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = getAllEssayMeta().find((e) => e.slug === slug);
  if (!meta) return {};

  return {
    title: meta.title,
    description: meta.summary,
    alternates: { canonical: `/essays/${meta.slug}` },
    openGraph: {
      title: meta.title,
      description: meta.summary,
      type: "article",
    },
  };
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const meta = getAllEssayMeta().find((e) => e.slug === slug);
  if (!meta) notFound();

  const essay = await getEssayBySlug(slug);

  return (
    <article className="mx-auto max-w-[46rem]">
      <header className="pb-8">
        <p className="font-sans text-xs uppercase tracking-wide text-muted">
          <time dateTime={essay.date}>{formatDate(essay.date)}</time>
        </p>
        <h1 className="mt-3 font-heading text-4xl tracking-tight text-ink sm:text-5xl">
          {essay.title}
        </h1>
        <p className="mt-5 font-sans leading-relaxed text-muted">
          {essay.summary}
        </p>
        {essay.tags.length > 0 ? (
          <ul className="mt-6 flex flex-wrap gap-2">
            {essay.tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-black/10 bg-white/40 px-3 py-1 font-sans text-xs text-muted"
              >
                {t}
              </li>
            ))}
          </ul>
        ) : null}
      </header>

      <div
        className="prose prose-explorer"
        dangerouslySetInnerHTML={{ __html: essay.html }}
      />
    </article>
  );
}


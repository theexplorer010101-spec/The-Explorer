import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "A personal space for exploration and ideas.",
};

export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-[46rem]">
      <h2 className="font-heading text-2xl tracking-tight text-ink sm:text-3xl">
        About
      </h2>
      <div className="prose prose-explorer mt-8">
        <p>
          <strong>The Explorer</strong> is a personal space for thinking in
          public: a small, quiet notebook for long-form essays on geopolitics,
          society, history, and ideas.
        </p>
        <p>
          I’m not trying to keep up with the day’s noise. I’m interested in
          slower questions—how institutions evolve, how narratives harden, how
          incentives shape decisions, and how people make meaning under
          uncertainty.
        </p>
        <p>
          The tone here aims to be neutral and reflective. When I have a view,
          I’ll try to show the scaffolding: assumptions, context, and what might
          change my mind.
        </p>
      </div>
    </article>
  );
}


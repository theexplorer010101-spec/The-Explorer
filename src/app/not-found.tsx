import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[46rem]">
      <h1 className="font-heading text-3xl tracking-tight text-ink sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-5 font-sans leading-relaxed text-muted">
        This page doesn’t exist. If you followed a link from within the site,
        it may have been renamed.
      </p>
      <p className="mt-6 font-sans text-sm">
        <Link
          href="/"
          className="underline decoration-transparent underline-offset-4 hover:decoration-current"
        >
          Return home
        </Link>
      </p>
    </div>
  );
}


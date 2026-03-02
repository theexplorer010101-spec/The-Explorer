import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "A simple contact page for The Explorer.",
};

export const dynamic = "force-static";

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-[46rem]">
      <h2 className="font-heading text-2xl tracking-tight text-ink sm:text-3xl">
        Contact
      </h2>
      <div className="prose prose-explorer mt-8">
        <p>
          If you’d like to reach me, email{" "}
          <a href="mailto:you@example.com">you@example.com</a> or say hello on{" "}
          <a
            href="https://www.linkedin.com/in/your-handle/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </article>
  );
}


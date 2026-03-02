## The Explorer

Minimalist, editorial personal essay website built with:

- Next.js (App Router)
- Tailwind CSS (with Typography)
- Markdown-based essays (frontmatter + automatic listings)
- Static generation, deployable on Vercel

### Design notes (brief)

- **Warm paper + charcoal ink**: reduces contrast fatigue for long reading sessions.
- **Serif headings + sans body**: a classic editorial pairing; headings feel “bookish,” body stays crisp.
- **Large margins + relaxed leading**: prioritizes comprehension over density.
- **Muted accent**: links are visible but not loud; the essay remains the focus.
- **No animations**: stable, quiet interface that doesn’t compete with text.

### Content model

Essays live in `content/essays/*.md` with frontmatter:

```md
---
title: "Your title"
date: "2026-02-01"
summary: "One or two sentences."
tags: ["tag1", "tag2"]
---
```

Routes:

- `/` shows the latest 3 essays
- `/essays` lists all essays
- `/essays/[slug]` renders a single markdown file

### Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Build

```bash
npm run build
npm run start
```

### Deploy on Vercel

1. Push the repository to GitHub.
2. In Vercel, “New Project” → import the repo.
3. Framework preset: Next.js (auto-detected).
4. Build command: `npm run build` (default).
5. Output: handled by Next.js.

### Customize

- **Site URL**: replace `https://example.com` in `src/app/layout.tsx`, `src/app/robots.ts`, and `src/app/sitemap.ts`.
- **Contact details**: update `src/app/contact/page.tsx`.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

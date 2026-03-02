import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";

export type EssayFrontmatter = {
  title: string;
  date: string; // YYYY-MM-DD
  summary: string;
  tags?: string[];
};

export type EssayMeta = Omit<EssayFrontmatter, "tags"> & {
  slug: string;
  tags: string[];
};

export type Essay = EssayMeta & {
  html: string;
};

const essaysDir = path.join(process.cwd(), "content", "essays");

function listMarkdownFiles() {
  if (!fs.existsSync(essaysDir)) return [];
  return fs
    .readdirSync(essaysDir)
    .filter((f) => f.toLowerCase().endsWith(".md"));
}

export function getEssaySlugs(): string[] {
  return listMarkdownFiles().map((file) => file.replace(/\.md$/i, ""));
}

export function getAllEssayMeta(): EssayMeta[] {
  const slugs = getEssaySlugs();
  const metas = slugs.map((slug) => {
    const fullPath = path.join(essaysDir, `${slug}.md`);
    const file = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(file);

    const fm = data as Partial<EssayFrontmatter>;
    if (!fm.title || !fm.date || !fm.summary) {
      throw new Error(
        `Missing required frontmatter in content/essays/${slug}.md (title, date, summary)`
      );
    }

    return {
      slug,
      title: fm.title,
      date: fm.date,
      summary: fm.summary,
      tags: Array.isArray(fm.tags) ? fm.tags : [],
    } satisfies EssayMeta;
  });

  return metas.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getEssayBySlug(slug: string): Promise<Essay> {
  const fullPath = path.join(essaysDir, `${slug}.md`);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);

  const fm = data as Partial<EssayFrontmatter>;
  if (!fm.title || !fm.date || !fm.summary) {
    throw new Error(
      `Missing required frontmatter in content/essays/${slug}.md (title, date, summary)`
    );
  }

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);

  return {
    slug,
    title: fm.title,
    date: fm.date,
    summary: fm.summary,
    tags: Array.isArray(fm.tags) ? fm.tags : [],
    html: processed.toString(),
  };
}


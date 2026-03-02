import type { MetadataRoute } from "next";
import { getAllEssayMeta } from "@/lib/essays";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://example.com";
  const essays = getAllEssayMeta();

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/essays`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    ...essays.map((e) => ({
      url: `${baseUrl}/essays/${e.slug}`,
      lastModified: new Date(e.date),
    })),
  ];
}


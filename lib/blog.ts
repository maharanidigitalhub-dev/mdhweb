import { getMdxEntries, getMdxEntry } from "@/lib/mdx";

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
};

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const entries = await getMdxEntries("posts");
  return entries
    .map((entry) => ({
      slug: entry.slug,
      title: entry.frontmatter.title || "Untitled",
      description: entry.frontmatter.description || "",
      date: entry.frontmatter.date || "1970-01-01",
      tags: (entry.frontmatter.tags || "")
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string) {
  const entry = await getMdxEntry("posts", slug);
  return {
    ...entry,
    frontmatter: {
      ...entry.frontmatter,
      title: entry.frontmatter.title || "Untitled",
      description: entry.frontmatter.description || "",
      date: entry.frontmatter.date || "1970-01-01",
      tags: (entry.frontmatter.tags || "")
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)
    }
  };
}

export function getTableOfContents(content: string) {
  return content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const text = line.replace(/^##\s+/, "").trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
      return { text, id };
    });
}

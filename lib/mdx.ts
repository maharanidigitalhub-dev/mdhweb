import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

const contentRoot = path.join(process.cwd(), "content");

export type MdxRecord = {
  slug: string;
  frontmatter: Record<string, string>;
  content: string;
};

export async function getMdxEntries(directory: string): Promise<MdxRecord[]> {
  const directoryPath = path.join(contentRoot, directory);
  const entries = await fs.readdir(directoryPath);
  const records = await Promise.all(
    entries
      .filter((entry) => entry.endsWith(".mdx"))
      .map(async (entry) => {
        const filePath = path.join(directoryPath, entry);
        const raw = await fs.readFile(filePath, "utf8");
        const { content, data } = matter(raw);
        return {
          slug: entry.replace(/\.mdx$/, ""),
          frontmatter: Object.fromEntries(
            Object.entries(data).map(([key, value]) => [key, String(value)])
          ),
          content
        } satisfies MdxRecord;
      })
  );
  return records;
}

export async function getMdxEntry(directory: string, slug: string) {
  const filePath = path.join(contentRoot, directory, `${slug}.mdx`);
  const raw = await fs.readFile(filePath, "utf8");
  const { content, data } = matter(raw);
  return {
    slug,
    frontmatter: Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, String(value)])
    ),
    content
  } satisfies MdxRecord;
}

export async function renderMdx(source: string) {
  const compiled = await compileMDX({
    source,
    options: { parseFrontmatter: false }
  });
  return compiled.content;
}

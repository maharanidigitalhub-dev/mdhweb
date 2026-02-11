import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { getAllPosts, getPostBySlug, getTableOfContents } from "@/lib/blog";
import { renderMdx } from "@/lib/mdx";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const posts = await getAllPosts();
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://maharanidigitalhub.com/blog/${post.slug}`
    }
  };
}

export default async function BlogPostPage({
  params
}: {
  params: { slug: string };
}) {
  const posts = await getAllPosts();
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  const entry = await getPostBySlug(params.slug);
  const content = await renderMdx(entry.content);
  const toc = getTableOfContents(entry.content);

  return (
    <div className="bg-cream">
      <section className="border-b border-line">
        <Container>
          <div className="grid gap-10 py-section-y-lg md:grid-cols-[1fr,260px] md:items-start">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                {entry.frontmatter.date}
              </p>
              <h1 className="font-serif text-4xl text-charcoal md:text-5xl">
                {entry.frontmatter.title}
              </h1>
              <p className="max-w-2xl text-sm text-charcoal/70 md:text-base">
                {entry.frontmatter.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {entry.frontmatter.tags.map((tag) => (
                  <span
                    key={`${entry.slug}-${tag}`}
                    className="rounded-full border border-line bg-cream px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-charcoal/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {toc.length > 0 ? (
              <aside className="rounded-2xl border border-line bg-white/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                  On this page
                </p>
                <ul className="mt-3 space-y-2 text-sm text-charcoal/70">
                  {toc.map((item) => (
                    <li key={item.id}>{item.text}</li>
                  ))}
                </ul>
              </aside>
            ) : null}
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <article className="prose-mdh max-w-3xl py-section-y-lg">{content}</article>
        </Container>
      </section>
    </div>
  );
}

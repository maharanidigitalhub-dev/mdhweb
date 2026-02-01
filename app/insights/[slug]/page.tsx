import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { getMdxEntries, getMdxEntry, renderMdx } from "@/lib/mdx";

export default async function InsightDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const posts = await getMdxEntries("insights");
  const post = posts.find((entry) => entry.slug === params.slug);
  if (!post) {
    notFound();
  }
  const entry = await getMdxEntry("insights", params.slug);
  const content = await renderMdx(entry.content);

  return (
    <div className="bg-cream">
      <section className="border-b border-line">
        <Container>
          <div className="py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
              {post.frontmatter.date}
            </p>
            <h1 className="mt-4 font-serif text-4xl text-charcoal md:text-5xl">
              {post.frontmatter.title}
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-charcoal/70">
              {post.frontmatter.summary}
            </p>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <article className="prose-mdh max-w-3xl py-16">
            {content}
          </article>
        </Container>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getMdxEntries("insights");
  return posts.map((post) => ({ slug: post.slug }));
}

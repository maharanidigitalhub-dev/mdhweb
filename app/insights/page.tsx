import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { getMdxEntries } from "@/lib/mdx";

export default async function InsightsPage() {
  const posts = await getMdxEntries("insights");

  return (
    <div className="bg-cream">
      <section className="border-b border-line">
        <Container>
          <div className="py-16">
            <SectionHeading
              eyebrow="Insights"
              title="Editorial insight for premium growth"
              description="Short reads on conversion, narrative, and systems."
            />
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="grid gap-6 py-16 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="rounded-3xl border border-line bg-white/80 p-6 shadow-subtle transition hover:-translate-y-1"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                  {post.frontmatter.date}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-charcoal">
                  {post.frontmatter.title}
                </h3>
                <p className="mt-3 text-sm text-charcoal/70">
                  {post.frontmatter.summary}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

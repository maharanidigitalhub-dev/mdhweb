import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import { getAllPosts } from "@/lib/blog";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="bg-cream">
      <Section
        eyebrow="Blog"
        title="Insights on conversion, systems, and premium positioning"
        subtitle="Practical notes from the MDH studio."
      >
        <div className="grid gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="space-y-3 transition hover:-translate-y-0.5 hover:shadow-subtle">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                  {post.date}
                </p>
                <h2 className="font-serif text-3xl text-charcoal">{post.title}</h2>
                <p className="text-sm text-charcoal/70">{post.description}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={`${post.slug}-${tag}`}
                      className="rounded-full border border-line bg-cream px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-charcoal/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}

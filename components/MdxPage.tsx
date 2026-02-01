import { Container } from "@/components/Container";
import { getMdxEntry, renderMdx } from "@/lib/mdx";

export async function MdxPage({
  directory,
  slug
}: {
  directory: string;
  slug: string;
}) {
  const entry = await getMdxEntry(directory, slug);
  const content = await renderMdx(entry.content);

  return (
    <div className="bg-cream">
      <section className="border-b border-line">
        <Container>
          <div className="py-16">
            <h1 className="font-serif text-4xl text-charcoal md:text-5xl">
              {entry.frontmatter.title}
            </h1>
            {entry.frontmatter.summary ? (
              <p className="mt-4 max-w-2xl text-sm text-charcoal/70">
                {entry.frontmatter.summary}
              </p>
            ) : null}
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

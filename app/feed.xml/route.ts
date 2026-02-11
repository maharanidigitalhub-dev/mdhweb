import { getAllPosts } from "@/lib/blog";

export async function GET() {
  const posts = await getAllPosts();

  const items = posts
    .map(
      (post) => `
    <item>
      <title>${post.title}</title>
      <link>https://maharanidigitalhub.com/blog/${post.slug}</link>
      <guid>https://maharanidigitalhub.com/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${post.description}</description>
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Maharani Digital Hub Blog</title>
    <link>https://maharanidigitalhub.com/blog</link>
    <description>Insights on conversion, systems, and premium positioning.</description>${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml"
    }
  });
}

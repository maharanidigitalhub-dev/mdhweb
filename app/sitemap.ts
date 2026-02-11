import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { products } from "@/data/products";
import { caseStudies } from "@/data/case-studies";
import { services } from "@/data/services";
import { getMdxEntries } from "@/lib/mdx";
import { getAllPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const insights = await getMdxEntries("insights");
  const blogPosts = await getAllPosts();
  const routes = [
    "",
    "/services",
    "/products",
    "/case-studies",
    "/insights",
    "/blog",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/refund-policy"
  ];

  return [
    ...routes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified: new Date()
    })),
    ...services.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      lastModified: new Date()
    })),
    ...products.map((product) => ({
      url: `${site.url}/products/${product.slug}`,
      lastModified: new Date()
    })),
    ...caseStudies.map((study) => ({
      url: `${site.url}/case-studies/${study.slug}`,
      lastModified: new Date()
    })),
    ...insights.map((post) => ({
      url: `${site.url}/insights/${post.slug}`,
      lastModified: new Date(post.frontmatter.date)
    })),
    ...blogPosts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: new Date(post.date)
    }))
  ];
}

import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "about",
    "contact",
    "privacy",
    "how-we-work",
    "solutions/growth-strategy",
    "solutions/intelligent-growth-systems",
    "solutions/digital-experience",
    "solutions/demand-content",
    "intelligence/1",
    "intelligence/2",
    "intelligence/3",
  ].map((path) => ({
    url: `https://nexoreya.com/${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}

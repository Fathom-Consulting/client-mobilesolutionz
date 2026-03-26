import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mobilesolutionz.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/booking`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}

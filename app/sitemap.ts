import type { MetadataRoute } from "next";
import { allProducts } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${siteConfig.url}/hero-banner.png`,
        ...allProducts.map((p) => `${siteConfig.url}${p.image}`),
      ],
    },
  ];
}

import { MetadataRoute } from "next";
import { projects } from "@/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projectUrls = projects.map((p) => ({
    url: `https://ggnu11.github.io/project/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://ggnu11.github.io",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectUrls,
  ];
}

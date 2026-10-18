import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: "https://passiflelabs.com/sitemap.xml", host: "https://passiflelabs.com" };
}

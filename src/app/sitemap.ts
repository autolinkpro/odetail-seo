import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/chip-repair`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/polishing`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/ppf`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/privacy-policy`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/quote`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/tint`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/windshield-replacement`,
    },
  ];
}

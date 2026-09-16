export default function robots() {
  const baseUrl = "https://devcreatex.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
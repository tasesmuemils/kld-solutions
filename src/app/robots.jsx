export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/_vercel/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

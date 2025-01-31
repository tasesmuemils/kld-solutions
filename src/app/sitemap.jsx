// export default async function sitemap() {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

//   return [
//     // Default (Latvian) Pages
//     { url: `${baseUrl}/lv` },
//     { url: `${baseUrl}/lv/about` },
//     { url: `${baseUrl}/lv/services` },
//     { url: `${baseUrl}/lv/video` },
//     { url: `${baseUrl}/lv/digital` },
//     { url: `${baseUrl}/lv/contact` },
//     { url: `${baseUrl}/lv/maket` },
//     { url: `${baseUrl}/lv/modeling` },
//     { url: `${baseUrl}/lv/cookies` },

//     // English Pages
//     { url: `${baseUrl}/en` },
//     { url: `${baseUrl}/en/about` },
//     { url: `${baseUrl}/en/services` },
//     { url: `${baseUrl}/en/video` },
//     { url: `${baseUrl}/en/digital` },
//     { url: `${baseUrl}/en/contact` },
//     { url: `${baseUrl}/en/maket` },
//     { url: `${baseUrl}/en/modeling` },
//     { url: `${baseUrl}/en/cookies` },
//   ];
// }

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const pages = [
    '',
    'about',
    'services',
    'video',
    'digital',
    'contact',
    'maket',
    'modeling',
    'cookies',
  ];

  const locales = ['lv', 'en'];

  const urls = locales.flatMap((locale) =>
    pages.map((page) => ({
      loc: `${baseUrl}/${locale}${page ? `/${page}` : ''}`,
      lastModified: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8,
    }))
  );

  return urls;
}

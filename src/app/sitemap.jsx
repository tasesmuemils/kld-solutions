export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return [
    // Default (Latvian) Pages
    { url: `${baseUrl}` },
    { url: `${baseUrl}/about` },
    { url: `${baseUrl}/services` },
    { url: `${baseUrl}/video` },
    { url: `${baseUrl}/digital` },
    { url: `${baseUrl}/contact` },
    { url: `${baseUrl}/maket` },
    { url: `${baseUrl}/modeling` },
    { url: `${baseUrl}/cookies` },

    // English Pages
    { url: `${baseUrl}/en` },
    { url: `${baseUrl}/en/about` },
    { url: `${baseUrl}/en/services` },
    { url: `${baseUrl}/en/video` },
    { url: `${baseUrl}/en/digital` },
    { url: `${baseUrl}/en/contact` },
    { url: `${baseUrl}/en/maket` },
    { url: `${baseUrl}/en/modeling` },
    { url: `${baseUrl}/en/cookies` },
  ];
}

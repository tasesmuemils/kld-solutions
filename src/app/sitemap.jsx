export default async function sitemap() {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/video`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/dogital`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
    },
  ];
}

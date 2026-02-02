// import { withNextVideo } from 'next-video/process';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/lv/contact',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/lv/about',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/lv/services',
        permanent: true,
      },
      {
        source: '/video',
        destination: '/lv/video',
        permanent: true,
      },
      {
        source: '/maket',
        destination: '/lv/maket',
        permanent: true,
      },
      {
        source: '/modeling',
        destination: '/lv/modeling',
        permanent: true,
      },
      {
        source: '/cookies',
        destination: '/lv/cookies',
        permanent: true,
      },
    ];
  },
};

// Not using videos at the moment
// export default withNextVideo(withNextIntl(nextConfig));

export default withNextIntl(nextConfig);

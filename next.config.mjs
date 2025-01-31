// import { withNextVideo } from 'next-video/process';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

// Not using videos at the moment
// export default withNextVideo(withNextIntl(nextConfig));

export default withNextIntl(nextConfig);

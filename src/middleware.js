import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['lv', 'en'],

  // Used when no locale matches
  defaultLocale: 'lv',
  localePrefix: 'as-needed',
});

export const config = {
  matcher: [
    '/', // Root path
    '/(lv|en)', // Direct language paths
    '/(lv|en)/:path*', // All localized subpaths
  ],
};

import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['lv', 'en'],

  // Used when no locale matches
  defaultLocale: 'lv',
  localePrefix: 'as-needed',
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'], // Apply the middleware to all paths except for API and static files
};

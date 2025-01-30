import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';

function isBot(userAgent) {
  const botPatterns = [
    'googlebot',
    'bingbot',
    'yandexbot',
    'duckduckbot',
    'slurp',
    'baiduspider',
    'facebook',
    'twitter',
    'bot',
    'crawler',
    'spider',
  ];

  return botPatterns.some((pattern) =>
    userAgent.toLowerCase().includes(pattern)
  );
}

const intlMiddleware = createMiddleware({
  locales: ['lv', 'en'],
  defaultLocale: 'lv',
  localePrefix: 'as-needed',
});

export default async function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';
  const url = new URL(request.url);
  const pathname = url.pathname;

  // For bots, serve the content without redirecting to /en
  if (isBot(userAgent)) {
    if (pathname === '/') {
      // Set Latvian locale for root path
      request.headers.set('x-locale', 'lv');
    } else if (pathname.startsWith('/en')) {
      // For /en path, serve English locale
      request.headers.set('x-locale', 'en');
    } else {
      // Default to Latvian for any other paths
      request.headers.set('x-locale', 'lv');
    }

    return NextResponse.next();
  }

  // For regular users, use the normal intl middleware
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/'],
};

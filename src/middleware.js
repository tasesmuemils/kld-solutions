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

  // Check if it's a bot and prevent redirects for Googlebot/Bingbot
  if (isBot(userAgent)) {
    if (pathname === '/') {
      console.log('Serving Latvian locale for Googlebot/Bingbot');
      request.headers.set('x-locale', 'lv');
    } else if (pathname.startsWith('/en')) {
      console.log('Serving English locale for Googlebot/Bingbot');
      request.headers.set('x-locale', 'en');
    } else {
      console.log('Defaulting to Latvian locale for Googlebot/Bingbot');
      request.headers.set('x-locale', 'lv');
    }

    // Log the locale set for bot requests
    console.log('Locale set to:', request.headers.get('x-locale'));
    return NextResponse.next();
  }

  // For regular users, continue with the normal intl middleware
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/'],
};

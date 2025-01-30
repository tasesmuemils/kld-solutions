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
    console.log(`Bot detected: ${userAgent}`);

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

    // Prevent redirect by removing 'Location' header if it exists
    const response = NextResponse.next();
    if (response.headers.has('Location')) {
      console.log('Removing Location header to prevent redirect');
      response.headers.delete('Location');
    }

    return response;
  }

  // For regular users, use the normal intl middleware
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/'],
};

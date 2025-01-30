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

  if (isBot(userAgent)) {
    console.log('Bot detected:', userAgent);
    console.log('Request URL:', request.url);

    // Explicitly set the locale for bots
    let locale = 'lv'; // Default to Latvian
    if (url.pathname.startsWith('/en')) {
      locale = 'en';
      console.log('Serving English content to bot');
    } else {
      console.log('Serving Latvian content to bot');
    }

    // Prevent redirects for bots and set the locale in headers
    const response = NextResponse.next();
    response.headers.set('x-locale', locale);
    return response;
  }

  console.log('Regular user detected, using intl middleware');
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/'],
};

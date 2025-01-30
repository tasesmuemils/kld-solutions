import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';

// More comprehensive bot detection
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

// Create the intl middleware
const intlMiddleware = createMiddleware({
  locales: ['lv', 'en'],
  defaultLocale: 'lv',
  localePrefix: 'as-needed',
});

export default async function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';

  // If it's a bot, serve the content without redirects
  if (isBot(userAgent)) {
    // Extract the locale from the URL if present
    const url = new URL(request.url);
    const pathname = url.pathname;

    // If the URL starts with /en, serve English content
    // Otherwise serve Latvian content (default)
    if (pathname.startsWith('/en')) {
      request.headers.set('x-locale', 'en');
    } else {
      request.headers.set('x-locale', 'lv');
    }

    // Allow the request to continue without redirect
    return NextResponse.next();
  }

  // For regular users, use the normal intl middleware
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - API routes (/api/*)
    // - Static files (*.*)
    // - Next.js specific files (_next/*)
    // - Vercel specific files (_vercel/*)
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // Include root path
    '/',
  ],
};

import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';

// Helper function to detect bots
function isBot(userAgent) {
  return /bot|crawler|spider|crawling/i.test(userAgent);
}

const intlMiddleware = createMiddleware({
  locales: ['lv', 'en'],
  defaultLocale: 'lv',
  localePrefix: 'as-needed',
});

export default async function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';

  // Special handling for bots
  if (isBot(userAgent)) {
    // Allow bots to access the page directly without redirects
    // This ensures Google can properly index both language versions
    return NextResponse.next();
  }

  // For regular users, use the intl middleware
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

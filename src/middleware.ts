import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware({
  ...routing,
  localeDetection: false,
});

const socialCrawlerRegex =
  /facebookexternalhit|Facebot|WhatsApp|Twitterbot|LinkedInBot|TelegramBot/i;

export default function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const pathname = request.nextUrl.pathname;

  if (socialCrawlerRegex.test(userAgent)) {
    if (pathname === '/') {
      const url = request.nextUrl.clone();
      url.pathname = '/tr';
      return NextResponse.rewrite(url);
    }

    if (pathname.startsWith('/tr') || pathname.startsWith('/en')) {
      return NextResponse.next();
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(tr|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
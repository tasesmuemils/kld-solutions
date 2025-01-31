import GoogleAnalytics from '@/components/GoogleAnalytics';
import CookieBanner from '@/components/CookieBanner';
import MetaPixel from '@/components/MetaPixel';
import GoogleTagManager from '@/components/GoogleTagManager';
import { Lexend } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { Suspense } from 'react';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const environment = process.env.NODE_ENV;
const baseUrl =
  environment === 'production'
    ? 'https://kldsolutions.lv'
    : 'http://localhost:3001';

export async function generateMetadata({ params }) {
  const locale = params?.locale || 'lv';

  const defaultDescription = {
    lv: 'Tavs Sapnis - Mūsu Realitāte. KLD Solutions piedāvā 3D vizualizācijas un video prezentācijas pakalpojumus, kas palīdz klientiem efektīvi plānot un samazināt būvniecības izmaksas. Piedāvājam arī konsultācijas un digitālā mārketinga risinājumus.',
    en: 'Your Dream - Our Reality. KLD Solutions offers 3D visualization and video presentation services that help clients effectively plan and reduce construction costs. We also offer consulting and digital marketing solutions.',
  };

  const defaultKeywords = {
    lv: 'kld, kldsolutions, 3D vizualizācijas, 3D vizualizācija, būvniecības plānošana, interjera dizains, ārtelpu iekārtojums, digitālais mārketings, video prezentācijas, vizualizācijas pakalpojumi, KLD Solutions',
    en: 'kld, kldsolutions, 3D visualizations, 3D visualization, construction planning, interior design, exterior design, digital marketing, video presentations, visualization services, KLD Solutions',
  };

  const imageUrl = new URL('/opengraph-image.png', baseUrl).toString();

  return {
    metadataBase: new URL(baseUrl), // Ensure it's always set
    title: {
      default: 'KLD Solutions',
      template: '%s - KLD Solutions',
    },
    description: defaultDescription[locale],
    keywords: defaultKeywords[locale],
    twitter: {
      card: 'summary_large_image',
      title: 'KLD Solutions',
      description: defaultDescription[locale],
      images: [
        {
          url: `${baseUrl}/opengraph-image.png`, // Full URL required
        },
      ],
    },
    openGraph: {
      title: 'KLD Solutions',
      description: defaultDescription[locale],
      siteName: 'KLD Solutions',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/opengraph-image.png`, // Full URL required
        },
      ],
      locale: locale,
      alternateLocale: ['lv', 'en'],
    },
    alternates: {
      canonical: baseUrl,
      languages: {
        lv: `${baseUrl}/lv`,
        en: `${baseUrl}/en`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({ children, params }) {
  const locale = params?.locale || 'lv';
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel='alternate' hrefLang='lv' href='https://kldsolutions.lv' />
        <link rel='alternate' hrefLang='en' href='https://kldsolutions.lv/en' />
        <link
          rel='alternate'
          hrefLang='x-default'
          href='https://kldsolutions.lv'
        />
        {/* Explicitly setting Open Graph and Twitter metadata */}
        <meta property='og:image' content={`${baseUrl}/opengraph-image.png`} />
        <meta name='twitter:image' content={`${baseUrl}/opengraph-image.png`} />
      </head>
      <body
        className={`${lexend.className} bg-primary-50 text-primary-950 dark:bg-primary-950 dark:text-primary-200 antialiased transition`}
      >
        <Suspense>
          <GoogleAnalytics
            GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_MEASUREMENT_ID}
          />
          <MetaPixel fbPixelId={process.env.NEXT_PUBLIC_MEASUREMENT_META_ID} />
          <GoogleTagManager
            gtmId={process.env.NEXT_PUBLIC_MEASUREMENT_G_TAG_ID}
          />
        </Suspense>
        <NextIntlClientProvider messages={messages}>
          <Navbar currentLocale={locale} />
          <Toaster position='top-center' toastOptions={{ duration: 4000 }} />
          {children}
          <CookieBanner />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

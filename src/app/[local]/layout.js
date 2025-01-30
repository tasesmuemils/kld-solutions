import GoogleAnalytics from '@/components/GoogleAnalytics';
import CookieBanner from '@/components/CookieBanner';
import MetaPixel from '@/components/MetaPixel';
import GoogleTagManager from '@/components/GoogleTagManager';
import { Lexend } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { getRequestConfig } from 'next-intl/server';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { Suspense } from 'react';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export async function generateMetadata({ params }) {
  const locale = params?.local || 'lv';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://kldsolutions.lv';

  const defaultDescription = {
    lv: 'Tavs Sapnis - Mūsu Realitāte. KLD Solutions piedāvā 3D vizualizācijas un video prezentācijas pakalpojumus, kas palīdz klientiem efektīvi plānot un samazināt būvniecības izmaksas. Piedāvājam arī konsultācijas un digitālā mārketinga risinājumus.',
    en: 'Your Dream - Our Reality. KLD Solutions offers 3D visualization and video presentation services that help clients effectively plan and reduce construction costs. We also offer consulting and digital marketing solutions.',
  };

  const defaultKeywords = {
    lv: 'kld, kldsolutions, 3D vizualizācijas, 3D vizualizācija, būvniecības plānošana, interjera dizains, ārtelpu iekārtojums, digitālais mārketings, video prezentācijas, vizualizācijas pakalpojumi, KLD Solutions',
    en: 'kld, kldsolutions, 3D visualizations, 3D visualization, construction planning, interior design, exterior design, digital marketing, video presentations, visualization services, KLD Solutions',
  };

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: 'KLD Solutions',
      template: '%s - KLD Solutions',
    },
    description: defaultDescription[locale],
    keywords: defaultKeywords[locale],
    twitter: {
      card: 'summary_large_image',
    },
    openGraph: {
      images: '/opengraph-image.png',
      locale: locale,
      alternateLocales: ['lv', 'en'],
    },
    alternates: {
      canonical: baseUrl,
      languages: {
        lv: `${baseUrl}`,
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
  const locale = params?.local || 'lv';
  const messages = await getMessages({ locale });

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
        <NextIntlClientProvider messages={messages} locale={locale}>
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

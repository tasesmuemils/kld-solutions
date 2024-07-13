import GoogleAnalytics from '@/components/GoogleAnalytics';
import CookieBanner from '@/components/CookieBanner';
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

export const metadata = {
  metadataBase: new URL('https://kldsolutions.lv'),
  title: {
    default: 'KLD Solutions',
    template: '%s - KLD Solutions',
  },
  keywords:
    'kld, kldsolutions, 3D vizualizācijas, 3D vizualizācija, būvniecības plānošana, interjera dizains, ārtelpu iekārtojums, digitālais mārketings, video prezentācijas, vizualizācijas pakalpojumi, KLD Solutions',
  description:
    'Tavs Sapnis - Mūsu Realitāte. KLD Solutions piedāvā 3D vizualizācijas un video prezentācijas pakalpojumus, kas palīdz klientiem efektīvi plānot un samazināt būvniecības izmaksas. Piedāvājam arī konsultācijas un digitālā mārketinga risinājumus.',
  twitter: {
    card: 'summary_large_image',
  },
  openGraph: {
    images: '/opengraph-image.png',
  },
};

export default async function RootLayout({ children, params }) {
  const { local } = params;

  const messages = await getMessages();

  return (
    <html lang='lv'>
      <Suspense>
        {' '}
        <GoogleAnalytics
          GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_MEASUREMENT_ID}
        />
      </Suspense>

      <body
        className={` ${lexend.className} class="bg-primary-50 text-primary-950 dark:bg-primary-950 dark:text-primary-200 antialiased transition`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar currentLocale={local} />
          <Toaster position='top-center' toastOptions={{ duration: 4000 }} />
          {children}
          <CookieBanner />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

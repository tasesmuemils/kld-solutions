import { Lexend } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
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
  keywords: 'kld, kldsolutions, 3D vizualizācijas',
  description: 'Tavs Sapnis - Mūsu Realitāte. Vizualizēsim Tavas idejas',
  twitter: {
    card: 'summary_large_image',
  },
  openGraph: {
    images: '/opengraph-image.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='lv'>
      <body
        className={` ${lexend.className} class="bg-primary-50 text-primary-950 dark:bg-primary-950 dark:text-primary-200 antialiased transition`}
      >
        <Navbar />
        <Toaster position='top-center' toastOptions={{ duration: 4000 }} />
        {children}
        <Footer />
      </body>
    </html>
  );
}

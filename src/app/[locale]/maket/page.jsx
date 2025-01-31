import Header from '@/components/digital/Header';
import { useTranslations } from 'next-intl';
import MaketGallery from '@/components/maket/maket-gallery';
import TextComponent from '@/components/maket/text';

export const metadata = {
  title: 'Maketēšana',
};

export default function Maket() {
  const t = useTranslations('Maket');
  return (
    <div>
      <Header title={t('Header.Title')} p={t('Header.P')} />
      <MaketGallery />
      <TextComponent p={t('P.P1')} />
    </div>
  );
}

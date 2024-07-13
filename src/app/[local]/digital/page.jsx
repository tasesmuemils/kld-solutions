import Header from '@/components/digital/Header';
import EmblaCarousel from '@/components/services/EmblaCarousel';
import '../../../components/services/css/embla.css';
import { useTranslations } from 'next-intl';

// // Images
import Digital1 from '../../../../public/engine_img/digital/digital_1.png';
import Digital2 from '../../../../public/engine_img/digital/digital_2.png';
import Digital3 from '../../../../public/engine_img/digital/digital_3.png';
import Digital4 from '../../../../public/engine_img/digital/digital_4.png';

const OPTIONS = { dragFree: true, loop: true };
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const imagesDigital = [Digital4.src, Digital1.src, Digital2.src, Digital3.src];

export const metadata = {
  title: 'Digitālais Mārketings',
};

export default function Digital() {
  const t = useTranslations('Digital');
  return (
    <div>
      <Header title={t('Header.Title')} p={t('Header.P')} />
      <EmblaCarousel
        title={t('Titles.T1')}
        description=''
        imagesArr={imagesDigital}
        slides={SLIDES}
        options={OPTIONS}
        maxWidth='max-w-xl'
        sizes='(min-width: 660px) 458px, 90.59vw'
      />
    </div>
  );
}

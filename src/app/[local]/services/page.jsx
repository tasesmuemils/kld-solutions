import Header from '@/components/services/Header';
import EmblaCarousel from '@/components/services/EmblaCarousel';
import '../../../components/services/css/embla.css';
import BeforeAfter from '@/components/services/BeforeAfter';
import { useTranslations } from 'next-intl';

// Images
// Outside
import Outside1 from '../../../../public/engine_img/ex_inter/Ex_1.png';
import Outside2 from '../../../../public/engine_img/640/613_00000.png';
import Outside3 from '../../../../public/engine_img/ex_inter/Ex_3.png';
import Outside4 from '../../../../public/engine_img/ex_inter/Ex_4.png';
import Outside5 from '../../../../public/engine_img/ex_inter/Ex_2.png';

// Inside
import Inside1 from '../../../../public/engine_img/ex_inter/In_1.png';
import Inside2 from '../../../../public/engine_img/ex_inter/In_4.png';
import Inside3 from '../../../../public/engine_img/ex_inter/In_5.png';
import Inside4 from '../../../../public/engine_img/ex_inter/In_2.png';
import Inside5 from '../../../../public/engine_img/ex_inter/In_3.png';

const OPTIONS = { dragFree: true, loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const imagesOutside = [
  Outside1.src,
  Outside2.src,
  Outside3.src,
  Outside4.src,
  Outside5.src,
];

const imagesInside = [
  Inside1.src,
  Inside2.src,
  Inside3.src,
  Inside4.src,
  Inside5.src,
];

export const metadata = {
  title: 'Vizualizācijas',
};

export default function Services() {
  const t = useTranslations('Services');
  return (
    <div>
      <Header title={t('Header.Title')} p={t('Header.P')} />
      <EmblaCarousel
        title={t('Ex.Title')}
        description={t('Ex.Subtitle')}
        imagesArr={imagesOutside}
        slides={SLIDES}
        options={OPTIONS}
        maxWidth='max-w-4xl'
        sizes='(min-width: 1040px) 714px, (min-width: 660px) 468px, calc(95.29vw - 18px)'
      />
      <EmblaCarousel
        title={t('Int.Title')}
        description={t('Int.Subtitle')}
        imagesArr={imagesInside}
        slides={SLIDES}
        options={OPTIONS}
        maxWidth='max-w-4xl'
        sizes='(min-width: 1040px) 714px, (min-width: 660px) 468px, calc(95.29vw - 18px)'
      />
      <BeforeAfter title={t('Mod.Title')} description={t('Mod.Subtitle')} />
    </div>
  );
}

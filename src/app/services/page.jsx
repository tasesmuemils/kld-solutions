import Header from '@/components/services/Header';
import EmblaCarousel from '@/components/services/EmblaCarousel';
import '../../components/services/css/embla.css';
import BeforeAfter from '@/components/services/BeforeAfter';

// Images
// Outside
import Outside1 from '../../../public/engine_img/640/611_00000.png';
import Outside2 from '../../../public/engine_img/640/613_00000.png';
import Outside3 from '../../../public/engine_img/640/615_00000.png';
import Outside4 from '../../../public/engine_img/640/619_00000.png';
import Outside5 from '../../../public/engine_img/640/634_00000.png';

// Inside
import Inside1 from '../../../public/engine_img/long_gallery/13_00000.png';
import Inside2 from '../../../public/engine_img/640/621_00000.png';
import Inside3 from '../../../public/engine_img/long_gallery/12_00000.png';
import Inside4 from '../../../public/engine_img/long_gallery/11_00000.png';
import Inside5 from '../../../public/engine_img/long_gallery/24_00000.png';

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
  return (
    <div>
      <Header />
      <EmblaCarousel
        title='Eksterjers'
        description='Fotoreālistiski ārējie attēli, kas izceļ jūsu ēkas arhitektūras skaistumu'
        imagesArr={imagesOutside}
        slides={SLIDES}
        options={OPTIONS}
        maxWidth='max-w-4xl'
        sizes='(min-width: 1040px) 714px, (min-width: 660px) 468px, calc(95.29vw - 18px)'
      />
      <EmblaCarousel
        title='Interjers'
        description='Dzīvi interjera attēli, kas rada aicinošu un stilīgu telpu atmosfēru'
        imagesArr={imagesInside}
        slides={SLIDES}
        options={OPTIONS}
        maxWidth='max-w-4xl'
        sizes='(min-width: 1040px) 714px, (min-width: 660px) 468px, calc(95.29vw - 18px)'
      />
      <BeforeAfter
        title='Modelēšana un vizuālizācija'
        description='Salīdzini izskatu pirms un pēc tekstūru  pievienošanas izstrādātājam projektam'
      />
    </div>
  );
}

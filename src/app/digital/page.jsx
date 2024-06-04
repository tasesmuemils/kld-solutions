import Header from '@/components/digital/Header';
import EmblaCarousel from '@/components/services/EmblaCarousel';
import '../../components/services/css/embla.css';

// // Images
import Digital1 from '../../../public/engine_img/digital/digital_1.png';
import Digital2 from '../../../public/engine_img/digital/digital_2.png';

const OPTIONS = { dragFree: true, loop: true };
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const imagesDigital = [Digital1.src, Digital2.src, Digital1.src, Digital2.src];

export default function Digital() {
  return (
    <div>
      <Header />
      <EmblaCarousel
        title='Digitālā Mārketinga risinājumi'
        description=''
        imagesArr={imagesDigital}
        slides={SLIDES}
        options={OPTIONS}
        maxWidth='max-w-xl'
      />
    </div>
  );
}

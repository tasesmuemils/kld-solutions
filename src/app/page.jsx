import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Cta from '@/components/home/Cta';
import GraphicsSection from '@/components/home/GraphicsSection';
import ModalVideo from '@/components/home/video/ModalVideo';
import LongGallery from '@/components/home/LongGallery';

// Images
import Image1 from '../../public/engine_img/1920/99_00000.png';

export default function Home() {
  return (
    <div>
      <Hero />
      <GraphicsSection />
      <LongGallery />
      <ModalVideo
        title='Video Prezentācijas'
        videoId='sF5KncuB-rU'
        thumb={Image1}
      />
      <About />
      <Cta />
    </div>
  );
}

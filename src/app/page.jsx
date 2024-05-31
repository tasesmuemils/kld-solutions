import Hero from '@/components/home/Hero';
import Tabs from '@/components/home/Tabs';
import VideoTabs from '@/components/home/VideoTabs';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import Cta from '@/components/home/Cta';
import GraphicsSection from '@/components/home/GraphicsSection';
import PortfolioSection from '@/components/home/PortfolioSection';
import PortfolioSectionTwo from '@/components/home/PortfolioSectionTwo';
import PortfolioSectionThree from '@/components/home/PortfolioSectionThree';
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
      {/* <PortfolioSection />
      <PortfolioSectionTwo />
      <PortfolioSectionThree /> */}
      <ModalVideo
        title='Video Prezentācijas'
        videoId='sF5KncuB-rU'
        thumb={Image1}
      />
      {/* <Tabs /> */}
      {/* <VideoTabs /> */}
      {/* <Services /> */}
      <About />
      <Cta />
    </div>
  );
}

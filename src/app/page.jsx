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

export default function Home() {
  return (
    <div>
      <Hero />
      <GraphicsSection />
      <PortfolioSection />
      <PortfolioSectionTwo />
      <PortfolioSectionThree />
      <ModalVideo />
      {/* <Tabs /> */}
      {/* <VideoTabs /> */}
      {/* <Services /> */}
      <About />
      <LongGallery />
      <Cta />
    </div>
  );
}

import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Cta from '@/components/home/Cta';
import GraphicsSection from '@/components/home/GraphicsSection';
import ModalVideo from '@/components/home/video/ModalVideo';
import LongGallery from '@/components/home/LongGallery';
import { useTranslations } from 'next-intl';

// Images
import Image1 from '../../../public/engine_img/video_thumb/barn.png';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <div>
      <Hero
        titleOne={t('Hero.titleOne')}
        titleTwo={t('Hero.titleTwo')}
        subtitle={t('Hero.Subtitle')}
      />
      <GraphicsSection
        titleOne={t('GraphicsSection.TitleOne')}
        titleTwo={t('GraphicsSection.TitleTwo')}
        pOne={t('GraphicsSection.pOne')}
        pTwo={t('GraphicsSection.pTwo')}
      />
      <LongGallery />
      <ModalVideo
        title={t('Video.Title')}
        videoId='sF5KncuB-rU'
        thumb={Image1}
      />
      <About title={t('About.Title')} p={t('About.P')} btn={t('About.Btn')} />
      <Cta
        title={t('Cta.Title')}
        subtitle={t('Cta.Subtitle')}
        btn={t('Cta.Btn')}
      />
    </div>
  );
}

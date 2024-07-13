import Header from '@/components/video/Header';
import ModalVideo from '@/components/home/video/ModalVideo';

// Images
import Image1 from '../../../../public/engine_img/1920/19_00000.png';
import Image2 from '../../../../public/engine_img/1920/99_00000.png';
import Image3 from '../../../../public/engine_img/1920/179_00000.png';
import { useTranslations } from 'next-intl';

export const metadata = {
  title: 'Video',
};

export default function Services() {
  const t = useTranslations('Video');
  return (
    <div>
      <Header title={t('Header.Title')} p={t('Header.P')} />
      <ModalVideo title={t('Titles.T1')} videoId='uPAMgn5UVhM' thumb={Image1} />
      <ModalVideo title={t('Titles.T2')} videoId='sF5KncuB-rU' thumb={Image2} />
      <ModalVideo title={t('Titles.T3')} videoId='zy4HvTcb1pw' thumb={Image3} />
    </div>
  );
}

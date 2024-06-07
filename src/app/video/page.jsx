import Header from '@/components/video/Header';
import ModalVideo from '@/components/home/video/ModalVideo';

// Images
import Image1 from '../../../public/engine_img/1920/19_00000.png';
import Image2 from '../../../public/engine_img/1920/99_00000.png';
import Image3 from '../../../public/engine_img/1920/179_00000.png';

export const metadata = {
  title: 'Video',
};

export default function Services() {
  return (
    <div>
      <Header />
      <ModalVideo
        title='Vizualizācija - Dzīvojamā ēka'
        videoId='uPAMgn5UVhM'
        thumb={Image1}
      />
      <ModalVideo
        title='Vizualizácija - Koka saimniecības ēka'
        videoId='sF5KncuB-rU'
        thumb={Image2}
      />
      <ModalVideo
        title='Vizualizācija - Vannas istaba'
        videoId='zy4HvTcb1pw'
        thumb={Image3}
      />
    </div>
  );
}

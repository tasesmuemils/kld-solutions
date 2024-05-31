import Header from '@/components/video/Header';
import ModalVideo from '@/components/home/video/ModalVideo';

// Images
import Image1 from '../../../public/engine_img/1920/19_00000.png';
import Image2 from '../../../public/engine_img/1920/99_00000.png';
import Image3 from '../../../public/engine_img/1920/179_00000.png';

export default function Services() {
  return (
    <div>
      <Header />
      <ModalVideo title='NOSAUKUMS' videoId='uPAMgn5UVhM' thumb={Image1} />
      <ModalVideo title='NOSAUKUMS 2' videoId='sF5KncuB-rU' thumb={Image2} />
      <ModalVideo title='NOSAUKUMS 3' videoId='zy4HvTcb1pw' thumb={Image3} />
    </div>
  );
}

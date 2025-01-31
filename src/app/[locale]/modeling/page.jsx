import Header from '@/components/digital/Header';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import ModelText from '@/components/model/ModelText';

import Model1 from '../../../../public/engine_img/model/Izjaukts_1428x804_Transparent.png';
import Model2 from '../../../../public/engine_img/model/Modelis_1428x804_Transparent.png';

const images = [Model1, Model2];

export const metadata = {
  title: '3D Modelēšana',
};

export default function Modeling() {
  const t = useTranslations('Modeling');
  return (
    <div>
      <Header title={t('Header.Title')} p={t('Header.P')} />
      <ModelText images={images} />
    </div>
  );
}

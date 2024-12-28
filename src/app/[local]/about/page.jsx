import Heading from '@/components/about/Heading';
import Mission from '@/components/about/Mission';
import Team from '@/components/about/Team';
import '../../../components/about/css/embla.css';
import { useTranslations } from 'next-intl';
import TestimonialSlider from '@/components/about/Testimonials';

export const metadata = {
  title: 'Par Mums',
};

export default function About() {
  const t = useTranslations('About');
  return (
    <div>
      <Heading title={t('Heading.Title')} subTitle={t('Heading.Subtitle')} />
      <Mission
        title={t('P.Title')}
        pOne={t('P.POne')}
        pTwo={t('P.PTwo')}
        pThree={t('P.PThree')}
        statsT={t('Stats.Title')}
        statsY={t('Stats.Years')}
        statsP={t('Stats.Projects')}
      />
      <Team
        title={t('Team.Title')}
        elvis={t('Team.Elvis')}
        emils={t('Team.Emils')}
      />
      <TestimonialSlider title={t('Testimonials.Title')} />
    </div>
  );
}

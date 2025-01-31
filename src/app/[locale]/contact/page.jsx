import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import { useTranslations } from 'next-intl';

export const metadata = {
  title: 'Sazinies ar Mums',
};

export default function Contact() {
  const t = useTranslations('Contact');
  return (
    <div>
      {/* <ContactInfo /> */}
      <ContactForm
        title={t('Title')}
        subtitle={t('Subtitle')}
        nameText={t('Name')}
        emailText={t('Email')}
        messageText={t('Message')}
        btn={t('Btn')}
        btnLoad={t('BtnLoad')}
      />
    </div>
  );
}

import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export const metadata = {
  title: 'Sazinies ar Mums',
};

export default function Contact() {
  return (
    <div>
      {/* <ContactInfo /> */}
      <ContactForm />
    </div>
  );
}

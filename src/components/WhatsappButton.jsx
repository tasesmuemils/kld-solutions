import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton({
  message,
  classes,
  linkClasses,
  name,
}) {
  const phoneNumber = '37122439644'; // Remove the '+' and any spaces
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message || ''
  )}`;

  return (
    <a
      href={whatsappUrl}
      target='_blank'
      rel='noopener noreferrer'
      className={linkClasses}
    >
      <FaWhatsapp className={classes} />
      {name && <p className='text-base font-medium'>{name}</p>}
    </a>
  );
}

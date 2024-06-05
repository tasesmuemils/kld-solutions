'use client';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import SplitType from 'split-type';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (name == '' || email == '' || text == '') {
      setLoading(false);
      toast.error('Aizpildied visus laukus!');
      return false;
    }

    const obj = { name: name, email: email, message: text };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        obj,
        process.env.NEXT_PUBLIC_EMAILJS_KEY
      )
      .then(
        (response) => {
          // console.log('SUCCESS!', response.status, response.text);
          setLoading(false);
          toast.success(
            'E-pasts nosūtīts! KLD Solutions drīz ar jums sazināsies!'
          );
          setName('');
          setEmail('');
          setText('');
        },
        (error) => {
          // console.log('FAILED...', error);
          setLoading(false);
          toast.error('Ooops! Notika kļūda!');
        }
      );
  };

  // Using ref to capture Hero text container
  const container = useRef();

  useGSAP(
    () => {
      //Splits HERO text into chars
      const text = new SplitType('.contact-text', { types: 'lines' });
      gsap.set('.contact-text', { autoAlpha: 1 }); // prevent flash of unstayled content
      gsap.set(text.lines, { opacity: 0, yPercent: 150, rotate: '10deg' }); // Sets initial state
      gsap.to(text.lines, {
        yPercent: 0,
        opacity: 1,
        rotate: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power4.out',
      });

      // Hero Images container
      gsap.set('.contact-form-wrapper', {
        autoAlpha: 1,
      });

      gsap.from('.contact-form-wrapper', {
        translateX: '10%',
        opacity: 0,
        // stagger: {
        //   amount: 0.2,
        // },
        delay: 0.2,
        duration: 0.6,
      });

      gsap.set('.contact-info-wrapper', {
        autoAlpha: 1,
      });

      gsap.from('.contact-info-wrapper', {
        translateY: '10%',
        opacity: 0,
        // stagger: {
        //   amount: 0.2,
        // },
        delay: 0.2,
        duration: 0.6,
      });
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      {' '}
      <section className='py-28 sm:pt-40 sm:pb-28'>
        <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='grid gap-12 lg:grid-cols-2 lg:gap-24'>
            <div className='flex flex-col gap-24'>
              <div className='flex flex-col gap-4 sm:gap-6'>
                <h2 className='contact-text hero-clip invisible text-3xl font-medium tracking-tight sm:text-4xl'>
                  Piesakies konsultācijai
                </h2>
                <p className='contact-text hero-clip invisible text-primary-950/70 dark:text-primary-200/70 max-w-lg text-lg sm:text-xl'>
                  Pastāsti par savu ideju
                </p>
              </div>

              <div className='contact-info-wrapper invisible hidden lg:w-2/3 xl:w-full lg:grid gap-5 xl:grid-cols-2 bg-primary-500/10 dark:bg-primary-400/10 rounded-lg px-6 py-8'>
                <div className='flex h-full flex-row  gap-12'>
                  <FaPhoneAlt className='h-6 w-6 text-primary-600 dark:text-primary-400' />
                  <p className='text-base font-medium'>+371 22439644</p>
                </div>
                <div className='flex h-full flex-row  gap-12'>
                  <FaMapMarkerAlt className='h-6 w-6 text-primary-600 dark:text-primary-400' />
                  <div className='text-base font-medium'>
                    <p>Rīga, Latvija</p>
                  </div>
                </div>
                {/* <div className='flex h-full flex-row gap-12'>
                  <FaEnvelope className='h-6 w-6 text-primary-600 dark:text-primary-400' />
                  <p className='text-base font-medium'>info@kldsolutions.lv</p>
                </div> */}
                <div className='flex h-full flex-row'>
                  <a
                    target='_blank'
                    aria-label='KLD Solutions Youtube Page'
                    href='https://www.youtube.com/@kld_solutions'
                    className='flex flex-row items-center gap-12 hover:underline text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300'
                  >
                    <FaYoutube className='h-6 w-6 ' />
                    <p className='text-base font-medium'>Youtube</p>
                  </a>
                </div>
                <div className='flex h-full flex-row'>
                  <a
                    target='_blank'
                    aria-label='KLD Solutions Instagram Page'
                    href='https://www.instagram.com/kld.solutions/'
                    className='flex flex-row items-center gap-12 hover:underline text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300'
                  >
                    <FaInstagram className='h-6 w-6 ' />
                    <p className='text-base font-medium'>Instagram</p>
                  </a>
                </div>
              </div>
            </div>

            <form
              // method='POST'
              className='contact-form-wrapper invisible mt-3 flex flex-col gap-y-6'
              onSubmit={handleSubmit}
            >
              {/* <!-- Full name input --> */}
              <div>
                <label htmlFor='full-name' className='sr-only'>
                  Vārds Uzvārds
                </label>
                <input
                  type='text'
                  name='full-name'
                  id='full-name'
                  autoComplete='name'
                  className='hover:ring-primary-600 focus:ring-primary-600 dark:hover:ring-primary-400 dark:focus:ring-primary-400 bg-primary-50 dark:bg-primary-950 ring-primary-900/40 dark:ring-primary-200/40 placeholder:text-primary-950/60 dark:placeholder:text-primary-200/60 block w-full appearance-none rounded-md border-0 px-4 py-4 text-base ring-1 transition focus:outline-none focus:ring-2'
                  placeholder='Vārds Uzvārds'
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>

              {/* <!-- Email input --> */}
              <div>
                <label htmlFor='email' className='sr-only'>
                  E-pasts
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  autoComplete='email'
                  className='hover:ring-primary-600 focus:ring-primary-600 dark:hover:ring-primary-400 dark:focus:ring-primary-400 bg-primary-50 dark:bg-primary-950 ring-primary-900/40 dark:ring-primary-200/40 placeholder:text-primary-950/60 dark:placeholder:text-primary-200/60 block w-full appearance-none rounded-md border-0 px-4 py-4 text-base ring-1 transition focus:outline-none focus:ring-2'
                  placeholder='E-pasts'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>

              {/* <!-- Message textarea --> */}
              <div>
                <label htmlFor='message' className='sr-only'>
                  Tava Ziņa
                </label>
                <textarea
                  name='message'
                  id='message'
                  rows='3'
                  className='hover:ring-primary-600 focus:ring-primary-600 dark:hover:ring-primary-400 dark:focus:ring-primary-400 bg-primary-50 dark:bg-primary-950 ring-primary-900/40 dark:ring-primary-200/40 placeholder:text-primary-950/60 dark:placeholder:text-primary-200/60 block w-full appearance-none rounded-md border-0 px-4 py-4 text-base ring-1 transition focus:outline-none focus:ring-2'
                  placeholder='Tava Ziņa'
                  onChange={(e) => setText(e.target.value)}
                  value={text}
                ></textarea>
              </div>

              <div>
                {loading ? (
                  <button
                    disabled
                    type='button'
                    className='bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                  >
                    <svg
                      aria-hidden='true'
                      role='status'
                      className='inline w-4 h-4 me-3 text-white animate-spin'
                      viewBox='0 0 100 101'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                        fill='#E5E7EB'
                      />
                      <path
                        d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                        fill='currentColor'
                      />
                    </svg>
                    Sūta Ziņu...
                  </button>
                ) : (
                  <button
                    className='bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                    type='submit'
                    id='submit-btn'
                  >
                    Nosūtīt
                  </button>
                )}
              </div>
            </form>

            {/* MOBILE */}
            <div className='contact-info-wrapper invisible grid lg:w-2/3 xl:w-full lg:hidden gap-5 xl:grid-cols-2 bg-primary-500/10 dark:bg-primary-400/10 rounded-lg px-6 py-8'>
              <div className='flex h-full flex-row  gap-12'>
                <FaPhoneAlt className='h-6 w-6 text-primary-600 dark:text-primary-400' />
                <p className='text-base font-medium'>+1 (555) 123-4567</p>
              </div>
              <div className='flex h-full flex-row  gap-12'>
                <FaMapMarkerAlt className='h-6 w-6 text-primary-600 dark:text-primary-400' />
                <div className='text-base font-medium'>
                  <p>Riga, Latvia</p>
                </div>
              </div>
              <div className='flex h-full flex-row gap-12'>
                <FaEnvelope className='h-6 w-6 text-primary-600 dark:text-primary-400' />
                <p className='text-base font-medium'>info@kldsolutions.lv</p>
              </div>
              <div className='flex h-full flex-row'>
                <a
                  target='_blank'
                  href='https://www.youtube.com/@kld_solutions'
                  className='flex flex-row items-center gap-12 hover:underline text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300'
                >
                  <FaYoutube className='h-6 w-6 ' />
                  <p className='text-base font-medium'>Youtube</p>
                </a>
              </div>
              <div className='flex h-full flex-row'>
                <a
                  target='_blank'
                  href='https://www.instagram.com/kld.solutions/'
                  className='flex flex-row items-center gap-12 hover:underline text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300'
                >
                  <FaInstagram className='h-6 w-6 ' />
                  <p className='text-base font-medium'>Instagram</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

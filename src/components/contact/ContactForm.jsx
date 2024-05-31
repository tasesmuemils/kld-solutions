'use client';

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
                  Strādāsim kopā
                </h2>
                <p className='contact-text hero-clip invisible text-primary-950/70 dark:text-primary-200/70 max-w-lg text-lg sm:text-xl'>
                  Mēs vēlētos uzzināt vairāk par tevi un ko tu vēlies izstrādāt
                </p>
              </div>

              <div className='contact-info-wrapper invisible hidden lg:w-2/3 xl:w-full lg:grid gap-5 xl:grid-cols-2 bg-primary-500/10 dark:bg-primary-400/10 rounded-lg px-6 py-8'>
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

            <form
              method='POST'
              className='contact-form-wrapper invisible mt-3 flex flex-col gap-y-6'
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
                ></textarea>
              </div>

              <div>
                <button
                  className='bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                  type='submit'
                  id='submit-btn'
                >
                  Nosūtīt
                </button>
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

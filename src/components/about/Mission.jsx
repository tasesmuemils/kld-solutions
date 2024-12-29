'use client';

import AboutEmblaCarousel from './AboutEmblaCarousel';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import SplitType from 'split-type';

// Outside
import VImage1 from '../../../public/engine_img/vertical/v1_00000.png';
import VImage2 from '../../../public/engine_img/vertical/v2_00000.png';
import VImage3 from '../../../public/engine_img/vertical/v3_00000.png';
import VImage4 from '../../../public/engine_img/vertical/V5V_00000.png';
import VImage5 from '../../../public/engine_img/vertical/V6V_00000.png';

const OPTIONS = { watchDrag: false, dragFree: true, loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const imagesVertical = [
  VImage1.src,
  VImage2.src,
  VImage3.src,
  VImage4.src,
  VImage5.src,
];

export default function Mission({
  title,
  pOne,
  pTwo,
  pThree,
  statsT,
  statsY,
  statsP,
}) {
  const container = useRef();

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        const text = new SplitType('.about-mission-text', { types: 'lines' });
        gsap.set('.about-mission-text', { autoAlpha: 1 }); // prevent flash of unstayled content
        gsap.set(text.lines, { opacity: 0, yPercent: 150, rotate: '10deg' }); // Sets initial state
        gsap.to(text.lines, {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: 'power4.out',

          scrollTrigger: {
            trigger: '.about-mission-wrapper',
            start: '-80%',
            //   toggleActions: "play none reverse none",
            // end: '-20%',
            // scrub: true,
            // pin: true,
            //   markers: true,
          },
        });

        // Image container
        gsap.set('.about-mission-image', {
          autoAlpha: 1,
        });

        gsap.from('.about-mission-image', {
          translateY: '10%',
          opacity: 0,
          stagger: {
            amount: 0.2,
          },
          delay: 0.1,
          duration: 0.3,
          scrollTrigger: {
            trigger: '.about-mission-wrapper',
            start: '-80%',
            //   toggleActions: "play none reverse none",
            // end: '-20%',
            // scrub: true,
            // pin: true,
            //   markers: true,
          },
        });
      });

      mm.add('(min-width: 768px) and (max-width: 1023px)', () => {
        const text = new SplitType('.about-mission-text', { types: 'lines' });
        gsap.set('.about-mission-text', { autoAlpha: 1 }); // prevent flash of unstayled content
        gsap.set(text.lines, { opacity: 0, yPercent: 150, rotate: '10deg' }); // Sets initial state
        gsap.to(text.lines, {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: 'power4.out',

          scrollTrigger: {
            trigger: '.about-mission-wrapper',
            start: '0%',
            //   toggleActions: "play none reverse none",
            // end: '-20%',
            // scrub: true,
            // pin: true,
            //   markers: true,
          },
        });

        // Button container
        gsap.set('.about-mission-image', {
          autoAlpha: 1,
        });

        gsap.from('.about-mission-image', {
          translateY: '10%',
          opacity: 0,
          stagger: {
            amount: 0.2,
          },
          delay: 0.1,
          duration: 0.3,
          scrollTrigger: {
            trigger: '.about-mission-wrapper',
            start: '-100%',
            //   toggleActions: "play none reverse none",
            // end: '-20%',
            // scrub: true,
            // pin: true,
            //   markers: true,
          },
        });
      });

      mm.add('(max-width: 767px)', () => {
        const text = new SplitType('.about-mission-text', { types: 'lines' });
        gsap.set('.about-mission-text', { autoAlpha: 1 }); // prevent flash of unstayled content
        gsap.set(text.lines, { opacity: 0, yPercent: 150, rotate: '10deg' }); // Sets initial state
        gsap.to(text.lines, {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: 'power4.out',

          scrollTrigger: {
            trigger: '.about-mission-wrapper',
            start: '0%',
            //   toggleActions: "play none reverse none",
            // end: '-20%',
            // scrub: true,
            // pin: true,
            //   markers: true,
          },
        });

        // Button container
        gsap.set('.about-mission-image', {
          autoAlpha: 1,
        });

        gsap.from('.about-mission-image', {
          translateY: '10%',
          opacity: 0,
          stagger: {
            amount: 0.2,
          },
          delay: 0.1,
          duration: 0.3,
          scrollTrigger: {
            trigger: '.about-mission-wrapper',
            start: '-100%',
            //   toggleActions: "play none reverse none",
            // end: '-20%',
            // scrub: true,
            // pin: true,
            //   markers: true,
          },
        });
      });
    },

    { scope: container }
  );

  const stats = [
    {
      name: statsT,
      value: `${new Date().getFullYear() - 2022} ${statsY}`,
    },
    {
      name: statsP,
      value: '+15',
    },
    // {
    //   name: 'Projects',
    //   value: '122',
    // },
    // {
    //   name: 'Awards',
    //   value: "'9'",
    // },
  ];

  return (
    <div ref={container}>
      {' '}
      <section className=' py-0 lg:py-20'>
        <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='about-mission-wrapper grid items-start gap-24 lg:grid-cols-2 lg:gap-24'>
            <div className='flex flex-col lg:gap-24'>
              <div className=''></div>
              <div className=''>
                {' '}
                <AboutEmblaCarousel
                  imagesArr={imagesVertical}
                  slides={SLIDES}
                  options={OPTIONS}
                />
              </div>
            </div>
            <div className='flex flex-col gap-10'>
              <div className='space-y-8 sm:space-y-12'>
                {/* <h2 className='about-mission-text hero-clip invisible text-3xl font-medium tracking-tight sm:text-4xl'>
                  {title}
                </h2> */}
                <div className='space-y-6'>
                  <p className='about-mission-text hero-clip invisible text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg'>
                    {pOne}
                  </p>
                  <p className='about-mission-text hero-clip invisible text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg'>
                    {pTwo}
                  </p>
                  <p className='about-mission-text hero-clip invisible text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg'>
                    {pThree}
                  </p>
                </div>
              </div>

              {/* <dl className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className='border-primary-900/10 dark:border-primary-300/10 rounded-3xl border p-6'
                  >
                    <dt className='text-base'>{stat.name}</dt>
                    <dd className='text-3xl font-medium tracking-tight'>
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

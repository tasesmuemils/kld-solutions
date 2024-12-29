'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import SplitType from 'split-type';

export default function Heading({ title, subTitle }) {
  const container = useRef();

  useGSAP(
    () => {
      //Splits HERO text into chars
      const text = new SplitType('.about-hero-text', { types: 'lines' });
      gsap.set('.about-hero-text', { autoAlpha: 1 }); // prevent flash of unstayled content
      gsap.set(text.lines, { opacity: 0, yPercent: 150, rotate: '10deg' }); // Sets initial state
      gsap.to(text.lines, {
        yPercent: 0,
        opacity: 1,
        rotate: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: 'power4.out',
      });
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      {' '}
      <section className='pt-28 pb-20 lg:pt-32 lg:pb-10'>
        <div className='mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='flex flex-col gap-4 sm:gap-6'>
            <h1
              className='about-hero-text hero-clip invisible text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl'
              data-aos='fade-down'
            >
              {title}
            </h1>
            {/* <p
              className='about-hero-text hero-clip invisible text-primary-950/70 dark:text-primary-200/70 mx-auto max-w-xl text-lg sm:text-xl'
              data-aos='fade-down'
              data-aos-delay='100'
            >
              {subTitle}
            </p> */}
          </div>
        </div>
      </section>
    </div>
  );
}

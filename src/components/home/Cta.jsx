'use client';

import { useRef } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
gsap.registerPlugin(ScrollTrigger);
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Cta({ title, subtitle, btn }) {
  const container = useRef();
  const pathname = usePathname();

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        const text = new SplitType('.cta-text', { types: 'lines' });
        gsap.set('.cta-text', { autoAlpha: 1 }); // prevent flash of unstayled content
        gsap.set(text.lines, { opacity: 0, yPercent: 150, rotate: '10deg' }); // Sets initial state
        gsap.to(text.lines, {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: 'power4.out',

          scrollTrigger: {
            trigger: '.cta-wrapper',
            start: '-100%',
            //   toggleActions: "play none reverse none",
            // end: '-20%',
            // scrub: true,
            // pin: true,
            //   markers: true,
          },
        });

        // Button container
        gsap.set('.cta-btn', {
          autoAlpha: 1,
        });

        gsap.from('.cta-btn', {
          translateY: '10%',
          opacity: 0,
          stagger: {
            amount: 0.2,
          },
          delay: 0.1,
          duration: 0.3,
          scrollTrigger: {
            trigger: '.cta-wrapper',
            start: '-100%',
            //   toggleActions: "play none reverse none",
            // end: '-20%',
            // scrub: true,
            // pin: true,
            //   markers: true,
          },
        });
      });

      mm.add('(min-width: 768px) and (max-width: 1023px)', () => {
        const text = new SplitType('.cta-text', { types: 'lines' });
        gsap.set('.cta-text', { autoAlpha: 1 }); // prevent flash of unstayled content
        gsap.set(text.lines, { opacity: 0, yPercent: 150, rotate: '10deg' }); // Sets initial state
        gsap.to(text.lines, {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: 'power4.out',

          scrollTrigger: {
            trigger: '.cta-wrapper',
            start: '-100%',
            //   toggleActions: "play none reverse none",
            // end: '-20%',
            // scrub: true,
            // pin: true,
            //   markers: true,
          },
        });

        // Button container
        gsap.set('.cta-btn', {
          autoAlpha: 1,
        });

        gsap.from('.cta-btn', {
          translateY: '10%',
          opacity: 0,
          stagger: {
            amount: 0.2,
          },
          delay: 0.1,
          duration: 0.3,
          scrollTrigger: {
            trigger: '.cta-wrapper',
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
        const text = new SplitType('.cta-text', { types: 'lines' });
        gsap.set('.cta-text', { autoAlpha: 1 }); // prevent flash of unstayled content
        gsap.set(text.lines, { opacity: 0, yPercent: 150, rotate: '10deg' }); // Sets initial state
        gsap.to(text.lines, {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: 'power4.out',

          scrollTrigger: {
            trigger: '.cta-wrapper',
            start: '-50%',
            //   toggleActions: "play none reverse none",
            // end: '-20%',
            // scrub: true,
            // pin: true,
            //   markers: true,
          },
        });

        // Button container
        gsap.set('.cta-btn', {
          autoAlpha: 1,
        });

        gsap.from('.cta-btn', {
          translateY: '10%',
          opacity: 0,
          stagger: {
            amount: 0.2,
          },
          delay: 0.1,
          duration: 0.3,
          scrollTrigger: {
            trigger: '.cta-wrapper',
            start: '-50%',
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

  return (
    <div ref={container}>
      {' '}
      <section className='cta-wrapper py-20 sm:py-28' data-aos='fade-up'>
        <div className='mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='bg-primary-500/10 dark:bg-primary-400/10 flex flex-col items-center gap-8 rounded-lg px-5 py-16 sm:gap-10'>
            <div className='flex flex-col gap-4 sm:gap-6'>
              <h2 className='cta-text hero-clip invisible text-3xl font-medium tracking-tight sm:text-4xl'>
                {title}
              </h2>
              <p className='cta-text hero-clip invisible text-primary-950/70 dark:text-primary-200/70 mx-auto max-w-2xl text-lg'>
                {subtitle}
              </p>
            </div>
            <Link
              href={`${pathname}/contact`}
              className='cta-btn invisible opacity-0 bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-lg border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
            >
              {btn}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

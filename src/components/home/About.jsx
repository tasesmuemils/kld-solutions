'use client';

import { useRef } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
gsap.registerPlugin(ScrollTrigger);

export default function About({ title, p, btn }) {
  const container = useRef();

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        const text = new SplitType('.about-text', { types: 'lines' });
        gsap.set('.about-text', { autoAlpha: 1 }); // prevent flash of unstayled content
        gsap.set(text.lines, { opacity: 0, yPercent: 150, rotate: '10deg' }); // Sets initial state
        gsap.to(text.lines, {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: 'power4.out',

          scrollTrigger: {
            trigger: '.about-wrapper',
            start: '-80%',
            //   toggleActions: "play none reverse none",
            // end: '-20%',
            // scrub: true,
            // pin: true,
            //   markers: true,
          },
        });

        // Button container
        gsap.set('.about-btn', {
          autoAlpha: 1,
        });

        gsap.from('.about-btn', {
          translateY: '10%',
          opacity: 0,
          stagger: {
            amount: 0.2,
          },
          delay: 0.1,
          duration: 0.3,
          scrollTrigger: {
            trigger: '.about-wrapper',
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
        const text = new SplitType('.about-text', { types: 'lines' });
        gsap.set('.about-text', { autoAlpha: 1 }); // prevent flash of unstayled content
        gsap.set(text.lines, { opacity: 0, yPercent: 150, rotate: '10deg' }); // Sets initial state
        gsap.to(text.lines, {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: 'power4.out',

          scrollTrigger: {
            trigger: '.about-wrapper',
            start: '-100%',
            //   toggleActions: "play none reverse none",
            // end: '-20%',
            // scrub: true,
            // pin: true,
            //   markers: true,
          },
        });

        // Button container
        gsap.set('.about-btn', {
          autoAlpha: 1,
        });

        gsap.from('.about-btn', {
          translateY: '10%',
          opacity: 0,
          stagger: {
            amount: 0.2,
          },
          delay: 0.1,
          duration: 0.3,
          scrollTrigger: {
            trigger: '.about-wrapper',
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
        const text = new SplitType('.about-text', { types: 'lines' });
        gsap.set('.about-text', { autoAlpha: 1 }); // prevent flash of unstayled content
        gsap.set(text.lines, { opacity: 0, yPercent: 150, rotate: '10deg' }); // Sets initial state
        gsap.to(text.lines, {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: 'power4.out',

          scrollTrigger: {
            trigger: '.about-wrapper',
            start: '-50%',
            //   toggleActions: "play none reverse none",
            // end: '-20%',
            // scrub: true,
            // pin: true,
            //   markers: true,
          },
        });

        // Button container
        gsap.set('.about-btn', {
          autoAlpha: 1,
        });

        gsap.from('.about-btn', {
          translateY: '10%',
          opacity: 0,
          stagger: {
            amount: 0.2,
          },
          delay: 0.1,
          duration: 0.3,
          scrollTrigger: {
            trigger: '.about-wrapper',
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
      <section className='about-wrapper py-28 lg:py-28'>
        <div className=' mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='grid gap-12 lg:grid-cols-3 lg:gap-8'>
            <h2 className='about-text hero-clip invisible text-3xl font-medium tracking-tight sm:text-4xl'>
              {title}
            </h2>
            <div
              data-aos-delay='200'
              className='flex flex-col items-start gap-8 sm:gap-10 lg:col-start-2 lg:col-end-4'
            >
              <p className='about-text hero-clip invisible text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg'>
                {p}
              </p>
              <a
                href='/about'
                className='about-btn invisible opacity-0 bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-lg border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 '
              >
                {btn}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

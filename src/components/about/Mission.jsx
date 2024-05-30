'use client';

import AboutEmblaCarousel from './AboutEmblaCarousel';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import SplitType from 'split-type';

// Outside
import Inside1 from '../../../public/engine_img/vertical/v1_00000.png';
import Inside2 from '../../../public/engine_img/vertical/v2_00000.png';
import Inside3 from '../../../public/engine_img/vertical/v3_00000.png';
import Inside4 from '../../../public/engine_img/vertical/v5_00000.png';
import Inside5 from '../../../public/engine_img/vertical/v6_00000.png';

const OPTIONS = { dragFree: true, loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const imagesInside = [
  Inside1.src,
  Inside2.src,
  Inside3.src,
  Inside4.src,
  Inside5.src,
];

export default function Mission() {
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
      name: 'Pieredze',
      value: `${new Date().getFullYear() - 2022} gadi`,
    },
    {
      name: 'Projekti',
      value: '10',
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
          <div className='about-mission-wrapper grid gap-24 lg:grid-cols-2 lg:gap-24'>
            <AboutEmblaCarousel
              imagesArr={imagesInside}
              slides={SLIDES}
              options={OPTIONS}
            />
            <div className='flex flex-col gap-10'>
              <div
                className='space-y-8 sm:space-y-12'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                <h2 className='about-mission-text hero-clip invisible text-3xl font-medium tracking-tight sm:text-4xl'>
                  Mūsu Misija
                </h2>
                <div className='space-y-6'>
                  <p className='about-mission-text hero-clip invisible text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg'>
                    Mēs vēlamies efektīvi veikt būvniecības darbus, samazinot
                    izmaksas un optimizējot laika izmantošanu. Ar 3D
                    vizualizācijas palīdzību mēs varam precīzi plānot gan
                    iekštelpu, gan ārtelpu iekārtojumu, ņemot vērā klienta
                    individuālās vēlmes un prasības. Tas nodrošina ne tikai
                    augstu kvalitāti, bet arī efektīvu resursu izmantošanu
                    būvniecības procesā.
                  </p>
                  <p className='about-mission-text hero-clip invisible text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg'>
                    Mūsu pieeja iekļauj arī risku novēršanu. Mēs uzmanīgi
                    izvērtējam potenciālos riskus un veicam pasākumus to
                    novēršanai, nodrošinot projektam stabilitāti un ilgtspējību.
                    Ar 3D vizualizācijas palīdzību mēs spējam identificēt
                    potenciālās problēmas jau agrīnā stadijā un atrast
                    risinājumus, kas palīdzēs novērst iespējamos riskus,
                    nodrošinot veiksmīgu un bez problēmām noritējošu projekta
                    gaitu.
                  </p>
                  <p className='about-mission-text hero-clip invisible text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg'>
                    Mainīgā arhitektūra un nekustamo īpašumu attīstība pieprasa
                    svaigu pieeju, un mēs vienmēr esam modri. Mums patīk izpētīt
                    jaunākās tehnoloģijas un tehnikas, pastāvīgi paplašinot
                    digitālās pasaules robežas.
                  </p>
                </div>
              </div>

              <dl className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
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
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

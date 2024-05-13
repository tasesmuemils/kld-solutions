'use client';

// Images
import Image from 'next/image';
import Image1 from '../../../public/engine_img/1920/69_00000.png';
import Image2 from '../../../public/engine_img/1920/169_00000.png';
import Image3 from '../../../public/engine_img/1920/999_00000.png';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
gsap.registerPlugin(ScrollTrigger);

export default function PortfolioSection() {
  // Using ref to capture container
  const container = useRef();

  useGSAP(
    () => {
      //Splits text into chars
      const text = new SplitType('.portfolio-text', { types: 'lines' });
      gsap.set('.portfolio-text', { autoAlpha: 1 }); // prevent flash of unstayled content
      gsap.set(text.lines, { opacity: 0, yPercent: 150, rotate: '10deg' }); // Sets initial state
      gsap.to(text.lines, {
        yPercent: 0,
        rotate: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
        ease: 'power4.out',

        scrollTrigger: {
          trigger: '.lp-wrapper',
          start: '-100%',
          //   toggleActions: "play none reverse none",
          // end: '-20%',
          // scrub: true,
          // pin: true,
          //   markers: true,
        },
      });

      // Stacking cards
      const lpw_items = gsap.utils.toArray('.lp-wrapper');

      lpw_items.forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          pin: true,
          // pinSpacing: true,
          start: 'top-=100% top',
          // end: 'bottom bottom',
          // start: 'left-=120px left',
          end: '+=100%',
          // markers: true,
          // scrub: 1,
        });
      });

      const rpw_items = gsap.utils.toArray('.rp-wrapper');

      rpw_items.forEach((item) => {
        let timeln = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            pin: true,
            pinSpacing: true,
            start: 'left-=100% left',
            end: '+=100%',
            scrub: 1,
            // markers: true,
          },
        });

        timeln.addLabel('rp-card-1');
        timeln.to('.rp-card-1', {
          xPercent: 0,
          opacity: 1,
        });

        timeln.from('.rp-card-2', {
          xPercent: 75,
          opacity: 0,
        });
        timeln.addLabel('rp-card-2');

        timeln.to(
          '.rp-card-1',
          {
            scale: 0.95,
            xPercent: -0.5,
            opacity: 0.5,
          },
          '-=0.3'
        );

        timeln.to('.rp-card-2', {
          xPercent: 0,
          opacity: 1,
        });

        timeln.from('.rp-card-3', {
          xPercent: 75,
          opacity: 0,
        });
        timeln.addLabel('rp-card-3');

        timeln.to(
          '.rp-card-2',
          {
            scale: 0.98,
            xPercent: -0.4,
            opacity: 0.6,
          },
          '-=0.3'
        );

        timeln.to('.rp-card-3', {
          xPercent: 0,
          opacity: 1,
        });

        timeln.to('.rp-card-3', {});
      });
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <section className='py-28 sm:py-28 overflow-hidden'>
        <div className=' mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='grid grid-cols-2 py-28'>
            <div className='left-pin-section'>
              <div className='lp-wrapper flex justify-center items-center h-[33vh]'>
                <h1 className='portfolio-text hero-clip text-4xl font-light'>
                  ĀRIENE
                </h1>
              </div>
            </div>
            <div className='right-pin-section'>
              <div className='rp-wrapper relative w-full flex justify-center items-center h-[33vh]'>
                <div className='rp-card rp-card-1 absolute w-full flex justify-center items-center -top-14 left-16'>
                  <Image
                    className='rounded-lg'
                    src={Image1}
                    alt='pin image'
                    width={608}
                    height={342}
                  />
                </div>
                <div className='rp-card rp-card-2 absolute w-full flex justify-center items-center -top-6 left-6'>
                  <Image
                    className='rounded-lg'
                    src={Image2}
                    alt='pin image'
                    width={608}
                    height={342}
                  />
                </div>
                <div className='rp-card rp-card-3 absolute w-full flex justify-center items-center top-0 -left-4'>
                  <Image
                    className='rounded-lg'
                    src={Image3}
                    alt='pin image'
                    width={608}
                    height={342}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

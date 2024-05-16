'use client';

// Images
import Image from 'next/image';
import Image1 from '../../../public/engine_img/vertical/V7_00000.png';
import Image2 from '../../../public/engine_img/640/619_00000.png';
import Image3 from '../../../public/engine_img/640/621_00000.png';
import Image4 from '../../../public/engine_img/1920/223_00000.png';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
gsap.registerPlugin(ScrollTrigger);

export default function GraphicsSection() {
  // Using ref to capture container
  const container = useRef();
  const imageRef = useRef();

  useGSAP(
    () => {
      //Splits text into chars
      const text = new SplitType('.intro-text', { types: 'lines' });
      gsap.set('.intro-text', { autoAlpha: 1 }); // prevent flash of unstayled content
      gsap.set(text.lines, { opacity: 0, yPercent: 150, rotate: '10deg' }); // Sets initial state
      gsap.to(text.lines, {
        yPercent: 0,
        rotate: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
        ease: 'power4.out',

        scrollTrigger: {
          trigger: '.wrapper',
          start: '-70%',
          //   toggleActions: "play none reverse none",
          // end: '-20%',
          // scrub: true,
          // pin: true,
        },
      });

      // // Images with random widths
      gsap.set('.image_item', { translateX: 0 }); // Sets initial state
      let leftImages = gsap.utils.toArray('.image_item');
      leftImages.forEach((element, i) => {
        gsap.from(element, {
          translateX: element.classList.contains('from_left_image')
            ? -element.offsetWidth
            : element.offsetWidth,
          duration: 1,
          scrollTrigger: {
            trigger: '.wrapper',
            //   toggleActions: "play none reverse none",
            end: '-20%',
            scrub: true,
            // pin: true,
          },
        });
      });
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <section className='py-28 sm:py-28 overflow-hidden'>
        <div className='wrapper mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='relative grid grid-cols-2'>
            <div className='intro-images'>
              <div className='grid grid-cols-3 grid-rows-[200px_200px_100px]  gap-4'>
                <div
                  className='image_item from_left_image row-start-1 row-end-3'
                  ref={imageRef}
                >
                  {' '}
                  <Image
                    src={Image1}
                    alt='first hero image'
                    className='h-full max-w-full rounded-lg object-cover object-center'
                  />
                </div>
                <div
                  className='image_item from_right_image col-start-2 col-end-4 '
                  ref={imageRef}
                >
                  {' '}
                  <Image
                    src={Image3}
                    alt='first hero image'
                    className='max-w-full rounded-lg object-cover object-center h-full'
                  />
                </div>
                <div className='image_item from_left_image row-start-3 row-end-4'>
                  {' '}
                  <Image
                    src={Image2}
                    alt='first hero image'
                    className='h-full max-w-full rounded-lg object-cover object-center'
                  />
                </div>
                <div className='image_item from_right_image row-start-2 row-end-4 col-start-2 col-end-4'>
                  {' '}
                  <Image
                    src={Image4}
                    alt='first hero image'
                    className='h-full max-w-full rounded-lg object-cover object-center'
                  />
                </div>
              </div>
            </div>
            <div className='intro-text-wrapper p-20'>
              <div className='pb-5'>
                {' '}
                <h3 className='intro-text hero-clip invisible text-3xl'>
                  Vizualizācija ir tavas idejas nākotnes apdrošināšana
                </h3>
                <p className='intro-text hero-clip'>
                  Novērs iespējamās neprecizitātes, problēmas un pārsteigumus,
                  kas var rasties projekta realizācijas laikā!
                </p>
              </div>
              <div>
                {' '}
                <h3 className='intro-text hero-clip text-3xl'>
                  Ietaupi laiku un finanses
                </h3>
                <p className='intro-text hero-clip'>
                  No grīdas seguma līdz mīļākajam kafijas galdiņam
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

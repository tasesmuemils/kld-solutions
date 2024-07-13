'use client';

// Images
import Image from 'next/image';
import Image1 from '../../../public/engine_img/random_size/192x416.png';
import Image2 from '../../../public/engine_img/random_size/192x100.png';
import Image3 from '../../../public/engine_img/random_size/400x200.png';
import Image4 from '../../../public/engine_img/random_size/400x316.png';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
gsap.registerPlugin(ScrollTrigger);

export default function GraphicsSection({ titleOne, titleTwo, pOne, pTwo }) {
  // Using ref to capture container
  const container = useRef();
  const imageRef = useRef();

  useGSAP(
    () => {
      let mm = gsap.matchMedia();
      mm.add('(min-width: 768px)', () => {
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
      });

      mm.add('(max-width: 767px)', () => {
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
            start: '-40%',
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
              end: '45%',
              scrub: true,
              // pin: true,
            },
          });
        });
      });
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <section className='py-5 sm:py-28 lg:py-28 overflow-hidden'>
        <div className='wrapper mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='relative grid grid-cols-1 lg:grid-cols-2'>
            <div className='intro-images order-last lg:order-none'>
              <div className='grid grid-cols-3 grid-rows-[200px_200px_100px]  gap-4'>
                <div
                  className='image_item from_left_image row-start-1 row-end-3'
                  ref={imageRef}
                >
                  {' '}
                  <Image
                    src={Image1}
                    alt='first hero image'
                    className='h-full max-w-full rounded-lg object-cover object-center shadow-md'
                    width={192}
                    height={416}
                    sizes='(min-width: 1360px) 192px, (min-width: 1040px) calc(13.33vw + 13px), (min-width: 680px) 192px, calc(31.39vw - 15px)'
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
                    className='max-w-full rounded-lg object-cover object-center h-full shadow-md'
                    width={400}
                    height={200}
                    sizes='(min-width: 1360px) 400px, (min-width: 1040px) calc(26.67vw + 43px), (min-width: 680px) 400px, calc(63.06vw - 16px)'
                  />
                </div>
                <div className='image_item from_left_image row-start-3 row-end-4'>
                  {' '}
                  <Image
                    src={Image2}
                    alt='first hero image'
                    className='h-full max-w-full rounded-lg object-cover object-center shadow-md'
                    width={192}
                    height={100}
                    sizes='(min-width: 1360px) 192px, (min-width: 1040px) calc(13.33vw + 13px), (min-width: 680px) 192px, calc(31.39vw - 15px)'
                  />
                </div>
                <div className='image_item from_right_image row-start-2 row-end-4 col-start-2 col-end-4'>
                  {' '}
                  <Image
                    src={Image4}
                    alt='first hero image'
                    className='h-full max-w-full rounded-lg object-cover object-center shadow-md'
                    width={400}
                    height={316}
                    sizes='(min-width: 1360px) 400px, (min-width: 1040px) calc(26.67vw + 43px), (min-width: 680px) 400px, calc(63.06vw - 16px)'
                  />
                </div>
              </div>
            </div>
            <div className='intro-text-wrapper px-0 pb-20 lg:p-20'>
              <div className='pb-5'>
                {' '}
                <h2 className='intro-text hero-clip invisible text-3xl'>
                  {titleOne}
                </h2>
                <p className='intro-text hero-clip invisible'>{pOne}</p>
              </div>
              <div>
                {' '}
                <h2 className='intro-text hero-clip text-3xl invisible'>
                  {titleTwo}
                </h2>
                <p className='intro-text hero-clip invisible'>{pTwo}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

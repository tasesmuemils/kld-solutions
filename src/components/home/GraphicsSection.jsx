'use client';

// Images
import Image from 'next/image';
import Image1 from '../../../public/engine_img/5_00632.png';
import Image2 from '../../../public/engine_img/6_00744.png';
import Image3 from '../../../public/engine_img/8_00250.png';
import Image4 from '../../../public/engine_img/7_00043.png';
import Image5 from '../../../public/engine_img/9_00163.png';
import Image6 from '../../../public/engine_img/11_00808.png';
import Image7 from '../../../public/engine_img/12_00308.png';
import Image8 from '../../../public/engine_img/13_00516.png';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function GraphicsSection() {
  // Using ref to capture container
  const container = useRef();
  const imageRef = useRef();

  useGSAP(
    () => {
      // Images with random widths
      gsap.set('.image_item', { translateX: 0 }); // Sets initial state
      let leftImages = gsap.utils.toArray('.image_item');
      leftImages.forEach((element, i) => {
        console.log(element);
        gsap.from(element, {
          translateX: element.classList.contains('from_left_image')
            ? -element.offsetWidth
            : element.offsetWidth,
          duration: 1,
          scrollTrigger: {
            trigger: '.wrapper',
            //   toggleActions: "play none reverse none",
            end: '20%',
            scrub: true,
          },
        });
      });

      // Long list
      gsap.utils.toArray('.long-gallery').forEach((section, index) => {
        const w = section.querySelector('.long-gallery-wrapper');

        console.log(section, w);
        const [x, xEnd] =
          index % 2
            ? ['100%', (w.scrollWidth - section.offsetWidth) * -1]
            : [w.scrollWidth * -1, 0];

        gsap.fromTo(
          w,
          { x },
          {
            x: xEnd,
            scrollTrigger: {
              trigger: section,
              scrub: 0.5,
            },
          }
        );
      });
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <div className='py-28 sm:py-28'>
        <section className='long-gallery mb-5 overflow-hidden'>
          <ul className='long-gallery-wrapper flex flex-row'>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image1}
                alt='engine image1'
                className='lg-img rounded-2xl'
                width={562}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image2}
                alt='engine image2'
                className='lg-img rounded-2xl'
                width={562}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image3}
                alt='engine image3'
                className='lg-img rounded-2xl'
                width={562}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image4}
                alt='engine image4'
                className='lg-img rounded-2xl'
                width={562}
                // height={1000}
              />
            </li>
          </ul>
        </section>
        <section className='long-gallery mb-5 overflow-hidden'>
          <ul className='long-gallery-wrapper flex flex-row'>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image5}
                alt='engine image1'
                className='lg-img rounded-2xl'
                width={562}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image6}
                alt='engine image2'
                className='lg-img rounded-2xl'
                width={562}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image7}
                alt='engine image3'
                className='lg-img rounded-2xl'
                width={562}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image8}
                alt='engine image4'
                className='lg-img rounded-2xl'
                width={562}
                // height={1000}
              />
            </li>
          </ul>
        </section>
        <section className='long-gallery mb-5 overflow-hidden'>
          <ul className='long-gallery-wrapper flex flex-row'>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image1}
                alt='engine image1'
                className='lg-img rounded-2xl'
                width={562}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image2}
                alt='engine image2'
                className='lg-img rounded-2xl'
                width={562}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image3}
                alt='engine image3'
                className='lg-img rounded-2xl'
                width={562}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image4}
                alt='engine image4'
                className='lg-img rounded-2xl'
                width={562}
                // height={1000}
              />
            </li>
          </ul>
        </section>
      </div>

      <section className='py-28 sm:py-28 overflow-hidden'>
        <div className='wrapper mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='relative flex flex-row flex-wrap'>
            <div className='absolute w-1/2 text-4xl'>
              <div>
                <p>29 YEARS 30+ BRANDS</p>
              </div>
              <div>
                Our expertise is to cater every bit of fulfillment and to create
                sumptuous delights to your luxury home living.
              </div>
              <div>ABOUT KLD</div>
            </div>

            <div className='relative basis-full w-full'>
              <div className='pl-[48%] flex flex-wrap items-baseline'>
                <div
                  className='image_item from_left_image absolute left-0 bottom-5 pl-0 p-4 w-[48%]'
                  ref={imageRef}
                >
                  {' '}
                  <Image
                    src={Image3}
                    alt='first hero image'
                    className='rounded-2xl'
                  />
                </div>
                <div
                  className='image_item from_left_image p-4 w-3/12'
                  ref={imageRef}
                >
                  {' '}
                  <Image
                    src={Image1}
                    alt='first hero image'
                    className=' rounded-2xl'
                  />
                </div>
                <div className='image_item from_right_image p-4 w-9/12'>
                  {' '}
                  <Image
                    src={Image2}
                    alt='first hero image'
                    className=' rounded-2xl'
                  />
                </div>
                <div className='image_item from_right_image p-4 w-4/5'>
                  {' '}
                  <Image
                    src={Image4}
                    alt='first hero image'
                    className=' rounded-2xl'
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

'use client';

// Images
import Image from 'next/image';
import Image1 from '../../../public/engine_img/640/611_00000.png';
import Image2 from '../../../public/engine_img/640/612_00000.png';
import Image3 from '../../../public/engine_img/640/613_00000.png';
import Image4 from '../../../public/engine_img/640/614_00000.png';
import Image5 from '../../../public/engine_img/640/627_00000.png';
import Image6 from '../../../public/engine_img/640/615_00000.png';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
gsap.registerPlugin(ScrollTrigger);

export default function LongGallery() {
  // Using ref to capture container
  const container = useRef();
  const imageRef = useRef();

  useGSAP(
    () => {
      // Long list
      gsap.utils.toArray('.long-gallery').forEach((section, index) => {
        const w = section.querySelector('.long-gallery-wrapper');

        const [x, xEnd] = index % 2 ? [0, '-30%'] : ['-30%', 0];

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
      <div className='py-20 sm:py-28'>
        <section className='long-gallery mb-5 overflow-hidden'>
          <ul className='long-gallery-wrapper flex flex-row'>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image1}
                alt='engine image1'
                className='lg-img rounded-lg w-[250px] lg:w-[400px]'
                // width={400}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image2}
                alt='engine image2'
                className='lg-img rounded-lg w-[250px] lg:w-[400px]'
                // width={400}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image3}
                alt='engine image3'
                className='lg-img rounded-lg w-[250px] lg:w-[400px]'
                // width={400}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image4}
                alt='engine image4'
                className='lg-img rounded-lg w-[250px] lg:w-[400px]'
                // width={400}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image1}
                alt='engine image1'
                className='lg-img rounded-lg w-[250px] lg:w-[400px]'
                // width={400}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image2}
                alt='engine image2'
                className='lg-img rounded-lg w-[250px] lg:w-[400px]'
                // width={400}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image3}
                alt='engine image3'
                className='lg-img rounded-lg w-[250px] lg:w-[400px]'
                // width={400}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image4}
                alt='engine image4'
                className='lg-img rounded-lg w-[250px] lg:w-[400px]'
                // width={400}
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
                className='lg-img rounded-lg w-[250px] lg:w-[400px]'
                // width={400}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image6}
                alt='engine image2'
                className='lg-img rounded-lg w-[250px] lg:w-[400px]'
                // width={400}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image1}
                alt='engine image3'
                className='lg-img rounded-lg w-[250px] lg:w-[400px]'
                // width={400}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image2}
                alt='engine image4'
                className='lg-img rounded-lg w-[250px] lg:w-[400px]'
                // width={400}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image5}
                alt='engine image1'
                className='lg-img rounded-lg w-[250px] lg:w-[400px]'
                // width={400}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image6}
                alt='engine image2'
                className='lg-img rounded-lg w-[250px] lg:w-[400px]'
                // width={400}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image1}
                alt='engine image3'
                className='lg-img rounded-lg w-[250px] lg:w-[400px]'
                // width={400}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image2}
                alt='engine image4'
                className='lg-img rounded-lg w-[250px] lg:w-[400px]'
                // width={400}
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
                className='lg-img rounded-lg w-[250px] lg:w-[400px]'
                // width={400}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image2}
                alt='engine image2'
                className='lg-img rounded-lg w-[250px] lg:w-[400px]'
                // width={400}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image3}
                alt='engine image3'
                className='lg-img rounded-lg w-[250px] lg:w-[400px]'
                // width={400}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image4}
                alt='engine image4'
                className='lg-img rounded-lg w-[250px] lg:w-[400px]'
                // width={400}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image1}
                alt='engine image1'
                className='lg-img rounded-lg w-[250px] lg:w-[400px]'
                // width={400}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image2}
                alt='engine image2'
                className='lg-img rounded-lg w-[250px] lg:w-[400px]'
                width={400}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image3}
                alt='engine image3'
                className='lg-img rounded-lg w-[250px] lg:w-[400px]'
                // width={400}
                // height={1000}
              />
            </li>
            <li className='px-1 flex-shrink-0'>
              <Image
                src={Image4}
                alt='engine image4'
                className='lg-img rounded-lg w-[250px] lg:w-[400px]'
                // width={400}
                // height={1000}
              />
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

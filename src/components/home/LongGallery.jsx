'use client';

// Images
import Image from 'next/image';
import Image1 from '../../../public/engine_img/long_gallery/2_00000.png';
import Image2 from '../../../public/engine_img/long_gallery/3_00000.png';
import Image3 from '../../../public/engine_img/long_gallery/4_00000.png';
import Image4 from '../../../public/engine_img/long_gallery/5_00000.png';
import Image5 from '../../../public/engine_img/long_gallery/6_00000.png';
import Image6 from '../../../public/engine_img/long_gallery/7_00000.png';
import Image7 from '../../../public/engine_img/long_gallery/8_00000.png';
import Image8 from '../../../public/engine_img/long_gallery/9_00000.png';
import Image9 from '../../../public/engine_img/long_gallery/11_00000.png';
import Image10 from '../../../public/engine_img/long_gallery/12_00000.png';
import Image11 from '../../../public/engine_img/long_gallery/13_00000.png';
import Image12 from '../../../public/engine_img/long_gallery/14_00000.png';
import Image13 from '../../../public/engine_img/long_gallery/15_00000.png';
import Image14 from '../../../public/engine_img/long_gallery/17_00000.png';
import Image15 from '../../../public/engine_img/long_gallery/18_00000.png';
import Image16 from '../../../public/engine_img/long_gallery/19_00000.png';
import Image17 from '../../../public/engine_img/long_gallery/20_00000.png';
import Image18 from '../../../public/engine_img/long_gallery/21_00000.png';
import Image19 from '../../../public/engine_img/long_gallery/22_00000.png';
import Image20 from '../../../public/engine_img/long_gallery/23_00000.png';
import Image21 from '../../../public/engine_img/long_gallery/24_00000.png';
// import Image2 from '../../../public/engine_img/640/612_00000.png';
// import Image3 from '../../../public/engine_img/640/613_00000.png';
// import Image4 from '../../../public/engine_img/640/614_00000.png';
// import Image5 from '../../../public/engine_img/640/627_00000.png';
// import Image6 from '../../../public/engine_img/640/615_00000.png';

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
            <LongGalleryImage
              ImageSource={Image1}
              ImageAlt='Long Gallery image 1'
            />
            <LongGalleryImage
              ImageSource={Image2}
              ImageAlt='Long Gallery image 2'
            />
            <LongGalleryImage
              ImageSource={Image3}
              ImageAlt='Long Gallery image 3'
            />
            <LongGalleryImage
              ImageSource={Image4}
              ImageAlt='Long Gallery image 4'
            />
            <LongGalleryImage
              ImageSource={Image5}
              ImageAlt='Long Gallery image 5'
            />
            <LongGalleryImage
              ImageSource={Image6}
              ImageAlt='Long Gallery image 6'
            />
            <LongGalleryImage
              ImageSource={Image7}
              ImageAlt='Long Gallery image 7'
            />
            <LongGalleryImage
              ImageSource={Image8}
              ImageAlt='Long Gallery image 8'
            />
          </ul>
        </section>
        <section className='long-gallery mb-5 overflow-hidden'>
          <ul className='long-gallery-wrapper flex flex-row'>
            <LongGalleryImage
              ImageSource={Image9}
              ImageAlt='Long Gallery image 9'
            />
            <LongGalleryImage
              ImageSource={Image10}
              ImageAlt='Long Gallery image 10'
            />
            <LongGalleryImage
              ImageSource={Image11}
              ImageAlt='Long Gallery image 11'
            />
            <LongGalleryImage
              ImageSource={Image12}
              ImageAlt='Long Gallery image 12'
            />
            <LongGalleryImage
              ImageSource={Image13}
              ImageAlt='Long Gallery image 13'
            />
            <LongGalleryImage
              ImageSource={Image14}
              ImageAlt='Long Gallery image 14'
            />
            <LongGalleryImage
              ImageSource={Image15}
              ImageAlt='Long Gallery image 15'
            />
            <LongGalleryImage
              ImageSource={Image16}
              ImageAlt='Long Gallery image 16'
            />
          </ul>
        </section>
        <section className='long-gallery mb-5 overflow-hidden'>
          <ul className='long-gallery-wrapper flex flex-row'>
            <LongGalleryImage
              ImageSource={Image17}
              ImageAlt='Long Gallery image 17'
            />
            <LongGalleryImage
              ImageSource={Image18}
              ImageAlt='Long Gallery image 18'
            />
            <LongGalleryImage
              ImageSource={Image19}
              ImageAlt='Long Gallery image 19'
            />
            <LongGalleryImage
              ImageSource={Image20}
              ImageAlt='Long Gallery image 20'
            />
            <LongGalleryImage
              ImageSource={Image21}
              ImageAlt='Long Gallery image 21'
            />
            <LongGalleryImage
              ImageSource={Image9}
              ImageAlt='Long Gallery image 22'
            />
            <LongGalleryImage
              ImageSource={Image1}
              ImageAlt='Long Gallery image 23'
            />
            <LongGalleryImage
              ImageSource={Image16}
              ImageAlt='Long Gallery image 24'
            />
          </ul>
        </section>
      </div>
    </div>
  );
}

const LongGalleryImage = ({ ImageSource, ImageAlt }) => {
  return (
    <li className='px-1 flex-shrink-0'>
      <Image
        src={ImageSource}
        alt={ImageAlt}
        className='lg-img rounded-lg'
        width={400}
        height={225}
        sizes='(min-width: 1040px) 400px, 250px'
      />
    </li>
  );
};

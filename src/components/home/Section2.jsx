'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import SplitType from 'split-type';
import Slider from '@/components/home/Slider';
import './embla.css';

import Inside3 from '../../../public/engine_img/section_2/Apartment-building-3d-model.webp';
import Inside2 from '../../../public/engine_img/section_2/metal-modern-house-3d.webp';
import Inside1 from '../../../public/engine_img/section_2/modern-timber-house-3d-model-on-floor-plan.webp';

const OPTIONS = { loop: true };
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const imagesInside = [Inside1.src, Inside2.src, Inside3.src];

export default function Section2({ titleOne, titleTwo }) {
  // Using ref to capture Hero text container
  const container = useRef();

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        const text = new SplitType('.section2-text', { types: 'lines' });
        gsap.set('.section2-text', { autoAlpha: 1 });
        gsap.set(text.lines, { opacity: 0, yPercent: 150, rotate: '10deg' });
        gsap.to(text.lines, {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.section2-wrapper',
            start: '-120%',
          },
        });

        gsap.set('.section2-img-wrapper', { autoAlpha: 1 });
        gsap.from('.section2-img-wrapper', {
          translateX: '-10%',
          opacity: 0,
          delay: 0.2,
          duration: 0.6,
          scrollTrigger: {
            trigger: '.section2-wrapper',
            start: '-120%',
          },
        });
      });

      mm.add('(min-width: 768px) and (max-width: 1023px)', () => {
        const text = new SplitType('.section2-text', { types: 'lines' });
        gsap.set('.section2-text', { autoAlpha: 1 });
        gsap.set(text.lines, { opacity: 0, yPercent: 150, rotate: '10deg' });
        gsap.to(text.lines, {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.section2-wrapper',
            start: '-150%',
          },
        });

        gsap.set('.section2-img-wrapper', { autoAlpha: 1 });
        gsap.from('.section2-img-wrapper', {
          translateX: '-10%',
          opacity: 0,
          delay: 0.2,
          duration: 0.6,
          scrollTrigger: {
            trigger: '.section2-wrapper',
            start: '-150%',
          },
        });
      });

      mm.add('(max-width: 767px)', () => {
        const text = new SplitType('.section2-text', { types: 'lines' });
        gsap.set('.section2-text', { autoAlpha: 1 });
        gsap.set(text.lines, { opacity: 0, yPercent: 150, rotate: '10deg' });
        gsap.to(text.lines, {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.section2-wrapper',
            start: '-100%',
          },
        });

        gsap.set('.section2-img-wrapper', { autoAlpha: 1 });
        gsap.from('.section2-img-wrapper', {
          translateX: '-10%',
          opacity: 0,
          delay: 0.2,
          duration: 0.6,
          scrollTrigger: {
            trigger: '.section2-wrapper',
            start: '-100%',
          },
        });
      });
    },
    { scope: container },
  );

  return (
    <section
      className='mt-0 mb-24 md:mt-12 md:mb-16 lg:mt-0 lg:mb-24 flex items-center'
      ref={container}
    >
      <div className='flex-1 mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='section2-wrapper grid grid-cols-1 lg:grid-cols-2 items-center '>
          <div className='section2-img-wrapper rounded order-2 lg:order-1'>
            <Slider
              slides={SLIDES}
              options={OPTIONS}
              imagesArr={imagesInside}
            />
            {/* <VideoWrapper /> */}
            {/* <ImgComparisonSlider className='rounded-lg'>
              <Image
                slot='first'
                src={SliderImage1}
                alt='first hero image'
                // className='rounded-none'
                width={608}
                height={342}
                priority
                quality={60}
                sizes='(min-width: 1380px) 608px, (min-width: 1040px) calc(37.5vw + 98px), (min-width: 680px) 608px, calc(94.44vw - 15px)'
              />
              <Image
                slot='second'
                src={SliderImage2}
                alt='first hero image'
                // className='rounded'
                width={608}
                height={342}
                priority
                quality={60}
                sizes='(min-width: 1380px) 608px, (min-width: 1040px) calc(37.5vw + 98px), (min-width: 680px) 608px, calc(94.44vw - 15px)'
              />
            </ImgComparisonSlider> */}
          </div>
          <div className='flex flex-col pb-8 lg:pl-20 lg:pb-0 items-center lg:items-start gap-8 sm:gap-10 order-1 lg:order-2'>
            <div className='flex max-w-xl flex-col items-center lg:items-start'>
              {' '}
              <h2 className='section2-text hero-clip pb-0 text-primary-900/90 dark:text-primary-200 lg:pb-3 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight'>
                {titleOne}
              </h2>
              <h2 className='section2-text hero-clip pb-2invisible text-3xl text-center font-medium tracking-tight sm:text-4xl'>
                {titleTwo}
              </h2>
              {/* <p className='hero-text hero-clip md:invisible pb-6 text-primary-950/70 dark:text-primary-200/70 text-2xl lg:text-2xl  leading-tight text-center lg:text-right w-full'>
                {subtitle}
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// export default function Section2({ titles = [] }) {
//   const container = useRef();
//   const [activeSlide, setActiveSlide] = useState(0);

//   useGSAP(
//     () => {
//       let mm = gsap.matchMedia();

//       mm.add('(min-width: 768px)', () => {
//         const text = new SplitType('.hero-text', { types: 'lines' });
//         gsap.set('.hero-text', { autoAlpha: 1 });
//         gsap.set(text.lines, { opacity: 0, yPercent: 150, rotate: '10deg' });
//         gsap.to(text.lines, {
//           yPercent: 0,
//           opacity: 1,
//           rotate: 0,
//           stagger: 0.2,
//           duration: 1,
//           ease: 'power4.out',
//         });

//         gsap.set('.hero-img-wrapper', { autoAlpha: 1 });
//         gsap.from('.hero-img-wrapper', {
//           translateX: '10%',
//           opacity: 0,
//           delay: 0.2,
//           duration: 0.6,
//         });
//       });
//     },
//     { scope: container },
//   );

//   return (
//     <section className='min-h-screen flex items-center py-20 lg:py-0' ref={container}>
//       <div className='w-full mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
//         <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20'>
//           <div className='flex flex-col items-center lg:items-start gap-8 sm:gap-10 lg:order-last'>
//             <div className='flex max-w-xl flex-col items-center lg:items-start gap-10'>
//               {titles.map((title, index) => (
//                 <div key={index} className='relative pb-2'>
//                   <h2 className='hero-text hero-clip md:invisible text-3xl text-center lg:text-left font-medium tracking-tight sm:text-4xl'>
//                     {title}
//                   </h2>
//                   <div
//                     className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary-950 dark:bg-primary-200 transition-transform duration-500 ease ${
//                       activeSlide === index
//                         ? 'scale-x-100 origin-bottom-left'
//                         : 'scale-x-0 origin-bottom-right'
//                     }`}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className='hero-img-wrapper md:invisible rounded lg:order-first'>
//             <Slider
//               slides={SLIDES}
//               options={OPTIONS}
//               imagesArr={imagesInside}
//               onSlideChange={setActiveSlide}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

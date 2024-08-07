'use client';

// import Lottie from "lottie-react";
// import lootieAnimation from './animation.json';
// import { TypeAnimation } from "react-type-animation";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import SplitType from 'split-type';
import VideoWrapper from '@/components/muxVideo/Video';

// Images
import { ImgComparisonSlider } from '@img-comparison-slider/react';

import Image from 'next/image';
import SliderImage1 from '../../../public/engine_img/before_after/608_before.png';
import SliderImage2 from '../../../public/engine_img/before_after/608_after.png';

export default function Hero({ titleOne, titleTwo, subtitle }) {
  // Using ref to capture Hero text container
  const container = useRef();

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        //Splits HERO text into chars
        const text = new SplitType('.hero-text', { types: 'lines' });
        gsap.set('.hero-text', { autoAlpha: 1 }); // prevent flash of unstayled content
        gsap.set(text.lines, { opacity: 0, yPercent: 150, rotate: '10deg' }); // Sets initial state
        gsap.to(text.lines, {
          yPercent: 0,
          opacity: 1,
          rotate: 0,
          stagger: 0.2,
          duration: 1,
          ease: 'power4.out',
        });

        // Hero Images container
        gsap.set('.hero-img-wrapper', {
          autoAlpha: 1,
        });

        gsap.from('.hero-img-wrapper', {
          translateX: '10%',
          opacity: 0,
          // stagger: {
          //   amount: 0.2,
          // },
          delay: 0.2,
          duration: 0.6,
        });
      });
    },
    { scope: container }
  );

  return (
    <section className='h-screen flex items-center' ref={container}>
      <div className='flex-1 mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center '>
          <div className='flex flex-col pb-8 lg:pb-0 items-center lg:items-start gap-8 sm:gap-10'>
            <div className='flex max-w-xl flex-col items-center lg:items-start'>
              {' '}
              <h1 className='hero-text hero-clip md:invisible pb-0 text-primary-900/90 dark:text-primary-200 lg:pb-3 text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-tight'>
                {titleOne}
              </h1>
              <h1 className='hero-text hero-clip md:invisible pb-2 text-primary-900/90 dark:text-primary-200 lg:pb-2 text-5xl sm:text-6xl lg:text-7xl  font-medium tracking-tight leading-tight'>
                {titleTwo}
              </h1>
              <p className='hero-text hero-clip md:invisible pb-6 text-primary-950/70 dark:text-primary-200/70 text-2xl lg:text-2xl  leading-tight text-center lg:text-right w-full'>
                {subtitle}
              </p>
            </div>
          </div>
          <div className='hero-img-wrapper md:invisible'>
            <VideoWrapper />
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
        </div>
      </div>
    </section>
  );
}

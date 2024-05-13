'use client';

// import Lottie from "lottie-react";
import lootieAnimation from './animation.json';
// import { TypeAnimation } from "react-type-animation";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import SplitType from 'split-type';

// Images
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import Image from 'next/image';
import SliderImage1 from '../../../public/engine_img/1920/19_00000.png';
import SliderImage2 from '../../../public/engine_img/1920/29_00000.png';

export default function Hero() {
  // Using ref to capture Hero text container
  const container = useRef();

  useGSAP(
    () => {
      //Splits HERO text into chars
      const text = new SplitType('.hero-text', { types: 'lines' });
      gsap.set('.hero-text', { autoAlpha: 1 }); // prevent flash of unstayled content
      gsap.set(text.lines, { yPercent: 150, rotate: '10deg' }); // Sets initial state
      gsap.to(text.lines, {
        yPercent: 0,
        rotate: 0,
        stagger: 0.2,
        duration: 1.5,
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
    },
    { scope: container }
  );

  return (
    <section className=' flex justify-center py-36' ref={container}>
      <div className='-pt-4 mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 items-center '>
          <div className='flex flex-col items-start gap-8 sm:gap-10'>
            <div className='flex max-w-xl flex-col items-start'>
              {' '}
              <h1 className='hero-text hero-clip invisible text-7xl font-medium tracking-tight leading-tight'>
                Tavs sapnis
              </h1>
              <h1 className='hero-text hero-clip invisible text-7xl font-medium tracking-tight leading-tight'>
                Mūsu realitāte
              </h1>
              <p className='hero-text hero-clip invisible text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl leading-tight'>
                Realizēsim jebkuras jūsu idejas
              </p>
            </div>
          </div>
          <div className='hero-img-wrapper grid h-full w-full rounded-3xl  justify-center items-center invisible'>
            <ImgComparisonSlider className='rounded-2xl'>
              <Image
                slot='first'
                src={SliderImage1}
                alt='first hero image'
                className='rounded-2xl'
                width={608}
                height={342}
              />
              <Image
                slot='second'
                src={SliderImage2}
                alt='first hero image'
                className='rounded-2xl'
                width={608}
                height={342}
              />
            </ImgComparisonSlider>
          </div>
        </div>
      </div>
    </section>
  );
}

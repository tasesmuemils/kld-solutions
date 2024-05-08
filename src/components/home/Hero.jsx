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
import Image1 from '../../../public/image_apartment.jpeg';
import Image2 from '../../../public/image_apartment6.webp';
import Image3 from '../../../public/image_apartment3.png';
import Image4 from '../../../public/image_apartment4.png';
import Image5 from '../../../public/image_apartment5.jpeg';
import Image6 from '../../../public/image_apartment6.jpeg';
import Image7 from '../../../public/image_podcast.jpeg';
import Image8 from '../../../public/image_kindergarten.jpeg';
import SliderImage1 from '../../../public/engine_img/2_00113.png';
import SliderImage2 from '../../../public/engine_img/3_00254.png';

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
    <section className='pt-20 pb-48' ref={container}>
      <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 items-center '>
          <div className='flex flex-col items-start gap-8 sm:gap-10'>
            <div className='flex max-w-xl flex-col items-start'>
              {' '}
              <h1 className='hero-text hero-clip invisible text-7xl font-medium tracking-tight leading-tight'>
                {/* <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Tavs sapnis",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Mūsu realitāte",
                    1000,
                    "kld solutions",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  // style={{ fontSize: "2em", display: "inline-block" }}
                  repeat={Infinity}
                /> */}
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
              />
              <Image
                slot='second'
                src={SliderImage2}
                alt='first hero image'
                className='rounded-2xl'
              />
            </ImgComparisonSlider>
          </div>
          {/* <div className='grid grid-cols-3 h-full w-full rounded-3xl gap-4 justify-center items-center'>
            <div className='hero-img-wrapper invisible flex flex-col gap-4'>
              {' '}
              <Image
                src={Image1}
                alt='first hero image'
                className='rounded-2xl'
              />
              <Image
                src={Image2}
                alt='first hero image'
                className=' rounded-2xl'
              />
            </div>
            <div className='hero-img-wrapper invisible flex flex-col gap-4'>
              {' '}
              <Image
                src={Image8}
                alt='first hero image'
                className=' rounded-2xl'
              />
              <Image
                src={Image4}
                alt='first hero image'
                className=' rounded-2xl'
              />
              <Image
                src={Image5}
                alt='first hero image'
                className=' rounded-2xl'
              />
            </div>{' '}
            <div className='hero-img-wrapper invisible flex flex-col gap-4'>
              {' '}
              <Image
                src={Image6}
                alt='first hero image'
                className=' rounded-2xl'
              />
              <Image
                src={Image7}
                alt='first hero image'
                className=' rounded-2xl'
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

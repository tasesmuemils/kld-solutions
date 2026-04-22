'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import SplitType from 'split-type';
import Slider from '@/components/home/Slider';
import './embla.css';

import Inside1 from '../../../public/engine_img/section_2/Apartment-building-3d-model.webp';
import Inside2 from '../../../public/engine_img/section_2/modern-timber-house-3d-model-on-floor-plan.webp';
import Inside3 from '../../../public/engine_img/section_2/modern-timber-house-3d-model-floor-plan.webp';

const OPTIONS = { loop: true };
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const imagesInside = [Inside1.src, Inside3.src, Inside2.src];

export default function Section2({ titles = [] }) {
  const container = useRef();
  const [activeSlide, setActiveSlide] = useState(0);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        const text = new SplitType('.hero-text', { types: 'lines' });
        gsap.set('.hero-text', { autoAlpha: 1 });
        gsap.set(text.lines, { opacity: 0, yPercent: 150, rotate: '10deg' });
        gsap.to(text.lines, {
          yPercent: 0,
          opacity: 1,
          rotate: 0,
          stagger: 0.2,
          duration: 1,
          ease: 'power4.out',
        });

        gsap.set('.hero-img-wrapper', { autoAlpha: 1 });
        gsap.from('.hero-img-wrapper', {
          translateX: '10%',
          opacity: 0,
          delay: 0.2,
          duration: 0.6,
        });
      });
    },
    { scope: container },
  );

  return (
    <section className='min-h-screen flex items-center py-20 lg:py-0' ref={container}>
      <div className='w-full mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20'>
          <div className='flex flex-col items-center lg:items-start gap-8 sm:gap-10 lg:order-last'>
            <div className='flex max-w-xl flex-col items-center lg:items-start gap-10'>
              {titles.map((title, index) => (
                <div key={index} className='relative pb-2'>
                  <h2 className='hero-text hero-clip md:invisible text-3xl text-center lg:text-left font-medium tracking-tight sm:text-4xl'>
                    {title}
                  </h2>
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary-950 dark:bg-primary-200 transition-transform duration-500 ease ${
                      activeSlide === index
                        ? 'scale-x-100 origin-bottom-left'
                        : 'scale-x-0 origin-bottom-right'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='hero-img-wrapper md:invisible rounded lg:order-first'>
            <Slider
              slides={SLIDES}
              options={OPTIONS}
              imagesArr={imagesInside}
              onSlideChange={setActiveSlide}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

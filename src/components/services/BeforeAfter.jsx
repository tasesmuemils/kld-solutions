'use client';
import Image from 'next/image';
import { ImgComparisonSlider } from '@img-comparison-slider/react';

// Images
import SliderImage1 from '../../../public/engine_img/1920/19_00000.png';
import SliderImage2 from '../../../public/engine_img/1920/29_00000.png';

export default function BeforeAfter({ title, description }) {
  return (
    <section className='py-28 sm:py-28'>
      <div className='flex flex-col gap-10 mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='flex flex-col justify-center text-center gap-1'>
          <h2 className='text-3xl font-medium tracking-tight sm:text-4xl'>
            {title}
          </h2>
          <p className=' text-primary-950/70 dark:text-primary-200/70  text-lg sm:text-xl'>
            {description}
          </p>
        </div>
        <div className='max-w-4xl mx-auto'>
          {' '}
          <div className='grid h-full w-full justify-center items-center'>
            <ImgComparisonSlider className='rounded-lg'>
              <Image
                slot='first'
                src={SliderImage1}
                alt='first hero image'
                // className='rounded-none'
                // width={608}
                // height={342}
                priority={true}
              />
              <Image
                slot='second'
                src={SliderImage2}
                alt='first hero image'
                // className='rounded'
                // width={608}
                // height={342}
                priority={true}
              />
            </ImgComparisonSlider>
          </div>
        </div>
      </div>
    </section>
  );
}

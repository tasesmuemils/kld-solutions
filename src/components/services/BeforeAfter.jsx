'use client';
import Image from 'next/image';
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import { motion } from 'framer-motion';

// Images
import SliderImage1 from '../../../public/engine_img/before_after/896_before.png';
import SliderImage2 from '../../../public/engine_img/before_after/896_after.png';

export default function BeforeAfter({ title, description }) {
  return (
    <section className='py-28 sm:py-28'>
      <div className='flex flex-col gap-10 mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <motion.div
          initial={{ opacity: 0, translateY: '20%' }}
          whileInView={{ opacity: 1, translateY: '0%' }}
          viewport={{ once: true, margin: '-20%' }}
          className='flex flex-col justify-center text-center gap-1'
        >
          <h2 className='text-3xl font-medium tracking-tight sm:text-4xl'>
            {title}
          </h2>
          <p className=' text-primary-950/70 dark:text-primary-200/70  text-lg sm:text-xl'>
            {description}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: '20%' }}
          whileInView={{ opacity: 1, translateY: '0%' }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className='max-w-4xl mx-auto'
        >
          {' '}
          <div className='grid h-full w-full justify-center items-center'>
            <ImgComparisonSlider className='rounded-lg'>
              <Image
                slot='first'
                src={SliderImage1}
                alt='first before after image'
                // className='rounded-none'
                // width={608}
                // height={342}
                sizes='(min-width: 1040px) 896px, (min-width: 700px) 624px, 93.68vw'
                priority={true}
              />
              <Image
                slot='second'
                src={SliderImage2}
                alt='first before after image'
                // className='rounded'
                // width={608}
                // height={342}
                sizes='(min-width: 1040px) 896px, (min-width: 700px) 624px, 93.68vw'
                priority={true}
              />
            </ImgComparisonSlider>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

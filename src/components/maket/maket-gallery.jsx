'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MaketGallery() {
  return (
    <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
      <div className='flex flex-col justify-center text-center mb-10'>
        {' '}
        <motion.div
          initial={{ opacity: 0, translateY: '20%' }}
          whileInView={{
            opacity: 1,
            translateY: '0%',
            transition: { duration: 0.6 },
          }}
          viewport={{ once: true, margin: '-20%' }}
          className='grid grid-cols-2 md:grid-cols-4 gap-4'
        >
          <div className='grid gap-4'>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='/engine_img/maket/8.png'
                alt=''
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='/engine_img/maket/1.png'
                alt=''
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='/engine_img/maket/6.png'
                alt=''
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className='grid gap-4'>
            <div>
              <Image
                className=' h-auto max-w-full rounded-lg'
                src='/engine_img/maket/7.png'
                alt=''
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='/engine_img/maket/9.png'
                alt=''
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='/engine_img/maket/2.png'
                alt=''
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className='grid gap-4'>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='/engine_img/maket/13.png'
                alt=''
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='/engine_img/maket/12.png'
                alt=''
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='/engine_img/maket/5.png'
                alt=''
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className='grid gap-4'>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='/engine_img/maket/4.png'
                alt=''
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='/engine_img/maket/10.png'
                alt=''
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='/engine_img/maket/3.png'
                alt=''
                width={500}
                height={500}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

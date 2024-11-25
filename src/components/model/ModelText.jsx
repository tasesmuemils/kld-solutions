'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function ModelText({ images }) {
  const t = useTranslations('Modeling');
  return (
    <div className='flex-1 mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
      <div className='grid  gap-32 py-28'>
        <motion.div
          initial={{ opacity: 0, translateY: '20%' }}
          whileInView={{
            opacity: 1,
            translateY: '0%',
            transition: { duration: 0.3 },
          }}
          viewport={{ once: true, margin: '-20%' }}
          className='grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center space-y-4'
        >
          <Image
            src={images[0].src}
            alt={images[0].alt}
            className='rounded-lg'
            width={714}
            height={402}
          />
          <p className=' text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl'>
            {t('P.P1')}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: '20%' }}
          whileInView={{
            opacity: 1,
            translateY: '0%',
            transition: { duration: 0.3 },
          }}
          viewport={{ once: true, margin: '-20%' }}
          className='grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center space-y-4'
        >
          <p className='order-2 lg:order-1 text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl'>
            {t('P.P2')}
          </p>
          <Image
            src={images[1].src}
            alt={images[1].alt}
            className='rounded-lg order-1 lg:order-2'
            width={714}
            height={402}
          />
        </motion.div>
      </div>
    </div>
  );
}

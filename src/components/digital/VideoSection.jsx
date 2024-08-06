'use client';
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedVideo from './AnimatedVideo';

export default function VideoSection({ title }) {
  return (
    <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
      <div className='flex flex-col justify-center text-center mb-10'>
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
            {/* {description} */}
          </p>
        </motion.div>{' '}
      </div>
      <div className='grid grid-cols-1: sm:grid-cols-3 justify-center items-center gap-7 sm:gap-0'>
        <AnimatedVideo videoId='VaTfa4hJTdw' delay={0.3} />
        <AnimatedVideo videoId='B6FTHp_8B5w' delay={0.5} />
        <AnimatedVideo videoId='mBHlJflipdA' delay={0.7} />
      </div>
    </div>
  );
}

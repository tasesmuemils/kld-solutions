'use client';

import { motion } from 'framer-motion';

const TextComponent = ({ p }) => {
  return (
    <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
      <div className='flex flex-col justify-center text-left my-28'>
        <motion.div
          initial={{ opacity: 0, translateY: '20%' }}
          whileInView={{
            opacity: 1,
            translateY: '0%',
            transition: { duration: 0.2 },
          }}
          viewport={{ once: true, margin: '-20%' }}
        >
          {' '}
          <p className='text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl'>
            {p}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TextComponent;

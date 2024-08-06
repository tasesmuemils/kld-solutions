'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import DigitalLazyYoutube from '@/components/digital/DigitalLazyYoutube/';

export default function AnimatedVideo({ videoId, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: isInView ? delay : 0 }}
    >
      <DigitalLazyYoutube videoId={videoId} />
    </motion.div>
  );
}

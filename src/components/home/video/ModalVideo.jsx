'use client';

import { useState, useRef } from 'react';
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import Image from 'next/image';

import LazyYoutube from '@/components/home/video/LazyYoutube';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
gsap.registerPlugin(ScrollTrigger);

export default function ModalVideo({ thumb, title, videoId }) {
  const [modalOpen, setModalOpen] = useState(false);

  const container = useRef();

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        const text = new SplitType(`.video-text-${videoId}`, {
          types: 'lines',
        });
        gsap.set(`.video-text-${videoId}`, { autoAlpha: 1 }); // prevent flash of unstayled content
        gsap.set(text.lines, { opacity: 0, yPercent: 150, rotate: '10deg' }); // Sets initial state
        gsap.to(text.lines, {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: 'power4.out',

          scrollTrigger: {
            trigger: `.video-wrapper-${videoId}`,
            start: '-70%',
            //   toggleActions: "play none reverse none",
            // end: '-20%',
            // scrub: true,
            // pin: true,
            //   markers: true,
          },
        });

        // VideoImages container
        gsap.set('.video-img-wrapper', {
          autoAlpha: 1,
        });

        gsap.from('.video-img-wrapper', {
          translateY: '10%',
          opacity: 0,
          // stagger: {
          //   amount: 0.2,
          // },
          delay: 0.2,
          duration: 0.6,
          scrollTrigger: {
            trigger: `.video-wrapper-${videoId}`,
            start: '-80%',
            //   toggleActions: "play none reverse none",
            // end: '-20%',
            // scrub: true,
            // pin: true,
            //   markers: true,
          },
        });
      });

      mm.add('(max-width: 1023px)', () => {
        const text = new SplitType(`.video-text-${videoId}`, {
          types: 'lines',
        });
        gsap.set(`.video-text-${videoId}`, { autoAlpha: 1 }); // prevent flash of unstayled content
        gsap.set(text.lines, { opacity: 0, yPercent: 150, rotate: '10deg' }); // Sets initial state
        gsap.to(text.lines, {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: 'power4.out',

          scrollTrigger: {
            trigger: `.video-wrapper-${videoId}`,
            start: '-100%',
            //   toggleActions: "play none reverse none",
            // end: '-20%',
            // scrub: true,
            // pin: true,
            //   markers: true,
          },
        });

        // VideoImages container
        gsap.set('.video-img-wrapper', {
          autoAlpha: 1,
        });

        gsap.from('.video-img-wrapper', {
          translateY: '10%',
          opacity: 0,
          // stagger: {
          //   amount: 0.2,
          // },
          delay: 0.2,
          duration: 0.6,
          scrollTrigger: {
            trigger: `.video-wrapper-${videoId}`,
            start: '-100%',
            //   toggleActions: "play none reverse none",
            // end: '-20%',
            // scrub: true,
            // pin: true,
            //   markers: true,
          },
        });
      });
    },

    { scope: container }
  );

  return (
    <div ref={container}>
      {' '}
      <section className='py-24 sm:py-28 overflow-hidden'>
        <div
          className={`video-wrapper-${videoId} mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8`}
        >
          <div className=' flex justify-center pb-5'>
            {' '}
            <h1
              className={`video-text-${videoId} hero-clip invisible text-3xl font-medium tracking-tight sm:text-4xl`}
            >
              {title}
            </h1>
          </div>

          <div className='invisible video-img-wrapper'>
            {' '}
            <button
              className=' relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group'
              onClick={() => {
                setModalOpen(true);
              }}
              aria-label='Watch the video'
            >
              <Image
                className='rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out'
                src={thumb}
                alt={'Video component background image'}
                // width={1206}
                // height={684}
                // loading='lazy'
              />
              {/* Play icon */}
              <svg
                className='absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out'
                xmlns='http://www.w3.org/2000/svg'
                width='72'
                height='72'
              >
                <circle
                  className='fill-white'
                  cx='36'
                  cy='36'
                  r='36'
                  fillOpacity='.8'
                />
                <path
                  className='fill-indigo-500 drop-shadow-2xl'
                  d='M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z'
                />
              </svg>
            </button>
            {/* End: Video thumbnail */}
            <Transition
              as={Dialog}
              show={modalOpen}
              onClose={() => setModalOpen(false)}
              enter='transition-opacity duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity duration-150'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed w-full z-50 inset-0 flex items-center justify-center p-4 bg-primary-900/80 '>
                <TransitionChild
                  as={DialogPanel}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <div className='w-full flex items-center'>
                    <DialogPanel className='w-full h-full rounded-3xl shadow-2xl aspect-video bg-primary-900/80 overflow-hidden'>
                      <LazyYoutube videoId={videoId} width='600px' />
                    </DialogPanel>
                  </div>
                </TransitionChild>
              </div>
            </Transition>
          </div>
        </div>
      </section>
    </div>
  );
}

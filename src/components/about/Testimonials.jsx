'use client';

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useThemeStore, useInitializeTheme } from '../useThemeStore';

export default function TestimonialSlider({ title, s1, l1, c1 }) {
  const testimonials = [
    {
      logo: '/Logo_Valmiera_melns.png',
      logoDark: '/Logo_Valmiera_balts.png',
      width: 200,
      height: 80,
      logoAlt: 'Valmieras novada dome symbol',
      companyName: c1,
      shortText: s1,
      fullText: l1,
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);
  useInitializeTheme();
  const colorTheme = useThemeStore((state) => state.colorTheme);

  return (
    <section className='py-16 sm:py-20'>
      <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='sm:space-8 space-y-12'>
          <h2
            className='text-3xl font-medium tracking-tight sm:text-4xl'
            data-aos='fade-up'
          >
            {title}
          </h2>{' '}
          <div className='w-full max-w-3xl mx-auto px-4'>
            <Carousel
              opts={{
                align: 'center',
              }}
              className='relative'
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className='flex flex-col items-center  min-h-[400px] px-0 md:px-8'>
                      <Image
                        src={
                          colorTheme === 'light'
                            ? testimonial.logo
                            : testimonial.logoDark
                        }
                        alt={testimonial.logoAlt}
                        width={testimonial.width}
                        height={testimonial.height}
                        className='object-contain mb-6'
                      />

                      <div className='space-y-4 max-w-xl'>
                        <p className='text-gray-700 text-lg text-center'>
                          {expandedIndex === index
                            ? testimonial.fullText
                            : testimonial.shortText}
                        </p>
                        <button
                          onClick={() =>
                            setExpandedIndex(
                              expandedIndex === index ? null : index
                            )
                          }
                          className='flex items-center gap-2 mx-auto text-gray-500 hover:text-gray-700 transition-colors'
                        >
                          {/* <span className='text-sm'>
                      {expandedIndex === index ? 'Rādīt mazāk' : 'Lasīt vairāk'}
                    </span> */}
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${
                              expandedIndex === index ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      </div>
                      <div className='w-16 h-px bg-gray-200 my-6'></div>
                      <p className='text-gray-900 font-semibold text-center'>
                        {testimonial.companyName}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {testimonials.length > 1 && (
                <>
                  <CarouselPrevious className='absolute left-0 -translate-x-1/2' />
                  <CarouselNext className='absolute right-0 translate-x-1/2' />
                </>
              )}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

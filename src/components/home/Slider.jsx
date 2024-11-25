import React, { useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Fade from 'embla-carousel-fade';

const Slider = (props) => {
  const { slides, options, imagesArr } = props;
  const progressNode = useRef(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      ...options,
      loop: true, // recommended with fade
    },
    [Autoplay({ playOnInit: true, delay: 1800 }), Fade()]
  );

  return (
    <div className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((index) => (
            <div className='embla__slide' key={index}>
              <div className='embla__slide__number'>
                <Image
                  className='embla__slide__img '
                  src={imagesArr[index]}
                  width={1280}
                  height={720}
                  alt='Embla carousel images'
                  // sizes={sizes}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;

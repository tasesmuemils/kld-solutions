import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Fade from 'embla-carousel-fade';

const Slider = ({ slides, options, imagesArr, onSlideChange }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { ...options, loop: true },
    [Autoplay({ playOnInit: true, delay: 1800 }), Fade()]
  );

  useEffect(() => {
    if (!emblaApi || !onSlideChange) return;
    const handleSelect = () => onSlideChange(emblaApi.selectedScrollSnap());
    emblaApi.on('select', handleSelect);
    return () => emblaApi.off('select', handleSelect);
  }, [emblaApi, onSlideChange]);

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
                  priority={index === 0} // Prioritize the first image
                  // loading={index === 0 ? 'eager' : 'lazy'} // Eager load the first image
                  loading='eager' // Force all images to load immediately
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1280px'
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

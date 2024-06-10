import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const AboutEmblaCarousel = (props) => {
  const { slides, options, imagesArr } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 2000 }),
  ]);

  // const [isPlaying, setIsPlaying] = useState(false);

  //   const {
  //     prevBtnDisabled,
  //     nextBtnDisabled,
  //     onPrevButtonClick,
  //     onNextButtonClick,
  //   } = usePrevNextButtons(emblaApi);

  //   const onButtonAutoplayClick = useCallback(
  //     (callback) => {
  //       const autoplay = emblaApi?.plugins()?.autoplay;
  //       if (!autoplay) return;

  //       const resetOrStop =
  //         autoplay.options.stopOnInteraction === false
  //           ? autoplay.reset
  //           : autoplay.stop;

  //       resetOrStop();
  //       callback();
  //     },
  //     [emblaApi]
  //   );

  //   const toggleAutoplay = useCallback(() => {
  //     const autoplay = emblaApi?.plugins()?.autoplay;
  //     if (!autoplay) return;

  //     const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
  //     playOrStop();
  //   }, [emblaApi]);

  // useEffect(() => {
  //   const autoplay = emblaApi?.plugins()?.autoplay;
  //   if (!autoplay) return;

  //   setIsPlaying(autoplay.isPlaying());
  //   emblaApi
  //     .on('autoplay:play', () => setIsPlaying(true))
  //     .on('autoplay:stop', () => setIsPlaying(false))
  //     .on('reInit', () => setIsPlaying(autoplay.isPlaying()));
  // }, [emblaApi]);

  return (
    <div className='embla_v invisible about-mission-image rounded-lg'>
      <div className='embla__viewport_v rounded-lg' ref={emblaRef}>
        <div className='embla__container_v'>
          {slides.map((index) => (
            <div className='embla__slide_v' key={index}>
              <Image
                className='embla__slide__img embla__parallax__img rounded-lg'
                src={imagesArr[index]}
                width={300}
                height={600}
                style={{ width: 300, height: 600 }}
                alt='Vertical Image About'
                sizes='(min-width: 380px) 300px, calc(80vw + 12px)'
              />
              {/* <div className='embla__slide__number'>

              </div> */}
            </div>
          ))}
        </div>
      </div>

      {/* <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>

        <button className="embla__play" onClick={toggleAutoplay} type="button">
          {isPlaying ? 'Stop' : 'Start'}
        </button>
      </div> */}
    </div>
  );
};

export default AboutEmblaCarousel;

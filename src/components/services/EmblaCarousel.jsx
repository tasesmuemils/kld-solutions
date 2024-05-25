'use client';
import React, { useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';

const TWEEN_FACTOR_BASE = 0.2;

const EmblaCarousel = (props) => {
  const { title, description, imagesArr, slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__parallax__layer');
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === 'scroll';

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
        const tweenNode = tweenNodes.current[slideIndex];
        tweenNode.style.transform = `translateX(${translate}%)`;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('slideFocus', tweenParallax);
  }, [emblaApi, tweenParallax]);

  return (
    <section className='py-28 sm:py-28'>
      <div className='flex flex-col gap-10 mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='flex flex-col justify-center text-center gap-1'>
          <h2 className='text-3xl font-medium tracking-tight sm:text-4xl'>
            {title}
          </h2>
          <p className=' text-primary-950/70 dark:text-primary-200/70  text-lg sm:text-xl'>
            {description}
          </p>
        </div>{' '}
        <div className='embla max-w-4xl mx-auto'>
          <div className='embla__viewport rounded-3xl' ref={emblaRef}>
            <div className='embla__container'>
              {slides.map((index) => (
                <div className='embla__slide' key={index}>
                  <div className='embla__parallax'>
                    <div className='embla__parallax__layer'>
                      <Image
                        className='embla__slide__img embla__parallax__img'
                        src={imagesArr[index]}
                        width={640}
                        height={360}
                        alt='Your alt text'
                      />
                      {/* <img
                        className='embla__slide__img embla__parallax__img'
                        src={`https://picsum.photos/600/350?v=${index}`}
                        alt='Your alt text'
                      /> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='embla__controls'>
            <div className='embla__buttons'>
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>

            <div className='embla__dots'>
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={`embla__dot after:shadow-[inset_0_0_0_0.2rem] after:shadow-primary-300 after:dark:shadow-[inset_0_0_0_0.2rem] after:dark:shadow-primary-500 after:content-['']`.concat(
                    index === selectedIndex
                      ? ' embla__dot--selected after:shadow-[inset_0_0_0_0.2rem] after:shadow-primary-600 after:dark:shadow-[inset_0_0_0_0.2rem] after:dark:shadow-primary-100'
                      : ''
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// className={`after:shadow-[inset_0_0_0_0.2rem_rgba(234,234,234)] after:dark:shadow-[inset_0_0_0_0.2rem_rgba(25,25,25)] after:content-['']`}

export default EmblaCarousel;

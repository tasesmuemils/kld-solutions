import React, { useState, useEffect, useRef } from 'react';

const LazyYoutube = ({ videoId, width }) => {
  const [load, setLoad] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLoad(true);
        observer.disconnect();
      }
    });

    observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div ref={videoRef} className='flex justify-center rounded-lg'>
      {load ? (
        <iframe
          //   width='100%'
          //   height='100%'
          //   className='w-auto aspect-[9/16] h-[320px] sm:h-[480px] md:h-[540px] lg:h-[640px] xl:h-[720px]'
          //   className='w-auto aspect-[9/16] h-[160px] sm:h-[240px] md:h-[270px] lg:h-[320px] xl:h-[360px]'
          //   className='rounded-lg w-auto aspect-[9/16] h-[192px] sm:h-[288px] md:h-[324px] lg:h-[384px] xl:h-[432px]'
          //   className='rounded w-full aspect-[9/16] h-auto sm:w-auto sm:h-[288px] md:h-[324px] lg:h-[384px] xl:h-[432px]'
          className='rounded-lg w-full aspect-[9/16] h-auto sm:w-auto sm:h-[317px] md:h-[356px] lg:h-[422px] xl:h-[475px]'
          src={`https://www.youtube.com/embed/${videoId}`}
          title='YouTube video player'
          //   frameBorder="0"
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default LazyYoutube;

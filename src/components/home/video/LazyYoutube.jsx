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
    <div ref={videoRef} className='w-full h-full'>
      {load ? (
        <iframe
          //   width='100%'
          //   height='100%'
          className='w-full aspect-video  h-[300px] sm:h-[450px] md:h-[600px] lg:h-[450px] xl:h-[600px]'
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

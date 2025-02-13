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
    <div ref={videoRef} className='relative w-full aspect-video '>
      {load ? (
        <iframe
          className='absolute top-0 left-0 w-full h-full'
          src={`https://www.youtube.com/embed/${videoId}`}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
      ) : (
        <div className='w-full h-full flex items-center justify-center'>
          Loading...
        </div>
      )}
    </div>
  );
};

export default LazyYoutube;

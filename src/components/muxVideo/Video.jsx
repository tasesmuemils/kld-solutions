import Video from 'next-video';
import TEST from '../../../videos/1280x720_ENG_5mbps.mp4';
import BackgroundVideo from 'next-video/background-video';
import ReactPlayer from 'react-player';
import Thumb from '../../../public/engine_img/thumb/thumb_1.png';
import MuxPlayer from '@mux/mux-player-react';

export default function VideoWrapper() {
  return (
    <>
      {' '}
      <div className=' rounded-lg w-full h-full bg-gray-900 overflow-hidden'>
        {/* <BackgroundVideo
          style={{ width: '100%' }}
          // accentColor='#1e293b'
          src={TEST}
          placeholder='blur'
        /> */}
        {/* <ReactPlayer url={TEST} width='100%' height='100%' /> */}
        <Video
          src={TEST}
          poster={Thumb.src}
          blurDataURL={Thumb.blurDataURL}
          style={{ aspectRatio: 16 / 9 }}
          accentColor='#1e293b'
          preload='metadata'
        />
        {/* <MuxPlayer
          playbackId='EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs'
          style={{ aspectRatio: 16 / 9, width: '100%' }}
          preload='metadata'
          accentColor='#1e293b'
        /> */}
      </div>
      {/* <div className='block lg:hidden rounded-lg w-full h-full bg-gray-900 overflow-hidden'>
        {' '}
        <Video src={TEST} style={{ width: '100%' }} accentColor='#1e293b' />
      </div> */}
    </>
  );
}

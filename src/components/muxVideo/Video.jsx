import Video from 'next-video';
import TEST from '../../../videos/1280x720_ENG_5mbps.mp4';
import BackgroundVideo from 'next-video/background-video';

export default function VideoWrapper() {
  return (
    <>
      {' '}
      <div className='hidden lg:block rounded-lg w-full h-full bg-gray-900 overflow-hidden'>
        <BackgroundVideo
          style={{ width: '100%' }}
          // accentColor='#1e293b'
          src={TEST}
          placeholder='blur'
        />
      </div>
      <div className='block lg:hidden rounded-lg w-full h-full bg-gray-900 overflow-hidden'>
        {' '}
        <Video src={TEST} style={{ width: '100%' }} accentColor='#1e293b' />
      </div>
    </>
  );
}

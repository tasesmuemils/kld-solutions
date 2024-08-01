import Video from 'next-video';
import TEST from '../../../videos/1280x720_ENG_5mbps.mp4';
import BackgroundVideo from 'next-video/background-video';

export default function VideoWrapper() {
  return (
    <div className='rounded-lg w-full h-full bg-gray-900 overflow-hidden'>
      {/* <Video
        src={TEST}
        style={{ borderRadius: '10px', width: '42rem' }}
        accentColor='#1e293b'
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      /> */}

      <BackgroundVideo
        style={{ width: '100%' }}
        // accentColor='#1e293b'
        src={TEST}
        placeholder='blur'
      />
    </div>
  );
}

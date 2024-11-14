import React from 'react';
import HeroContent from '../sub/HeroContent';

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full'>
      <video 
        autoPlay
        muted
        loop
        className='rotate-100 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover'
        controls={false} // Ensures no controls are shown
      >
        <source src='/images/blackhole.webm' type='video/webm'/>
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;

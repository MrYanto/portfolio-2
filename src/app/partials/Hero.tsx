import React from 'react';
import Wave from '../../../public/Wave Pattern.svg';
import Grid from '../../../public/Grid.svg';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section
      className='flex-center relative z-0 flex h-screen bg-radial-[at_bottom_right] from-[#8243EA]/40 to-60% px-5 pt-10'
      id='home'
    >
      <div className='absolute left-21.5 hidden h-64.5 w-64.5 translate-y-[-66%] self-start bg-radial from-[#6831E1]/40 mask-b-from-0 lg:block' />
      <Image
        src={Grid}
        alt='Grid Pattern'
        className='absolute -z-50 h-full w-full self-auto'
      />

      <div className='flex-center flex-col gap-6'>
        {/* Button div */}
        <div className="flex-center after:bg-gradient-pink-purple hover:bg-gradient-pink-purple lg:text-md relative flex w-fit rounded-full bg-neutral-500 px-6 py-2 text-xs transition duration-300 select-none after:absolute after:z-[-1] after:h-[107%] after:w-[102%] after:rounded-full after:content-['']">
          👨 Yanto’s Portfolio
        </div>

        <h1 className='text-display-xl lg:text-display-3xl max-w-239.25 text-center font-bold'>
          I am a{' '}
          <span className='from-secondary-200 bg-linear-90 to-[#8746eb] bg-clip-text text-transparent'>
            Front-End Developer
          </span>{' '}
          & Web Programming Instructor
        </h1>

        <p className='lg:text-md max-w-239.25 text-center text-sm font-semibold text-neutral-200'>
          Hi, I’m Yanto, a passionate web developer with over{' '}
          <span className='text-neutral-100'>6 months</span> of experience in
          creating responsive websites. I also teach aspiring developers to
          master modern web programming and bring their ideas to life.
        </p>

        <Button className='w-full lg:w-51.5'>View Portfolio</Button>

        <Image
          src={Wave}
          alt='Background Wave Pattern'
          className='absolute bottom-0 w-full translate-y-1/2 self-auto mask-b-from-0'
        />
      </div>
    </section>
  );
};

export default Hero;

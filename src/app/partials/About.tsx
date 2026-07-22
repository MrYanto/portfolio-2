import React from 'react';
import Image from 'next/image';
import VideoPROP from '../../../public/Video.svg';

const About = () => {
  return (
    <>
      {/* Who am I? */}
      <section
        className='custom-container flex flex-col gap-10 lg:gap-20'
        id='about'
      >
        <Image
          src={VideoPROP}
          alt="An Image that's supposed to be a Video"
          className='w-full'
        />
        <div className='flex flex-col gap-3 pb-10 md:flex-row'>
          <h2 className='text-display-sm lg:text-display-2xl font-extrabold'>
            Who am I?
          </h2>
          <p className='lg:text-md max-w-175 text-sm text-neutral-200'>
            Hi, I’m Alex, a Front-End Developer & Web Programming Instructor
            based in Jakarta. With over{' '}
            <span className='font-bold text-neutral-100'>
              6 months of experience
            </span>
            , I specialize in crafting interactive, responsive, and
            user-friendly websites that deliver exceptional digital experiences.
            My expertise spans across various industries, including e-commerce,
            education, and SaaS. I am proficient in modern front-end
            technologies, clean coding practices, and performance
            optimization.{' '}
          </p>
        </div>
      </section>

      {/* Carrer Journey */}
      <section></section>
    </>
  );
};

export default About;

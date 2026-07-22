import React from 'react';
import Image from 'next/image';
import VideoPROP from '../../../public/Video.svg';
import { AboutCard } from '../../components/aboutCard';
import CareerCard from '../../components/careerCard';
import { careerInfo } from '@/types/about';
import { AboutMe } from '@/types/about';

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
        <div className='grid grid-cols-2 justify-items-center gap-5 lg:grid-cols-4'>
          {AboutMe.map((about) => (
            <AboutCard
              key={about.aspect}
              className='flex-center flex flex-col text-center'
              style={{ width: 'clamp(9.25rem, 18.96vw, 17.06rem)' }}
              variant={about.variant}
            >
              <h2 className='text-display-sm lg:text-display-2xl font-extrabold'>
                {about.number}+
              </h2>
              <p className='lg:text-md text-sm'>{about.aspect}</p>
            </AboutCard>
          ))}
        </div>
      </section>

      {/* Carrer Journey */}
      <section className='custom-container flex flex-col gap-8 lg:gap-12'>
        <div className='flex-center flex flex-col gap-3'>
          <h2 className='text-display-sm lg:text-display-2xl font-extrabold'>
            Career Journey
          </h2>
          <p className='lg:text-md max-w-175 text-sm text-neutral-200'>
            A visual timeline of key milestone and experiences from over the
            years
          </p>
        </div>

        <div className='flex flex-col gap-4 lg:gap-6'>
          {careerInfo.map((career, index) => (
            <CareerCard
              title={career.title}
              company={career.company}
              entryTime={career.entryTime}
              myWork={career.myWork}
              key={index}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default About;

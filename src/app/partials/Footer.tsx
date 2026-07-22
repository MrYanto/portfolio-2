'use client';

import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className='custom-container w-fill flex flex-col items-start gap-6 bg-neutral-500 py-10 lg:flex-row lg:justify-between'>
      <div className='flex-center flex gap-4'>
        <Image
          src={'/Logo.svg'}
          alt='Portfolio Logo'
          width={36}
          height={36}
          className='lg:h-10 lg:w-10'
        />
        <p className='lg:text-md text-center text-sm text-neutral-200'>
          &copy; alex2024
        </p>
      </div>

      <div className='flex-center flex gap-4'>
        <div className='flex-center relative flex h-10 w-10 rounded-full border border-neutral-400 lg:h-12 lg:w-12'>
          <Icon
            icon='icon-park-outline:dribble'
            className='absolute h-[24.03px] w-[24.03px] lg:h-[28.83px] lg:w-[28.83px]'
          />
        </div>
        <div className='flex-center relative flex h-10 w-10 rounded-full border border-neutral-400 lg:h-12 lg:w-12'>
          <Icon
            icon='mdi:instagram'
            className='absolute h-[24.03px] w-[24.03px] lg:h-[28.83px] lg:w-[28.83px]'
          />
        </div>
        <div className='flex-center relative flex h-10 w-10 rounded-full border border-neutral-400 lg:h-12 lg:w-12'>
          <Icon
            icon='line-md:linkedin'
            className='absolute h-[24.03px] w-[24.03px] lg:h-[28.83px] lg:w-[28.83px]'
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

'use client';

import React from 'react';
import Image from 'next/image';
import { Navigation } from '../types/navbar';
import { Button } from './ui/button';
import { Icon } from '@iconify/react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const Navbar: React.FC = () => {
  return (
    <div className='custom-container flex-between flex h-16 py-0 lg:h-21'>
      <Image
        src={'/Logo.svg'}
        alt='Portfolio Logo'
        width={28}
        height={28}
        className='lg:h-10 lg:w-10'
      />

      <nav className='hidden lg:block'>
        <ul className='flex gap-6'>
          {Navigation.map((nav, index) => (
            <li key={index}>
              <a href={nav.Links} className='text-md'>
                {nav.Navigate}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className='flex-center flex gap-4'>
        <Button className='h-10 w-10 lg:h-auto lg:w-45'>
          <Icon icon='hugeicons:mail-02' width='20' height='20' />
          <p className='hidden lg:block'>Hire Me</p>
        </Button>

        {/* Mobile Navigation */}
        <div className='block lg:hidden'>
          <Sheet>
            <SheetTrigger>
              <Icon
                icon='material-symbols:menu-rounded'
                width='24'
                height='24'
              />
            </SheetTrigger>
            <SheetContent>
              <nav>
                <ul className='flex flex-col gap-6'>
                  {Navigation.map((nav, index) => (
                    <li key={index}>
                      <a href={nav.Links} className='text-md'>
                        {nav.Navigate}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <Button className='h-10 w-full'>
                <Icon icon='hugeicons:mail-02' width='20' height='20' />
                Hire Me
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

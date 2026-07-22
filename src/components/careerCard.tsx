'use client';

import React from 'react';
import type { career } from '../types/about';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';

const CareerCard: React.FC<career> = ({
  title,
  company,
  entryTime,
  myWork,
}) => {
  return (
    <div className='flex flex-col gap-5 rounded-4xl bg-neutral-500 p-3 lg:p-6'>
      <h3 className='text-md lg:text-display-xs font-bold'>{title}</h3>

      <div className='flex flex-col items-center gap-3 lg:flex-row'>
        <div className='flex-center gap-[6px]'>
          <Icon icon='tabler:building' width={24} height={24} />
          <p className='text-md lg:text-sm'>{company}</p>{' '}
        </div>
        <span className='hidden h-1 w-1 rounded-full bg-neutral-100 lg:block' />
        <div className='flex-center align gap-[6px]'>
          <Icon icon='uiw:date' width={20} height={20} />{' '}
          <p className='lg:text-md text-sm'>{entryTime}</p>
        </div>
      </div>

      <ul className='list-inside list-disc marker:bg-neutral-200'>
        {myWork.map((work, index) => (
          <li
            key={index}
            className={cn(
              'lg:text-md text-sm text-neutral-200',
              index === myWork.length - 1 ? '' : 'mb-3 lg:mb-5'
            )}
          >
            {work}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CareerCard;

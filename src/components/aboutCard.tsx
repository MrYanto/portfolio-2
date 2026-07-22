import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import type { AboutMe } from '@/types/about';

const cardVariants = cva(
  'flex flex-center gap-[6px] gap-2 rounded-full relative',
  {
    variants: {
      variant: {
        default: 'bg-gradient-pink-purple hover:bg-neutral-500',
        black:
          'bg-neutral-500 after:w-[102%] after:h-[102%] after:absolute after:bg-gradient-pink-purple after:rounded-full after:z-[-1] hover:bg-gradient-pink-purple',
      },
      size: {
        default: 'p-2 lg:p-5 aspect-square',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface AboutCardProps
  extends React.ComponentProps<'div'>, VariantProps<typeof cardVariants> {}

export function AboutCard({
  className,
  variant,
  size,
  ...props
}: AboutCardProps) {
  return (
    <div
      data-slot='card'
      className={cn(cardVariants({ variant, size, className }))}
      {...props}
    />
  );
}

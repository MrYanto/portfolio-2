import clsx from 'clsx';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'MrYanto Portfolio',
  description: 'A Portfolio Remake as a FrontEnd Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body
        className={clsx(
          poppins.variable,
          'bg-neutral-500 text-neutral-100 antialiased'
        )}
      >
        {children}
      </body>
    </html>
  );
}

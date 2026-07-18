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
  title: 'Portfolio 2026',
  description: 'Integrated Framework Portfolio Theme System',
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
          'bg-base-background text-neutral-100 antialiased'
        )}
      >
        {children}
      </body>
    </html>
  );
}

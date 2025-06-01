import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import '@/styles/globals.css';

import ReactQueryProvider from '@/components/ReactQueryProvider';

export const metadata: Metadata = {
  title: 'WishPooL',
  description: '선물 준비의 모든 과정을 한 곳에, WishPooL',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}

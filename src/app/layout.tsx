import type { Metadata } from 'next';

import '@/styles/globals.css';
import ReactQueryProvider from '@/components/ReactQueryProvider';
import { suite } from '@/styles/font';

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
      <body className={suite.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';

import '@/styles/globals.css';
import Header from '@/components/layout/Header/Header';
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
    <html lang="ko">
      <body className={`${suite.className} bg-gray-100`}>
        <div className="mx-auto min-h-screen w-full max-w-[430px] bg-white shadow-md">
          <ReactQueryProvider>
            <Header />
            <main className="mt-[5.4rem]">{children}</main>
          </ReactQueryProvider>
        </div>
      </body>
    </html>
  );
}

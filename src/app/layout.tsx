import type { Metadata } from 'next';

import '@/styles/globals.css';
import KakaoInitializer from '@/components/common/Button/KakaoButton/KakaoInitializer';
import ScrollToTop from '@/components/common/ScrollToTop';
import ReactQueryProvider from '@/components/ReactQueryProvider';
import { suite } from '@/styles/font';

export const metadata: Metadata = {
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png', sizes: '32x32' }],
  },
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
          <ScrollToTop />
          <ReactQueryProvider>{children}</ReactQueryProvider>
          <KakaoInitializer />
        </div>
      </body>
    </html>
  );
}

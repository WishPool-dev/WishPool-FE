import type { Metadata } from 'next';

import '@/styles/globals.css';
import Script from 'next/script';

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
      <head>
        <Script
          id="ms-clarity"
          type="text/javascript"
          strategy="afterInteractive"
        >
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vbwq3wj5tb");
          `}
        </Script>
      </head>
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

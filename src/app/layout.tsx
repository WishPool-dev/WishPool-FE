import type { Metadata } from 'next';
import Script from 'next/script';

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
      })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
    `}
        </Script>
        <Script
          id="maze-snippet"
          type="text/javascript"
          strategy="afterInteractive"
        >
          {`
      (function (m, a, z, e) {
        var s, t, u, v;
        try {
          t = m.sessionStorage.getItem('maze-us');
        } catch (err) {}

        if (!t) {
          t = new Date().getTime();
          try {
            m.sessionStorage.setItem('maze-us', t);
          } catch (err) {}
        }

        u = document.currentScript || (function () {
          var w = document.getElementsByTagName('script');
          return w[w.length - 1];
        })();
        v = u && u.nonce;

        s = a.createElement('script');
        s.src = z + '?apiKey=' + e;
        s.async = true;
        if (v) s.setAttribute('nonce', v);
        a.getElementsByTagName('head')[0].appendChild(s);
        m.mazeUniversalSnippetApiKey = e;
      })(window, document, 'https://snippet.maze.co/maze-universal-loader.js', '${process.env.NEXT_PUBLIC_MAZE_API_KEY}');
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

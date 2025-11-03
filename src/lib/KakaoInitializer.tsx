'use client';

import Script from 'next/script';

declare global {
  interface Window {
    Kakao: {
      init: (key: string) => void;
      isInitialized: () => boolean;
      Share: {
        sendScrap: (options: {
          requestUrl: string;
          // templateId: number;
          //templateArgs: Record<string, string>;
        }) => void;
      };
    };
  }
}

export default function KakaoInitializer() {
  return (
    <Script
      src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.7/kakao.min.js"
      integrity="sha384-tJkjbtDbvoxO+diRuDtwRO9JXR7pjWnfjfRn5ePUpl7e7RJCxKCwwnfqUAdXh53p"
      crossOrigin="anonymous"
      strategy="afterInteractive"
      onLoad={() => {
        window.Kakao.init(process.env.NEXT_PUBLIC_JAVASCRIPT_KEY as string);
      }}
    />
  );
}

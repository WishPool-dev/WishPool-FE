import localFont from 'next/font/local';

export const suite = localFont({
  src: [
    {
      path: '../../public/fonts/suite/SUITE-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/suite/SUITE-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/suite/SUITE-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/suite/SUITE-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/suite/SUITE-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/suite/SUITE-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/suite/SUITE-Heavy.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-suite',
  display: 'swap',
});

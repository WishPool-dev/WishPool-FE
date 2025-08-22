'use client';

import BackHeader from '@/components/layout/Header/BackHeader';

const IntroLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackHeader title="위시풀 만들기" bgColor="background02" />
      <main className="bg-background-02 pt-[8.4rem] pb-[10rem]">
        {children}
      </main>
    </>
  );
};

export default IntroLayout;

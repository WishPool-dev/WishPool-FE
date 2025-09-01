'use client';

import BackHeader from '@/components/layout/Header/BackHeader';

const IntroLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackHeader title="위시풀 만들기" bgColor="background02" />
      <main className="bg-background-02 pt-[5.4rem] pb-[30rem]">
        {children}
      </main>
    </>
  );
};

export default IntroLayout;

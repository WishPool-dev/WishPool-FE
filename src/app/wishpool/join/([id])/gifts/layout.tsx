'use client';

import HomeHeader from '@/components/layout/Header/HomeHeader';

const PreviewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeHeader bgColor="white" />
      <main className="mx-[2rem] pt-[5.4rem] pb-[8rem]">{children}</main>
    </>
  );
};

export default PreviewLayout;

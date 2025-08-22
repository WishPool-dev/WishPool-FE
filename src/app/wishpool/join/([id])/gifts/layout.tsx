'use client';

import HomeHeader from '@/components/layout/Header/HomeHeader';

const PreviewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeHeader />
      <main className="mx-[2rem] pt-[5.4rem]">{children}</main>
    </>
  );
};

export default PreviewLayout;

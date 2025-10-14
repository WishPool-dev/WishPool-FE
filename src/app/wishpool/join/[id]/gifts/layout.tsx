'use client';

import BackHeader from '@/components/layout/Header/BackHeader';

const PreviewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackHeader title="선물 리스트" bgColor="white" />
      <main className="mt-header p-[2rem] pb-[8rem]">{children}</main>
    </>
  );
};

export default PreviewLayout;

'use client';

import TextHeader from '@/components/layout/Header/TextHeader';

const PreviewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TextHeader title="위시풀 만들기" bgColor="white" />
      <main className="mx-[2rem] pt-[5.4rem] pb-[10rem]">{children}</main>
    </>
  );
};

export default PreviewLayout;

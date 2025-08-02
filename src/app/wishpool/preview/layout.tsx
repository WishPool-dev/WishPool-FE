'use client';

import TextHeader from '@/components/layout/Header/TextHeader';

const PreviewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TextHeader title="위시풀 만들기" />
      <main className="mx-[2rem] pt-[5.4rem]">{children}</main>
    </>
  );
};

export default PreviewLayout;

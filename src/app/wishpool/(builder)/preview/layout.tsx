'use client';

import TextHeader from '@/components/layout/Header/TextHeader';

const PreviewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TextHeader title="위시풀 만들기" bgColor="white" />
      <main className="mt-header p-[2rem]">{children}</main>
    </>
  );
};

export default PreviewLayout;

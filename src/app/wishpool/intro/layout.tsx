'use client';

import BackHeader from '@/components/layout/Header/BackHeader';

const CreateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackHeader title="위시풀 만들기" />
      <main className="bg-background-02 h-[100vh] pt-[5.4rem]">{children}</main>
    </>
  );
};

export default CreateLayout;

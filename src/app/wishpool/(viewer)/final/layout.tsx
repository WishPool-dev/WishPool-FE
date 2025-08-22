'use client';
import { useRouter } from 'next/navigation';

import BackHeader from '@/components/layout/Header/BackHeader';
import { PATH } from '@/constants/common/path';

const FinalLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <>
      <BackHeader
        title="선택 선물 확인하기"
        bgColor="white"
        onBack={() => {
          router.push(PATH.WISHPOOL_DETAIL(1));
        }}
      />
      <main className="from-Background-02 to-blue-5 min-h-[100vh] bg-gradient-to-b px-[2rem] pt-[5.4rem]">
        {children}
      </main>
    </>
  );
};

export default FinalLayout;

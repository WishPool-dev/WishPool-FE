'use client';
import { useRouter } from 'next/navigation';

import BackHeader from '@/components/layout/Header/BackHeader';
import { PATH } from '@/constants/common/path';
import { useGetWishpoolId } from '@/hooks/common/useGetWishpoolId';

const FinalLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const wishpoolId = useGetWishpoolId();

  return (
    <>
      <BackHeader
        title="선택 선물 확인하기"
        bgColor="background02"
        onBack={() => {
          router.push(PATH.WISHPOOL_DETAIL(wishpoolId));
        }}
      />
      <main className="from-background-02 to-blue-5 mt-header min-h-[100vh] bg-gradient-to-b p-[2rem]">
        {children}
      </main>
    </>
  );
};

export default FinalLayout;

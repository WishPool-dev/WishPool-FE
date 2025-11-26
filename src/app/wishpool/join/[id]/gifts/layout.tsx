'use client';

import { useRouter } from 'next/navigation';

import BackHeader from '@/components/layout/Header/BackHeader';
import { PATH } from '@/constants/common/path';
import { useGetWishpoolId } from '@/hooks/common/useGetWishpoolId';

const PreviewLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const wishpoolId = useGetWishpoolId();
  return (
    <>
      <BackHeader
        title="선물 리스트"
        bgColor="white"
        onBack={() => router.push(PATH.JOIN_INFO(wishpoolId))}
      />
      <main className="mt-header p-[2rem] pb-[8rem]">{children}</main>
    </>
  );
};

export default PreviewLayout;

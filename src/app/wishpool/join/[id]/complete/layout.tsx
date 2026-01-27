'use client';

import { useRouter } from 'next/navigation';

import RightIconHeader from '@/components/layout/Header/RightIconHeader';
import { PATH } from '@/constants/common/path';
import { useGetWishpoolId } from '@/hooks/common/useGetWishpoolId';
import { useHasToken } from '@/hooks/wishpool/useHasToken';

const CompleteLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const wishpoolId = useGetWishpoolId();

  const hasToken = useHasToken();

  const handleClose = () => {
    if (!hasToken) router.push(PATH.INTRO);
    else router.push(PATH.WISHPOOL_DETAIL(wishpoolId));
  };
  return (
    <>
      <RightIconHeader
        iconName="cancel"
        title="선물 제안하기"
        onClick={handleClose}
        bgColor="white"
      />
      <main className="mt-header px-[2rem] pb-[2rem]">{children}</main>
    </>
  );
};

export default CompleteLayout;

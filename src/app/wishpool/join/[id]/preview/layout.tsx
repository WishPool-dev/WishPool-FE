'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import RightIconHeader from '@/components/layout/Header/RightIconHeader';
import { PATH } from '@/constants/common/path';
import { useGetWishpoolId } from '@/hooks/common/useGetWishpoolId';

const PreviewLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const wishpoolId = useGetWishpoolId();

  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) setHasToken(true);
  }, []);

  const handleClose = () => {
    if (hasToken) router.push(PATH.JOIN_INTRO(wishpoolId));
    router.push(PATH.WISHPOOL_DETAIL(wishpoolId));
  };

  return (
    <>
      <RightIconHeader
        iconName="cancel"
        title="선물 제안하기"
        onClick={handleClose}
        bgColor="white"
      />

      <main className="mt-header p-[2rem] pb-[15rem]">{children}</main>
    </>
  );
};

export default PreviewLayout;

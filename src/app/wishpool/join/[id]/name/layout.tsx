'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import RightIconHeader from '@/components/layout/Header/RightIconHeader';
import { PATH } from '@/constants/common/path';
import { useGetWishpoolId } from '@/hooks/common/useGetWishpoolId';

const NameLayout = ({ children }: { children: React.ReactNode }) => {
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
      <div className="mt-header">
        <div className="relative h-[0.3rem] w-full bg-gray-300">
          <div className="bg-blue-2 absolute top-0 left-0 h-[0.3rem] w-1/2" />
        </div>
      </div>

      <main className="p-[2rem]">{children}</main>
    </>
  );
};

export default NameLayout;

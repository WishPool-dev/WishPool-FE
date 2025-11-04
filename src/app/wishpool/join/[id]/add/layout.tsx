'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import RightIconHeader from '@/components/layout/Header/RightIconHeader';
import { PATH } from '@/constants/common/path';
import { useGetWishpoolId } from '@/hooks/common/useGetWishpoolId';

const AddLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const wishpoolId = useGetWishpoolId();
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) setHasToken(true);
  }, []);

  const handleClose = () => {
    if (!hasToken) router.push(PATH.JOIN_INFO(wishpoolId));
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
      <div className="mt-header">
        <div className="bg-blue-2 h-[0.3rem] w-full" />
      </div>

      <main className="p-[2rem] pb-[10rem]">{children}</main>
    </>
  );
};

export default AddLayout;

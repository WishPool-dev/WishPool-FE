'use client';

import { useRouter } from 'next/navigation';

import RightIconHeader from '@/components/layout/Header/RightIconHeader';
import { PATH } from '@/constants/common/path';

const CompleteLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const handleClose = () => {
    router.push(PATH.WISHPOOL_DETAIL(1));
  };

  return (
    <>
      <RightIconHeader
        iconName="cancel"
        title="선물 제안하기"
        onClick={handleClose}
        bgColor="white"
      />
      <main className="mt-header p-[2rem]">{children}</main>
    </>
  );
};

export default CompleteLayout;

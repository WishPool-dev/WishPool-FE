'use client';

import { useRouter } from 'next/navigation';

import RightIconHeader from '@/components/layout/Header/RightIconHeader';
import { PATH } from '@/constants/common/path';

const ShareLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const handleClose = () => {
    router.push(PATH.WISHPOOL_DETAIL(1));
  };

  return (
    <>
      <RightIconHeader
        iconName="cancel"
        title="생일자에게 보내기"
        onClick={handleClose}
        bgColor="background01"
      />
      <main className="mt-header p-[2rem]">{children}</main>
    </>
  );
};

export default ShareLayout;

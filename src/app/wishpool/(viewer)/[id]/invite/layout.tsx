'use client';

import { useRouter } from 'next/navigation';

import RightIconHeader from '@/components/layout/Header/RightIconHeader';

const ShareLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <>
      <RightIconHeader
        iconName="cancel"
        title="생일자에게 보내기"
        onClick={handleClose}
        bgColor="white"
      />
      <main className="mt-header p-[2rem]">{children}</main>
    </>
  );
};

export default ShareLayout;

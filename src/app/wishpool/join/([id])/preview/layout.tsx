'use client';

import { useRouter } from 'next/navigation';

import RightIconHeader from '@/components/layout/Header/RightIconHeader';
import { PATH } from '@/constants/common/path';

const PreviewLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const handleClose = () => {
    router.push(PATH.WISHPOOL_DETAIL(1));
  };

  return (
    <>
      <RightIconHeader
        iconName="cancel"
        title="홍길동에게 보내는 위시풀"
        onClick={handleClose}
        bgColor="white"
      />

      <main className="mx-[2rem] pt-[5.4rem] pb-[15rem]">{children}</main>
    </>
  );
};

export default PreviewLayout;

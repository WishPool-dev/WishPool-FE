'use client';

import { useRouter } from 'next/navigation';

import RightIconHeader from '@/components/layout/Header/RightIconHeader';
import { PATH } from '@/constants/common/path';

const NameLayout = ({ children }: { children: React.ReactNode }) => {
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
      <div className="pt-[5.4rem]">
        <div className="relative h-[0.3rem] w-full bg-gray-300">
          <div className="bg-blue-2 absolute top-0 left-0 h-[0.3rem] w-1/2" />
        </div>
      </div>

      <main className="mx-[2rem]">{children}</main>
    </>
  );
};

export default NameLayout;

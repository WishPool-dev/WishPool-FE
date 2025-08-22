'use client';

import { useRouter } from 'next/navigation';

import RightIconHeader from '@/components/layout/Header/RightIconHeader';
import { PATH } from '@/constants/common/path';

const AddLayout = ({ children }: { children: React.ReactNode }) => {
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
        <div className="bg-blue-2 h-[0.3rem] w-full" />
      </div>

      <main className="mx-[2rem]">{children}</main>
    </>
  );
};

export default AddLayout;

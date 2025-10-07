'use client';

import { useRouter } from 'next/navigation';

import RightIconHeader from '@/components/layout/Header/RightIconHeader';
import { PATH } from '@/constants/common/path';

const ListLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <>
      <RightIconHeader
        title="선물 고르기"
        iconName="cancel"
        bgColor="white"
        onClick={() => {
          router.push(PATH.PICK_SELECT);
        }}
      />
      <main className="bg-background-03 mt-header h-[100vh] px-[2rem] pb-[2rem]">
        {children}
      </main>
    </>
  );
};

export default ListLayout;

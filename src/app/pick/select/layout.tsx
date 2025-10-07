'use client';

import { useRouter } from 'next/navigation';

import RightIconHeader from '@/components/layout/Header/RightIconHeader';
import SwipeGuide from '@/components/pick/select/SwipeGuide';
import { PATH } from '@/constants/common/path';

const SelectLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <>
      <RightIconHeader
        title="선물 고르기"
        iconName="grid"
        bgColor="white"
        onClick={() => {
          router.push(PATH.PICK_LIST);
        }}
      />
      <main className="bg-blue-6">{children}</main>
      <SwipeGuide />
    </>
  );
};

export default SelectLayout;

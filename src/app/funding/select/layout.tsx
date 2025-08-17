'use client';

import { useRouter } from 'next/navigation';

import SwipeGuide from '@/components/funding/select/SwipeGuide';
import RightIconHeader from '@/components/layout/Header/RightIconHeader';
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
          router.push(PATH.FUNDING_LIST);
        }}
      />
      <main>{children}</main>
      <SwipeGuide storageKey="swipe-guide-seen" />
    </>
  );
};

export default SelectLayout;

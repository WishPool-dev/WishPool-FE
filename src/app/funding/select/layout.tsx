'use client';

import { usePathname } from 'next/navigation';

import RightIconHeader from '@/components/layout/Header/RightIconHeader';
import { isSegment } from '@/utils/commons/getPathName';

const SelectLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const isList = isSegment(pathname, 'list');

  return (
    <>
      {isList ? (
        <RightIconHeader title="선물 고르기" iconName="grid" bgColor="white" />
      ) : (
        <RightIconHeader
          title="선물 고르기"
          iconName="cancel"
          bgColor="white"
        />
      )}

      <main>{children}</main>
    </>
  );
};

export default SelectLayout;

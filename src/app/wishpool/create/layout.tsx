'use client';

import { useRouter } from 'next/navigation';

import RightIconHeader from '@/components/layout/Header/RightIconHeader';
import { PATH } from '@/constants/path';

const CreateLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const handleClose = () => {
    router.push(PATH.HOME);
  };

  return (
    <>
      <RightIconHeader
        iconName="cancel"
        title="위시풀 만들기"
        onClick={handleClose}
      />

      <main className="pt-[5.4rem]">{children}</main>
    </>
  );
};

export default CreateLayout;

'use client';

import { useRouter } from 'next/navigation';

import GiftPage from '@/app/wishpool/(viewer)/[id]/gifts/page';
import Button from '@/components/common/Button';
import { PATH } from '@/constants/common/path';

const JoinGiftPage = () => {
  const router = useRouter();
  return (
    <>
      <GiftPage />
      <div className="fixed inset-x-0 bottom-0">
        <div className="mx-auto w-full max-w-[430px] p-[2rem]">
          <Button
            onClick={() => {
              router.push(PATH.JOIN_NAME);
            }}
          >
            다음
          </Button>
        </div>
      </div>
    </>
  );
};

export default JoinGiftPage;

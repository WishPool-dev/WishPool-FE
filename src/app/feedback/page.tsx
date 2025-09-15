'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Button from '@/components/common/Button';
import TextField from '@/components/common/Form/TextField';
import Rating from '@/components/common/Rating';
import Toast from '@/components/common/Toast';
import { PATH } from '@/constants/common/path';

const FeedbackPage = () => {
  const [openToast, setOpenToast] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    setOpenToast(true);
    router.push(PATH.HOME);
  };

  return (
    <>
      <section className="flex flex-col gap-[6.4rem]">
        {openToast && <Toast>평가를 보냈어요. 소중한 의견에 감사드려요!</Toast>}
        <div>
          <p className="text-text subtitle2 mb-[1.6rem]">
            WishpooL 서비스를 평가해 주세요.
          </p>
          <Rating rate={2} />
        </div>

        <div>
          <TextField
            label="어떤 점이 좋았나요? 또는 아쉬운 점이 있었나요?"
            placeholder="여러분의 의견을 남겨 주세요."
            maxLength={500}
          />
        </div>
        <div className="fixed inset-x-0 bottom-0">
          <div className="mx-auto w-full max-w-[430px] p-[2rem]">
            <Button type="submit" onClick={handleSubmit}>
              보내기
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeedbackPage;

'use client';

import { useRouter } from 'next/navigation';

import Button from '@/components/common/Button';
import { PATH } from '@/constants/common/path';

const FeedbackBox = () => {
  const router = useRouter();

  return (
    <div className="bg-blue-5 relative rounded-[20px] px-[2rem] pt-[4.2rem] pb-[1.6rem]">
      <img
        src="/images/gift-circle.svg"
        alt="선물 이미지"
        className="absolute top-0 left-[2/8rem] h-[6rem] w-[6rem] -translate-y-1/2"
      />
      <div className="text-text mb-[2.8rem] px-[0.8rem]">
        <h3 className="title2 mb-[0.4rem]">WishpooL은 어땠나요?</h3>
        <p className="body2">
          WishpooL을 더 좋은 서비스로 만들기 위해
          <br />
          유저님의 소중한 의견을 받고 있어요.
        </p>
      </div>
      <div className="flex flex-col gap-[0.4rem]">
        <Button textSize="md">피드백 남기러 가기</Button>
        <Button
          backgroundColor="transparent"
          textSize="md"
          onClick={() => router.push(PATH.FEEDBACK)}
        >
          <span className="text-gray-800 underline">다음에 할게요</span>
        </Button>
      </div>
    </div>
  );
};

export default FeedbackBox;

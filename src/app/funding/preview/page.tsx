'use client';

import { useRouter } from 'next/navigation';

import { data } from '@/app/funding/preview/data';
import Button from '@/components/common/Button';
import GiftCard from '@/components/funding/list/GiftCard';
import { PATH } from '@/constants/common/path';

const PreviewPage = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleSubmit = () => {
    router.push(PATH.FUNDING_COMPLETE);
  };
  return (
    <div className="pt-[2.8rem]">
      <h1 className="text-blue-primary caption1">최종 점검</h1>
      <h2 className="head1 text-text">홍길동님이 최종 선택한 선물</h2>
      <section className="my-[2.8rem] space-y-[1.2rem]">
        {data.map(({ giftId, giftName, giftImage }) => (
          <GiftCard
            key={giftId}
            size="big"
            giftId={giftId}
            giftName={giftName}
            giftImage={giftImage}
          />
        ))}
      </section>
      <div className="fixed right-0 bottom-0 left-0 mx-auto max-w-[430px] border-t border-gray-300 bg-white px-[2rem] pb-[2rem]">
        <p className="caption1 my-[1.6rem] text-center text-gray-600">
          이 선물로 결정할까요?
        </p>
        <div className="flex justify-between gap-[1.3rem]">
          <Button
            textColor="black"
            backgroundColor="light"
            textSize="sm"
            onClick={handleBack}
          >
            다시 고르기
          </Button>
          <Button textSize="sm" onClick={handleSubmit}>
            완료하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;

'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { data } from '@/app/funding/select/data';
import Button from '@/components/common/Button';
import CarouselCard from '@/components/funding/select/CarouselCard';
import GiftLoading from '@/components/funding/select/GiftLoading';
import { PATH } from '@/constants/common/path';
import { useCarouselCard } from '@/hooks/funding/useCarouselCard';
import { GiftCardType } from '@/types/common/giftCardType';

const SelectPage = () => {
  const router = useRouter();

  const { ref, active } = useCarouselCard<HTMLDivElement>();
  const [items, setItems] = useState<GiftCardType[]>(
    data.map((d, i) => ({ ...d, id: i })),
  );

  const [loading, setLoading] = useState(false);

  const handleRemove = (id: number) => {
    setItems((prev) => prev.filter((item) => item.giftId !== id));
  };

  const handleComplete = () => {
    if (items.length > 2) {
      setLoading(true);
      setTimeout(() => {
        router.push(PATH.FUNDING_PREVIEW);
      }, 1500);
    } else {
      router.push(PATH.FUNDING_PREVIEW);
    }
  };

  if (loading) return <GiftLoading items={items} />;

  return (
    <div className="flex h-[100vh] flex-col">
      <section
        ref={ref}
        className="no-scrollbar bg-blue-5 z-card relative flex snap-x snap-mandatory gap-[2.4rem] overflow-x-auto overflow-y-visible px-[2rem] pt-[7.8rem] pb-[7.2rem]"
      >
        <div aria-hidden className="w-[calc(50vw-9rem)] shrink-0 snap-none" />
        {items.map(({ giftId, giftName, giftImage }, i) => (
          <CarouselCard
            key={giftId}
            giftId={giftId}
            index={i}
            activeIndex={active}
            giftName={giftName}
            giftImage={giftImage}
            onRemove={handleRemove}
          />
        ))}
        <div aria-hidden className="w-[calc(50vw-9rem)] shrink-0 snap-none" />
      </section>

      <section className="bg-background-02 relative grow">
        <div className="flex flex-col items-center py-[7.2rem]">
          <img
            src="/images/hole.svg"
            alt="구멍 이미지"
            className="mb-[4rem] h-[5.2rem] w-[20.3rem]"
          />
          <p className="text-text caption1 text-center">
            마음에 드는 선물을{' '}
            <span className="text-blue-primary">최대 3개까지</span> 남겨주세요.
            <br />
            아래로 드래그하면 리스트에서 제외돼요.
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 m-[2rem] flex flex-col gap-[0.8rem]">
          <Button
            backgroundColor="transparent"
            textColor="gray"
            textSize="md"
            onClick={() => window.location.reload()}
          >
            <span className="underline">처음부터 다시 고르기</span>
          </Button>
          <Button onClick={handleComplete}>완료하기</Button>
        </div>
      </section>
    </div>
  );
};

export default SelectPage;

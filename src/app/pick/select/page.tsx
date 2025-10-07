'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { data } from '@/app/pick/select/data';
import Button from '@/components/common/Button';
import CarouselCard from '@/components/pick/select/CarouselCard';
import GiftLoading from '@/components/pick/select/GiftLoading';
import { PATH } from '@/constants/common/path';
import { useCarouselCard } from '@/hooks/pick/useCarouselCard';
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
        router.push(PATH.PICK_PREVIEW);
      }, 1500);
    } else {
      router.push(PATH.PICK_PREVIEW);
    }
  };

  if (loading) return <GiftLoading items={items} />;

  return (
    <div className="flex h-[100vh] flex-col">
      <section
        ref={ref}
        className="no-scrollbar bg-blue-5 relative z-[100] flex snap-x snap-mandatory gap-[2.4rem] overflow-x-auto overflow-y-hidden px-[2rem] pt-[2rem] pb-[5rem]"
      >
        <div aria-hidden className="w-[calc(50vw-9rem)] shrink-0 snap-none" />
        {items.map(({ giftId, itemName, itemUrl }, i) => (
          <CarouselCard
            key={giftId}
            giftId={giftId}
            index={i}
            activeIndex={active}
            itemName={itemName}
            itemUrl={itemUrl}
            onRemove={handleRemove}
          />
        ))}
        <div aria-hidden className="w-[calc(50vw-9rem)] shrink-0 snap-none" />
      </section>

      <section className="bg-background-02 relative grow">
        <div className="flex flex-col items-center py-[5rem]">
          <Image
            src="/images/hole.svg"
            width={203}
            height={52}
            alt="구멍 이미지"
            className="mb-[4rem]"
          />
          <p className="text-text caption1 text-center">
            마음에 드는 선물을{' '}
            <span className="text-blue-primary">최대 3개까지</span> 남겨주세요.
            <br />
            아래로 드래그하면 리스트에서 제외돼요.
          </p>
          <div className="flex w-full flex-col gap-[0.8rem] p-[2rem]">
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
        </div>
      </section>
    </div>
  );
};

export default SelectPage;

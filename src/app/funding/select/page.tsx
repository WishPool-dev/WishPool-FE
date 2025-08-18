'use client';

import { useRef, useState } from 'react';

import { data as initialData } from '@/app/funding/select/data';
import Button from '@/components/common/Button';
import CarouselCard from '@/components/funding/select/CarouselCard';
import { useCarouselCard } from '@/hooks/funding/useCarouselCard';

type Item = { id: number; giftName: string; giftImage: string };

const SelectPage = () => {
  const { ref, active } = useCarouselCard<HTMLDivElement>();
  const [items, setItems] = useState<Item[]>(
    initialData.map((d, i) => ({ ...d, id: i })),
  );

  const holeRef = useRef<HTMLDivElement | null>(null);

  const handleRemove = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="flex h-[100vh] flex-col">
      <section
        ref={ref}
        className="no-scrollbar bg-blue-5 relative flex snap-x snap-mandatory gap-[2.4rem] overflow-x-auto overflow-y-visible px-[2rem] pt-[7.8rem] pb-[7.2rem]"
      >
        {items.map(({ id, giftName, giftImage }, i) => (
          <CarouselCard
            key={id}
            id={id}
            index={i}
            activeIndex={active}
            giftName={giftName}
            giftImage={giftImage}
            holeRef={holeRef}
            onRemove={handleRemove}
          />
        ))}
      </section>

      {/* 아래: 안내 + 구멍 */}
      <section className="bg-background-02 relative z-10 grow">
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

        <div
          ref={holeRef}
          aria-label="삭제 구역"
          className="pointer-events-none absolute top-[5rem] left-1/2 h-[9rem] w-[20rem] -translate-x-1/2"
        />

        <button className="title2 absolute inset-x-0 bottom-[8.4rem] text-gray-600 underline">
          처음부터 다시 고르기
        </button>
        <div className="absolute inset-x-0 bottom-0 m-[2rem]">
          <Button>완료하기</Button>
        </div>
      </section>
    </div>
  );
};

export default SelectPage;

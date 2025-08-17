'use client';

import { data } from '@/app/funding/select/data';
import Button from '@/components/common/Button';
import CarouselCard from '@/components/funding/select/CarouselCard';
import { useCarouselCard } from '@/hooks/funding/useCarouselCard';

const SelectPage = () => {
  const { ref, active } = useCarouselCard();

  return (
    <div className="flex h-[100vh] flex-col">
      <section
        ref={ref}
        className="no-scrollbar bg-blue-5 flex snap-x snap-mandatory gap-[2.4rem] overflow-x-auto overflow-y-hidden px-[2rem] pt-[7.8rem] pb-[7.2rem]"
      >
        {data.map(({ giftName, giftImage }, i) => (
          <CarouselCard
            key={i}
            index={i}
            activeIndex={active}
            giftName={giftName}
            giftImage={giftImage}
          />
        ))}
      </section>

      <section className="bg-background-02 relative grow-1">
        <div className="flex flex-col items-center py-[7.2rem]">
          <img
            src="/images/hole.svg"
            alt="구멍 이미지"
            className="mb-[4rem] h-[5.2rem] w-[20.3rem]"
          />
          <p className="text-text caption1 text-center">
            마음에 드는 선물을
            <span className="text-blue-primary">
              최대 3개까지
            </span> 남겨주세요. <br />
            아래로 드래그하면 리스트에서 제외돼요.
          </p>
        </div>
        <button className="title2 mx-auto block py-[1.6rem] text-gray-600 underline">
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

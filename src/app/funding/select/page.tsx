'use client';

import Button from '@/components/common/Button';
import { useGiftScroll } from '@/hooks/funding/useGiftScroll';

const SelectPage = () => {
  const { ref, active } = useGiftScroll();

  return (
    <div className="flex h-[100vh] flex-col">
      <section
        ref={ref}
        className="bg-blue-5 flex snap-x snap-mandatory gap-[2.4rem] overflow-x-auto overflow-y-hidden px-[2rem] pt-[7.8rem] pb-[7.2rem]"
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            data-card
            className={[
              'flex h-[29rem] w-[18rem] shrink-0 snap-center flex-col items-center',
              'gap-[2.4rem] rounded-[16px] border-[4px] pt-[4rem]',
              'transition-all duration-300 ease-out will-change-transform',
              i === active
                ? 'from-blue-3 to-blue-2 translate-y-[2.4rem] border-white bg-gradient-to-b shadow-lg'
                : 'translate-y-0 border-transparent bg-white',
            ].join(' ')}
          >
            <img
              src="/images/gift-card.svg"
              alt="선물 카드 이미지"
              className="block h-[13.3rem] w-[13.3rem] rounded-[12px] object-contain transition-all duration-300"
            />
            <span
              className={
                i === active
                  ? 'subtitle2 text-white'
                  : 'subtitle2 text-gray-600'
              }
            >
              선물 이름
            </span>
          </div>
        ))}
      </section>

      <section className="bg-background-02 relative h-[41.4rem]">
        <div className="flex flex-col items-center py-[7.2rem]">
          <img
            src="/images/hole.svg"
            alt="구멍 이미지"
            className="mb-[4rem] h-[5.2rem] w-[20.3rem]"
          />
          <p className="text-text caption1">
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

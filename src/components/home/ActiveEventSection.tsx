'use client';

import EventCard from '@/components/common/EventCard';
import Icon from '@/components/common/Icon';
import { useScrollIndex } from '@/hooks/home/useScrollIndex';
import type { PlanType } from '@/types/common/planType';
import { WishpoolType } from '@/types/common/wishpoolType';

type activeEventProps = {
  planType: PlanType;
  wishpools: WishpoolType[];
};

const EVENT_INFO = {
  funding: {
    label: '선물 펀딩',
    message: '받고 싶은 선물로 나의 생일을 축하받고 싶다면?',
  },
  wishpool: {
    label: '위시풀',
    message: '생일자가 받고 싶은 선물이 무엇인지 알고 싶다면?',
  },
};

const ActiveEventSection = ({ planType, wishpools }: activeEventProps) => {
  const wishpoolCount = wishpools?.length;
  const hasEvent = wishpoolCount > 0;

  const { label, message } = EVENT_INFO[planType];
  const { containerRef, currentIndex, scrollToIndex } = useScrollIndex();

  return (
    <>
      {hasEvent ? (
        <>
          <div
            ref={containerRef}
            className="no-scrollbar mt-[2.6rem] flex snap-x snap-mandatory gap-[2rem] overflow-x-auto scroll-smooth"
          >
            {wishpools.map((wishpool, idx) => (
              <div key={idx} className="w-full shrink-0 snap-start">
                <EventCard currentIndex={idx} cardData={wishpool} />
              </div>
            ))}
          </div>

          <div className="mt-[2rem] mb-[2.7rem] flex justify-center gap-[0.4rem]">
            {wishpools.map((_, idx) => (
              <button key={idx} onClick={() => scrollToIndex(idx)}>
                <Icon
                  name="dot"
                  width={8}
                  height={8}
                  className={
                    currentIndex === idx ? 'text-gray-800' : 'text-gray-400'
                  }
                />
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="mt-[3.5rem] flex items-center justify-center py-[2.6rem]">
            <Icon name="photo" width={28} height={28} />
          </div>
          <p className="body2 text-text mb-[10.7rem] py-[0.4rem] text-center">
            지금 진행되고 있는 이벤트가 없어요 <br />
            {label}을 시작해 보세요!
          </p>
        </>
      )}
      <div className="body2 text-text flex items-center gap-[1.2rem]">
        <Icon name="gift" width={20} height={20} />
        <p className="py-[0.8rem]">{message}</p>
      </div>
    </>
  );
};

export default ActiveEventSection;

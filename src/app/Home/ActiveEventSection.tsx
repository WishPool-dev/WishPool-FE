'use client';

import EventCard from '@/app/Home/EventCard';
import Icon from '@/components/common/Icon';
import type { PlanType } from '@/types/planType';

type activeEventProps = {
  planType: PlanType;
  planCount: Record<PlanType, number>;
};

const CTA_MESSAGE = {
  funding: '받고 싶은 선물로 나의 생일을 축하받고 싶다면?',
  wishpool: '생일자가 받고 싶은 선물이 무엇인지 알고 싶다면?',
};

const ActiveEventSection = ({ planType, planCount }: activeEventProps) => {
  const hasEvent = planCount[planType] > 0;

  return (
    <>
      {hasEvent ? (
        <>
          <EventCard planType={planType} />
          <div className="mt-[2rem] mb-[3rem] flex justify-center">
            <Icon name="dot" width={8} height={8} className="text-gray-800" />
          </div>
        </>
      ) : (
        <>
          <div className="mt-[3.5rem] flex items-center justify-center py-[2.6rem]">
            <Icon name="photo" width={28} height={28} />
          </div>
          <p className="body2 text-text mb-[10.7rem] py-[0.4rem] text-center">
            지금 진행되고 있는 이벤트가 없어요 <br />
            선물 펀딩/위시풀 중 하나를 시작해 보세요!
          </p>
        </>
      )}
      <div className="body2 text-text flex items-center gap-[1.2rem]">
        <Icon name="gift" width={20} height={20} />
        <p className="py-[0.8rem]">{CTA_MESSAGE[planType]}</p>
      </div>
    </>
  );
};

export default ActiveEventSection;

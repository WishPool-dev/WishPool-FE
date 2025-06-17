'use client';

import type { PlanType } from '@/types/planType';

const CTA_MESSAGE = {
  funding: '받고 싶은 선물로 나의 생일을 축하받고 싶다면?',
  wishpool: '생일자가 받고 싶은 선물이 무엇인지 알고 싶다면?',
};

const ActiveEventSection = ({ planType }: { planType: PlanType }) => {
  return (
    <div>
      <p>
        지금 진행되고 있는 이벤트가 없어요 <br />
        선물 펀딩/위시풀 중 하나를 시작해 보세요!
      </p>
      <p>{CTA_MESSAGE[planType]} </p>
    </div>
  );
};

export default ActiveEventSection;

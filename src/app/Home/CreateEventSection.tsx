'use client';

import type { PlanType } from '@/types/planType';

const CREATE_CONTENT = {
  funding: {
    title: '선물 펀딩',
    description: '나를 위한 생일 선물 펀딩을 직접 열기',
  },
  wishpool: {
    title: '위시풀',
    description: '생일자를 위한 위시리스트 함께 만들기',
  },
};

const CreateEventSection = ({ planType }: { planType: PlanType }) => {
  const { title, description } = CREATE_CONTENT[planType];

  return (
    <button>
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
      <span>만들기</span>
    </button>
  );
};

export default CreateEventSection;

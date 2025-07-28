'use client';

import Link from 'next/link';

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
    <button className="flex w-full items-center justify-between rounded-[12px] bg-white px-[1.6rem] py-[1.2rem]">
      <img
        src="/images/sample.jpeg"
        className="h-[6.2rem] w-[6.2rem] object-cover"
        alt="대표 이미지"
      />
      <div className="text-left">
        <p className="title1 text-text">{title}</p>
        <p className="caption2 text-gray-600">{description}</p>
      </div>
      <Link
        href="/wishpool/intro"
        className="text-blue-primary title3 px-[1.2rem] py-[0.8rem]"
      >
        만들기
      </Link>
    </button>
  );
};

export default CreateEventSection;

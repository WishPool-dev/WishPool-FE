'use client';

import Image from 'next/image';
import Link from 'next/link';

import WishpoolGiftImage from '@/assets/images/wishpool-gift.png';
import { PATH } from '@/constants/common/path';
import type { PlanType } from '@/types/common/planType';

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
    <button className="flex w-full items-center rounded-[12px] bg-white px-[1.6rem] py-[1.2rem]">
      <Image
        src={WishpoolGiftImage}
        alt="위시풀 만들기 아이콘"
        width={62}
        height={62}
      />
      <div className="ml-[1.6rem] text-left">
        <p className="title1 text-text">{title}</p>
        <p className="caption2 text-gray-600">{description}</p>
      </div>
      <Link
        href={PATH.WISHPOOL_INTRO}
        className="text-blue-primary title3 ml-auto px-[1.2rem] py-[0.8rem]"
      >
        만들기
      </Link>
    </button>
  );
};

export default CreateEventSection;

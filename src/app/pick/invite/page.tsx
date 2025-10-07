'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import WishpoolCardImage from '@/assets/images/wishpool-card.png';
import BirthdayInfo from '@/components/common/BirthdayInfo';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import { PATH } from '@/constants/common/path';

const InvitePage = () => {
  const router = useRouter();

  return (
    <>
      <div className="relative mt-[6rem] w-full rounded-[16px] bg-white">
        <Icon
          name="ribbon"
          width={120}
          height={75}
          className="absolute -top-5 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />

        <div className="space-y-[0.4rem] px-[2.4rem] py-[3.2rem]">
          <h1 className="head1 text-blue-primary">
            홍길동님을 위해 친구들이 함께 만든 <br />
            위시리스트가 도착했어요!
          </h1>
          <p className="text-text body1">
            위시풀을 통해 원하는 선물을 알려 주세요.
          </p>
        </div>

        <div className="relative aspect-[353/199] w-full">
          <Image
            src={WishpoolCardImage}
            alt="이벤트 카드 이미지"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <BirthdayInfo celebrant="생일자 이름" birthDay="2025-09-23" />
      </div>

      <div className="fixed right-0 bottom-0 left-0 mx-auto max-w-[430px] border-t border-gray-300 bg-white px-[2rem] pb-[2rem]">
        <p className="text-text caption1 my-[1.6rem] text-center">
          선물 고르기 마감일: 2025/06/28
        </p>
        <Button
          onClick={() => router.push(PATH.PICK_INTRO)}
          type="button"
          backgroundColor="gradient"
        >
          시작하기
        </Button>
      </div>
    </>
  );
};

export default InvitePage;

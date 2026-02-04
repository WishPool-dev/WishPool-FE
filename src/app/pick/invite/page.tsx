'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Suspense, useEffect } from 'react';

import { useGetPickGiftList } from '@/api/domain/pick/hooks';
import WishpoolCardImage from '@/assets/images/wishpool-card.png';
import BirthdayInfo from '@/components/common/BirthdayInfo';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import Loading from '@/components/common/Loading';
import { PATH } from '@/constants/common/path';
import { WISHPOOL_IMAGE_BASE_URL } from '@/constants/wishpool/image';
import { useGetChosenUrl } from '@/hooks/pick/useGetChosenUrl';

const InviteHandler = () => {
  const router = useRouter();

  const identifier = useGetChosenUrl();

  const { data: pickData, isPending } = useGetPickGiftList(identifier);

  useEffect(() => {
    if (pickData?.wishpoolId) {
      window.sessionStorage.setItem('wishpoolId', String(pickData?.wishpoolId));
    }
    if (pickData?.gifts) {
      window.sessionStorage.setItem(
        'initialGifts',
        JSON.stringify(pickData.gifts),
      );
    }
  }, [pickData]);

  if (isPending) {
    return <Loading />;
  }
  const displayImageSrc = pickData?.imageKey
    ? `${WISHPOOL_IMAGE_BASE_URL}/${pickData.imageKey}`
    : WishpoolCardImage;
  return (
    <>
      <div className="relative mt-[7rem] mb-[4rem] w-full rounded-[16px] bg-white">
        <Icon
          name="ribbon"
          width={120}
          height={75}
          className="absolute -top-5 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />

        <div className="space-y-[0.4rem] px-[2.4rem] py-[3.2rem]">
          <h1 className="head1 text-blue-primary">
            {pickData?.celebrant}님을 위해 친구들이 함께 만든 위시리스트가
            도착했어요!
          </h1>
          <p className="text-text body1">
            위시풀을 통해 원하는 선물을 알려 주세요.
          </p>
        </div>

        <div className="relative h-[18.7rem] w-full">
          <Image
            fill
            src={displayImageSrc}
            alt="이벤트 카드 이미지"
            className="object-cover"
          />
        </div>

        <BirthdayInfo
          celebrant={pickData?.celebrant || ''}
          birthDay={pickData?.birthDay || ''}
        />
      </div>
      <div className="fixed right-0 bottom-0 left-0 mx-auto max-w-[430px] border-t border-gray-300 bg-white px-[2rem] pb-[2rem]">
        <p className="text-text caption1 my-[1.6rem] text-center">
          선물 고르기 마감일: {pickData?.endPickDate || ''}
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

const InvitePage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <InviteHandler />
    </Suspense>
  );
};

export default InvitePage;

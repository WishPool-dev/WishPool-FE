'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

import { useGetWishpoolImage } from '@/api/domain/detail/hooks';
import { useGetWishpoolGuestInfo } from '@/api/domain/join/hooks';
import WishpoolCardImage from '@/assets/images/wishpool-card.png';
import BirthdayInfo from '@/components/common/BirthdayInfo';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import Loading from '@/components/common/Loading';
import { PATH } from '@/constants/common/path';
import { useGetWishpoolId } from '@/hooks/common/useGetWishpoolId';
import { getSlashDateFmt } from '@/utils/wishpool/builder/dateFmt';

const InfoPage = () => {
  const router = useRouter();
  const wishpoolId = useGetWishpoolId();
  const param = useSearchParams();
  const shareidentifier = param.get('shareIdentifier') ?? '';
  const { data: wishpoolData } = useGetWishpoolGuestInfo(
    wishpoolId,
    shareidentifier,
  );
  const { data: wishpoolImage, isPending } = useGetWishpoolImage(
    wishpoolData?.imageKey ?? '',
  );
  const displayImg = wishpoolImage?.key || WishpoolCardImage;

  if (!wishpoolData) return <Loading />;
  if (isPending) return <Loading />;

  return (
    <>
      <div className="text-text">
        <h1 className="head1">
          {wishpoolData?.owner}님이 보낸 <br />
          위시풀 초대장이 도착했어요! <br />
          <span className="text-blue-primary">{wishpoolData?.celebrant}</span>
          님의 선물을 함께 고민해 볼까요?
        </h1>
      </div>
      <div className="relative mx-auto mt-[7.6rem] w-full rounded-[16px] bg-white py-[1.2rem]">
        <Icon
          name="ribbon"
          width={120}
          height={75}
          className="absolute -top-5 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <BirthdayInfo
          celebrant={wishpoolData?.celebrant ?? ''}
          birthDay={getSlashDateFmt(wishpoolData?.birthDay) ?? ''}
        />

        <Image
          src={displayImg}
          width={430}
          height={240}
          className="w-full"
          alt="위시풀 대표 이미지"
        />
        <div className="body2 flex gap-[1.2rem] p-[1.6rem]">
          <span className="shrink-0 text-gray-600">소개</span>
          <p className="whitespace-pre-line text-gray-800">
            {wishpoolData?.description}
          </p>
        </div>
      </div>

      <div className="bg-background-01 fixed inset-x-0 bottom-0 mx-auto inline-flex w-full max-w-[430px] flex-col items-center justify-center gap-[1.6rem] border-t border-gray-300 p-[2rem] pt-[1.6rem] pb-[2rem]">
        <p className="text-text caption1 text-center">
          참여 마감일: {getSlashDateFmt(wishpoolData?.endDate)} 까지
        </p>

        <Button
          onClick={() => {
            router.push(PATH.JOIN_INTRO(wishpoolId));
          }}
          type="button"
          backgroundColor="gradient"
          textSize="lg"
        >
          참여하기
        </Button>
      </div>
    </>
  );
};

export default InfoPage;

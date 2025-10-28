import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { useGetWishpoolImage } from '@/api/domain/detail/hooks';
import WishpoolCardImage from '@/assets/images/wishpool-card.png';
import { PATH } from '@/constants/common/path';
import { WishpoolStatusType } from '@/types/common/wishpoolStatusType';
import { WishpoolType } from '@/types/common/wishpoolType';

const wishpoolStatusText = (status: WishpoolStatusType): string => {
  switch (status) {
    case 'OPEN':
      return '생일자를 위한 위시풀 만들기 진행 중';
    case 'PENDING':
      return '생일자가 선물을 선택하는 중';
    case 'COMPLETED':
      return '생일자가 선물 선택을 완료한 위시풀';
    default:
      return '';
  }
};

type EventCardProps = {
  currentIndex: number;
  cardData: WishpoolType;
};

const EventCard = ({ currentIndex, cardData }: EventCardProps) => {
  const router = useRouter();

  const [isError, setIsError] = useState(false);

  const handleGoDetail = () => {
    router.push(PATH.WISHPOOL_DETAIL(currentIndex));
  };

  const isOpenedEvent = cardData.wishPoolStatus === 'OPEN';
  const isPendingEvent = cardData.wishPoolStatus === 'PENDING';

  const imageKey = cardData?.imageKey || '';

  const { data: wishpoolImage } = useGetWishpoolImage(imageKey);
  const imageUrl = wishpoolImage?.key;
  const displayImageUrl = imageUrl && !isError ? imageUrl : WishpoolCardImage;

  const EventStatusBadge = (
    <>
      <span
        className={`caption1 absolute top-[1.6rem] left-[1.6rem] rounded-[4px] py-[0.6rem] text-center ${isOpenedEvent ? 'bg-pink-primary' : 'bg-gray-400'}`}
      >
        {isOpenedEvent && (
          <span className="text-pink-primary ml-[0.4rem] rounded-[3px] bg-white px-[0.4rem] py-[0.2rem]">
            참여자
          </span>
        )}
        <span className="px-[1.2rem] text-white">
          {isOpenedEvent
            ? `${cardData.D_day}일 뒤 마감`
            : isPendingEvent
              ? '위시풀 진행중'
              : '완료된 위시풀'}
        </span>
      </span>
    </>
  );

  return (
    <div className="relative aspect-[353/199] w-full">
      <Image
        src={displayImageUrl}
        alt="이벤트 카드 이미지"
        fill
        sizes="100vw"
        className="rounded-[12px] object-cover"
        onError={() => setIsError(true)}
      />
      <div className="absolute inset-0 rounded-[12px] bg-black/20" />
      <div className="to-blue-primary from-sub-blue/0 absolute inset-x-0 bottom-0 h-[7.6rem] rounded-[12px] bg-gradient-to-b" />

      {EventStatusBadge}
      <p className="body2 absolute bottom-[4.5rem] left-[1.6rem] text-white">
        {wishpoolStatusText(cardData.wishPoolStatus)}
      </p>
      <strong className="title1 absolute bottom-[1.6rem] left-[1.6rem] line-clamp-1 text-white">
        {cardData.celebrant.length > 9
          ? `${cardData.celebrant.slice(0, 9)}…`
          : cardData.celebrant}
        님을 위한 위시풀
      </strong>
      <button
        onClick={handleGoDetail}
        className="bg-button-color title3 absolute right-[2rem] bottom-[1.6rem] rounded-[6px] px-[1.2rem] py-[0.8rem] text-center text-white"
      >
        보기
      </button>
    </div>
  );
};

export default EventCard;

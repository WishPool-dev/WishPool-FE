import Image from 'next/image';
import { useRouter } from 'next/navigation';

import WishpoolCardImage from '@/assets/images/wishpool-card.png';
import { PATH } from '@/constants/common/path';
import type { EventCardType } from '@/types/wishpool/eventCardType';

export type Role = '참여자' | '생일자';
export type Status = 'open' | 'closed';

type EventCardProps = {
  currentIndex: number;
  cardData: EventCardType;
};

const EventCard = ({ currentIndex, cardData }: EventCardProps) => {
  const router = useRouter();

  const handleGoDetail = () => {
    router.push(PATH.WISHPOOL_DETAIL(currentIndex));
  };

  const isOpenedEvent = cardData.status === 'open';

  const EventStatusBadge = (
    <>
      <span
        className={`caption1 absolute top-[1.6rem] left-[1.6rem] rounded-[4px] py-[0.6rem] text-center ${isOpenedEvent ? 'bg-pink-primary' : 'bg-gray-400'}`}
      >
        {isOpenedEvent && (
          <span className="text-pink-primary ml-[0.4rem] rounded-[3px] bg-white px-[0.4rem] py-[0.2rem]">
            {cardData.userType}
          </span>
        )}
        <span className="px-[1.2rem] text-white">
          {isOpenedEvent ? `${cardData.day}일 뒤 마감` : '완료된 위시풀'}
        </span>
      </span>
    </>
  );

  return (
    <div className="relative aspect-[353/199] w-full">
      <Image
        src={WishpoolCardImage}
        alt="이벤트 카드 이미지"
        fill
        sizes="100vw"
        className="rounded-[12px] object-cover"
      />
      <div className="absolute inset-0 rounded-[12px] bg-black/20" />
      <div className="to-blue-primary from-sub-blue/0 absolute inset-x-0 bottom-0 h-[7.6rem] rounded-[12px] bg-gradient-to-b" />

      {EventStatusBadge}
      <p className="body2 absolute bottom-[4.5rem] left-[1.6rem] text-white">
        생일자를 위한 위시풀 만들기 진행 중
      </p>
      <strong className="title1 absolute bottom-[1.6rem] left-[1.6rem] text-white">
        {cardData.title}
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

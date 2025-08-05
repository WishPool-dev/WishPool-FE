import { useRouter } from 'next/navigation';

import { PATH } from '@/constants/common/path';
import { PlanType } from '@/types/planType';

const CARD_MESSAGE = {
  funding: '나를 위한 펀딩 진행 중',
  wishpool: '생일자를 위한 위시풀 만들기 진행 중',
};

type EventCardProps = {
  planType: PlanType;
  currentIndex: number;
};

const EventCard = ({ planType, currentIndex }: EventCardProps) => {
  const router = useRouter();

  const handleGoDetail = () => {
    router.push(PATH.WISHPOOL_DETAIL(currentIndex));
  };

  return (
    <div className="relative mt-[2.6rem]">
      <img
        src="/images/card.svg"
        className="h-[18.7rem] w-full rounded-[12px] object-cover"
        alt="이벤트 카드 이미지"
      />
      <span className="caption1 bg-pink-primary absolute top-[1.6rem] left-[1.6rem] rounded-[4px] py-[0.6rem] text-center">
        {planType === 'wishpool' && (
          <span className="text-pink-primary ml-[0.4rem] rounded-[3px] bg-white px-[0.4rem] py-[0.2rem]">
            참여자
          </span>
        )}
        <span className="px-[1.2rem] text-white">5일 뒤 마감</span>
      </span>
      <p className="body2 absolute bottom-[4.5rem] left-[1.6rem] text-white">
        {CARD_MESSAGE[planType]}
      </p>
      <strong className="title1 absolute bottom-[1.6rem] left-[1.6rem] text-white">
        텍스트
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

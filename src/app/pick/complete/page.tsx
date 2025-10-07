import Image from 'next/image';

import GiftBoxImage from '@/assets/images/wish-in-box.png';
import FeedbackBox from '@/components/common/FeedbackBox';

const CompletePage = () => {
  return (
    <div className="flex flex-col items-center pt-[5.6rem]">
      <h1 className="text-text head1 mb-[0.4rem]">
        위시풀 선물 고르기가 끝났어요!
      </h1>
      <h2 className="text-text body1">이 결과를 친구들에게 알려줄게요!</h2>
      <Image
        src={GiftBoxImage}
        alt="선물 상자 이미지"
        width={180}
        height={180}
        className="mt-[3.8rem] mb-[8.4rem]"
      />
      <FeedbackBox />
    </div>
  );
};

export default CompletePage;

'use client';
import Image from 'next/image';

import CongratsImage from '@/assets/images/congrats.png';
import FeedbackBox from '@/components/common/FeedbackBox';

const CompletePage = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h3 className="text-text head1">위시풀 만들기 참여가 끝났어요!</h3>
      </div>

      <div className="mt-[3.8rem] flex items-center justify-center pb-[8rem]">
        <Image
          src={CongratsImage}
          alt="위시풀 공유 완료 "
          width={180}
          height={180}
        />
      </div>
      <FeedbackBox />
    </>
  );
};

export default CompletePage;

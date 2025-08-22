'use client';

import Button from '@/components/common/Button';
import InfoBox from '@/components/common/InfoBox/InfoBox';

const IntroPage = () => {
  return (
    <>
      <div className="text-text mt-[2.8rem]">
        <h1 className="head1">
          위시풀을 통해 <br />
          <span className="text-blue-primary">홍길동</span>님에게 주고 싶은
          선물을 제안해요.
        </h1>
        <p className="body1 mt-[0.4rem]">단계별 항목에 응답해주세요.</p>
      </div>
      <img
        src="/images/funding-pool.svg"
        alt="선물 고르기 사진"
        className="mx-auto my-[4.2rem] h-[18rem] w-[18rem]"
      />
      <div className="fixed inset-x-0 bottom-0">
        <div className="mx-auto w-full max-w-[430px] p-[2rem]">
          <Button onClick={() => {}}>시작</Button>
        </div>
      </div>
      <InfoBox />
    </>
  );
};

export default IntroPage;

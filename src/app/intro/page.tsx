'use client';

import { useRouter } from 'next/navigation';

import Button from '@/components/common/Button';
import { PATH } from '@/constants/common/path';
import { ONBOARDING_CONTENT } from '@/constants/intro/onBoardingContent';

const OnBoardingPage = () => {
  const router = useRouter();

  return (
    <div className="w-full text-center">
      <div>
        <h1 className="head1 text-text mb-[1.6rem]">
          마음을 선물할 때, WishpooL
        </h1>
        <h2 className="subtitle2 text-blue-primary mb-[0.8rem]">
          함께 준비하는 특별한 생일 선물
        </h2>
        <p className="body2 text-text mb-[2.4rem]">
          WishpooL을 통해 생일인 친구를 위한 <br />
          선물 위시리스트를 여럿이 함께 만들고, <br />
          취향을 물어 보세요.
        </p>
        <img
          src="/images/onboarding-1.svg"
          alt="온보딩 - 위시풀 이미지"
          className="w-full"
        />
      </div>

      <div className="relative">
        <div className="fixed inset-x-0 bottom-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0)_0%,_#fff_100%)] px-[2rem] pt-[3.6rem] pb-[2rem]">
          <Button onClick={() => router.push(PATH.HOME)}>
            WishpooL 시작하기
          </Button>
        </div>

        {ONBOARDING_CONTENT.map((section, idx) => (
          <section key={idx}>
            <img
              src={section.imageSrc}
              alt={section.imageAlt}
              className="w-full"
            />
            <div className="text-text pt-[3.2rem] pb-[6rem]">
              <h2 className="head1 mb-[1.6rem]">{section.title}</h2>
              <p className="body1">{section.content}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default OnBoardingPage;

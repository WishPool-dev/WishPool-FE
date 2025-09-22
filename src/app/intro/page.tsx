'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Onboarding1Image from '@/assets/images/onboarding-1.jpg';
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
        <div className="relative aspect-[393/486] w-full">
          <Image
            src={Onboarding1Image}
            alt="온보딩 - 위시풀 이미지"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {ONBOARDING_CONTENT.map((section, idx) => (
        <section key={idx} className="-mt-1">
          <div className="relative aspect-[393/392] w-full">
            <Image
              src={section.imageSrc}
              alt={section.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="text-text pt-[3.2rem] pb-[6rem]">
            <h2 className="head1 mb-[1.6rem]">{section.title}</h2>
            <p className="body1">{section.content}</p>
          </div>
        </section>
      ))}
      <div className="fixed inset-x-0 bottom-0">
        <div className="bottom-0 mx-auto w-full max-w-[430px] bg-[linear-gradient(180deg,_rgba(255,255,255,0)_0%,_#fff_100%)] p-[2rem]">
          <Button onClick={() => router.push(PATH.LOGIN)}>
            WishpooL 시작하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnBoardingPage;

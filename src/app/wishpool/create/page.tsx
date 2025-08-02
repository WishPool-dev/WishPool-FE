'use client';

import ProgressBar from '@/app/wishpool/create/(form)/_components/ProgressBar';
import Step1 from '@/app/wishpool/create/(form)/Step1';
import Button from '@/components/common/Button';
import RightIconHeader from '@/components/layout/Header/RightIconHeader';

const page = () => {
  return (
    <>
      <RightIconHeader title="위시풀 만들기" iconName="cancel" />

      <ProgressBar currentStep={1} />

      <Step1 />
      <div className="fixed right-0 bottom-[2rem] left-0 mx-auto max-w-[43rem]">
        <div className="flex justify-between gap-[1rem] px-[2rem]">
          <Button textColor="black" backgroundColor="light" textSize="sm">
            이전
          </Button>
          <Button textColor="white" backgroundColor="disabled" textSize="sm">
            다음
          </Button>
        </div>
      </div>
    </>
  );
};

export default page;

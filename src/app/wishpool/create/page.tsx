'use client';

import Step1 from '@/app/wishpool/create/(form)/Step1';
import Button from '@/components/common/Button';
import RightIconHeader from '@/components/layout/Header/RightIconHeader';

const page = () => {
  return (
    <>
      <RightIconHeader title="위시풀 만들기" iconName="cancel" />

      <div className="bg-background-02">
        <div className="subtitle3 flex h-[3.9rem] items-center justify-around border-b-[3px] border-gray-300 text-gray-600">
          <span>생일자</span>
          <span>위시풀 소개</span>
          <span>썸네일</span>
          <span>마감일</span>
        </div>
      </div>

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

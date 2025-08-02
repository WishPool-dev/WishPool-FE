'use client';

import Button from '@/components/common/Button';
import RightIconHeader from '@/components/layout/Header/RightIconHeader';

import InvitationStep from './_components/InvitationStep';

const page = () => {
  return (
    <>
      <RightIconHeader title="위시풀 만들기" iconName="cancel" />

      <div className="bg-background-02 -mx-[2rem] mt-[5.4] h-[3.9rem]">
        <div className="subtitle3 flex items-center justify-around border-b-[3px] border-gray-300 text-gray-600">
          <div className="my-[0.75rem] text-center text-blue-500">생일자</div>
          <div>위시풀 소개</div>
          <div>썸네일</div>
          <div>마감일</div>
        </div>
      </div>
      <InvitationStep />
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

import React from 'react';

import Button from '@/components/common/Button';
const InfoPage = () => {
  return (
    <>
      <div className="text-text">
        <h1 className="head1">
          00님이 보낸 <br />
          위시풀 초대장이 도착했어요! <br />
          <span className="text-blue-primary">홍길동</span>님의 선물을 함께
          고민해 볼까요?
        </h1>

        <div className="bg-background-01 fixed inset-x-0 bottom-0 mx-auto inline-flex w-full max-w-[430px] flex-col items-center justify-center gap-[1.6rem] border-t border-gray-300 p-[2rem] pt-[1.6rem] pb-[2rem]">
          <p className="text-text caption1 text-center">
            참여 마감일: 2025/06/23 까지
          </p>

          <Button type="button" backgroundColor="gradient" textSize="lg">
            참여하기
          </Button>
        </div>
      </div>
    </>
  );
};

export default InfoPage;

import React from 'react';

import Icon from '@/components/common/Icon';

const Step5 = () => {
  return (
    <>
      <div className="mt-[2.8rem] pb-[15rem]">
        <p className="caption1 text-blue-primary h-[1.8rem] max-w-[430px]">
          최종 점검
        </p>
        <p className="head1 text-text h-[3.2rem] max-w-[430px] pt-[0.4rem]">
          위시풀의 정보를 확인해 주세요.
        </p>

        <div className="bg-background-02 text-text body1 mt-[3.8rem] flex h-[5.6rem] flex-row items-center justify-between rounded-[12px] px-[1.6rem] py-[0.8rem]">
          <div className="flex flex-row gap-[1.2rem]">
            <div className="caption1 bg-button-color h-[2.3rem] w-[4.7rem] rounded-[4px] px-[0.8rem] py-[0.4rem] text-center text-white">
              생일자
            </div>
            홍길동
          </div>
          <div className="flex flex-row gap-[1.2rem]">
            <Icon name="birthday" /> 2025/06/23
          </div>
        </div>

        <div className="mt-[1.2rem] h-[19.9rem] w-full rounded-[12px] border border-gray-400">
          {/* 이미지 넣기 */}
        </div>
        <div className="bg-background-02 body2 mt-[1.2rem] inline-block w-full rounded-[12px] p-[1.6rem] break-words">
          <div className="flex flex-row gap-[1.2rem]">
            <p className="flex-shrink-0 text-gray-600">소개</p>
            <p className="text-gray-800">
              얘들아 길동이가 이번에 생일이더라고! 지난 학기에 길동이가 우리
              팀에서 여러가지 일로 고생해줬으니 우리가 간단히라도 돈 모아서
              선물해주면 어떨까 싶어서! 위시풀로 길동이 갖고싶은 것 보고
              구매해서 감동주자!
            </p>
          </div>
        </div>

        <div className="my-[2.8rem] w-full border-b border-gray-300"></div>
        <div className="bg-background-02 text-text body1 flex h-[5.6rem] flex-row items-center justify-between rounded-[12px] px-[1.6rem] py-[0.8rem]">
          <div className="flex flex-row gap-[1.2rem]">
            <div className="caption1 bg-button-color h-[2.3rem] w-[4.7rem] rounded-[4px] px-[0.8rem] py-[0.4rem] text-center text-white">
              참여자
            </div>
            선물 리스트 마감일
          </div>
          <p>2025/06/23</p>
        </div>
      </div>
    </>
  );
};

export default Step5;

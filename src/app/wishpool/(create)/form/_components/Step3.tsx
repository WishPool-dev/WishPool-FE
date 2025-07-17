import React from 'react';

import Icon from '@/components/common/Icon';

import Question from './Question';

const Step3 = () => {
  return (
    <>
      <div className="mt-[2.8rem]">
        <Question
          required={false}
          question="위시풀 썸네일 이미지를 추가할 수 있어요."
        />
      </div>

      <div className="relative mt-[4rem] h-[18.7rem] w-full rounded-[1.2rem] border border-gray-300">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-[0.9rem]">
          <Icon name="photo" className="text-gray-400" />
          <p className="subtitle3 text-gray-600">썸네일 이미지</p>
        </div>
      </div>

      <button className="subtitle2 text-text mt-[2.3rem] flex w-full items-center justify-start gap-[1.2rem] py-[1.2rem]">
        <Icon name="photo" className="text-gray-600" />
        사진 추가
      </button>
      <button className="subtitle2 text-text flex w-full items-center justify-start gap-[1.2rem] py-[1.2rem]">
        <Icon name="camera" />
        사진 촬영
      </button>
    </>
  );
};

export default Step3;

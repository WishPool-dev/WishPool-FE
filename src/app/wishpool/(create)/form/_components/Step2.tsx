import React from 'react';

import InputBox from './InputBox';
import Question from './Question';

const Step2 = () => {
  return (
    <>
      <div className="mt-[2.8rem]">
        <Question required={true} question="이 위시풀을 소개해 주세요." />
      </div>

      <div className="mt-[4rem]">
        <InputBox
          content="위시풀 소개"
          placeholder={`참여자가 이 소개글을 볼 수 있어요. 
생일자에게는 보이지 않아요.`}
          maxLength={200}
          height="h-[15rem]"
        />
      </div>
    </>
  );
};

export default Step2;

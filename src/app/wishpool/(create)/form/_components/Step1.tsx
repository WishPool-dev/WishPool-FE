import React from 'react';

import InputBox from './InputBox';
import Question from './Question';

const Step1 = () => {
  return (
    <>
      <div className="mt-[2.8rem]">
        <Question
          required={true}
          question="위시풀을 받을 생일자의 정보를 알려 주세요."
        />
      </div>

      <div className="mt-[4rem]">
        <InputBox
          content="생일자 이름"
          placeholder="생일자의 이름을 알려 주세요."
          maxLength={20}
        />
      </div>
      <div className="mt-[3.2rem]">
        <InputBox
          content="곧 다가올 생일"
          calendar={true}
          placeholder="YY/MM/DD"
        />
      </div>
    </>
  );
};

export default Step1;

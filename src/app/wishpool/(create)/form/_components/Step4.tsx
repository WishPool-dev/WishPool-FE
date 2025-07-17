import React from 'react';

import InputBox from './InputBox';
import Question from './Question';

const Step4 = () => {
  return (
    <>
      <div className="mt-[1.6rem]">
        <Question
          required={true}
          question="참여자의 선물 리스트를 언제까지 받을까요?"
        />
      </div>

      <div className="mt-[3.2rem]">
        <InputBox
          content="선물 리스트 마감일"
          calendar={true}
          placeholder="YY/MM/DD"
        />
      </div>
    </>
  );
};

export default Step4;

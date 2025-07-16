import React from 'react';

interface QuestionProps {
  required: boolean;
  question: string;
}

const Question = ({ required, question }: QuestionProps) => {
  return (
    <>
      {required ? (
        <div className="text-pink-primary caption1 h-[1.8rem] max-w-full">
          필수 입력
        </div>
      ) : (
        <div className="caption1 h-[1.8rem] max-w-full text-gray-600">
          선택 입력
        </div>
      )}

      <div className="head1 text-text h-[3.2rem] max-w-max pt-[0.4rem]">
        {question}
      </div>
    </>
  );
};

export default Question;

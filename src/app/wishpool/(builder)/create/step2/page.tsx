'use client';
import { useEffect, useState } from 'react';

import Question from '@/components/common/Form/Question';
import TextField from '@/components/common/Form/TextField';
import ButtonContainer from '@/components/wishpool/builder/create/ButtonContainer';
import ProgressBar from '@/components/wishpool/builder/create/ProgressBar';
import { PATH } from '@/constants/common/path';
import { STEPS } from '@/constants/wishpool/create/steps';

const Step2Page = () => {
  const step = STEPS.STEP2;
  const next = PATH.WISHPOOL_CREATE_STEP3;

  const [formData, setFormData] = useState({ description: '' });

  useEffect(() => {
    const initialDescription =
      sessionStorage.getItem('wishpool_description') || '';
    setFormData({ description: initialDescription });
  }, []);

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isNextDisabled = !formData.description;

  return (
    <>
      <ProgressBar currentStep={step} />
      <div className="mt-[3.9rem]">
        <span className="bg-background-02 caption2 inline-block rounded-[4px] px-[1.2rem] py-[0.6rem] text-gray-600">
          <span className="text-blue-primary">홍길동</span>에게 보내는 위시풀
        </span>

        <div className="mt-[1.6rem]">
          <Question required={true} question="이 위시풀을 소개해 주세요." />
        </div>

        <div className="mt-[4rem]">
          <p className="subtitle2 text-text mb-[0.8rem] max-w-[430px]">
            위시풀 소개
          </p>
          <TextField
            name="description"
            placeholder={`참여자가 이 소개글을 볼 수 있어요. 
생일자에게는 보이지 않아요.`}
            maxLength={200}
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>

        <div className="bg-background-02 mt-[4rem] gap-[1rem] rounded-[12px] p-[1.6rem]">
          <p className="text-text caption1 mb-[0.4rem]">위시풀 소개 작성 TIP</p>
          <ol className="caption2 list-decimal pl-[1.6rem] text-gray-800">
            <li>왜 이 생일자를 위해 위시풀을 열었는지 이유를 알려줘요.</li>
            <li>
              생일자를 위한 마음이 모일 수 있도록 부담 없는 참여를 독려해요.
            </li>
          </ol>
        </div>
      </div>
      <ButtonContainer isNextDisabled={isNextDisabled} next={next} />
    </>
  );
};

export default Step2Page;

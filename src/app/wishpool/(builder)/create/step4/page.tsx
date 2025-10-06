'use client';
import { useState, useEffect } from 'react';

import Calendar from '@/components/common/Calendar';
import Question from '@/components/common/Form/Question';
import UserTag from '@/components/common/UserTag';
import ButtonContainer from '@/components/wishpool/builder/create/ButtonContainer';
import ProgressBar from '@/components/wishpool/builder/create/ProgressBar';
import { PATH } from '@/constants/common/path';
import { STEPS } from '@/constants/wishpool/create/steps';

const Step4Page = () => {
  const step = STEPS.STEP4;
  const next = PATH.WISHPOOL_PREVIEW;

  const [formData, setFormData] = useState({ endDate: '' });

  useEffect(() => {
    const initialEndDate = sessionStorage.getItem('wishpool_endDate') || '';
    setFormData({ endDate: initialEndDate });
  }, []);

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isNextDisabled = !formData.endDate;

  return (
    <>
      <ProgressBar currentStep={step} />
      <div className="mt-[3.9rem]">
        <Question
          required={true}
          question="참여자의 선물 리스트를 언제까지 받을까요?"
        />

        <div className="mt-[3.2rem]">
          <div className="flex flex-row gap-[1.2rem]">
            <UserTag>참여자</UserTag>
            <p className="subtitle2 text-text mb-[0.8rem] max-w-[430px]">
              선물 리스트 마감일
            </p>
          </div>

          <Calendar
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <ButtonContainer isNextDisabled={isNextDisabled} next={next} />
    </>
  );
};

export default Step4Page;

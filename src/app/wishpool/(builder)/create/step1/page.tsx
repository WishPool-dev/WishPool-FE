'use client';
import { useState, useEffect } from 'react';

import Calendar from '@/components/common/Calendar';
import BaseInput from '@/components/common/Form/BaseInput';
import Question from '@/components/common/Form/Question';
import ButtonContainer from '@/components/wishpool/builder/create/ButtonContainer';
import ProgressBar from '@/components/wishpool/builder/create/ProgressBar';
import { PATH } from '@/constants/common/path';
import { STEPS } from '@/constants/wishpool/create/steps';

const Step1Page = () => {
  const step = STEPS.STEP1;
  const next = PATH.WISHPOOL_CREATE_STEP2;

  const [formData, setFormData] = useState({ celebrant: '', birthDay: '' });

  useEffect(() => {
    const initialCelebrant = sessionStorage.getItem('wishpool_celebrant') || '';
    const initialBirthDay = sessionStorage.getItem('wishpool_birthDay') || '';

    setFormData({
      celebrant: initialCelebrant,
      birthDay: initialBirthDay,
    });
  }, []);

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isNextDisabled = !formData.celebrant || !formData.birthDay;

  return (
    <>
      <ProgressBar currentStep={step} />
      <div className="mt-[3.9rem] pb-[30rem]">
        <Question
          required={true}
          question="위시풀을 받을 생일자의 정보를 알려 주세요."
        />

        <div className="mt-[4rem]">
          <div className="subtitle2 text-text mb-[0.8rem] max-w-[430px]">
            생일자 이름
          </div>
          <BaseInput
            name="celebrant"
            placeholder="생일자의 이름을 알려 주세요."
            maxLength={20}
            value={formData.celebrant}
            onChange={handleInputChange}
          />
        </div>

        <div className="mt-[3.2rem]">
          <p className="subtitle2 text-text mb-[0.8rem] max-w-[430px]">
            곧 다가올 생일
          </p>
          <Calendar
            name="birthDay"
            value={formData.celebrant}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <ButtonContainer isNextDisabled={isNextDisabled} next={next} />
    </>
  );
};

export default Step1Page;

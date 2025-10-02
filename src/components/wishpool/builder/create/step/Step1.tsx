'use client';
import { useState, useEffect } from 'react';

import Calendar from '@/components/common/Calendar';
import BaseInput from '@/components/common/Form/BaseInput';
import Question from '@/components/common/Form/Question';
const Step1 = () => {
  const [formData, setFormData] = useState({ celebrant: '', birthDay: '' });

  useEffect(() => {
    setFormData({
      celebrant: sessionStorage.getItem('wishpool_celebrant') || '',
      birthDay: sessionStorage.getItem('wishpool_birthDay') || '',
    });
  }, []);
  console.log('formData =', formData);

  return (
    <div className="pb-[30rem]">
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
          defaultValue={formData.celebrant}
        />
      </div>

      <div className="mt-[3.2rem]">
        <p className="subtitle2 text-text mb-[0.8rem] max-w-[430px]">
          곧 다가올 생일
        </p>
        <Calendar name="birthDay" />
      </div>
    </div>
  );
};

export default Step1;

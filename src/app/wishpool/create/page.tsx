'use client';

import { useState } from 'react';

import ProgressBar from '@/app/wishpool/create/(form)/_components/ProgressBar';
import Step1 from '@/app/wishpool/create/(form)/Step1';
import Step2 from '@/app/wishpool/create/(form)/Step2';
import Step3 from '@/app/wishpool/create/(form)/Step3';
import Step4 from '@/app/wishpool/create/(form)/Step4';
import RightIconHeader from '@/components/layout/Header/RightIconHeader';

const CreatePage = () => {
  const [step, setStep] = useState(1);

  return (
    <>
      <RightIconHeader title="위시풀 만들기" iconName="cancel" />
      <ProgressBar currentStep={step} />
      {step === 1 && <Step1 handleNext={() => setStep(2)} />}
      {step === 2 && <Step2 handleNext={() => setStep(3)} />}
      {step === 3 && <Step3 handleNext={() => setStep(4)} />}
      {step === 4 && <Step4 handleNext={() => setStep(4)} />}
    </>
  );
};

export default CreatePage;

'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import RightIconHeader from '@/components/layout/Header/RightIconHeader';
import ProgressBar from '@/components/wishpool/builder/create/ProgressBar';
import Step1 from '@/components/wishpool/builder/create/step/Step1';
import Step2 from '@/components/wishpool/builder/create/step/Step2';
import Step3 from '@/components/wishpool/builder/create/step/Step3';
import Step4 from '@/components/wishpool/builder/create/step/Step4';
import { PATH } from '@/constants/common/path';

const CreatePage = () => {
  const router = useRouter();

  const [step, setStep] = useState(1);

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 4));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));
  const handleBack = () => {
    router.back();
  };
  const handleGoResult = () => {
    router.push(PATH.WISHPOOL_PREVIEW);
  };

  return (
    <>
      <RightIconHeader title="위시풀 만들기" iconName="cancel" />
      <ProgressBar currentStep={step} />
      <div className="pt-[2.8rem]">
        {step === 1 && <Step1 onPrev={handleBack} onNext={handleNext} />}
        {step === 2 && <Step2 onPrev={handlePrev} onNext={handleNext} />}
        {step === 3 && <Step3 onPrev={handlePrev} onNext={handleNext} />}
        {step === 4 && <Step4 onPrev={handlePrev} onNext={handleGoResult} />}
      </div>
    </>
  );
};

export default CreatePage;

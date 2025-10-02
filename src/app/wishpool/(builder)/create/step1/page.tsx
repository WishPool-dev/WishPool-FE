'use client';
import ButtonContainer from '@/components/wishpool/builder/create/ButtonContainer';
import ProgressBar from '@/components/wishpool/builder/create/ProgressBar';
import Step1 from '@/components/wishpool/builder/create/step/Step1';
import { PATH } from '@/constants/common/path';
import { STEPS } from '@/constants/wishpool/create/steps';

const Step1Page = () => {
  const step = STEPS.STEP1;
  const next = PATH.WISHPOOL_CREATE_STEP2;

  return (
    <>
      <ProgressBar currentStep={step} />
      <div className="mt-[3.9rem]">
        <Step1 />
      </div>

      <ButtonContainer isNextDisabled={false} next={next} />
    </>
  );
};

export default Step1Page;

'use client';
import ButtonContainer from '@/components/wishpool/builder/create/ButtonContainer';
import ProgressBar from '@/components/wishpool/builder/create/ProgressBar';
import Step3 from '@/components/wishpool/builder/create/step/Step3';
import { PATH } from '@/constants/common/path';
import { STEPS } from '@/constants/wishpool/create/steps';

const Step3Page = () => {
  const step = STEPS.STEP3;
  const next = PATH.WISHPOOL_CREATE_STEP4;

  return (
    <>
      <ProgressBar currentStep={step} />
      <div className="mt-[3.9rem]">
        <Step3 />
      </div>
      <ButtonContainer isNextDisabled={false} next={next} />
    </>
  );
};

export default Step3Page;

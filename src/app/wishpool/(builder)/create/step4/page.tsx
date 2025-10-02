'use client';
import ButtonContainer from '@/components/wishpool/builder/create/ButtonContainer';
import ProgressBar from '@/components/wishpool/builder/create/ProgressBar';
import Step4 from '@/components/wishpool/builder/create/step/Step4';
import { PATH } from '@/constants/common/path';
import { STEPS } from '@/constants/wishpool/create/steps';

const Step4Page = () => {
  const step = STEPS.STEP4;
  const next = PATH.WISHPOOL_PREVIEW;
  return (
    <form>
      <input type="hidden" name="step" value={step} />

      <ProgressBar currentStep={step} />
      <div className="mt-[3.9rem]">
        <Step4 />
      </div>
      <ButtonContainer isNextDisabled={false} next={next} />
    </form>
  );
};

export default Step4Page;

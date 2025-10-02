import ButtonContainer from '@/components/wishpool/builder/create/ButtonContainer';
import ProgressBar from '@/components/wishpool/builder/create/ProgressBar';
import Step2 from '@/components/wishpool/builder/create/step/Step2';
import { PATH } from '@/constants/common/path';
import { STEPS } from '@/constants/wishpool/create/steps';

const Step2Page = () => {
  const step = STEPS.STEP2;
  const next = PATH.WISHPOOL_CREATE_STEP3;

  return (
    <>
      <ProgressBar currentStep={step} />
      <div className="mt-[3.9rem]">
        <Step2 />
      </div>
      <ButtonContainer isNextDisabled={false} next={next} />
    </>
  );
};

export default Step2Page;

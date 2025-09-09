import ButtonContainer from '@/components/wishpool/builder/create/ButtonContainer';
import ProgressBar from '@/components/wishpool/builder/create/ProgressBar';
import Step4 from '@/components/wishpool/builder/create/step/Step4';
import { STEPS } from '@/constants/wishpool/create/steps';

const Step4Page = () => {
  const step = STEPS.STEP4;
  return (
    <>
      <ProgressBar currentStep={step} />
      <div className="mt-[3.9rem]">
        <Step4 />
      </div>
      <ButtonContainer currentStep={step} isNextDisabled={false} />
    </>
  );
};

export default Step4Page;

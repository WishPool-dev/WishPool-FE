import ButtonContainer from '@/components/wishpool/builder/create/ButtonContainer';
import ProgressBar from '@/components/wishpool/builder/create/ProgressBar';
import Step1 from '@/components/wishpool/builder/create/step/Step1';
import { STEPS } from '@/constants/wishpool/create/steps';

const Step1Page = () => {
  const step = STEPS.STEP1;
  return (
    <>
      <ProgressBar currentStep={step} />
      <div className="mt-[3.9rem]">
        <Step1 />
      </div>
      <ButtonContainer currentStep={step} isNextDisabled={false} />
    </>
  );
};

export default Step1Page;

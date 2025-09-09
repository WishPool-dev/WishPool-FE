import ButtonContainer from '@/components/wishpool/builder/create/ButtonContainer';
import ProgressBar from '@/components/wishpool/builder/create/ProgressBar';
import Step2 from '@/components/wishpool/builder/create/step/Step2';
import { STEPS } from '@/constants/wishpool/create/steps';

const Step2Page = () => {
  const step = STEPS.STEP2;
  return (
    <>
      <ProgressBar currentStep={step} />
      <div className="mt-[3.9rem]">
        <Step2 />
      </div>
      <ButtonContainer currentStep={step} isNextDisabled={false} />
    </>
  );
};

export default Step2Page;

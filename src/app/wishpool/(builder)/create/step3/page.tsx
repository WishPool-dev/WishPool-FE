import ButtonContainer from '@/components/wishpool/builder/create/ButtonContainer';
import ProgressBar from '@/components/wishpool/builder/create/ProgressBar';
import Step3 from '@/components/wishpool/builder/create/step/Step3';
import { STEPS } from '@/constants/wishpool/create/steps';

const Step3Page = () => {
  const step = STEPS.STEP3;
  return (
    <>
      <ProgressBar currentStep={step} />
      <div className="mt-[3.9rem]">
        <Step3 />
      </div>
      <ButtonContainer currentStep={step} isNextDisabled={false} />
    </>
  );
};

export default Step3Page;

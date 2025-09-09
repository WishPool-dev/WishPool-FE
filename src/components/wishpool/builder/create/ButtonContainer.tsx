'use client';
import { useRouter } from 'next/navigation';

import Button from '@/components/common/Button';
import { PATH } from '@/constants/common/path';
import { STEP_PATHS, Step } from '@/constants/wishpool/create/steps';

type ButtonContainerProps = {
  currentStep: Step;
  isNextDisabled?: boolean;
};

const MIN_STEP: Step = 1;
const MAX_STEP: Step = 4;

const ButtonContainer = ({
  currentStep,
  isNextDisabled,
}: ButtonContainerProps) => {
  const router = useRouter();

  const handlePrev = () => {
    if (currentStep === MIN_STEP) {
      router.push(PATH.WISHPOOL_INTRO);
      return;
    }

    const prevStep = (currentStep - 1) as Step;
    router.push(STEP_PATHS[prevStep]);
  };

  const handleNext = () => {
    if (currentStep === MAX_STEP) {
      router.push(PATH.WISHPOOL_PREVIEW);
      return;
    }

    const nextStep = (currentStep + 1) as Step;
    router.push(STEP_PATHS[nextStep]);
  };

  return (
    <div className="fixed right-0 bottom-[2rem] left-0 mx-auto max-w-[43rem]">
      <div className="flex justify-between gap-[1rem] px-[2rem]">
        <Button
          textColor="black"
          backgroundColor="light"
          textSize="sm"
          onClick={handlePrev}
        >
          이전
        </Button>
        <Button
          textColor="white"
          backgroundColor={isNextDisabled ? 'disabled' : 'dark'}
          textSize="sm"
          disabled={isNextDisabled}
          onClick={handleNext}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default ButtonContainer;

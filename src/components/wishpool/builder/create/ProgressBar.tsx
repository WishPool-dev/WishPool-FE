'use client';
import { useRouter } from 'next/navigation';

import {
  STEP_PATHS,
  PROGRESS_STEPS,
  Step,
} from '@/constants/wishpool/create/steps';

type ProgressBarProps = {
  currentStep: number;
};

const ProgressBar = ({ currentStep }: ProgressBarProps) => {
  const router = useRouter();

  const handleStep = (step: Step) => {
    router.push(STEP_PATHS[step]);
  };

  return (
    <div className="bg-background-02 fixed inset-x-0 top-[5.4rem] mx-auto max-w-[430px]">
      <div className="subtitle3 flex h-[3.9rem] items-center justify-around border-b-[3px] border-gray-300 text-gray-600">
        {PROGRESS_STEPS.map(({ step, label }) => (
          <button
            type="button"
            onClick={() => handleStep(step)}
            key={step}
            className={`relative inline-flex h-full flex-1 items-center justify-center ${currentStep >= step ? 'after:absolute after:bottom-[-3px] after:left-0 after:h-[3px] after:w-full after:bg-blue-500' : ''}`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;

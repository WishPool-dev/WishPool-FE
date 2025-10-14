'use client';
import { useRouter } from 'next/navigation';

import Button from '@/components/common/Button';

const ButtonContainer = ({
  isNextDisabled,
  next,
  back,
}: {
  isNextDisabled: boolean;
  next: string;
  back: string;
}) => {
  const router = useRouter();

  const handleNext = () => {
    router.push(next);
  };

  const handleBack = () => {
    router.push(back);
  };
  return (
    <div className="fixed right-0 bottom-[2rem] left-0 mx-auto max-w-[43rem]">
      <div className="flex justify-between gap-[1rem] px-[2rem]">
        <Button
          textColor="black"
          backgroundColor="light"
          textSize="sm"
          onClick={handleBack}
        >
          이전
        </Button>
        <Button
          type="button"
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

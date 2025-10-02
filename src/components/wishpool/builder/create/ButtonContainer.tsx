'use client';
import { useRouter } from 'next/navigation';

import Button from '@/components/common/Button';

const ButtonContainer = ({
  isNextDisabled,
  next,
}: {
  isNextDisabled: boolean;
  next: string;
}) => {
  const router = useRouter();

  const handleNext = () => {
    router.push(next);
  };
  return (
    <div className="fixed right-0 bottom-[2rem] left-0 mx-auto max-w-[43rem]">
      <div className="flex justify-between gap-[1rem] px-[2rem]">
        <Button
          textColor="black"
          backgroundColor="light"
          textSize="sm"
          onClick={() => history.back()}
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

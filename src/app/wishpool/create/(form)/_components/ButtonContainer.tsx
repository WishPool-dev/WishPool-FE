import { useRouter } from 'next/navigation';

import Button from '@/components/common/Button';

type ButtonContainerProps = {
  next: 'disabled' | 'active';
};
const ButtonContainer = ({ next }: ButtonContainerProps) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
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
          textColor="white"
          backgroundColor={next === 'disabled' ? 'disabled' : 'dark'}
          textSize="sm"
          disabled={next === 'disabled'}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default ButtonContainer;

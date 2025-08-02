import Button from '@/components/common/Button';

type ButtonContainerProps = {
  next: 'disabled' | 'active';
  onClickNext?: () => void;
  onClickPrev?: () => void;
};
const ButtonContainer = ({
  next,
  onClickNext,
  onClickPrev,
}: ButtonContainerProps) => {
  return (
    <div className="fixed right-0 bottom-[2rem] left-0 mx-auto max-w-[43rem]">
      <div className="flex justify-between gap-[1rem] px-[2rem]">
        <Button
          textColor="black"
          backgroundColor="light"
          textSize="sm"
          onClick={onClickPrev}
        >
          이전
        </Button>
        <Button
          textColor="white"
          backgroundColor={next === 'disabled' ? 'disabled' : 'dark'}
          textSize="sm"
          disabled={next === 'disabled'}
          onClick={onClickNext}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default ButtonContainer;

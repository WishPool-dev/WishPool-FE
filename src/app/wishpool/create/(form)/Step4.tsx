import ButtonContainer from '@/app/wishpool/create/(form)/_components/ButtonContainer';
import InputBox from '@/app/wishpool/create/(form)/_components/InputBox';
import Question from '@/app/wishpool/create/(form)/_components/Question';
import { StepProps } from '@/app/wishpool/create/(form)/_types/stepProps';

const Step4 = ({ onPrev, onNext }: StepProps) => {
  return (
    <section className="px-[2rem]">
      <div className="mt-[1.6rem]">
        <Question
          required={true}
          question="참여자의 선물 리스트를 언제까지 받을까요?"
        />
      </div>

      <div className="mt-[3.2rem]">
        <InputBox
          content="선물 리스트 마감일"
          calendar={true}
          placeholder="YY/MM/DD"
        />
      </div>
      <ButtonContainer
        next="active"
        onClickPrev={onPrev}
        onClickNext={onNext}
      />
    </section>
  );
};

export default Step4;

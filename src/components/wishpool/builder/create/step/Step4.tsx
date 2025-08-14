import Calendar from '@/components/common/Calendar';
import ButtonContainer from '@/components/wishpool/builder/create/ButtonContainer';
import Question from '@/components/wishpool/builder/create/Question';
import { StepProps } from '@/types/wishpool/builder/stepProps';

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
        <Calendar content="선물 리스트 마감일" />
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

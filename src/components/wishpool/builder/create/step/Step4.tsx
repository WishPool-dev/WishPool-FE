import CalendarField from '@/components/common/Form/CalendarField';
import Question from '@/components/common/Form/Question';
import ButtonContainer from '@/components/wishpool/builder/create/ButtonContainer';
import { StepProps } from '@/types/wishpool/builder/stepProps';

const Step4 = ({ onPrev, onNext }: StepProps) => {
  return (
    <section className="px-[2rem] pt-[2rem]">
      <Question
        required={true}
        question="참여자의 선물 리스트를 언제까지 받을까요?"
      />

      <div className="mt-[3.2rem]">
        <CalendarField tag="참여자" label="선물 리스트 마감일" />
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

import FormField from '@/components/common/FormField';
import Question from '@/components/common/Question';
import ButtonContainer from '@/components/wishpool/builder/create/ButtonContainer';
import { StepProps } from '@/types/wishpool/builder/stepProps';

const Step4 = ({ onPrev, onNext }: StepProps) => {
  return (
    <section className="mt-[2.8rem] px-[2rem]">
      <div className="mt-[1.6rem]">
        <Question
          required={true}
          question="참여자의 선물 리스트를 언제까지 받을까요?"
        />
      </div>

      <div className="mt-[3.2rem]">
        <FormField mode="calendar" tag="참여자" label="선물 리스트 마감일" />
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

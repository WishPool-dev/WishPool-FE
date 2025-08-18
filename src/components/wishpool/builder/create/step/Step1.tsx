import FormField from '@/components/common/Form/FormField';
import Question from '@/components/common/Form/Question';
import ButtonContainer from '@/components/wishpool/builder/create/ButtonContainer';
import { StepProps } from '@/types/wishpool/builder/stepProps';

const Step1 = ({ onPrev, onNext }: StepProps) => {
  return (
    <section className="px-[2rem]">
      <div className="mt-[2.8rem]">
        <Question
          required={true}
          question="위시풀을 받을 생일자의 정보를 알려 주세요."
        />
      </div>

      <div className="mt-[4rem]">
        <FormField
          label="생일자 이름"
          placeholder="생일자의 이름을 알려 주세요."
          maxLength={20}
        />
      </div>

      <div className="mt-[3.2rem]">
        <FormField mode="calendar" label="곧 다가올 생일" />
      </div>

      <ButtonContainer
        next="active"
        onClickPrev={onPrev}
        onClickNext={onNext}
      />
    </section>
  );
};

export default Step1;

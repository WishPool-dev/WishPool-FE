import BasicInputField from '@/components/common/Form/BasicInputField';
import CalendarField from '@/components/common/Form/CalendarField';
import Question from '@/components/common/Form/Question';
import ButtonContainer from '@/components/wishpool/builder/create/ButtonContainer';
import { StepProps } from '@/types/wishpool/builder/stepProps';

const Step1 = ({ onPrev, onNext }: StepProps) => {
  return (
    <section className="px-[2rem] pt-[2rem] pb-[15rem]">
      <Question
        required={true}
        question="위시풀을 받을 생일자의 정보를 알려 주세요."
      />

      <div className="mt-[4rem]">
        <BasicInputField
          label="생일자 이름"
          placeholder="생일자의 이름을 알려 주세요."
          maxLength={20}
        />
      </div>

      <div className="mt-[3.2rem]">
        <CalendarField label="곧 다가올 생일" />
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

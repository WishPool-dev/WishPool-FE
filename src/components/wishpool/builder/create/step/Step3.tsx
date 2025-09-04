import Question from '@/components/common/Form/Question';
import ThumbnailField from '@/components/common/Form/ThumbnailField';
import ButtonContainer from '@/components/wishpool/builder/create/ButtonContainer';
import { StepProps } from '@/types/wishpool/builder/stepProps';
const Step3 = ({ onPrev, onNext }: StepProps) => {
  return (
    <section className="px-[2rem] pt-[2rem]">
      <Question
        required={false}
        question="위시풀 썸네일 이미지를 추가할 수 있어요."
      />

      <ThumbnailField />
      <ButtonContainer
        next="active"
        onClickPrev={onPrev}
        onClickNext={onNext}
      />
    </section>
  );
};

export default Step3;

import Icon from '@/components/common/Icon';
import ButtonContainer from '@/components/wishpool/builder/create/ButtonContainer';
import Question from '@/components/wishpool/builder/create/Question';
import { StepProps } from '@/types/wishpool/builder/stepProps';

const Step3 = ({ onPrev, onNext }: StepProps) => {
  return (
    <section className="px-[2rem]">
      <div className="mt-[2.8rem]">
        <Question
          required={false}
          question="위시풀 썸네일 이미지를 추가할 수 있어요."
        />
      </div>

      <div className="relative mt-[4rem] h-[18.7rem] w-full rounded-[12px] border border-gray-300">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-[0.9rem]">
          <Icon name="photo" className="text-gray-400" />
          <span className="subtitle3 text-gray-600">썸네일 이미지</span>
        </div>
      </div>

      <button className="subtitle2 text-text mt-[2.3rem] flex w-full items-center justify-start gap-[1.2rem] py-[1.2rem]">
        <Icon name="photo" className="items-center text-gray-600" />
        사진 추가
      </button>
      <button className="subtitle2 text-text flex w-full items-center justify-start gap-[1.2rem] py-[1.2rem]">
        <Icon name="camera" />
        사진 촬영
      </button>
      <ButtonContainer
        next="active"
        onClickPrev={onPrev}
        onClickNext={onNext}
      />
    </section>
  );
};

export default Step3;

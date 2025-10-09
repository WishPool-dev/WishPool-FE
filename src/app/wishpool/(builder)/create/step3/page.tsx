'use client';
import Question from '@/components/common/Form/Question';
import ThumbnailField from '@/components/common/Form/ThumbnailField';
import ButtonContainer from '@/components/wishpool/builder/create/ButtonContainer';
import ProgressBar from '@/components/wishpool/builder/create/ProgressBar';
import { PATH } from '@/constants/common/path';
import { STEPS } from '@/constants/wishpool/create/steps';

const Step3Page = () => {
  const step = STEPS.STEP3;
  const next = PATH.WISHPOOL_CREATE_STEP4;

  return (
    <>
      <ProgressBar currentStep={step} />
      <div className="mt-[3.9rem]">
        <Question
          required={false}
          question="위시풀 썸네일 이미지를 추가할 수 있어요."
        />

        <ThumbnailField />
      </div>
      <ButtonContainer isNextDisabled={false} next={next} />
    </>
  );
};

export default Step3Page;

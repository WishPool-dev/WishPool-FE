import Question from '@/components/common/Form/Question';
import ThumbnailField from '@/components/common/Form/ThumbnailField';

const Step3 = () => {
  return (
    <section>
      <Question
        required={false}
        question="위시풀 썸네일 이미지를 추가할 수 있어요."
      />

      <ThumbnailField />
    </section>
  );
};

export default Step3;

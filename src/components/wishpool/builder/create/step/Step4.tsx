import CalendarField from '@/components/common/Form/CalendarField';
import Question from '@/components/common/Form/Question';

const Step4 = () => {
  return (
    <section>
      <Question
        required={true}
        question="참여자의 선물 리스트를 언제까지 받을까요?"
      />

      <div className="mt-[3.2rem]">
        <CalendarField tag="참여자" label="선물 리스트 마감일" />
      </div>
    </section>
  );
};

export default Step4;

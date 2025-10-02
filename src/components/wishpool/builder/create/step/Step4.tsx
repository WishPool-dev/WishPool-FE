import Calendar from '@/components/common/Calendar';
import Question from '@/components/common/Form/Question';

const Step4 = () => {
  return (
    <>
      <Question
        required={true}
        question="참여자의 선물 리스트를 언제까지 받을까요?"
      />

      <div className="mt-[3.2rem]">
        <p className="subtitle2 text-text max-w-[430px]">선물 리스트 마감일</p>
        <Calendar name="birthDay" />
      </div>
    </>
  );
};

export default Step4;

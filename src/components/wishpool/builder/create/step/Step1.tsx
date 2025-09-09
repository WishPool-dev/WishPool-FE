import BasicInputField from '@/components/common/Form/BasicInputField';
import CalendarField from '@/components/common/Form/CalendarField';
import Question from '@/components/common/Form/Question';

const Step1 = () => {
  return (
    <section className="pb-[30rem]">
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
    </section>
  );
};

export default Step1;

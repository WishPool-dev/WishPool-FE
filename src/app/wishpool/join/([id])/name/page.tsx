import Button from '@/components/common/Button';
import BasicInputField from '@/components/common/Form/BasicInputField';
import Question from '@/components/common/Form/Question';
const page = () => {
  return (
    <>
      <Question required={true} question="참여자 본인의 이름을 알려주세요." />
      <div className="mt-[4rem]">
        <BasicInputField
          label="본인 이름"
          placeholder="본인의 이름을 알려 주세요."
          maxLength={20}
        />
      </div>
      <div className="fixed inset-x-0 bottom-0 mx-auto w-full max-w-[430px] flex-col items-center justify-center p-[2rem]">
        <div className="flex justify-between gap-[1.3rem]">
          <Button
            textColor="black"
            backgroundColor="light"
            textSize="sm"
            // onClick={() => {}}
          >
            이전
          </Button>
          <Button
            textSize="sm"
            // onClick={() => {}}
          >
            다음
          </Button>
        </div>
      </div>
    </>
  );
};

export default page;

'use client';
import Button from '@/components/common/Button';
import GiftField from '@/components/common/Form/GiftField';
import Question from '@/components/common/Form/Question';
import Icon from '@/components/common/Icon';
const page = () => {
  return (
    <>
      <Question required={true} question="주고 싶은 선물을 제안해 주세요." />
      <div className="mt-[4rem]">
        <GiftField
          label="선물 1"
          placeholder="선물 이름을 알려 주세요."
          maxLength={20}
        />
      </div>
      <div className="mt-[3.2rem]">
        <GiftField
          label="선물 2"
          placeholder="선물 이름을 알려 주세요."
          maxLength={20}
        />
      </div>

      <button
        className="mt-[3.2rem] flex h-[5.6rem] w-full items-center justify-center rounded-[12px] border border-gray-600 bg-transparent"
        type="button"
        onClick={() => {}}
      >
        <div className="flex items-center gap-4">
          <Icon
            name="plus"
            title="선물 추가 버튼 아이콘"
            className="text-text"
          />
          <span className="text-text title1">선물 더 추가</span>
        </div>
      </button>

      <div className="fixed inset-x-0 bottom-0 mx-auto mt-[3.2rem] w-full max-w-[430px] flex-col items-center justify-center p-[2rem]">
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

'use client';
import { useRouter } from 'next/navigation';

import Button from '@/components/common/Button';
import BasicInputField from '@/components/common/Form/BasicInputField';
import Question from '@/components/common/Form/Question';
import { PATH } from '@/constants/common/path';
const NamePage = () => {
  const router = useRouter();
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
            onClick={() => {
              router.push(PATH.JOIN_GIFTS);
            }}
          >
            이전
          </Button>
          <Button
            textSize="sm"
            onClick={() => {
              router.push(PATH.JOIN_ADD);
            }}
          >
            다음
          </Button>
        </div>
      </div>
    </>
  );
};

export default NamePage;

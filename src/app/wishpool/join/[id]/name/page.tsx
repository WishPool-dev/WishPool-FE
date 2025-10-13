'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import Button from '@/components/common/Button';
import BaseInput from '@/components/common/Form/BaseInput';
import Question from '@/components/common/Form/Question';
import { PATH } from '@/constants/common/path';

const NamePage = () => {
  const router = useRouter();
  const [name, setName] = useState({ participant: '' });
  const STORAGE_KEY = 'wishpool_participant';

  const wishpoolId = Number(sessionStorage.getItem('wishpoolId'));

  useEffect(() => {
    const initialParticipant = sessionStorage.getItem(STORAGE_KEY) || '';
    setName({
      participant: initialParticipant,
    });
  }, []);

  const handleInputChange = (name: string, value: string) => {
    setName({ participant: value });
  };

  const isNextDisabled = name.participant.trim() === '';

  return (
    <>
      <Question required={true} question="참여자 본인의 이름을 알려주세요." />
      <div className="mt-[4rem]">
        <div className="subtitle2 text-text mb-[0.8rem] max-w-[430px]">
          본인 이름
        </div>
        <BaseInput
          name="participant"
          placeholder="본인의 이름을 알려 주세요."
          maxLength={20}
          onChange={handleInputChange}
          value={name.participant}
        />
      </div>

      <div className="fixed inset-x-0 bottom-0 flex w-full justify-between gap-[1.3rem] p-[2rem]">
        <Button
          textColor="black"
          backgroundColor="light"
          textSize="sm"
          onClick={() => {
            router.push(PATH.JOIN_GIFTS(wishpoolId));
          }}
        >
          이전
        </Button>
        <Button
          textSize="sm"
          onClick={() => {
            router.push(PATH.JOIN_ADD(wishpoolId));
          }}
          disabled={isNextDisabled}
        >
          다음
        </Button>
      </div>
    </>
  );
};

export default NamePage;

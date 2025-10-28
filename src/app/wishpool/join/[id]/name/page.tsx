'use client';
import { useState, useEffect } from 'react';

import BaseInput from '@/components/common/Form/BaseInput';
import Question from '@/components/common/Form/Question';
import ButtonContainer from '@/components/wishpool/builder/create/ButtonContainer';
import { PATH } from '@/constants/common/path';
import { useGetWishpoolId } from '@/hooks/common/useGetWishpoolId';

const NamePage = () => {
  const [name, setName] = useState({ participant: '' });
  const STORAGE_KEY = 'wishpool_participant';

  const wishpoolId = useGetWishpoolId();

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

      <ButtonContainer
        isNextDisabled={isNextDisabled}
        back={PATH.JOIN_GIFTS(wishpoolId)}
        next={PATH.JOIN_ADD(wishpoolId)}
      />
    </>
  );
};

export default NamePage;

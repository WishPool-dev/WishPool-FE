'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { usePatchSelectionUrl } from '@/api/domain/detail/hooks';
import Button from '@/components/common/Button';
import Calendar from '@/components/common/Calendar';
import Question from '@/components/common/Form/Question';
import Icon from '@/components/common/Icon';
import UserTag from '@/components/common/UserTag';
import { PATH } from '@/constants/common/path';
import { useGetWishpoolId } from '@/hooks/common/useGetWishpoolId';

const DatePage = () => {
  const router = useRouter();
  const wishpoolId = useGetWishpoolId();

  const [endDate, setEndDate] = useState('');
  const mutation = usePatchSelectionUrl();

  useEffect(() => {
    const initialEndDate = sessionStorage.getItem('wishpool_endDate') || '';
    setEndDate(initialEndDate);
  }, []);

  const handleInputChange = (name: string, date: string) => {
    setEndDate(date);
  };

  const handleSubmit = async () => {
    if (!wishpoolId || !endDate) return;

    try {
      const res = await mutation.mutateAsync({
        wishpoolId,
        pickDate: endDate,
      });

      const chosenURL = res.chosenURL;
      sessionStorage.setItem('chosenURL', chosenURL);
      router.push(PATH.WISHPOOL_INVITE(wishpoolId));
    } catch {
      alert('선물 고르기 마감일 설정에 실패했습니다.');
    }
  };

  return (
    <>
      <Question
        question="생일인 친구가 언제까지 선물을 고를까요?"
        required={true}
      />
      <div className="mt-[4.2rem]">
        <div className="flex flex-row gap-[1.2rem]">
          <UserTag>생일자</UserTag>
          <p className="subtitle2 text-text mb-[0.8rem] max-w-[430px]">
            선물 고르기 마감일
          </p>
        </div>
        <Calendar name="endDate" onChange={handleInputChange} value={endDate} />
      </div>
      <div className="mt-[1.2rem] flex flex-row gap-[1.2rem]">
        <Icon name="alert" width={16} height={16} />
        <p className="caption3 justify-start leading-none text-gray-600">
          생일자가 선물을 고를 수 있는 날짜예요. 그때까지만 위시풀을 열어둘게요!
        </p>
      </div>
      <div className="fixed right-0 bottom-[2rem] left-0 mx-auto max-w-[43rem] px-[2rem]">
        <Button onClick={handleSubmit}>보내기</Button>
      </div>
    </>
  );
};

export default DatePage;

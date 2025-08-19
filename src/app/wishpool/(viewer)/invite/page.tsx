'use client';
import { useState } from 'react';

import Button from '@/components/common/Button';
import CalendarField from '@/components/common/Form/CalendarField';
import Question from '@/components/common/Form/Question';
import Icon from '@/components/common/Icon';
import WishpoolShareSection from '@/components/common/WishpoolShareSection';

const InvitePage = () => {
  const [isSent, setIsSent] = useState(false);
  const handleSubmit = () => {
    setIsSent(true);
    //link 요청하는 api 호출 코드 추가
  };
  const linkurl = 'https://wishpool.store/${wishpoolId}'; // 백엔드에서 제공하는 링크로 변경 필요
  const target = 'celebrant';

  return (
    <>
      {isSent ? (
        <WishpoolShareSection linkUrl={linkurl} shareTarget={target} />
      ) : (
        <>
          <DateSelectionSection onSubmit={handleSubmit} />
        </>
      )}
    </>
  );
};

export default InvitePage;

const DateSelectionSection = ({ onSubmit }: { onSubmit: () => void }) => {
  return (
    <>
      <Question
        question="생일인 친구가 언제까지 선물을 고를까요?"
        required={true}
      />
      <div className="mt-[4.2rem]">
        <CalendarField label="선물 고르기 마감일" tag="생일자" />
      </div>
      <div className="mt-[1.2rem] flex flex-row gap-[1.2rem]">
        <Icon name="alert" width={16} height={16} />
        <p className="caption3 justify-start leading-none text-gray-600">
          생일자가 선물을 고를 수 있는 날짜예요. 그때까지만 위시풀을 열어둘게요!
        </p>
      </div>
      <div className="fixed right-0 bottom-[2rem] left-0 mx-auto max-w-[43rem] px-[2rem]">
        <Button onClick={onSubmit}>보내기</Button>
      </div>
    </>
  );
};

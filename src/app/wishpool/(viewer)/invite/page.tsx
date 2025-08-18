'use client';
import { useState } from 'react';

import share from '@/assets/images/share.png';
import Button from '@/components/common/Button';
import FormField from '@/components/common/FormField';
import Icon from '@/components/common/Icon';
import Question from '@/components/common/Question';
import ShareComponent from '@/components/wishpool/viewer/invite/ShareComponent';
const InvitePage = () => {
  const [isSent, setIsSent] = useState(false);
  const handleSubmit = () => {
    setIsSent(true);
  };
  const shareProps = {
    title: '위시풀 완성!',
    description: '이제 생일인 친구가 선물을 고를 수 있어요!',
    imgSrc: share,
    imgAlt: '초대 단계 이미지',
    linkTitle: '위시풀 링크',
    linkUrl: 'https://WishPool/gift/to-you',
    linkDescription: '생일자에게 위시풀 링크를 공유해 주세요!',
  };
  return (
    <>
      {isSent ? (
        <ShareComponent {...shareProps} />
      ) : (
        <>
          <Question
            question="생일인 친구가 언제까지 선물을 고를까요?"
            required={true}
          />
          <div className="mt-[4.2rem]">
            <FormField
              mode="calendar"
              label="선물 고르기 마감일"
              tag="생일자"
            />
          </div>
          <div className="mt-[1.2rem] flex flex-row gap-[1.2rem]">
            <Icon name="alert" width={16} height={16} />
            <p className="caption3 justify-start leading-none text-gray-600">
              생일자가 선물을 고를 수 있는 날짜예요. 그때까지만 위시풀을
              열어둘게요!
            </p>
          </div>
          <div className="fixed right-0 bottom-[2rem] left-0 mx-auto max-w-[43rem] px-[2rem]">
            <Button onClick={handleSubmit}>보내기</Button>
          </div>
        </>
      )}
    </>
  );
};

export default InvitePage;

'use client';
import Image from 'next/image';
import { useState } from 'react';

import invite from '@/assets/images/invite.png';
import Button from '@/components/common/Button';
import CalendarField from '@/components/common/Form/CalendarField';
import Question from '@/components/common/Form/Question';
import Icon from '@/components/common/Icon';
import WishpoolShareSection from '@/components/common/WishpoolShareBox';
import { ShareSectionType } from '@/types/common/ShareSectionType';

const InvitePage = () => {
  const [showShare, setShowShare] = useState(false);

  const handleSubmit = () => {
    setShowShare(true);
  };

  const url = 'https://wishpool.store/${wishpoolId}';
  const content = 'invite' as ShareSectionType;

  return (
    <>
      {showShare ? (
        <ShareSection url={url} content={content} />
      ) : (
        <>
          <DateSelectionSection onSubmit={handleSubmit} />
        </>
      )}
    </>
  );
};

export default InvitePage;

const ShareSection = ({
  url,
  content,
}: {
  url: string;
  content: ShareSectionType;
}) => (
  <>
    <div className="flex flex-col items-center pt-[2rem]">
      <h3 className="text-text head1">위시풀 완성!</h3>
      <p className="text-text body1 mt-[0.4rem]">
        이제 생일인 친구가 선물을 고를 수 있어요!
      </p>
    </div>

    <div className="mt-[3.8rem] flex items-center justify-center">
      <Image
        src={invite}
        alt="위시풀 공유 완료 일러스트"
        width={180}
        height={180}
      />
    </div>

    <WishpoolShareSection linkUrl={url} linkContent={content} />
  </>
);

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

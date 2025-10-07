'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import invite from '@/assets/images/invite.png';
import WishpoolShareSection from '@/components/common/WishpoolShareBox';
import { ShareSectionType } from '@/types/common/ShareSectionType';

const SharePage = () => {
  const content = 'invite' as ShareSectionType;

  const [linkUrl, setLinkUrl] = useState('');

  useEffect(() => {
    const url =
      typeof window !== 'undefined'
        ? sessionStorage.getItem('wishpool_invite_link')
        : null;

    setLinkUrl(url ?? '');
  }, []);
  sessionStorage.removeItem('wishpool_invite_link');
  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="text-text head1">생일자를 위한 위시풀이 열렸어요!</h2>
        <p className="text-text body1 mt-[0.4rem]">
          이제 리스트를 함께 만들 참여자들을 모집해요.
        </p>
      </div>
      <div className="mt-[3.6rem] flex items-center justify-center">
        <Image
          src={invite}
          alt="위시풀 공유 완료 일러스트"
          width={180}
          height={180}
        />
      </div>

      <WishpoolShareSection linkUrl={linkUrl} linkContent={content} />
    </>
  );
};

export default SharePage;

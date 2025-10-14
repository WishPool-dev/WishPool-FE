'use client';
import Image from 'next/image';
import { useEffect } from 'react';

import invite from '@/assets/images/invite.png';
import WishpoolShareSection from '@/components/common/WishpoolShareBox';
import { PATH } from '@/constants/common/path';
import { ShareSectionType } from '@/types/common/ShareSectionType';

const getOrigin = () => {
  if (typeof window !== 'undefined') return window.location.origin;
  return process.env.NEXT_PUBLIC_API_URL;
};

const InvitePage = () => {
  const content = 'invite' as ShareSectionType;

  const chosenURL = sessionStorage.getItem('chosenURL') || '';
  const origin = getOrigin();
  const inviteUrl = `${origin}${PATH.PICK_INVITE}?chosenUrl=${chosenURL}`;

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
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

      <WishpoolShareSection linkUrl={inviteUrl} linkContent={content} />
    </>
  );
};

export default InvitePage;

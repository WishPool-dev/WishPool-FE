'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import { useGetWishpoolJoinUrl } from '@/api/domain/form/hooks';
import invite from '@/assets/images/invite.png';
import WishpoolShareSection from '@/components/common/WishpoolShareBox';
import { PATH } from '@/constants/common/path';
import { ShareSectionType } from '@/types/common/ShareSectionType';

const getOrigin = () => {
  if (typeof window !== 'undefined') return window.location.origin;
  return process.env.NEXT_PUBLIC_API_URL;
};

const SharePage = () => {
  const content = 'invite' as ShareSectionType;
  const [wishpoolId, setWishpoolId] = useState<number | undefined>(undefined);

  useEffect(() => {
    const raw = sessionStorage.getItem('wishpoolId');
    const n = raw ? Number(raw) : NaN;
    setWishpoolId(Number.isFinite(n) && n > 0 ? n : undefined);
  }, []);
  console.log('1. 세션 스토리지에서 가져온 wishpoolId:', wishpoolId);

  const { data } = useGetWishpoolJoinUrl(wishpoolId ?? 0);
  const origin = getOrigin();

  console.log('3. 초대 URL 데이터:', data);

  const inviteUrl =
    wishpoolId && data
      ? `${origin}${PATH.JOIN_INFO(wishpoolId)}?shareIdentifier=${data?.shareIdentifier}`
      : '';

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

      <WishpoolShareSection linkUrl={inviteUrl} linkContent={content} />
    </>
  );
};

export default SharePage;

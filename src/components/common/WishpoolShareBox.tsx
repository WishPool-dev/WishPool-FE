'use client';
import { useState } from 'react';

import Toast from '@/components/common/Toast';
import { ShareSectionType } from '@/types/common/ShareSectionType';
import copyText from '@/utils/wishpool/viewer/copyText';

import KakaoButton from './Button/KakaoButton';

const WISHPOOL_SHARE_CONTENT = {
  invite: {
    linkTitle: '위시풀 초대장',
    linkDescription: '위시풀 만들기에 참여해 줄 친구들에게 공유해 주세요!',
  },
  share: {
    linkTitle: '위시풀 링크',
    linkDescription: '생일자에게 위시풀 링크를 공유해 주세요!',
  },
};

interface ShareComponentProps {
  linkUrl: string;
  linkContent: ShareSectionType;
}

const WishpoolShareBox = ({ linkUrl, linkContent }: ShareComponentProps) => {
  const [toast, setToast] = useState(false);

  const { linkTitle, linkDescription } = WISHPOOL_SHARE_CONTENT[linkContent];

  const handleCopyUrl = async () => {
    const ok = await copyText(linkUrl);
    if (ok) {
      setToast(true);
      setTimeout(() => setToast(false), 2500);
    } else {
      console.error('링크 복사에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <>
      {toast && <Toast>링크가 복사되었습니다!</Toast>}
      <section className="bg-background-02 mt-[3.6rem] h-[19.2rem] w-full rounded-[12px] p-[2rem]">
        <h3 className="subtitle2 text-text ml-[0.6rem]">{linkTitle}</h3>
        <div className="mt-[1.1rem] flex h-[4.9rem] w-full items-center justify-between gap-[1.2rem] rounded-[12px] bg-white px-[1.2rem] py-[0.8rem]">
          <p className="body2 ml-[0.8rem] truncate text-gray-600">{linkUrl}</p>
          <button
            className="flex h-[3.3rem] items-center justify-center rounded-[6px] border border-gray-400 px-[1.2rem] py-[0.8rem]"
            onClick={handleCopyUrl}
          >
            <span className="text-text title3 shrink-0">링크 복사</span>
          </button>
        </div>
        <div className="mt-[1.2rem]">
          <KakaoButton />
        </div>
      </section>
      <p className="body2 mt-[2.8rem] text-center text-gray-600">
        {linkDescription}
      </p>
    </>
  );
};

export default WishpoolShareBox;

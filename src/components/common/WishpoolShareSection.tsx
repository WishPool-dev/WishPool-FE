'use client';
import Image from 'next/image';
import { useState } from 'react';

import invite from '@/assets/images/invite.png';
import share from '@/assets/images/share.png';
import IconButton from '@/components/common/Button/IconButton';
import Icon from '@/components/common/Icon';
import Toast from '@/components/common/Toast';
import { ShareTarget } from '@/types/common/shareTarget';

const WISHPOOL_SHARE_CONTENT = {
  participants: {
    title: '생일자를 위한 위시풀이 열렸어요!',
    description: '이제 리스트를 함께 만들 참여자들을 모집해요.',
    imgSrc: invite,
    imgAlt: '초대 단계 이미지',
    linkTitle: '위시풀 초대장',
    linkDescription: '위시풀 만들기에 참여해 줄 친구들에게 공유해 주세요!',
  },
  celebrant: {
    title: '위시풀 완성!',
    description: '이제 생일인 친구가 선물을 고를 수 있어요!',
    imgSrc: share,
    imgAlt: '위시풀 공유 완료 일러스트',
    linkTitle: '위시풀 링크',
    linkDescription: '생일자에게 위시풀 링크를 공유해 주세요!',
  },
};

interface ShareComponentProps {
  linkUrl: string;
  shareTarget: ShareTarget;
}

const WishpoolShareSection = ({
  linkUrl,
  shareTarget,
}: ShareComponentProps) => {
  const [toast, setToast] = useState(false);

  const { title, description, imgSrc, imgAlt, linkTitle, linkDescription } =
    WISHPOOL_SHARE_CONTENT[shareTarget];

  const handleCopyUrl = () => {
    navigator.clipboard
      .writeText(linkUrl)
      .then(() => {
        setToast(true);
        setTimeout(() => setToast(false), 2500);
      })
      .catch((error) => {
        console.error('링크 복사에 실패했습니다. 다시 시도해주세요.', error);
      });
  };

  return (
    <>
      {toast && <Toast>링크가 복사되었습니다!</Toast>}
      <div className="mt-[2.8rem] flex flex-col items-center">
        <h3 className="text-text head1">{title}</h3>
        <p className="text-text body1 mt-[0.4rem]">{description}</p>
      </div>
      <div className="mt-[3.8rem] flex items-center justify-center">
        <Image src={imgSrc} alt={imgAlt} width={180} height={180} />
      </div>

      <div className="bg-background-02 mt-[3.6rem] h-[19.2rem] w-full rounded-[12px] p-[2rem]">
        <p className="subtitle2 text-text ml-[0.6rem]">{linkTitle}</p>
        <div className="mt-[1.1rem] flex h-[4.9rem] w-full items-center justify-between gap-[1.2rem] rounded-[12px] bg-white px-[1.2rem] py-[0.8rem]">
          <p className="body2 ml-[0.8rem] text-gray-600">{linkUrl}</p>
          <button
            className="flex h-[3.3rem] items-center justify-center rounded-[6px] border border-gray-400 px-[1.2rem] py-[0.8rem]"
            onClick={handleCopyUrl}
          >
            <span className="text-text title3">링크 복사</span>
          </button>
        </div>
        <div className="mt-[1.2rem]">
          <IconButton textSize="md">
            <Icon name="kakao" title="카카오톡 아이콘" />
            <span>카카오톡으로 공유하기</span>
          </IconButton>
        </div>
      </div>
      <p className="body2 mt-[2.8rem] text-center text-gray-600">
        {linkDescription}
      </p>
    </>
  );
};

export default WishpoolShareSection;

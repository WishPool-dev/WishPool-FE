import Icon from '@/components/common/Icon';
import { ShareSectionType } from '@/types/common/ShareSectionType';

type KakaoButtonProps = {
  shareType: ShareSectionType;
  linkUrl: string;
};

const SHARE_CONTENTS: Record<
  ShareSectionType,
  {
    title: string;
    description: string;
    buttonTitle: string;
  }
> = {
  invite: {
    title: '위시풀 초대장 도착!',
    description: '친구야, 위시풀 만들기에 참여해 줄래?',
    buttonTitle: '위시풀 만들러 가기',
  },
  share: {
    title: '나의 위시풀 링크입니다.',
    description: '생일자에게 공유하고 선물을 골라보세요!',
    buttonTitle: '선물 제안하러 가기',
  },
  complete: {
    title: '🎉 위시풀 완료 안내 🎉',
    description: '모두가 함께한 위시풀 결과를 확인하세요!',
    buttonTitle: '결과 확인하기',
  },
};

const KakaoButton = ({ shareType, linkUrl }: KakaoButtonProps) => {
  const handleKakaoShare = () => {
    const content = SHARE_CONTENTS[shareType];

    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: content.title,
        description: content.description,
        imageUrl: `${window.location.origin}/share.png`,
        link: {
          mobileWebUrl: linkUrl,
          webUrl: linkUrl,
        },
      },
      buttons: [
        {
          title: content.buttonTitle,
          link: {
            mobileWebUrl: linkUrl,
            webUrl: linkUrl,
          },
        },
      ],
    });
  };

  return (
    <button
      className="bg-kakao-color relative flex h-[5.6rem] w-full items-center rounded-[12px] p-[1.6rem]"
      onClick={handleKakaoShare}
    >
      <div className="absolute left-[1.6rem]">
        <Icon name="kakao" width={21} height={20} />
      </div>
      <span className="title2 text-text mx-auto">카카오톡으로 공유하기</span>
    </button>
  );
};

export default KakaoButton;

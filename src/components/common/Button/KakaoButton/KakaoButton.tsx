import Icon from '@/components/common/Icon';
import { ShareSectionType } from '@/types/common/ShareSectionType';

type KakaoButtonProps = {
  shareType: ShareSectionType;
  linkUrl: string;
  name: string;
};

const getShareContents = (
  name: string,
): Record<
  ShareSectionType,
  {
    title: string;
    description: string;
    buttonTitle: string;
  }
> => ({
  invite: {
    title: `${name}님의 위시풀 초대장`,
    description:
      '친구 선물, 같이 고민해볼래?\n' +
      `${name}님이 위시풀 참여 초대장을 보냈어요.`,
    buttonTitle: '참여하기',
  },
  share: {
    title: `${name}님을 위한 위시리스트`,
    description:
      '친구들이 준비한 선물 리스트가 도착했어요.\n받고 싶은 선물을 골라주세요!',
    buttonTitle: '선물 고르기',
  },
  complete: {
    title: '위시풀 완료 🎉',
    description: `함께 고른 선물이 정해졌어요!\n${name}님의 선택 결과를 확인해보세요.`,
    buttonTitle: '결과 확인하기',
  },
});

const KakaoButton = ({ shareType, linkUrl, name }: KakaoButtonProps) => {
  const handleKakaoShare = () => {
    const content = getShareContents(name)[shareType];

    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: content.title,
        description: content.description,
        imageUrl: `${window.location.origin}/images/share-card.png`,
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

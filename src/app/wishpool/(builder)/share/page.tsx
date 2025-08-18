import invite from '@/assets/images/invite.png';
import ShareComponent from '@/components/common/ShareComponent';

const shareProps = {
  title: '생일자를 위한 위시풀이 열렸어요!',
  description: '이제 리스트를 함께 만들 참여자들을 모집해요.',
  imgSrc: invite,
  imgAlt: '초대 단계 이미지',
  linkTitle: '위시풀 초대장',
  linkUrl: 'https://WishPool/gift/to-you',
  linkDescription: '위시풀 만들기에 참여해 줄 친구들에게 공유해 주세요!',
};

const SharePage = () => {
  return (
    <>
      <ShareComponent {...shareProps} />
    </>
  );
};

export default SharePage;

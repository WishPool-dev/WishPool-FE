import Image from 'next/image';

import { useGetProfile } from '@/api/domain/mypage/hooks';
import GiftCardImage from '@/assets/images/gift-card.png';

const Profile = () => {
  const { data: profileData } = useGetProfile();

  const displayImage =
    profileData?.profileUrl && !profileData.profileUrl.includes('default')
      ? profileData.profileUrl
      : GiftCardImage;
  return (
    <div className="bg-background-01 flex items-center gap-[2rem] px-[2rem] py-[1.6rem]">
      <Image
        src={displayImage}
        alt="프로필 이미지"
        width={60}
        height={60}
        className="rounded-full"
      />
      <span className="text-text head1">{profileData?.nickName}</span>
    </div>
  );
};

export default Profile;

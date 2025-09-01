import Image from 'next/image';

import share from '@/assets/images/share.png';
import WishpoolShareSection from '@/components/common/WishpoolShareBox';
import { ShareSectionType } from '@/types/common/ShareSectionType';

const SharePage = () => {
  const url = 'https://wishpool.store/${wishpoolId}';
  const content = 'share' as ShareSectionType;

  return (
    <>
      <div className="mt-[2.8rem] flex flex-col items-center">
        <h3 className="text-text head1">생일자를 위한 위시풀이 열렸어요!</h3>
        <p className="text-text body1 mt-[0.4rem]">
          이제 리스트를 함께 만들 참여자들을 모집해요.
        </p>
      </div>
      <div className="mt-[3.8rem] flex items-center justify-center">
        {/* TODO: 이미지 변경해야됨 */}
        <Image
          src={share}
          alt="위시풀 공유 완료 일러스트"
          width={180}
          height={180}
        />
      </div>

      <WishpoolShareSection linkUrl={url} linkContent={content} />
    </>
  );
};

export default SharePage;

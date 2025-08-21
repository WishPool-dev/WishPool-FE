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
        <h3 className="text-text head1">위시풀 완성!</h3>
        <p className="text-text body1 mt-[0.4rem]">
          이제 생일인 친구가 선물을 고를 수 있어요!
        </p>
      </div>
      <div className="mt-[3.8rem] flex items-center justify-center">
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

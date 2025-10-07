import Image from 'next/image';
import Link from 'next/link';

import ErrorImage from '@/assets/images/error.png';
import { PATH } from '@/constants/common/path';

const NotFoundPage = () => {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center gap-[2rem]">
      <Image src={ErrorImage} alt="에러 이미지" width={130} height={114} />
      <div className="text-text title1 text-center">
        <p>페이지를 찾을 수 없어요.</p>
        <p>다시 한번 주소를 확인해주세요.</p>
      </div>
      <Link
        href={PATH.HOME}
        className="title1 bg-text mt-[2rem] justify-center rounded-[12px] px-[4.5rem] py-[1.4rem] text-white"
      >
        홈으로 가기
      </Link>
    </div>
  );
};

export default NotFoundPage;

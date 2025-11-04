'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import introEmptyBox from '@/assets/images/empty-box-color.png';
import IconButton from '@/components/common/Button/IconButton';
import Icon from '@/components/common/Icon';
import InfoBox from '@/components/common/InfoBox/InfoBox';
import { PATH } from '@/constants/common/path';

const Page = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(PATH.WISHPOOL_CREATE_STEP1);
  };

  return (
    <>
      <h1 className="head1 text-text mb-[0.4rem]">
        친구를 위한 선물 위시리스트, <br /> 위시풀을 함께 만들어보세요!
      </h1>
      <h2 className="body1 text-text">단계별 항목에 응답해주세요.</h2>

      <Image
        src={introEmptyBox}
        width={173}
        height={129}
        alt="위시풀 박스 사진"
        className="mx-auto mt-[4.2rem] mb-[2rem] h-[18rem] w-[18rem] object-cover"
      />
      <div className="mb-[10rem]">
        <InfoBox />
      </div>

      <div className="fixed right-0 bottom-[2rem] left-0 mx-auto max-w-[43rem] px-[2rem]">
        <IconButton onClick={handleClick}>
          <Icon name="giftButton" title="선물 버튼 아이콘" />
          <span>시작</span>
        </IconButton>
      </div>
    </>
  );
};

export default Page;

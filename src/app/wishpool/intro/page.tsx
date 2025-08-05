'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import introEmptyBox from '@/assets/images/intro-empty-box.png';
import Icon from '@/components/common/Icon';
import IconButton from '@/components/common/IconButton';
import { InfoNotice } from '@/components/wishpool/form/intro/InfoNotice';
import { PATH } from '@/constants/common/path';
import { INFO_NOTICE_LIST } from '@/constants/wishpool/form/infoNoticeList';

const Page = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(PATH.WISHPOOL_CREATE);
  };

  return (
    <>
      <div className="px-[2rem]">
        <h1 className="head1 text-text mb-[0.4rem]">
          친구를 위한 선물 위시리스트, <br /> 위시풀을 함께 만들어보세요!
        </h1>
        <h2 className="body1 text-text">단계별 항목에 응답해주세요.</h2>

        <Image
          src={introEmptyBox}
          alt="위시풀 박스 사진"
          className="mx-auto my-[4.2rem] h-[18rem] w-[18rem] object-cover"
        />

        <section className="bg-background-01 rounded-[16px] p-[2rem]">
          <h3 className="text-blue-primary title3 mb-[1.2rem]">
            WishpooL만의 위시풀 만들기란?
          </h3>
          <p className="caption2 mb-[2rem] text-gray-800">
            위시풀은 참여자들이 생일자를 위해 각자의 선물을 제안하고, <br />
            생일자가 그 중 원하는 상품을 고르는 공동 제작 위시리스트에요.
          </p>
          <div className="space-y-[1.2rem]">
            {INFO_NOTICE_LIST.map(({ title, content }, index) => (
              <InfoNotice key={index} accordionContent={content}>
                {title}
              </InfoNotice>
            ))}
          </div>
        </section>

        <div className="fixed right-0 bottom-[2rem] left-0 mx-auto max-w-[43rem] px-[2rem]">
          <IconButton onClick={handleClick}>
            <Icon name="giftButton" title="선물 버튼 아이콘" />
            <span>시작</span>
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default Page;

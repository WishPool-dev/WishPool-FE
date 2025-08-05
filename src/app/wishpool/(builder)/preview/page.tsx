'use client';

import { useRouter } from 'next/navigation';

import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import UserTag from '@/components/common/UserTag';
import { PATH } from '@/constants/common/path';

const PreviewPage = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleComplete = () => {
    router.push(PATH.WISHPOOL_SHARE);
  };

  return (
    <section className="mt-[2.8rem] pb-[15rem]">
      <p className="caption1 text-blue-primary h-[1.8rem] max-w-[430px]">
        최종 점검
      </p>
      <p className="head1 text-text h-[3.2rem] max-w-[430px] pt-[0.4rem]">
        위시풀의 정보를 확인해 주세요.
      </p>

      <div className="bg-background-02 text-text body1 mt-[3.8rem] flex h-[5.6rem] flex-row items-center justify-between rounded-[12px] px-[1.6rem] py-[0.8rem]">
        <span className="flex flex-row gap-[1.2rem]">
          <UserTag>생일자</UserTag>
          홍길동
        </span>
        <span className="flex flex-row gap-[1rem]">
          <Icon name="birthday" /> 2025/06/23
        </span>
      </div>

      <img
        src="/images/wishpool-card.svg"
        className="mt-[1.2rem] h-[19.9rem] w-full rounded-[12px] object-cover"
        alt="이벤트 카드 이미지"
      />

      <div className="bg-background-02 body2 mt-[1.2rem] inline-block w-full rounded-[12px] p-[1.6rem] break-words">
        <div className="flex flex-row gap-[1.2rem]">
          <span className="flex-shrink-0 text-gray-600">소개</span>
          <p className="text-gray-800">
            얘들아 길동이가 이번에 생일이더라고! 지난 학기에 길동이가 우리
            팀에서 여러가지 일로 고생해줬으니 우리가 간단히라도 돈 모아서
            선물해주면 어떨까 싶어서! 위시풀로 길동이 갖고싶은 것 보고 구매해서
            감동주자!
          </p>
        </div>
      </div>

      <div className="my-[2.8rem] w-full border-b border-gray-300"></div>
      <div className="bg-background-02 text-text body1 flex h-[5.6rem] flex-row items-center justify-between rounded-[12px] px-[1.6rem] py-[0.8rem]">
        <span className="flex flex-row gap-[1.2rem]">
          <UserTag>참여자</UserTag>
          선물 리스트 마감일
        </span>
        <span>2025/06/23</span>
      </div>
      <div className="fixed right-0 bottom-[2rem] left-0 mx-auto max-w-[43rem]">
        <div className="flex justify-between gap-[1rem] px-[2rem]">
          <Button
            textColor="black"
            backgroundColor="light"
            textSize="sm"
            onClick={handleBack}
          >
            수정하기
          </Button>
          <Button
            textColor="white"
            backgroundColor="dark"
            textSize="sm"
            onClick={handleComplete}
          >
            완료하기
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PreviewPage;

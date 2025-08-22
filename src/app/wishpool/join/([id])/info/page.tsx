'use client';

import { useRouter } from 'next/navigation';

import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import UserTag from '@/components/common/UserTag';
import { PATH } from '@/constants/common/path';

const InfoPage = () => {
  const router = useRouter();

  return (
    <>
      <div className="text-text">
        <h1 className="head1">
          00님이 보낸 <br />
          위시풀 초대장이 도착했어요! <br />
          <span className="text-blue-primary">홍길동</span>님의 선물을 함께
          고민해 볼까요?
        </h1>
      </div>
      <div className="relative mx-auto mt-[7.6rem] w-full max-w-[430px] rounded-[16px] bg-white py-[1.2rem]">
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Icon name="ribbon" width={120} height={75} />
        </div>
        <div className="flex h-[5.6rem] items-center justify-between px-[1.6rem] py-[0.8rem]">
          <div className="flex gap-[1.2rem]">
            <UserTag>생일자</UserTag>
            <span className="body1 text-text">홍길동</span>
          </div>
          <span className="body1 text-text flex flex-row gap-[1rem]">
            <Icon
              name="birthday"
              width={20}
              height={20}
              className="text-pink-1"
            />
            2025/06/23
          </span>
        </div>

        <img
          src="/images/wishpool-card.svg"
          width={430}
          height={240}
          className="w-full"
          alt="위시풀 대표 이미지"
        />
        <div className="body2 flex gap-[1.2rem] p-[1.6rem]">
          <span className="shrink-0 text-gray-600">소개</span>
          <p className="text-gray-800">
            얘들아 길동이가 이번에 생일이더라고! <br /> 지난 학기에 성빈이가
            우리 팀에서 여러가지 일로 고생해줬으니 우리가 간단히라도 돈 모아서
            선물해주면 어떨까 싶어서! <br /> 위시풀로 성빈이 갖고싶은 것 보고
            구매해서 감동주자!
          </p>
        </div>
      </div>

      <div className="bg-background-01 fixed inset-x-0 bottom-0 mx-auto inline-flex w-full max-w-[430px] flex-col items-center justify-center gap-[1.6rem] border-t border-gray-300 p-[2rem] pt-[1.6rem] pb-[2rem]">
        <p className="text-text caption1 text-center">
          참여 마감일: 2025/06/23 까지
        </p>

        <Button
          onClick={() => {
            router.push(PATH.JOIN_INTRO);
          }}
          type="button"
          backgroundColor="gradient"
          textSize="lg"
        >
          참여하기
        </Button>
      </div>
    </>
  );
};

export default InfoPage;

'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Button from '@/components/common/Button';
import UserTag from '@/components/common/UserTag';
import { PATH } from '@/constants/common/path';
const PreviewPage = () => {
  const router = useRouter();
  return (
    <>
      <div className="pt-[2.8rem]">
        <p className="caption1 text-blue-primary h-[1.8rem] max-w-[430px]">
          최종 점검
        </p>
        <p className="head1 text-text h-[3.2rem] max-w-[430px] pt-[0.4rem]">
          위시풀의 정보를 확인해 주세요.
        </p>

        <div className="bg-background-02 text-text body1 mt-[3.8rem] flex h-[5.6rem] items-center justify-between rounded-[12px] px-[1.6rem] py-[0.8rem]">
          <span className="flex flex-row gap-[1.2rem]">
            <UserTag>참여자</UserTag>
            김첨지
          </span>
        </div>

        <div className="bg-background-02 text-text mt-[1.2rem] rounded-[12px] p-[1.6rem]">
          <div className="body2 flex items-center justify-between">
            <span className="text-text">주고 싶은 선물</span>
            <span className="text-blue-primary">2개</span>
          </div>

          <section className="mt-[1.6rem] grid grid-cols-2 gap-[1.1rem]">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/gift-card.svg"
                alt="선물 카드 이미지"
                className="h-[12.6rem] w-[12.6rem] rounded-[12px]"
              />
              <span className="subtitle2 text-text mt-[0.7rem] mb-[1rem] line-clamp-2 h-[4.8rem] text-center">
                선물 1 이름
              </span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/gift-card.svg"
                alt="선물 카드 이미지"
                className="h-[12.6rem] w-[12.6rem] rounded-[12px]"
              />
              <span className="subtitle2 text-text mt-[0.7rem] mb-[1rem] line-clamp-2 h-[4.8rem] text-center">
                선물 1 이름
              </span>
            </div>
          </section>
          <div className="bg-background-01 fixed inset-x-0 bottom-0 mx-auto inline-flex w-full max-w-[430px] flex-col items-center justify-center gap-[1.6rem] border-t border-gray-300 p-[2rem] pt-[1.6rem] pb-[2rem]">
            <p className="caption1 text-center text-gray-600">
              참여 완료하면 수정할 수 없어요.
            </p>

            <div className="flex w-full justify-between gap-[1.3rem]">
              <Button
                textColor="black"
                backgroundColor="light"
                textSize="sm"
                onClick={() => {
                  router.push(PATH.JOIN_ADD);
                }}
              >
                이전
              </Button>
              <Button
                textSize="sm"
                onClick={() => {
                  router.push(PATH.JOIN_COMPLETE);
                }}
              >
                다음
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewPage;

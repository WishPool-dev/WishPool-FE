'use client';

import Image from 'next/image';

import Button from '@/components/common/Button';
import BasicInputField from '@/components/common/Form/BasicInputField';
import CalendarField from '@/components/common/Form/CalendarField';
import TextField from '@/components/common/Form/TextField';
import Icon from '@/components/common/Icon';

const EditPage = () => {
  const onClickHandler = () => {
    //TODO: 이미지 업로드 기능 추가
  };

  return (
    <>
      <section className="mt-[5.4rem] px-[2rem] pb-[16.9rem]">
        <div className="relative -mx-[2rem]">
          <Image
            src="/images/wishpool-card.svg"
            width={430}
            height={240}
            className="w-full"
            alt="위시풀 대표 이미지"
          />
          <div className="absolute inset-0 bg-black/20"></div>

          <button
            type="button"
            onClick={onClickHandler}
            className="absolute top-1/2 left-1/2 h-[7.2rem] w-[7.2rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70"
            aria-label="이미지 바꾸기"
          >
            <div className="relative flex h-full w-full flex-col items-center justify-center gap-[0.2rem]">
              <Icon
                name="photo"
                width={24}
                height={24}
                className="text-gray-600"
              />
              <p className="caption1 text-gray-600">바꾸기</p>
            </div>
          </button>
        </div>

        <span className="bg-background-02 caption2 mt-[2.8rem] inline-block rounded-[4px] px-[1.2rem] py-[0.6rem] text-gray-600">
          <span className="text-blue-primary">홍길동</span>에게 보내는 위시풀
        </span>
        <div className="mt-[2.8rem]">
          <BasicInputField maxLength={20} label="생일자 이름" />
        </div>
        <div className="mt-[2.8rem]">
          <CalendarField label="곧 다가올 생일" />
        </div>

        <hr className="bg-background-02 -mx-[2rem] my-[3.2rem] h-[0.8rem] max-w-[430px]" />

        <div className="mt-[4rem]">
          <TextField label="위시풀 제목" maxLength={200} />
        </div>
        <div className="mt-[2.8rem]">
          <CalendarField tag="참여자" label="선물 리스트 마감일" />
        </div>
      </section>
      <div className="fixed right-0 bottom-[2rem] left-0 mx-auto max-w-[43rem] px-[2rem]">
        <Button>저장하기</Button>
      </div>
    </>
  );
};

export default EditPage;

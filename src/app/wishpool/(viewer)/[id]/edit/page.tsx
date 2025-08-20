'use client';

import Image from 'next/image';

import Button from '@/components/common/Button';
import BasicInputField from '@/components/common/Form/BasicInputField';
import CalendarField from '@/components/common/Form/CalendarField';
import TextField from '@/components/common/Form/TextField';

const EditPage = () => {
  return (
    <>
      <section className="mt-[5.4rem] px-[2rem]">
        <div className="-mx-[2rem]">
          <Image
            src="/images/wishpool-card.svg"
            width={430}
            height={240}
            className="w-full"
            alt="위시풀 대표 이미지"
          />
        </div>
        <span className="bg-background-02 caption2 mt-[2.8rem] inline-block rounded-[4px] px-[1.2rem] py-[0.6rem] text-gray-600">
          <span className="text-blue-primary">홍길동</span>에게 보내는 위시풀
        </span>
        <div className="mt-[3.2rem]">
          <BasicInputField maxLength={20} label="생일자 이름" />
        </div>
        <div className="mt-[3.2rem]">
          <CalendarField label="곧 다가올 생일" />
        </div>
        <div className="mt-[4rem]">
          <TextField label="위시풀 제목" maxLength={200} />
        </div>
        <div className="mt-[3.2rem]">
          <CalendarField tag="참여자" label="선물 리스트 마감일" />
        </div>
        <div className="fixed right-0 bottom-[2rem] left-0 mx-auto max-w-[43rem] px-[2rem]">
          <Button>저장하기</Button>
        </div>
      </section>
    </>
  );
};

export default EditPage;

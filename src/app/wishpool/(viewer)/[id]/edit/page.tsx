'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import WishpoolCardImage from '@/assets/images/wishpool-card.png';
import Button from '@/components/common/Button';
import Calendar from '@/components/common/Calendar';
import BaseInput from '@/components/common/Form/BaseInput';
import TextField from '@/components/common/Form/TextField';
import Icon from '@/components/common/Icon';
import Toast from '@/components/common/Toast';
import UserTag from '@/components/common/UserTag';

const EditPage = () => {
  const [openToast, setOpenToast] = useState(false);
  const router = useRouter();

  const onClickHandler = () => {
    //TODO: 이미지 업로드 기능 추가
  };
  const handleSubmit = () => {
    setOpenToast(true);
    router.back();
  };

  const handleInputChange = () => {
    // TODO: 입력값 수정 기능 추가
  };

  return (
    <>
      {openToast && <Toast>위시풀이 수정되었어요.</Toast>}

      <div className="relative">
        <Image
          src={WishpoolCardImage}
          width={430}
          height={240}
          className="w-full"
          alt="위시풀 대표 이미지"
        />
        <div className="absolute inset-0 bg-black/20" />

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
            <span className="caption1 text-gray-600">바꾸기</span>
          </div>
        </button>
      </div>

      <div className="mb-[20rem] p-[2rem]">
        <span className="bg-background-02 caption2 inline-block rounded-[4px] px-[1.2rem] py-[0.6rem] text-gray-600">
          <span className="text-blue-primary">홍길동</span>에게 보내는 위시풀
        </span>
        <div className="mt-[2.8rem]">
          <div className="subtitle2 text-text mb-[0.8rem] max-w-[430px]">
            생일자 이름
          </div>
          <BaseInput
            name="celebrant"
            placeholder="생일자의 이름을 알려 주세요."
            maxLength={20}
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-[2.8rem]">
          <p className="subtitle2 text-text mb-[0.8rem] max-w-[430px]">
            곧 다가올 생일
          </p>
          <Calendar name="birthDay" />
        </div>

        <hr className="bg-background-02 -mx-[2rem] my-[3.2rem] h-[0.8rem] border-0" />

        <div className="mt-[4rem]">
          <p className="subtitle2 text-text mb-[0.8rem] max-w-[430px]">
            위시풀 소개
          </p>
          <TextField
            name="description"
            placeholder={`참여자가 이 소개글을 볼 수 있어요. 
생일자에게는 보이지 않아요.`}
            maxLength={200}
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-[2.8rem]">
          <div className="flex flex-row gap-[1.2rem]">
            <UserTag>참여자</UserTag>
            <p className="subtitle2 text-text mb-[0.8rem] max-w-[430px]">
              선물 리스트 마감일
            </p>
          </div>

          <Calendar name="endDate" />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[430px] p-[2rem]">
        <Button type="submit" onClick={handleSubmit}>
          저장하기
        </Button>
      </div>
    </>
  );
};

export default EditPage;

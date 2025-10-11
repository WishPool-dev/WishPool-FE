'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
  useGetWishpoolDetail,
  useGetWishpoolImage,
} from '@/api/domain/detail/hooks';
import { usePatchWishpool } from '@/api/domain/edit/hooks';
import WishpoolCardImage from '@/assets/images/wishpool-card.png';
import Button from '@/components/common/Button';
import Calendar from '@/components/common/Calendar';
import BaseInput from '@/components/common/Form/BaseInput';
import TextField from '@/components/common/Form/TextField';
import Icon from '@/components/common/Icon';
import Toast from '@/components/common/Toast';
import UserTag from '@/components/common/UserTag';
import { useGetWishpoolId } from '@/hooks/common/useGetWishpoolId';

const EditPage = () => {
  const router = useRouter();

  const [openToast, setOpenToast] = useState(false);

  // 폼 상태관리
  const [formData, setFormData] = useState({
    celebrant: '',
    birthDay: '',
    endDate: '',
    description: '',
    imageKey: '',
  });

  // 폼 초기 상태 및 이미지 받아오기
  const wishpoolId = useGetWishpoolId();
  const { data: detail } = useGetWishpoolDetail(wishpoolId);

  const { data: wishpoolImage } = useGetWishpoolImage(detail?.imageKey ?? '');

  const displayImageUrl = wishpoolImage?.key
    ? wishpoolImage?.key
    : WishpoolCardImage;

  useEffect(() => {
    if (detail) {
      setFormData({
        celebrant: detail.celebrant,
        birthDay: detail.birthDay,
        endDate: detail.endDate,
        description: detail.description,
        imageKey: detail.imageKey,
      });

      console.log(detail);
    }
  }, [detail]);

  const handleImageChange = () => {
    //TODO: 이미지 업로드 기능 추가
    // usePostWishpoolImage 로 key 받아서 formdata.imageKey에 넣기
  };

  // 버튼 누르면 수정 완료
  const updateMutation = usePatchWishpool();

  const handleSubmit = async () => {
    if (!wishpoolId) return;

    const payload = {
      celebrant: formData.celebrant,
      birthDay: formData.birthDay,
      endDate: formData.endDate,
      description: formData.description,
      imageKey: formData.imageKey,
    };

    try {
      await updateMutation.mutateAsync({ wishpoolId, payload });
      setOpenToast(true);
      setTimeout(() => router.back(), 1500);
    } catch (err) {
      console.error(err);
      alert('위시풀 수정에 실패했습니다.');
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {openToast && <Toast>위시풀이 수정되었어요.</Toast>}

      <div className="relative h-[22.2rem]">
        <Image
          src={displayImageUrl}
          width={430}
          height={240}
          className="h-full w-full object-cover"
          alt="위시풀 대표 이미지"
        />
        <div className="absolute inset-0 bg-black/20" />

        <button
          type="button"
          onClick={handleImageChange}
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
          <span className="text-blue-primary">{formData.celebrant}</span>에게
          보내는 위시풀
        </span>
        <div className="mt-[2.8rem]">
          <div className="subtitle2 text-text mb-[0.8rem] max-w-[430px]">
            생일자 이름
          </div>
          <BaseInput
            name="celebrant"
            value={formData.celebrant}
            placeholder="생일자의 이름을 알려 주세요."
            maxLength={20}
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-[2.8rem]">
          <p className="subtitle2 text-text mb-[0.8rem] max-w-[430px]">
            곧 다가올 생일
          </p>
          <Calendar
            name="birthDay"
            value={formData.birthDay}
            onChange={handleInputChange}
          />
        </div>

        <hr className="bg-background-02 -mx-[2rem] my-[3.2rem] h-[0.8rem] border-0" />

        <div className="mt-[4rem]">
          <p className="subtitle2 text-text mb-[0.8rem] max-w-[430px]">
            위시풀 소개
          </p>
          <TextField
            name="description"
            value={formData.description}
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

          <Calendar
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
          />
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

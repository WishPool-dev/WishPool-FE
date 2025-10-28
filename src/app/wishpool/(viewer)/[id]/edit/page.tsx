'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { useGetWishpoolDetail } from '@/api/domain/detail/hooks';
import { usePatchWishpool } from '@/api/domain/edit/hooks';
import Button from '@/components/common/Button';
import Calendar from '@/components/common/Calendar';
import BaseInput from '@/components/common/Form/BaseInput';
import TextField from '@/components/common/Form/TextField';
import Toast from '@/components/common/Toast';
import UserTag from '@/components/common/UserTag';
import Thumbnail from '@/components/wishpool/viewer/edit/Thumbnail';
import { useGetWishpoolId } from '@/hooks/common/useGetWishpoolId';
import { toDashFromStr } from '@/utils/wishpool/builder/dateFmt';

const EditPage = () => {
  const router = useRouter();

  const [openToast, setOpenToast] = useState(false);

  const [formData, setFormData] = useState({
    celebrant: '',
    birthDay: '',
    endDate: '',
    description: '',
    imageKey: '',
  });

  const wishpoolId = useGetWishpoolId();
  const { data: detail } = useGetWishpoolDetail(wishpoolId);

  useEffect(() => {
    if (detail) {
      setFormData({
        celebrant: detail.celebrant,
        birthDay: detail.birthDay,
        endDate: detail.endDate,
        description: detail.description,
        imageKey: detail.imageKey,
      });
    }
  }, []);

  const updateMutation = usePatchWishpool();

  const handleSubmit = async () => {
    if (!wishpoolId) return;

    sessionStorage.removeItem('wishpool_celebrant');
    sessionStorage.removeItem('wishpool_birthDay');
    sessionStorage.removeItem('wishpool_description');
    sessionStorage.removeItem('wishpool_imageKey');
    sessionStorage.removeItem('wishpool_endDate');

    const payload = {
      celebrant: formData.celebrant,
      birthDay: toDashFromStr(formData.birthDay),
      description: formData.description,
      endDate: toDashFromStr(formData.endDate),
      imageKey: formData.imageKey,
    };

    try {
      await updateMutation.mutateAsync({ wishpoolId, payload });
      setOpenToast(true);
      setTimeout(() => router.back(), 1000);
    } catch (err) {
      console.error(err);
      alert('위시풀 수정에 실패했어요 🥲');
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageKeyChange = useCallback(
    (newKey: string) => {
      setFormData((prev) => ({ ...prev, imageKey: newKey }));
    },
    [setFormData],
  );

  return (
    <>
      {openToast && <Toast>위시풀이 수정되었어요.</Toast>}

      <Thumbnail
        imageKey={formData.imageKey || detail?.imageKey}
        onChangeImageKey={handleImageKeyChange}
      />

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

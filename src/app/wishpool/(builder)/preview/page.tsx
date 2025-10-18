'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useGetWishpoolImage } from '@/api/domain/detail/hooks';
import { usePostWishpoolCreate } from '@/api/domain/form/hooks';
import WishpoolCardImage from '@/assets/images/wishpool-card.png';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import UserTag from '@/components/common/UserTag';
import { PATH } from '@/constants/common/path';
import { getSlashDateFmt } from '@/utils/wishpool/builder/dateFmt';

const PreviewPage = () => {
  const router = useRouter();
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState({
    celebrant: '',
    birthDay: '',
    description: '',
    imageKey: '',
    endDate: '',
  });

  useEffect(() => {
    setData({
      celebrant: sessionStorage.getItem('wishpool_celebrant') || '',
      birthDay: sessionStorage.getItem('wishpool_birthDay') || '',
      description: sessionStorage.getItem('wishpool_description') || '',
      imageKey: sessionStorage.getItem('wishpool_imageKey') || '',
      endDate: sessionStorage.getItem('wishpool_endDate') || '',
    });
  }, []);

  const handleImageError = () => {
    setIsError(true);
  };

  const { data: wishpoolImage } = useGetWishpoolImage(data.imageKey);
  const imageUrl = wishpoolImage?.key;
  const displayImageUrl = imageUrl && !isError ? imageUrl : WishpoolCardImage;

  const createMutation = usePostWishpoolCreate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await createMutation.mutateAsync(data);

      sessionStorage.clear();

      sessionStorage.setItem('wishpoolId', res.wishpoolId.toString());

      router.push(PATH.WISHPOOL_SHARE);
    } catch (e) {
      console.log(e);
      alert('생성에 실패했습니다. 잠시 후 다시 시도해 주세요.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-[7.4rem]">
          <p className="caption1 text-blue-primary h-[1.8rem] max-w-[430px]">
            최종 점검
          </p>
          <p className="head1 text-text h-[3.2rem] max-w-[430px] pt-[0.4rem]">
            위시풀의 정보를 확인해 주세요.
          </p>

          <div className="bg-background-02 text-text body1 mt-[3.8rem] flex h-[5.6rem] flex-row items-center justify-between rounded-[12px] px-[1.6rem] py-[0.8rem]">
            <span className="flex flex-row gap-[1.2rem]">
              <UserTag>생일자</UserTag>
              {data.celebrant}
            </span>
            <span className="flex flex-row gap-[1rem]">
              <Icon
                name="birthday"
                width={20}
                height={20}
                className="text-blue-3"
              />
              {getSlashDateFmt(data.birthDay)}
            </span>
          </div>

          <div className="relative my-[1.2rem] aspect-[353/199] w-full">
            <Image
              src={displayImageUrl}
              alt="위시풀 대표 이미지"
              fill
              sizes="100vw"
              className="rounded-[12px] object-cover"
              onError={handleImageError}
            />
          </div>

          <div className="bg-background-02 body2 w-full rounded-[12px] p-[1.6rem] break-words">
            <div className="flex gap-[1.2rem]">
              <span className="flex-shrink-0 text-gray-600">소개</span>
              <p className="text-gray-800">{data.description}</p>
            </div>
          </div>

          <div className="my-[2.8rem] w-full border-b border-gray-300"></div>
          <div className="bg-background-02 text-text body1 flex h-[5.6rem] flex-row items-center justify-between rounded-[12px] px-[1.6rem] py-[0.8rem]">
            <span className="flex flex-row gap-[1.2rem]">
              <UserTag>참여자</UserTag>
              선물 리스트 마감일
            </span>
            <span>{getSlashDateFmt(data.endDate)}</span>
          </div>
        </div>
        <div className="fixed right-0 bottom-[2rem] left-0 mx-auto max-w-[43rem] px-[2rem]">
          <div className="flex justify-between gap-[1rem]">
            <Button
              textColor="black"
              backgroundColor="light"
              textSize="sm"
              onClick={() => {
                history.back();
              }}
            >
              수정하기
            </Button>
            <Button
              textColor="white"
              backgroundColor="dark"
              textSize="sm"
              type="submit"
              disabled={createMutation.isPending}
            >
              완료하기
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PreviewPage;

'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { usePostWishpoolCreate } from '@/api/domain/create/hooks';
import WishpoolCardImage from '@/assets/images/wishpool-card.png';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import UserTag from '@/components/common/UserTag';
import { PATH } from '@/constants/common/path';

const getOrigin = () => {
  if (typeof window !== 'undefined') return window.location.origin;
  return process.env.NEXT_PUBLIC_SITE_URL ?? 'https://wishpool.store';
};

function fmt(date?: string) {
  if (!date) return '—';
  try {
    const [y, m, d] = date.split('-');
    if (y && m && d) return `${y}.${m}.${d}`;
    return date;
  } catch {
    return date;
  }
}

const PreviewPage = () => {
  const router = useRouter();

  const [data, setData] = useState({
    celebrant: '',
    birthDay: '',
    description: '',
    imageKey: '',
    endDate: '',
  });

  const createMutation = usePostWishpoolCreate();

  useEffect(() => {
    setData({
      celebrant: sessionStorage.getItem('wishpool_celebrant') || '',
      birthDay: sessionStorage.getItem('wishpool_birthDay') || '',
      description: sessionStorage.getItem('wishpool_description') || '',
      imageKey: sessionStorage.getItem('wishpool_imageKey') || '',
      endDate: sessionStorage.getItem('wishpool_endDate') || '',
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const payload = {
        celebrant: data.celebrant,
        birthDay: data.birthDay,
        description: data.description,
        imageKey: data.imageKey,
        endDate: data.endDate,
      };

      // 링크 만들기
      const res = await createMutation.mutateAsync(payload);
      const shareIdentifier = res.shareIdentifier;

      const inviteLink = `${getOrigin()}/wishpool/join/info?shareIdentifier=${encodeURIComponent(shareIdentifier)}`;

      sessionStorage.setItem('wishpool_invite_link', inviteLink);

      sessionStorage.removeItem('wishpool_celebrant');
      sessionStorage.removeItem('wishpool_birthDay');
      sessionStorage.removeItem('wishpool_description');
      sessionStorage.removeItem('wishpool_imageKey');
      sessionStorage.removeItem('wishpool_endDate');

      router.push(PATH.WISHPOOL_SHARE);
    } catch {
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
              {fmt(data.birthDay)}
            </span>
          </div>

          <div className="relative my-[1.2rem] aspect-[353/199] w-full">
            {data.imageKey ? (
              <Image
                src={data.imageKey}
                alt="위시풀 대표 이미지"
                fill
                sizes="100vw"
                className="rounded-[12px] object-cover"
                unoptimized
              />
            ) : (
              <Image
                src={WishpoolCardImage}
                alt="위시풀 대표 이미지"
                fill
                sizes="100vw"
                className="rounded-[12px] object-cover"
              />
            )}
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
            <span>{fmt(data.endDate)}</span>
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
              {createMutation.isPending ? '완료 중…' : '완료하기'}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PreviewPage;

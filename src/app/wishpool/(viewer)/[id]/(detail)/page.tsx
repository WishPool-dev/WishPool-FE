'use client';

import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

import {
  useGetWishpoolDetail,
  useGetWishpoolImage,
} from '@/api/domain/detail/hooks';
import WishpoolCardImage from '@/assets/images/wishpool-card.png';
import Icon from '@/components/common/Icon';
import CenterModal from '@/components/common/Modal/CenterModal';
import DetailFooter from '@/components/wishpool/viewer/detail/DetailFooter';
import { PATH } from '@/constants/common/path';
import useModal from '@/hooks/common/useModal';
import getFooterContent from '@/utils/wishpool/viewer/getFooterContent';

const DetailPage = () => {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const wishpoolId = Number(id);

  const { isOpen, onOpen, onClose } = useModal();

  const [isError, setIsError] = useState(false);

  const { data: wishpool } = useGetWishpoolDetail(wishpoolId);
  const imageKey = wishpool?.imageKey || '';
  const { data: wishpoolImage } = useGetWishpoolImage(imageKey);
  const imageUrl = wishpoolImage?.key;

  const displayImageUrl = imageUrl && !isError ? imageUrl : WishpoolCardImage;

  const footerProps = wishpool
    ? getFooterContent({ status: wishpool.status, dDay: wishpool.d_day })
    : null;

  return (
    <>
      <div className="relative aspect-[393/221] w-full">
        <Image
          src={displayImageUrl}
          alt="위시풀 대표 이미지"
          fill
          sizes="100vw"
          className="object-cover"
          onError={() => setIsError(true)}
        />
      </div>
      <section className="text-text p-[2rem]">
        <div className="flex items-center justify-between">
          <span className="bg-background-02 caption2 rounded-[6px] px-[1.2rem] py-[0.6rem] text-gray-800">
            참여자 마감일 {wishpool?.endDate}
          </span>
          <span className="caption2 text-blue-primary bg-background-02 flex items-center gap-[0.4rem] rounded-[4px] px-[1.2rem] py-[0.6rem]">
            <Icon
              name="birthday"
              className="text-blue-4 h-[1.6rem] w-[1.6rem]"
            />
            {wishpool?.celebrant}
          </span>
        </div>
        <div className="mt-[2rem]">
          <h2 className="head1 mb-[0.4rem]">
            {wishpool?.celebrant}에게 보내는 위시풀
          </h2>
          <span className="body1 flex items-center gap-[0.8rem]">
            {wishpool?.joinCount}명 참여
            <Icon
              name="plus"
              className="h-[1.8rem] w-[1.8rem] rounded-[3px] bg-gray-400 text-white"
            />
          </span>
          <button
            type="button"
            onClick={() => router.push(PATH.WISHPOOL_GIFTS(wishpoolId))}
            className="title2 mt-[3.6rem] mb-[1.6rem] flex w-full items-center justify-center gap-[0.8rem] rounded-[10px] border border-gray-400 py-[1.4rem]"
          >
            <Icon name="gift" />
            <span>선물 리스트 보기</span>
          </button>
          <div className="bg-background-02 body2 flex gap-[1.2rem] rounded-[12px] p-[1.6rem]">
            <span className="shrink-0 text-gray-600">소개</span>
            <p className="text-gray-800">{wishpool?.description}</p>
          </div>
        </div>
        <button
          className="body2 mt-[6.4rem] w-full text-center text-gray-600 underline"
          onClick={onOpen}
        >
          선물 제안 그만 받기
        </button>
      </section>
      {footerProps && (
        <DetailFooter
          {...footerProps}
          onClick={() => router.push(PATH.JOIN_INTRO)}
        />
      )}
      {isOpen && (
        <CenterModal
          onClose={onClose}
          modalTitle="선물 제안을 그만 받을까요?"
          modalContent="지금까지 모인 선물 리스트를 생일자에게 전달하세요!"
          rightText="그만 받기"
        />
      )}
    </>
  );
};

export default DetailPage;

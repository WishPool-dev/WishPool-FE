'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { usePostPickGift } from '@/api/domain/pick/hooks';
import Button from '@/components/common/Button';
import GiftCard from '@/components/pick/list/GiftCard';
import { PATH } from '@/constants/common/path';
import { GiftCardType } from '@/types/common/giftCardType';
import clearSession from '@/utils/pick/clearSession';

const PreviewPage = () => {
  const router = useRouter();

  const [pickedItems, setPickedItems] = useState<GiftCardType[]>([]);

  const { mutate: pickGift } = usePostPickGift();

  useEffect(() => {
    const getGifts = window.sessionStorage.getItem('pickedGifts');
    if (getGifts) {
      setPickedItems(JSON.parse(getGifts));
    }
  }, []);

  const handleSubmit = () => {
    const giftIds = pickedItems.map((pickedItem) => pickedItem.giftId);

    const wishpoolId = Number(window.sessionStorage.getItem('wishpoolId'));

    pickGift(
      { wishpoolId, giftIds },
      {
        onSuccess: () => {
          clearSession();
          router.push(PATH.PICK_COMPLETE);
        },
        onError: (err) => {
          console.error('🚨 선물 선택 실패: ', err);
        },
      },
    );
  };

  return (
    <>
      <h1 className="text-blue-primary caption1">최종 점검</h1>
      <h2 className="head1 text-text">최종 선택한 선물</h2>
      <section className="my-[2.8rem] space-y-[1.2rem]">
        {pickedItems.map(({ giftId, itemName, itemUrl, imageUrl }) => (
          <GiftCard
            key={giftId}
            size="big"
            giftId={giftId}
            itemName={itemName}
            itemUrl={itemUrl}
            imageUrl={imageUrl}
          />
        ))}
      </section>
      <div className="fixed right-0 bottom-0 left-0 mx-auto max-w-[430px] border-t border-gray-300 bg-white px-[2rem] pb-[2rem]">
        <p className="caption1 my-[1.6rem] text-center text-gray-600">
          이 선물로 결정할까요?
        </p>
        <div className="flex justify-between gap-[1.3rem]">
          <Button
            textColor="black"
            backgroundColor="light"
            textSize="sm"
            onClick={() => router.back()}
          >
            다시 고르기
          </Button>
          <Button textSize="sm" onClick={handleSubmit}>
            완료하기
          </Button>
        </div>
      </div>
    </>
  );
};

export default PreviewPage;

'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import Button from '@/components/common/Button';
import Toast from '@/components/common/Toast';
import CarouselCard from '@/components/pick/select/CarouselCard';
import GiftLoading from '@/components/pick/select/GiftLoading';
import { PATH } from '@/constants/common/path';
import { useCarouselCard } from '@/hooks/pick/useCarouselCard';
import { GiftCardType } from '@/types/common/giftCardType';
import getInitialItems from '@/utils/pick/getInitialItems';

const SelectPage = () => {
  const router = useRouter();

  const [items, setItems] = useState<GiftCardType[]>([]);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    const initialItems = getInitialItems();
    setItems(initialItems);
  }, []);

  const { ref, active } = useCarouselCard<HTMLDivElement>();

  const handleRemove = (id: number) => {
    if (items.length <= 1) {
      setToast(true);

      setTimeout(() => {
        window.location.reload();
      }, 1000);

      return;
    }

    const updatedItems = items.filter((item) => item.giftId !== id);
    setItems(updatedItems);
  };

  const handleComplete = () => {
    window.sessionStorage.setItem('pickedGifts', JSON.stringify(items));

    if (items.length > 2) {
      setLoading(true);
      setTimeout(() => {
        router.push(PATH.PICK_PREVIEW);
      }, 1500);
    } else {
      router.push(PATH.PICK_PREVIEW);
    }
  };

  if (loading) return <GiftLoading items={items} />;

  return (
    <div className="flex flex-col">
      {toast && <Toast>선물은 최소 1개 이상 선택해야 해요!</Toast>}
      <section
        ref={ref}
        className="no-scrollbar bg-blue-5 flex snap-x snap-mandatory gap-[2.4rem] overflow-x-auto overflow-y-hidden px-[2rem] pt-[7rem] pb-[5rem]"
      >
        <div aria-hidden className="w-[calc(50vw-9rem)] shrink-0 snap-none" />
        {items.map(({ giftId, itemName, itemUrl, imageUrl }, i) => (
          <CarouselCard
            key={giftId}
            giftId={giftId}
            index={i}
            activeIndex={active}
            itemName={itemName}
            itemUrl={itemUrl}
            onRemove={handleRemove}
            imageUrl={imageUrl}
          />
        ))}
        <div aria-hidden className="w-[calc(50vw-9rem)] shrink-0 snap-none" />
      </section>

      <section className="relative pb-[12rem]">
        <div className="flex flex-col items-center py-[3rem]">
          <Image
            src="/images/hole.svg"
            width={203}
            height={52}
            alt="구멍 이미지"
            className="mb-[4rem]"
          />
          <p className="text-text caption1 text-center">
            마음에 드는 선물을{' '}
            <span className="text-blue-primary">최대 3개까지</span> 남겨주세요.
            <br />
            아래로 드래그하면 리스트에서 제외돼요.
          </p>
          <div className="flex w-full flex-col gap-[0.8rem] p-[2rem]">
            <Button
              backgroundColor="transparent"
              textColor="gray"
              textSize="md"
              onClick={() => window.location.reload()}
            >
              <span className="underline">처음부터 다시 고르기</span>
            </Button>
            <Button onClick={handleComplete}>완료하기</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SelectPage;

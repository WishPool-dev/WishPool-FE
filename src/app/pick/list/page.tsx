'use client';
import { useEffect, useState } from 'react';

import GiftCard from '@/components/pick/list/GiftCard';
import { QUERY_KEY } from '@/constants/common/queryKey';
import { queryClient } from '@/lib/queryClient';
import { GiftCardType } from '@/types/common/giftCardType';

const ListPage = () => {
  const [items, setItems] = useState<GiftCardType[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const identifier = window.localStorage.getItem('identifier');
    if (!identifier) return;

    const giftData = queryClient.getQueryData<{ gifts: GiftCardType[] }>(
      QUERY_KEY.WISHPOOL_GIFTS_CELEBRANT(identifier),
    );

    if (giftData?.gifts) {
      setItems(giftData.gifts);
    }
  }, [queryClient]);

  return (
    <>
      <div className="body2 flex justify-between py-[1.6rem] text-white">
        <span>선물 리스트</span>
        <span>{items.length}개</span>
      </div>
      <section className="grid grid-cols-2 gap-[1.1rem]">
        {items.map(({ giftId, itemName, itemUrl }) => (
          <GiftCard
            key={giftId}
            giftId={giftId}
            itemName={itemName}
            itemUrl={itemUrl}
          />
        ))}
      </section>
    </>
  );
};

export default ListPage;

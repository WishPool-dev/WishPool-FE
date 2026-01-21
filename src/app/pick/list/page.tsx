'use client';
import { useEffect, useState } from 'react';

import GiftCard from '@/components/pick/list/GiftCard';
import { GiftCardType } from '@/types/common/giftCardType';
import getInitialItems from '@/utils/pick/getInitialItems';

const ListPage = () => {
  const [items, setItems] = useState<GiftCardType[]>([]);

  useEffect(() => {
    const initialItems = getInitialItems();
    setItems(initialItems);
  }, []);

  return (
    <>
      <div className="body2 flex justify-between py-[1.6rem] text-white">
        <span>선물 리스트</span>
        <span>{items.length}개</span>
      </div>
      <section className="grid grid-cols-2 gap-[1.1rem]">
        {items.map(({ giftId, itemName, itemUrl, imageUrl }) => (
          <GiftCard
            key={giftId}
            giftId={giftId}
            itemName={itemName}
            itemUrl={itemUrl}
            imageUrl={imageUrl}
          />
        ))}
      </section>
    </>
  );
};

export default ListPage;

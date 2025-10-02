'use client';

import { motion } from 'framer-motion';

import GiftCard from '@/components/funding/list/GiftCard';
import type { GiftCardType } from '@/types/common/giftCardType';

const GiftLoading = ({ items }: { items: GiftCardType[] }) => {
  const duration = 5;

  return (
    <section className="relative overflow-hidden px-[2rem] py-[20rem]">
      <div className="pointer-events-none absolute" />
      <motion.div
        className="flex w-max gap-[1.2rem] will-change-transform"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
        aria-hidden
      >
        {items.map(({ giftId, itemName, itemUrl }) => (
          <GiftCard
            key={giftId}
            giftId={giftId}
            itemName={itemName}
            itemUrl={itemUrl}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default GiftLoading;

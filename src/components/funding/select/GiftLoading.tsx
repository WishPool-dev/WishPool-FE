'use client';

import { motion } from 'framer-motion';

import { data } from '@/app/funding/list/data';
import GiftCard from '@/components/funding/list/GiftCard';

const GiftLoading = () => {
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
        {data.map(({ giftId, giftName, giftImage }) => (
          <GiftCard
            key={giftId}
            giftId={giftId}
            giftName={giftName}
            giftImage={giftImage}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default GiftLoading;

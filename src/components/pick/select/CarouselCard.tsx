'use client';

import { motion } from 'framer-motion';
import type { PanInfo } from 'framer-motion';
import Image from 'next/image';

import { useGetWishpoolImage } from '@/api/domain/detail/hooks';
import GiftCardImage from '@/assets/images/gift-card.png';
import { useDeleteCard } from '@/hooks/pick/useDeleteCard';
import type { GiftCardType } from '@/types/common/giftCardType';

type CarouselCardProps = {
  index: number;
  activeIndex: number;
  onRemove: (id: number) => void;
} & GiftCardType;

const cardBaseStyles =
  'flex h-[26rem] w-[18rem] shrink-0 snap-center flex-col items-center ' +
  'gap-[2.4rem] rounded-[16px] border-[4px] px-[2rem] pt-[4rem] ' +
  'relative transition-all duration-300 ease-out will-change-transform';

export default function CarouselCard({
  index,
  activeIndex,
  onRemove,
  giftId,
  itemName,
  imageUrl: imageKey,
}: CarouselCardProps) {
  const isActive = index === activeIndex;

  const {
    cardRef,
    controls,
    renderSpacer,
    fixedStyle,
    handleDragStart,
    handleDrag,
    handleDragEnd,
  } = useDeleteCard({ onRemove, id: giftId });

  const { data: imageData } = useGetWishpoolImage(imageKey);
  const finalSrc = imageData && imageData.key ? imageData.key : GiftCardImage;

  return (
    <>
      {renderSpacer && (
        <div
          aria-hidden
          className="pointer-events-none h-[26rem] w-[18rem] shrink-0 snap-center opacity-0"
        />
      )}

      <motion.div
        ref={cardRef}
        data-card
        drag={isActive ? 'y' : false}
        dragElastic={0.12}
        dragMomentum={false}
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={
          handleDragEnd as unknown as (
            e: MouseEvent | TouchEvent | PointerEvent,
            info: PanInfo,
          ) => void
        }
        animate={controls}
        whileDrag={{ zIndex: 999 }}
        style={fixedStyle}
        className={[
          cardBaseStyles,
          isActive
            ? 'from-blue-3 to-blue-2 z-card translate-y-[2.4rem] border-white bg-gradient-to-b shadow-lg'
            : 'bg-background-01 translate-y-0 border-transparent',
        ].join(' ')}
      >
        <Image
          src={finalSrc}
          alt="선물 카드 이미지"
          width={133}
          height={133}
          className="rounded-[12px] transition-all duration-300"
        />
        <span
          className={[
            'subtitle2 line-clamp-2 h-[4.8rem] w-full text-center',
            isActive ? 'text-white' : 'text-gray-600',
          ].join(' ')}
        >
          {itemName}
        </span>
      </motion.div>
    </>
  );
}

import Image from 'next/image';

import type { GiftCardType } from '@/types/common/giftCardType';

type sizeType = 'small' | 'big';

type GiftCardProps = {
  size?: sizeType;
} & GiftCardType;

const GiftCard = ({
  size = 'small',
  giftId,
  giftName,
  giftImage,
}: GiftCardProps) => {
  const isSmall = size === 'small';
  console.log(giftImage);
  return (
    <div
      className={`bg-background-01 flex grow-1 flex-col items-center gap-[2.4rem] rounded-[16px] ${isSmall ? 'p-[2.2rem]' : 'p-[6.4rem]'}`}
    >
      <Image
        src={giftImage}
        alt={`선물 카드 이미지 - ${giftId}`}
        width={isSmall ? 126 : 170}
        height={isSmall ? 126 : 170}
        className={`rounded-[12px] object-cover`}
      />
      <span
        className={`subtitle2 text-text line-clamp-2 h-[4.8rem] text-center ${isSmall ? 'w-[12.6rem]' : ''}`}
      >
        {giftName}
      </span>
    </div>
  );
};

export default GiftCard;

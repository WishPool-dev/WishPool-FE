import Image from 'next/image';
import Link from 'next/link';

import GiftCardImage from '@/assets/images/gift-card.png';
import type { GiftCardType } from '@/types/common/giftCardType';

type sizeType = 'small' | 'big';

type GiftCardProps = {
  size?: sizeType;
} & GiftCardType;

const GiftCard = ({
  size = 'small',
  giftId,
  itemName,
  itemUrl,
  itemImage,
}: GiftCardProps) => {
  const isSmall = size === 'small';

  return (
    <div
      className={`bg-background-01 flex grow-1 flex-col items-center rounded-[16px] ${isSmall ? 'p-[2.2rem]' : 'p-[6.4rem]'}`}
    >
      <Link href={itemUrl} className="flex flex-col gap-[2.8rem]">
        <Image
          src={
            itemImage
              ? `${process.env.NEXT_PUBLIC_WISHPOOL_IMAGE_BASE_URL}/${itemImage}`
              : GiftCardImage
          }
          alt={`선물 카드 이미지 - ${giftId}`}
          width={isSmall ? 126 : 170}
          height={isSmall ? 126 : 170}
          className={`rounded-[12px] object-cover`}
        />
        <span
          className={`subtitle2 text-text line-clamp-2 text-center ${isSmall ? 'w-[12.6rem]' : ''}`}
        >
          {itemName}
        </span>
      </Link>
    </div>
  );
};

export default GiftCard;

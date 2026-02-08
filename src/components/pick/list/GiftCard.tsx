import Image from 'next/image';
import Link from 'next/link';

import { useGetWishpoolImage } from '@/api/domain/detail/hooks';
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
  imageUrl,
}: GiftCardProps) => {
  const isSmall = size === 'small';

  const { data: imageData } = useGetWishpoolImage(imageUrl);
  const finalSrc =
    imageUrl && imageData && imageData.key ? imageData.key : GiftCardImage;

  return (
    <Link href={itemUrl}>
      <div
        className={`bg-background-01 flex grow-1 flex-col items-center gap-[2.4rem] rounded-[16px] ${isSmall ? 'p-[2.2rem]' : 'p-[6.4rem]'}`}
      >
        <div
          className={`relative overflow-hidden rounded-[12px] ${
            isSmall ? 'h-[12.6rem] w-[12.6rem]' : 'h-[17.1rem] w-[17.1rem]'
          }`}
        >
          <Image
            src={finalSrc}
            alt={`선물 카드 이미지 - ${giftId}`}
            fill
            className="object-cover"
          />
        </div>

        <span
          className={`subtitle2 text-text line-clamp-2 h-[4.8rem] text-center ${isSmall ? 'w-[12.6rem]' : ''}`}
        >
          {itemName}
        </span>
      </div>
    </Link>
  );
};

export default GiftCard;

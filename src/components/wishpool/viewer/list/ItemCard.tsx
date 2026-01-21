import Image from 'next/image';
import Link from 'next/link';

import GiftCardImage from '@/assets/images/gift-card.png';
import UserTag from '@/components/common/UserTag';
type ItemCardProps = {
  guest: string;
  itemName: string;
  itemUrl: string;
  imageUrl?: string;
};

const ItemCard = ({ guest, itemName, itemUrl, imageUrl }: ItemCardProps) => {
  return (
    <>
      <Link href={itemUrl} className="flex grow-1 flex-col">
        <Image
          src={
            imageUrl
              ? `${process.env.NEXT_PUBLIC_WISHPOOL_IMAGE_BASE_URL}/${imageUrl}`
              : GiftCardImage
          }
          alt="선물 이미지"
          width={155}
          height={155}
          className="h-[15.5rem] w-[15.5rem] rounded-[12px] object-cover"
        />

        <div className="mt-[0.8rem] flex items-center gap-[0.8rem]">
          <UserTag>참여자</UserTag>
          <div className="subtitle3">{guest}</div>
        </div>

        <div className="pt-[1.2rem]">
          <div className="title2 line-clamp-2 h-[4.8rem]">{itemName}</div>
        </div>
      </Link>
    </>
  );
};

export default ItemCard;

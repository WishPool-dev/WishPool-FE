import Image from 'next/image';
import Link from 'next/link';

import { useGetWishpoolImage } from '@/api/domain/detail/hooks';
import GiftCardImage from '@/assets/images/gift-card.png';
import UserTag from '@/components/common/UserTag';

type ItemCardProps = {
  guest: string;
  itemName: string;
  itemUrl: string;
  imageUrl: string;
};

const ItemCard = ({ guest, itemName, itemUrl, imageUrl }: ItemCardProps) => {
  const { data: imageData } = useGetWishpoolImage(imageUrl);
  const finalSrc = imageData && imageData.key ? imageData.key : GiftCardImage;

  return (
    <>
      <Link href={itemUrl} className="flex grow-1 flex-col">
        <Image
          width={171}
          height={171}
          src={finalSrc}
          alt="프로필 이미지"
          className="h-[17.1rem] w-[17.1rem] rounded-[12px] object-cover"
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

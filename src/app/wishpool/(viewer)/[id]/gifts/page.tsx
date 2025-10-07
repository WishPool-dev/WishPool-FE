'use client';

import Image from 'next/image';

import { useGetGiftList } from '@/api/domain/gifts/hooks';
import giftBox from '@/assets/images/empty-box.png';
import DataError from '@/components/common/DataError';
import Loading from '@/components/common/Loading';
import ItemCard from '@/components/wishpool/viewer/list/ItemCard';
import { useGetWishpoolId } from '@/hooks/common/useGetWishpoolId';
import { GiftCardType } from '@/types/common/giftCardType';

const GiftPage = () => {
  const wishpoolId = useGetWishpoolId();

  const { data: giftData, isLoading, isError } = useGetGiftList(wishpoolId);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <DataError />;
  }

  const giftItems: GiftCardType[] = giftData?.gifts ?? [];
  const totalGifts = giftItems.length;

  const GiftList = (
    <section>
      <div className="mt-[1.6rem] grid grid-cols-2 gap-x-[1.2rem] gap-y-[1.6rem]">
        {giftItems.map((gift) => (
          <ItemCard
            key={gift.giftId}
            guest={gift.guest || ''}
            itemName={gift.itemName}
            itemUrl={gift.itemUrl}
          />
        ))}
      </div>
    </section>
  );

  const EmptyList = (
    <section className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[0.4rem]">
      <Image
        src={giftBox}
        alt="선물 박스 사진"
        width={180}
        height={180}
        className="block"
      />
      <p className="title1 text-text text-center">
        선물 리스트가 아직 도착하지 않았어요!
      </p>
    </section>
  );

  return (
    <>
      <div className="head1 text-text mb-[2.4rem] pt-[0.4rem]">
        현재까지 총 <span>{giftData?.participantCount}</span>명의 친구가 <br />
        <span className="text-blue-primary">{giftData?.celebrant}</span>님을
        위한 선물 리스트를 만들어 줬어요.
      </div>
      <div className="body2 flex items-center justify-between">
        <span className="text-text">선물 리스트</span>
        <span className="text-blue-primary">{totalGifts}개</span>
      </div>
      {totalGifts > 0 ? GiftList : EmptyList}
    </>
  );
};

export default GiftPage;

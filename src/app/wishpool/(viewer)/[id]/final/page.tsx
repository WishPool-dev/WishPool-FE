'use client';
import { useRouter } from 'next/navigation';

import { useGetChosenGiftList } from '@/api/domain/detail/hooks';
import Button from '@/components/common/Button';
import KakaoButton from '@/components/common/Button/KakaoButton/KakaoButton';
import Icon from '@/components/common/Icon';
import Loading from '@/components/common/Loading';
import GiftCard from '@/components/pick/list/GiftCard';
import { PATH } from '@/constants/common/path';
import { useGetWishpoolId } from '@/hooks/common/useGetWishpoolId';

const FinalPage = () => {
  const router = useRouter();
  const wishpoolId = useGetWishpoolId();

  const { data: giftData, isPending } = useGetChosenGiftList(wishpoolId);

  if (isPending) {
    return <Loading />;
  }

  return (
    <>
      <div className="gap-[0.4rem]">
        <p className="caption1 text-blue-primary">최종 결과</p>
        <p className="head1 text-text pt-[0.4rem]">
          <span className="text-blue-primary">{giftData?.celebrant}</span>님이
          최종 선택한 선물
        </p>
        <p className="body1 text-text">
          {giftData?.celebrant}님이 고른 선물은 바로 이거에요. <br />
          생일을 축하해 주세요!
        </p>
      </div>

      <section className="relative mt-[9.1rem] space-y-[1.2rem] pb-[20rem]">
        <Icon
          name="ribbon"
          width={120}
          height={75}
          className="absolute -top-5 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        {giftData?.selectedGiftsListDto.map(
          ({ giftId, giftName, giftImage }) => (
            <GiftCard
              key={giftId}
              size="big"
              giftId={giftId}
              itemName={giftName}
              itemUrl={giftImage}
            />
          ),
        )}
      </section>
      <div className="fixed inset-x-0 bottom-0 bg-gradient-to-b from-white/0 to-white">
        <div className="mx-auto w-full max-w-[430px] p-[2rem]">
          <div className="flex flex-col gap-[1.2rem]">
            <KakaoButton
              shareType="complete"
              linkUrl={PATH.WISHPOOL_FINAL(wishpoolId)}
            />
            <Button textSize="lg" onClick={() => router.push(PATH.HOME)}>
              위시풀 끝내기
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalPage;

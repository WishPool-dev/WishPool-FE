'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { usePostWishpoolJoin } from '@/api/domain/join/hooks';
import { GiftItemDto } from '@/api/domain/join/types';
import GiftCardImage from '@/assets/images/gift-card.png';
import Button from '@/components/common/Button';
import UserTag from '@/components/common/UserTag';
import { PATH } from '@/constants/common/path';
import { WISHPOOL_IMAGE_BASE_URL } from '@/constants/wishpool/image';
import { useGetWishpoolId } from '@/hooks/common/useGetWishpoolId';
const PreviewPage = () => {
  const router = useRouter();
  const wishpoolId = useGetWishpoolId();
  const participant = sessionStorage.getItem('wishpool_participant') || '';

  const STORAGE_KEY = 'wishpool_gifts';
  const gifts = JSON.parse(
    sessionStorage.getItem(STORAGE_KEY) || '[]',
  ) as GiftItemDto[];

  const { mutate: mutatePostWishpool } = usePostWishpoolJoin();

  const handleSubmit = async () => {
    try {
      await mutatePostWishpool({
        guestName: participant,
        wishpoolId,
        giftItemDto: gifts,
      });

      sessionStorage.clear();
    } catch (err) {
      console.error(err);
    }
    router.push(PATH.JOIN_COMPLETE(wishpoolId));
  };
  return (
    <>
      <p className="caption1 text-blue-primary h-[1.8rem] max-w-[430px]">
        최종 점검
      </p>
      <p className="head1 text-text h-[3.2rem] max-w-[430px] pt-[0.4rem]">
        선물의 정보를 확인해 주세요.
      </p>

      <div className="bg-background-02 text-text body1 mt-[3.8rem] flex items-center gap-[1.2rem] rounded-[12px] p-[1.6rem]">
        <UserTag>참여자</UserTag>
        {participant}
      </div>

      <div className="bg-background-02 text-text mt-[1.2rem] rounded-[12px] p-[1.6rem]">
        <div className="body2 flex items-center justify-between">
          <span className="text-text">주고 싶은 선물</span>
          <span className="text-blue-primary">{gifts.length}개</span>
        </div>

        <section className="mt-[1.6rem] grid grid-cols-2 gap-[1.1rem]">
          {gifts.map((gift: GiftItemDto, idx: number) => (
            <div
              key={`${gift.itemName}-${idx}`}
              className="flex flex-col items-center justify-center"
            >
              {gift.imageUrl ? (
                <Image
                  src={`${WISHPOOL_IMAGE_BASE_URL}/${gift.imageUrl}`}
                  alt="등록 선물 이미지"
                  width={155}
                  height={155}
                  className="h-[15.5rem] w-[15.5rem] rounded-[12px] object-cover"
                />
              ) : (
                <Image
                  src={GiftCardImage}
                  alt="기본 선물 이미지"
                  width={155}
                  height={155}
                />
              )}
              <span className="subtitle2 text-text mt-[0.7rem] mb-[1rem] line-clamp-2 h-[4.8rem] text-center">
                {gift.itemName}
              </span>
            </div>
          ))}
        </section>
        <div className="bg-background-01 fixed inset-x-0 bottom-0 mx-auto inline-flex w-full max-w-[430px] flex-col items-center justify-center gap-[1.6rem] border-t border-gray-300 p-[2rem] pt-[1.6rem] pb-[2rem]">
          <p className="caption1 text-center text-gray-600">
            참여 완료하면 수정할 수 없어요.
          </p>

          <div className="flex w-full justify-between gap-[1.3rem]">
            <Button
              textColor="black"
              backgroundColor="light"
              textSize="sm"
              onClick={() => {
                router.push(PATH.JOIN_ADD(wishpoolId));
              }}
            >
              수정하기
            </Button>
            <Button textSize="sm" onClick={handleSubmit} type="submit">
              완료하기
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewPage;

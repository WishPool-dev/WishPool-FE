import type { GiftCardType } from '@/types/common/giftCardType';

const GiftCard = ({ giftName, giftImage }: GiftCardType) => {
  return (
    <div className="bg-background-01 flex grow-1 flex-col items-center gap-[2.4rem] rounded-[16px] p-[2.2rem]">
      <img
        src={giftImage}
        alt="선물 카드 이미지"
        className="h-[12.6rem] w-[12.6rem] rounded-[12px]"
      />
      <span className="subtitle2 text-text mb-[1rem] line-clamp-2 h-[4.8rem] text-center">
        {giftName}
      </span>
    </div>
  );
};

export default GiftCard;

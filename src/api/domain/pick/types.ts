import { GiftCardType } from '@/types/common/giftCardType';

export type PickGiftListResponse = {
  wishpoolId: number;
  gifts: GiftCardType[];
  celebrant: string;
  birthDay: string;
  endPickDate: string;
  imageKey: string;
};

export type PickGiftRequest = {
  wishpoolId: number;
  giftIds: number[];
};

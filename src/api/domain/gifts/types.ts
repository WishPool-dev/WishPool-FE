import { GiftCardType } from '@/types/common/giftCardType';

export type GiftListType = {
  guest: string;
  gifts: GiftCardType[];
};

export type GiftListResponse = GiftListType[];

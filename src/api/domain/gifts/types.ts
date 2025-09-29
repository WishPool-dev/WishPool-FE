import { GiftCardType } from '@/types/common/giftCardType';

export type GiftListType = {
  celebrant: string;
  participantCount: number;
  gifts: GiftCardType[];
};

export type GiftListResponse = GiftListType[];

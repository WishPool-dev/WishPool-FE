import { GiftCardType } from '@/types/common/giftCardType';

export type GiftListResponse = {
  celebrant: string;
  participantCount: number;
  gifts: GiftCardType[];
};

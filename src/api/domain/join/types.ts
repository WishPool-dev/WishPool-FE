export type GiftItemDto = {
  itemUrl: string;
  itemName: string;
};

export type WishpoolJoinRequest = {
  guestName: string;
  wishpoolId: number;
  giftItemDto: GiftItemDto[];
};

export type WishpoolJoinResponse = number;

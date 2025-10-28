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

export type WishpoolGuestInfoResponse = {
  owner: string;
  celebrant: string;
  endDate: string;
  description: string;
  wishpoolId: number;
  birthDay: string;
  imageKey: string;
};

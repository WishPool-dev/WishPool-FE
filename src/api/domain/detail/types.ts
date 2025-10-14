import { WishpoolStatusType } from '@/types/common/wishpoolStatusType';

export type WishpoolDetailResponse = {
  imageKey: string;
  endDate: string;
  celebrant: string;
  joinCount: number;
  description: string;
  d_day: number;
  status: WishpoolStatusType;
  birthDay: string;
  ownerJoined: boolean;
};

export type WishpoolImageResponse = {
  key: string;
};

export type WishpoolSelectionUrlResponse = {
  wishpoolId: number;
  chosenURL: string;
};

export type WishpoolSelectionUrlRequest = {
  wishpoolId: number;
  pickDate: string;
};

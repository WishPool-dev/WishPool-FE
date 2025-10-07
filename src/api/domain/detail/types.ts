import { WishpoolStatusType } from '@/types/common/wishpoolStatusType';

export type WishpoolDetailResponse = {
  imageKey: string;
  endDate: string;
  celebrant: string;
  joinCount: number;
  description: string;
  d_day: number;
  status: WishpoolStatusType;
};

export type WishpoolImageResponse = {
  key: string;
};

import { WishpoolStatusType } from '@/types/common/wishpoolStatusType';

export type WishpoolType = {
  wishpoolId: number;
  wishPoolStatus: WishpoolStatusType;
  D_day: 0;
  imageKey: string;
  celebrant: string;
  birthDay: string;
};

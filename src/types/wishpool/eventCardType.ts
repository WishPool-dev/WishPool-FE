import { WishpoolStatusType } from '@/types/common/wishpoolStatusType';

export type Role = '참여자' | '생일자';

export type EventCardType = {
  id: number;
  userType: Role;
  status: WishpoolStatusType;
  title: string;
  wishpoolId: number;
  day?: number;
};

export type HistoryItem = EventCardType & {
  birthdayPerson: string;
  birthday: string;
};

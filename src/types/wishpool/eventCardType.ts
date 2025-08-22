export type Role = '참여자' | '생일자';
export type Status = 'open' | 'closed';

export type EventCardType = {
  id: number;
  userType: Role;
  status: Status;
  title: string;
  wishpoolId: number;
  day?: number;
};

export type HistoryItem = EventCardType & {
  birthdayPerson: string;
  birthday: string;
};

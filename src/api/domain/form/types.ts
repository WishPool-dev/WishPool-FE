export type WishpoolCreateType = {
  celebrant: string;
  birthDay: string;
  description: string;
  imageKey: string;
  endDate: string;
};

export type WishpoolCreateResponse = {
  wishPoolId: number;
  shareIdentifier: string;
};

export type WishpoolImageResponse = {
  key: string;
};

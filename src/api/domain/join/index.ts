import { axiosInstance } from '@/api/axiosInstance';
import { END_POINT } from '@/constants/common/endPoint';

import { WishpoolJoinRequest } from './types';

export const postOwnerGifts = async (payload: WishpoolJoinRequest) => {
  const res = await axiosInstance.post(
    `/${END_POINT.API}/${END_POINT.WISHPOOLS}/${END_POINT.JOIN}`,
    payload,
  );
  return res.data;
};

export const getWishpoolGuestInfo = async (shareIdentifier: string) => {
  const res = await axiosInstance.get(
    `/${END_POINT.WISHPOOLS}/${shareIdentifier}`,
  );
  return res.data;
};

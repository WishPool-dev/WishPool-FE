import { axiosInstance } from '@/api/axiosInstance';
import { GiftListResponse } from '@/api/domain/gifts/types';
import { END_POINT } from '@/constants/common/endPoint';

export const getGiftList = async (wishpoolId: number) => {
  const res = await axiosInstance.get<GiftListResponse>(
    `/${END_POINT.WISHPOOLS}/${END_POINT.GIFTS}/${wishpoolId}`,
  );
  return res.data;
};

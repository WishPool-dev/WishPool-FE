import { axiosInstance } from '@/api/axiosInstance';
import { WishpoolDetailResponse } from '@/api/domain/detail/types';
import { END_POINT } from '@/constants/common/endPoint';

export const getWishpoolDetail = async (wishpoolId: number) => {
  const res = await axiosInstance.get<WishpoolDetailResponse>(
    `/${END_POINT.API}/${END_POINT.WISHPOOLS}/${wishpoolId}`,
  );
  return res.data;
};

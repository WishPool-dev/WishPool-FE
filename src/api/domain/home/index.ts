import { axiosInstance } from '@/api/axiosInstance';
import { WishpoolResponse } from '@/api/domain/home/type/wishpoolResponse';
import { END_POINT } from '@/constants/common/endPoint';

export const getWishpools = async () => {
  const res = await axiosInstance.get<WishpoolResponse>(
    `/${END_POINT.API}/${END_POINT.WISHPOOLS}`,
  );
  return res.data;
};

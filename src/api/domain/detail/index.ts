import { axiosInstance } from '@/api/axiosInstance';
import {
  WishpoolDetailResponse,
  WishpoolImageResponse,
} from '@/api/domain/detail/types';
import { END_POINT } from '@/constants/common/endPoint';

export const getWishpoolDetail = async (wishpoolId: number) => {
  const res = await axiosInstance.get<WishpoolDetailResponse>(
    `/${END_POINT.API}/${END_POINT.WISHPOOLS}/${wishpoolId}`,
  );
  return res.data;
};

export const deleteWishpool = async (wishpoolId: number) => {
  const res = await axiosInstance.delete(
    `${END_POINT.API}/${END_POINT.WISHPOOLS}/${wishpoolId}`,
  );
  return res.data;
};

export const getWishpoolImage = async (key: string) => {
  const res = await axiosInstance.get<WishpoolImageResponse>(
    `/${END_POINT.API}/${END_POINT.FILES}/${key}`,
  );
  return res.data;
};

export const patchStopWishpool = async (wishpoolId: number) => {
  const res = await axiosInstance.patch(
    `${END_POINT.API}/${END_POINT.WISHPOOLS}/${END_POINT.STATUS}/${wishpoolId}`,
  );
  return res.data;
};

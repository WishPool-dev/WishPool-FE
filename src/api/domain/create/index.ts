import { axiosInstance } from '@/api/axiosInstance';
import { END_POINT } from '@/constants/common/endPoint';

import {
  WishpoolCreateType,
  WishpoolCreateResponse,
  WishpoolImageResponse,
} from './types';

export const postWishpoolCreate = async (payload: WishpoolCreateType) => {
  const res = await axiosInstance.post<WishpoolCreateResponse>(
    `/${END_POINT.API}/${END_POINT.WISHPOOLS}`,
    payload,
  );
  return res.data;
};

export const postWishpoolImage = async (file: string) => {
  const res = await axiosInstance.post<WishpoolImageResponse>(
    `/${END_POINT.API}/${END_POINT.FILES}`,
    file,
  );
  return res.data;
};

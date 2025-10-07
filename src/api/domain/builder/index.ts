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

export const postWishpoolImage = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file, file.name);

  const res = await axiosInstance.post<WishpoolImageResponse>(
    `/${END_POINT.API}/${END_POINT.FILES}`,
    formData,
    {
      headers: { 'Content-Type': 'multipart/form-data' },
    },
  );
  return res.data;
};

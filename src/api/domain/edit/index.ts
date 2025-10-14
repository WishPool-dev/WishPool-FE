import { axiosInstance } from '@/api/axiosInstance';
import { END_POINT } from '@/constants/common/endPoint';

import { WishpoolCreateType } from '../form/types';

export const patchWisipool = async (
  wishpoolId: number,
  payload: WishpoolCreateType,
) => {
  const res = await axiosInstance.patch(
    `${END_POINT.API}/${END_POINT.WISHPOOLS}/${wishpoolId}`,
    payload,
  );
  return res.data;
};

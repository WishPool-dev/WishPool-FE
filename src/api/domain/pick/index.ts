import { axiosInstance } from '@/api/axiosInstance';
import { PickGiftListResponse } from '@/api/domain/pick/types';
import { END_POINT } from '@/constants/common/endPoint';

export const getPickGiftList = async (chosenIdentifier: string | null) => {
  const res = await axiosInstance.get<PickGiftListResponse>(
    `${END_POINT.WISHPOOLS}/${END_POINT.CELEBRANT}/${chosenIdentifier}`,
  );

  return res.data;
};

import { axiosInstance } from '@/api/axiosInstance';
import { ProfileResponse } from '@/api/domain/mypage/types';
import { END_POINT } from '@/constants/common/endPoint';

export const getProfile = async () => {
  const res = await axiosInstance.get<ProfileResponse>(
    `/${END_POINT.API}/${END_POINT.PROFILE}`,
  );
  return res.data;
};

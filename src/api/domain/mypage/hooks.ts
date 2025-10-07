import { useMutation, useQuery } from '@tanstack/react-query';

import { getProfile, postLogout } from '@/api/domain/mypage';
import { ProfileResponse } from '@/api/domain/mypage/types';
import { QUERY_KEY } from '@/constants/common/queryKey';

export const useGetProfile = () => {
  return useQuery<ProfileResponse>({
    queryKey: QUERY_KEY.PROFILE,
    queryFn: getProfile,
  });
};

export const usePostLogout = () => {
  return useMutation({
    mutationFn: postLogout,
  });
};

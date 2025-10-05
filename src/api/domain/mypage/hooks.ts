import { useQuery } from '@tanstack/react-query';

import { getProfile } from '@/api/domain/mypage';
import { ProfileResponse } from '@/api/domain/mypage/types';
import { QUERY_KEY } from '@/constants/common/queryKey';

export const useGetProfile = () => {
  return useQuery<ProfileResponse>({
    queryKey: QUERY_KEY.PROFILE,
    queryFn: getProfile,
  });
};

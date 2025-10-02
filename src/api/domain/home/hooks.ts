import { useQuery } from '@tanstack/react-query';

import { getWishpools } from '@/api/domain/home';
import { QUERY_KEY } from '@/constants/common/queryKey';

import { WishpoolResponse } from './types';

export const useGetWishpools = () => {
  return useQuery<WishpoolResponse>({
    queryKey: QUERY_KEY.WISHPOOLS_ALL,
    queryFn: getWishpools,
  });
};

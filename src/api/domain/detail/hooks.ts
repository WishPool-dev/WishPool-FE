import { useQuery } from '@tanstack/react-query';

import { getWishpoolDetail } from '@/api/domain/detail';
import { WishpoolDetailResponse } from '@/api/domain/detail/types';
import { QUERY_KEY } from '@/constants/common/queryKey';

export const useGetWishpoolDetail = (wishpoolId: number) => {
  return useQuery<WishpoolDetailResponse>({
    queryKey: QUERY_KEY.WISHPOOL_DETAIL(wishpoolId),
    queryFn: () => getWishpoolDetail(wishpoolId),
    enabled: !!wishpoolId,
  });
};

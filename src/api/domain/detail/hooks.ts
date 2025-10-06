import { useMutation, useQuery } from '@tanstack/react-query';

import { deleteWishpool, getWishpoolDetail } from '@/api/domain/detail';
import { WishpoolDetailResponse } from '@/api/domain/detail/types';
import { QUERY_KEY } from '@/constants/common/queryKey';
import { queryClient } from '@/lib/queryClient';

export const useGetWishpoolDetail = (wishpoolId: number) => {
  return useQuery<WishpoolDetailResponse>({
    queryKey: QUERY_KEY.WISHPOOL_DETAIL(wishpoolId),
    queryFn: () => getWishpoolDetail(wishpoolId),
    enabled: !!wishpoolId,
  });
};

export const useDeleteWishpool = (wishpoolId: number) => {
  return useMutation({
    mutationFn: () => deleteWishpool(wishpoolId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.WISHPOOL_DETAIL(wishpoolId),
      });
    },
  });
};

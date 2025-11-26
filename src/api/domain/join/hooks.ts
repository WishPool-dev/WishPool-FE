import { useMutation, useQuery } from '@tanstack/react-query';

import { QUERY_KEY } from '@/constants/common/queryKey';

import { getWishpoolGuestInfo, postWishpoolJoin } from '.';
import {
  WishpoolGuestInfoResponse,
  WishpoolJoinRequest,
  WishpoolJoinResponse,
} from './types';

export const usePostWishpoolJoin = () => {
  return useMutation<WishpoolJoinResponse, unknown, WishpoolJoinRequest>({
    mutationFn: (payload) => postWishpoolJoin(payload),
  });
};

export const useGetWishpoolGuestInfo = (
  id: number,
  shareIdentifier: string,
) => {
  return useQuery<WishpoolGuestInfoResponse>({
    queryKey: QUERY_KEY.WISHPOOL_DETAIL_GUEST(id),
    queryFn: () => getWishpoolGuestInfo(shareIdentifier),
    enabled: !!shareIdentifier || !!id,
  });
};

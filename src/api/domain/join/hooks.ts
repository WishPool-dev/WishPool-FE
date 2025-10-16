import { useMutation, useQuery } from '@tanstack/react-query';

import { QUERY_KEY } from '@/constants/common/queryKey';

import { getWishpoolGuestInfo, postOwnerGifts } from '.';
import {
  WishpoolGuestInfoResponse,
  WishpoolJoinRequest,
  WishpoolJoinResponse,
} from './types';

export const usePostOwnerGifts = () => {
  return useMutation<WishpoolJoinResponse, unknown, WishpoolJoinRequest>({
    mutationFn: (payload) => postOwnerGifts(payload),
  });
};

export const useGetWishpoolGuestInfo = (shareIdentifier: string) => {
  return useQuery<WishpoolGuestInfoResponse>({
    queryKey: QUERY_KEY.WISHPOOL_DETAIL_GUEST(shareIdentifier),
    queryFn: () => getWishpoolGuestInfo(shareIdentifier),
    enabled: !!shareIdentifier,
  });
};

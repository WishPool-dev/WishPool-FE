import { useMutation, useQuery } from '@tanstack/react-query';

import { QUERY_KEY } from '@/constants/common/queryKey';

import {
  getWishpoolJoinUrl,
  postWishpoolCreate,
  postWishpoolImage,
} from './index';
import {
  WishpoolCreateResponse,
  WishpoolCreateType,
  WishpoolImageResponse,
} from './types';

export const usePostWishpoolCreate = () => {
  return useMutation<WishpoolCreateResponse, unknown, WishpoolCreateType>({
    mutationFn: postWishpoolCreate,
  });
};

export const usePostWishpoolImage = () => {
  return useMutation<WishpoolImageResponse, unknown, File>({
    mutationFn: (file) => postWishpoolImage(file),
  });
};

export const useGetWishpoolJoinUrl = (wishpoolId: number) => {
  return useQuery<WishpoolCreateResponse>({
    queryKey: QUERY_KEY.WISHPOOL_JOIN_URL(wishpoolId),
    queryFn: () => getWishpoolJoinUrl(wishpoolId),
    enabled: !!wishpoolId,
  });
};

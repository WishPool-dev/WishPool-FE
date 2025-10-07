import { useMutation, useQuery } from '@tanstack/react-query';

import { QUERY_KEY } from '@/constants/common/queryKey';

import {
  postWishpoolCreate,
  postWishpoolImage,
  getWishpoolImage,
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

export const useGetWishpoolImage = (key: string) => {
  return useQuery<WishpoolImageResponse>({
    queryKey: QUERY_KEY.FILES(key),
    queryFn: () => getWishpoolImage(key),
    enabled: !!key,
  });
};

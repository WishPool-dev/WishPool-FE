import { useMutation, useQuery } from '@tanstack/react-query';

import {
  deleteWishpool,
  getWishpoolDetail,
  getWishpoolImage,
  patchSelectionUrl,
  patchStopWishpool,
} from '@/api/domain/detail';
import {
  WishpoolDetailResponse,
  WishpoolImageResponse,
  WishpoolSelectionUrlRequest,
  WishpoolSelectionUrlResponse,
} from '@/api/domain/detail/types';
import { QUERY_KEY } from '@/constants/common/queryKey';
import { queryClient } from '@/lib/queryClient';

export const useGetWishpoolDetail = (wishpoolId: number) => {
  return useQuery<WishpoolDetailResponse>({
    queryKey: QUERY_KEY.WISHPOOL_DETAIL(wishpoolId),
    queryFn: () => getWishpoolDetail(wishpoolId),
    enabled: !!wishpoolId,
  });
};

export const useDeleteWishpool = () => {
  return useMutation({
    mutationFn: (wishpoolId: number) => deleteWishpool(wishpoolId),
    onSuccess: (_data, wishpoolId) => {
      queryClient.removeQueries({
        queryKey: QUERY_KEY.WISHPOOL_DETAIL(wishpoolId),
      });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.WISHPOOLS_ALL,
      });
    },
  });
};

export const useGetWishpoolImage = (key: string) => {
  return useQuery<WishpoolImageResponse>({
    queryKey: QUERY_KEY.FILES(key),
    queryFn: () => getWishpoolImage(key),
    enabled: !!key,
  });
};

export const usePatchStopWishpool = () => {
  return useMutation({
    mutationFn: (wishpoolId: number) => patchStopWishpool(wishpoolId),
    onSuccess: (_data, wishpoolId) => {
      queryClient.setQueryData<WishpoolDetailResponse>(
        QUERY_KEY.WISHPOOL_DETAIL(wishpoolId),
        (oldData) => {
          if (!oldData) return oldData;
          return {
            ...oldData,
            status: 'PENDING',
          };
        },
      );
    },
  });
};

export const usePatchSelectionUrl = () => {
  return useMutation<
    WishpoolSelectionUrlResponse,
    Error,
    WishpoolSelectionUrlRequest
  >({
    mutationFn: (payload) => {
      return patchSelectionUrl(payload);
    },
  });
};

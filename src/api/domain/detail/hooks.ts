import { useQuery } from '@tanstack/react-query';

import { getWishpoolDetail, getWishpoolImage } from '@/api/domain/detail';
import {
  WishpoolDetailResponse,
  WishpoolImageResponse,
} from '@/api/domain/detail/types';
import { QUERY_KEY } from '@/constants/common/queryKey';

export const useGetWishpoolDetail = (wishpoolId: number) => {
  return useQuery<WishpoolDetailResponse>({
    queryKey: QUERY_KEY.WISHPOOL_DETAIL(wishpoolId),
    queryFn: () => getWishpoolDetail(wishpoolId),
    enabled: !!wishpoolId,
  });
};

export const useGetWishpoolImage = (key: string) => {
  return useQuery<WishpoolImageResponse>({
    queryKey: QUERY_KEY.FILES(key),
    queryFn: () => getWishpoolImage(key),
    enabled: !!key,
  });
};

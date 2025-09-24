import { useQuery } from '@tanstack/react-query';

import { getGiftList } from '@/api/domain/gifts';
import { QUERY_KEY } from '@/constants/common/queryKey';

import { GiftListResponse } from './types';

export const useGetGiftList = (wishpoolId: number) => {
  return useQuery<GiftListResponse>({
    queryKey: QUERY_KEY.WISHPOOL_GIFTS_ALL(wishpoolId),
    queryFn: () => getGiftList(wishpoolId),
    enabled: !!wishpoolId,
  });
};

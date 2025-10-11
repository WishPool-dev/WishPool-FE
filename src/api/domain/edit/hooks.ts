import { useMutation } from '@tanstack/react-query';

import { QUERY_KEY } from '@/constants/common/queryKey';
import { queryClient } from '@/lib/queryClient';

import { patchWisipool } from './index';
import { WishpoolCreateType } from '../form/types';

export const usePatchWishpool = () => {
  return useMutation({
    mutationFn: ({
      wishpoolId,
      payload,
    }: {
      wishpoolId: number;
      payload: WishpoolCreateType;
    }) => patchWisipool(wishpoolId, payload),
    onSuccess: (wishpoolId) => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.WISHPOOL_DETAIL(wishpoolId),
      });
    },
  });
};

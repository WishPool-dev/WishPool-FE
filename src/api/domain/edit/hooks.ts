import { useMutation } from '@tanstack/react-query';

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
  });
};

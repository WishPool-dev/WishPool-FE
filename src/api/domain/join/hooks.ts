import { useMutation } from '@tanstack/react-query';

import { postOwnerGifts } from '.';
import { WishpoolJoinRequest, WishpoolJoinResponse } from './types';

export const usePostOwnerGifts = () => {
  return useMutation<WishpoolJoinResponse, unknown, WishpoolJoinRequest>({
    mutationFn: (payload) => postOwnerGifts(payload),
  });
};

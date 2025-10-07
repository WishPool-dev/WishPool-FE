import { useMutation } from '@tanstack/react-query';

import { postWishpoolCreate, postWishpoolImage } from './index';
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
  return useMutation<WishpoolImageResponse, unknown, string>({
    mutationFn: (file) => postWishpoolImage(file),
  });
};

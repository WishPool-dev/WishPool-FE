import { useQuery } from '@tanstack/react-query';

import { getPickGiftList } from '@/api/domain/pick';
import { PickGiftListResponse } from '@/api/domain/pick/types';
import { QUERY_KEY } from '@/constants/common/queryKey';

export const useGetPickGiftList = (chosenIdentifier: string | null) => {
  return useQuery<PickGiftListResponse>({
    queryKey: QUERY_KEY.WISHPOOL_GIFTS_CELEBRANT(chosenIdentifier),
    queryFn: () => getPickGiftList(chosenIdentifier),
    enabled: !!chosenIdentifier,
  });
};

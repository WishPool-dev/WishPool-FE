import { GiftItemDto } from '@/api/domain/join/types';

export const validateGifts = (gifts: GiftItemDto[]) => {
  for (const gift of gifts) {
    if (!gift.itemName) {
      return '선물 이름을 입력해주세요';
    }
    if (!gift.itemUrl) {
      return '선물 링크를 입력해주세요';
    }
  }

  const hasAtLeastOne = gifts.some(
    (g) => g.itemName.trim().length > 0 && g.itemUrl.trim().length > 0,
  );

  if (!hasAtLeastOne) {
    return '최소 한 개의 선물을 등록해주세요';
  }

  if (gifts.length >= 5) {
    return '선물은 최대 5개 까지만 등록할 수 있어요';
  }
};

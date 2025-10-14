import { GiftCardType } from '@/types/common/giftCardType';

const getInitialItems = (): GiftCardType[] => {
  if (typeof window === 'undefined') return [];

  const sessionData = window.sessionStorage.getItem('initialGifts');

  if (sessionData) {
    try {
      return JSON.parse(sessionData);
    } catch (e) {
      console.error('🚨 선물 리스트 불러오기 실패', e);
      return [];
    }
  }

  return [];
};

export default getInitialItems;

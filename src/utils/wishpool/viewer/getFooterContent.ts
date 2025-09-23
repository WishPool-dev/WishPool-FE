import { WishpoolStatusType } from '@/types/common/wishpoolStatusType';

const getFooterContent = (status: WishpoolStatusType) => {
  switch (status) {
    case 'OPEN':
      return {
        day: 1,
        title: '위시풀 만드는 중',
        content: '선물 리스트 마감까지 1일 남았어요',
        buttonContent: '나도 참여하기',
      };

    case 'CLOSED':
      return {
        title: '위시풀 완성!',
        content: '위시풀을 생일자에게 보내요.',
        buttonContent: '생일자에게 보내기',
      };

    case 'WAITING':
      return {
        day: 3,
        title: '결과 기다리는 중',
        content: '생일자가 선물을 선택할 거에요.',
        buttonContent: '생일자에게 보냈어요',
        disabled: true,
      };

    case 'COMPLETED':
      return {
        title: '선물이 선택됐어요!',
        content: '어떤 선물을 골랐을까요?',
        buttonContent: '선택 선물 확인하기',
      };

    case 'JOINED':
      return {
        day: 1,
        title: '위시풀 만드는 중',
        content: '선물 리스트 마감까지 1일 남았어요',
        buttonContent: '이미 참여했어요',
        disabled: true,
      };

    default:
      return null;
  }
};

export default getFooterContent;

import { PATH } from '@/constants/common/path';
import { WishpoolStatusType } from '@/types/common/wishpoolStatusType';

type getFooterContentProps = {
  wishpoolStatus: WishpoolStatusType;
  dDay: number;
  routerPush: (path: string) => void;
  wishpoolId: number;
  ownerJoined: boolean;
};

const getFooterContent = ({
  wishpoolStatus,
  dDay,
  routerPush,
  wishpoolId,
  ownerJoined,
}: getFooterContentProps) => {
  const status = ownerJoined ? 'JOINED' : wishpoolStatus;

  switch (status) {
    case 'OPEN':
      return {
        day: dDay,
        title: '위시풀 만드는 중',
        content: `선물 리스트 마감까지 ${dDay}일 남았어요`,
        buttonContent: '나도 참여하기',
        onClick: () => routerPush(PATH.JOIN_INTRO(wishpoolId)),
      };

    case 'PENDING':
      return {
        title: '위시풀 완성!',
        content: '위시풀을 생일자에게 보내요.',
        buttonContent: '생일자에게 보내기',
        onClick: () => routerPush(PATH.WISHPOOL_DATE(wishpoolId)),
      };

    case 'WAITING':
      return {
        day: dDay,
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
        onClick: () => routerPush(PATH.WISHPOOL_FINAL(wishpoolId)),
      };

    case 'JOINED':
      return {
        day: dDay,
        title: '위시풀 만드는 중',
        content: `선물 리스트 마감까지 ${dDay}일 남았어요`,
        buttonContent: '이미 참여했어요',
        disabled: true,
      };

    default:
      return null;
  }
};

export default getFooterContent;

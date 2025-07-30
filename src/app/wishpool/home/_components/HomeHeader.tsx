import Link from 'next/link';

import Icon from '@/components/common/Icon';
import BaseHeader from '@/components/layout/Header/BaseHeader';
import { PATH } from '@/constants/path';

const HomeHeader = () => {
  return (
    <BaseHeader
      leftSlot={
        <Link href={PATH.HOME}>
          <img src="/images/logo.svg" alt="로고 이미지" />
        </Link>
      }
      rightSlot={
        <button type="button">
          <Icon name="menu" title="메뉴 아이콘" />
        </button>
      }
    ></BaseHeader>
  );
};

export default HomeHeader;

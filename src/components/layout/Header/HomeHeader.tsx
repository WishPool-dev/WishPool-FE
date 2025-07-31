import Link from 'next/link';

import Icon from '@/components/common/Icon';
import BaseHeader from '@/components/layout/Header/BaseHeader';
import { PATH } from '@/constants/path';

type HomeHeaderProps = {
  hasMenu?: boolean;
};

const HomeHeader = ({ hasMenu = false }: HomeHeaderProps) => {
  return (
    <BaseHeader
      leftSlot={
        <Link href={PATH.HOME}>
          <img src="/images/logo.svg" alt="로고 이미지" />
        </Link>
      }
      rightSlot={
        hasMenu ? (
          <button type="button" aria-label="메뉴 열기">
            <Icon name="menu" title="메뉴 아이콘" />
          </button>
        ) : null
      }
    />
  );
};

export default HomeHeader;

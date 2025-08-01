import Link from 'next/link';

import Icon from '@/components/common/Icon';
import type { HeaderColor } from '@/components/layout/Header/_types/HeaderColor';
import BaseHeader from '@/components/layout/Header/BaseHeader';
import { PATH } from '@/constants/path';

type HomeHeaderProps = {
  hasMenu?: boolean;
  bgColor?: HeaderColor;
};

const HomeHeader = ({ hasMenu = false, bgColor }: HomeHeaderProps) => {
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
      bgColor={bgColor}
    />
  );
};

export default HomeHeader;

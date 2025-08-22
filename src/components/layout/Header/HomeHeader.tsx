'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Icon from '@/components/common/Icon';
import type { HeaderColor } from '@/components/layout/Header/_types/HeaderColor';
import BaseHeader from '@/components/layout/Header/BaseHeader';
import { PATH } from '@/constants/common/path';

type HomeHeaderProps = {
  hasMenu?: boolean;
  bgColor?: HeaderColor;
};

const HomeHeader = ({ hasMenu = false, bgColor }: HomeHeaderProps) => {
  const router = useRouter();
  return (
    <>
      <BaseHeader
        leftSlot={
          <Link href={PATH.HOME}>
            <img src="/images/logo.svg" alt="로고 이미지" />
          </Link>
        }
        rightSlot={
          hasMenu ? (
            <button
              type="button"
              aria-label="메뉴 열기"
              onClick={() => router.push(PATH.MYPAGE)}
            >
              <Icon name="menu" title="메뉴 아이콘" />
            </button>
          ) : (
            ''
          )
        }
        bgColor={bgColor}
      />
    </>
  );
};

export default HomeHeader;

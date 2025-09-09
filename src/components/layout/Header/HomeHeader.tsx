'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import Icon from '@/components/common/Icon';
import type { HeaderColor } from '@/components/layout/Header/_types/HeaderColor';
import BaseHeader from '@/components/layout/Header/BaseHeader';
import NavMenu from '@/components/layout/NavMenu';
import { PATH } from '@/constants/common/path';

type HomeHeaderProps = {
  hasMenu?: boolean;
  bgColor?: HeaderColor;
};

const HomeHeader = ({ hasMenu = false, bgColor }: HomeHeaderProps) => {
  const [openNav, setOpenNav] = useState(false);
  const handleNavMenu = () => {
    setOpenNav((prev) => !prev);
  };

  return (
    <>
      <BaseHeader
        leftSlot={
          <Link href={PATH.HOME}>
            <Image
              src="/images/logo.svg"
              alt="위시풀 로고"
              width={118}
              height={26}
            />
          </Link>
        }
        rightSlot={
          hasMenu ? (
            <button
              type="button"
              aria-label="메뉴 열기"
              onClick={handleNavMenu}
            >
              <Icon name="menu" title="메뉴 아이콘" />
            </button>
          ) : (
            ''
          )
        }
        bgColor={bgColor}
      />
      {openNav && <NavMenu />}
    </>
  );
};

export default HomeHeader;

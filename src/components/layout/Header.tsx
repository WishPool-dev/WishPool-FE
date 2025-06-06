'use client';

import Image from 'next/image';
import { useState } from 'react';

import Icon from '@/components/common/Icon';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen((prev) => !prev);

  return (
    <>
      <header className="fixed top-0 right-0 left-0 mx-auto flex h-14 max-w-[430px] items-center justify-between bg-white p-5">
        <Image
          src="/images/logo.svg"
          width={118}
          height={25}
          alt="로고 이미지"
        />
        <div className="flex gap-5">
          <Icon name="wish" title="찜 아이콘" />
          <button type="button" onClick={toggleNav}>
            <Icon name="menu" title="메뉴 아이콘" />
          </button>
        </div>
      </header>

      {isOpen && (
        <nav
          aria-label="메인 메뉴"
          className="mx-auto mt-14 max-w-[430px] bg-white text-center"
        >
          <ul>
            <li className="p-[10px]">
              <a href="#" className="title1">
                Wishpool 소개
              </a>
            </li>
            <li className="p-[10px]">
              <a href="#" className="title1">
                메인 홈
              </a>
            </li>
            <li className="p-[10px]">
              <a href="#" className="title1">
                상품 둘러보기
              </a>
            </li>
            <li className="p-[10px]">
              <a href="#" className="title1">
                마이 페이지
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Header;

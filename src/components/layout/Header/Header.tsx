'use client';

import { useState } from 'react';

import IconSection from '@/components/layout/Header/IconSection';
import NavSection from '@/components/layout/Header/NavSection';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => setIsOpen((prev) => !prev);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 mx-auto flex h-14 max-w-[430px] items-center justify-between bg-white p-5 ${isOpen ? 'border-b border-b-gray-300' : ''}`}
      >
        <img src="/images/logo.svg" alt="로고 이미지" width={118} height={25} />

        <IconSection onClick={toggleNav} />
      </header>
      {isOpen && <NavSection />}
    </>
  );
};

export default Header;

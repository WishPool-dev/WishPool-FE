'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { PATH } from '@/constants/common/path';

const NAV_LIST = [
  { label: 'WishPool 소개', href: PATH.INTRO },
  { label: '메인 홈', href: PATH.HOME },
  { label: '상품 둘러보기', href: PATH.HOME },
  { label: '마이 페이지', href: PATH.MYPAGE },
];

const NavMenu = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="메인 메뉴"
      className="z-nav absolute inset-x-0 mx-auto mt-[5.4rem] flex max-w-[430px] flex-col bg-white text-center"
    >
      <ul>
        {NAV_LIST.map(({ label, href }) => {
          const isActive = pathname === href;

          return (
            <li
              key={label}
              className={`flex h-[6.3rem] items-center justify-center p-[1rem] ${isActive ? 'bg-background-02 text-blue-primary title1 w-full' : 'subtitle1'}`}
            >
              <Link href={href}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMenu;

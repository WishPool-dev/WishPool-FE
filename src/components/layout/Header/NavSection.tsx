'use client';

import { usePathname } from 'next/navigation';

const NAV_LIST = [
  { label: 'WishPool 소개', href: '/intro' },
  { label: '메인 홈', href: '/' },
  { label: '상품 둘러보기', href: '/products' },
  { label: '마이 페이지', href: '/mypage' },
];

const NavSection = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="메인 메뉴"
      className="mx-auto mt-14 max-w-[430px] bg-white text-center"
    >
      <ul>
        {NAV_LIST.map(({ label, href }) => {
          const isActive = pathname === href;

          return (
            <li
              key={label}
              className={`flex h-16 items-center justify-center ${isActive ? 'bg-background-02 text-blue-primary title1 w-full' : 'subtitle1'}`}
            >
              <a href={href}>{label}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavSection;

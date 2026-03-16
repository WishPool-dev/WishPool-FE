'use client';

import { usePathname, useRouter } from 'next/navigation';

import { PATH } from '@/constants/common/path';
import { useHasToken } from '@/hooks/wishpool/useHasToken';

const NAV_LIST = [
  { label: 'WishPool 소개', href: PATH.INTRO },
  { label: '메인 홈', href: PATH.HOME },
  { label: '마이 페이지', href: PATH.MYPAGE },
];

const NavMenu = () => {
  const pathname = usePathname();
  const router = useRouter();
  const hasToken = useHasToken();

  const handleNavClick = (href: string) => {
    if (!hasToken) router.push(PATH.LOGIN);
    else router.push(href);
  };

  return (
    <nav
      aria-label="메인 메뉴"
      className="z-nav fixed inset-x-0 mx-auto flex max-w-[430px] flex-col bg-white text-center"
    >
      <ul>
        {NAV_LIST.map(({ label, href }) => {
          const isActive = pathname === href;

          return (
            <li
              key={label}
              className={`flex h-[6.3rem] items-center justify-center p-[1rem] ${isActive ? 'bg-background-02 text-blue-primary title1 w-full' : 'subtitle1'}`}
            >
              <button className="w-full" onClick={() => handleNavClick(href)}>
                {label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMenu;

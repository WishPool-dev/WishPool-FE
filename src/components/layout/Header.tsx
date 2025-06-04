import Image from 'next/image';

import Icon from '@/components/common/Icon';

const Header = () => {
  return (
    <header className="flex h-14 items-center justify-between bg-white p-5">
      <Image src="/images/logo.svg" width={118} height={25} alt="로고 이미지" />
      <div className="flex gap-5">
        <Icon name="wish" title="찜 아이콘" />
        <Icon name="menu" title="메뉴 아이콘" />
      </div>
    </header>
  );
};

export default Header;

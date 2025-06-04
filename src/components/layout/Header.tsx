import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex h-14 items-center bg-white p-5">
      <Image src="/images/logo.svg" width={118} height={25} alt="로고 이미지" />
    </header>
  );
};

export default Header;

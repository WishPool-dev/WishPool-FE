import Image from 'next/image';

import KakaoLoginButton from '@/api/auth/KakaoLoginButton';
import logoIcon from '@/assets/images/logo-icon.png';

const LoginPage = () => {
  return (
    <div className="bg-background-01 flex h-[100vh] flex-col items-center px-[2rem] pb-[4rem]">
      <div className="text-text flex h-full flex-col items-center justify-center self-center text-center">
        <Image
          className="mb-[4rem]"
          src={logoIcon}
          width={86}
          height={96}
          alt="위시풀 로고"
        />
        <h2 className="head1 mb-[0.4rem]">마음을 선물할 때,</h2>
        <img src="/images/logoText.svg" />
      </div>
      <KakaoLoginButton />
    </div>
  );
};

export default LoginPage;

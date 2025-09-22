import Image from 'next/image';

import logoIcon from '@/assets/images/logo-icon.png';
import Icon from '@/components/common/Icon';

const RedirectPage = () => {
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
      <button className="bg-kakao-color mt-auto flex h-[5.6rem] w-full items-center rounded-[12px] p-[1.6rem]">
        <Icon name="kakao" width={21} height={20} />
        <span className="title2 text-text w-full text-center">
          카카오 로그인
        </span>
      </button>
    </div>
  );
};

export default RedirectPage;

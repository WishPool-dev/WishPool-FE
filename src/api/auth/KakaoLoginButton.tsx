'use client';

import getKakaoAuth from '@/api/auth/getKakaoAuth';
import Icon from '@/components/common/Icon';

const KakaoLoginButton = () => {
  const handleLogin = () => {
    getKakaoAuth();
  };

  return (
    <button
      className="bg-kakao-color mt-auto flex h-[5.6rem] w-full items-center rounded-[12px] p-[1.6rem]"
      aria-label="카카오 로그인 버튼"
      onClick={handleLogin}
    >
      <Icon name="kakao" width={21} height={20} />
      <span className="title2 text-text w-full text-center">카카오 로그인</span>
    </button>
  );
};

export default KakaoLoginButton;

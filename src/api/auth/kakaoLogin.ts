export const kakaoLogin = () => {
  try {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/kakao`;
  } catch (error) {
    console.log('카카오 로그인 실패', error);
    alert('카카오 로그인에 실패했습니다.');
  }
};

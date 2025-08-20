const copyText = async (linkUrl: string) => {
  if (!navigator.clipboard) {
    console.error('클립보드 API를 사용할 수 없습니다.');
    return false;
  }

  try {
    await navigator.clipboard.writeText(linkUrl);
    return true;
  } catch (error) {
    console.error('링크 복사에 실패했습니다. ', error);
    return false;
  }
};
export default copyText;

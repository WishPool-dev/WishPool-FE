import Icon from '../Icon';

const KakaoButton = () => {
  const onClick = () => {};
  return (
    <button
      className="bg-kakao-color relative flex h-[5.6rem] w-full items-center rounded-[12px] p-[1.6rem]"
      onClick={onClick}
    >
      <div className="absolute left-[1.6rem]">
        <Icon name="kakao" width={21} height={20} />
      </div>
      <span className="title2 text-text mx-auto">카카오톡으로 공유하기</span>
    </button>
  );
};

export default KakaoButton;

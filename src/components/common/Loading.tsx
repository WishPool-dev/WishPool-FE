import Icon from './Icon';

const Loading = () => {
  return (
    <div className="mt-[-5.4rem] flex h-screen flex-col items-center justify-center">
      <Icon name="loading" width={56} height={56} />
      <div className="body1 mt-[1.5rem] text-gray-600">
        정보를 가져오는 중...
      </div>
    </div>
  );
};

export default Loading;

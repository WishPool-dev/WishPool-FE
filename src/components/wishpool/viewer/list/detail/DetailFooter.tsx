import Button from '@/components/common/Button';

const DetailFooter = () => {
  return (
    <footer className="p-[2rem flex border-t-gray-300 bg-white">
      <div className="grow-1 space-y-[0.4rem]">
        <div className="flex items-center gap-[0.8rem]">
          <span className="caption1 bg-blue-6 text-blue-primary rounded-[4px] px-[0.6rem] py-[0.2rem]">
            D-1
          </span>
          <span className="subtitle2 text-text">위시풀 만드는 중</span>
        </div>
        <p className="caption2 text-gray-600">
          선물 리스트 마감까지 1일 남았어요.
        </p>
      </div>
      <div className="grow-1">
        <Button textSize="sm">나도 참여하기</Button>
      </div>
    </footer>
  );
};

export default DetailFooter;

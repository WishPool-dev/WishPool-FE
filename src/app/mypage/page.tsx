import Link from 'next/link';

import Icon from '@/components/common/Icon';

const MyPage = () => {
  return (
    <div>
      <div className="bg-background-01 flex items-center gap-[2rem] px-[2rem] py-[1.6rem]">
        <img
          src="/images/gift-card.svg"
          alt="프로필 이미지"
          className="h-[6rem] w-[6rem] rounded-full"
        />
        <span className="text-text head1">User Name</span>
      </div>
      <div className="px-[2rem] py-[3.2rem]">
        <h3 className="text-text subtitle2 mb-[1.6rem]">지난 이벤트</h3>
        <div className="bg-background-01 flex flex-col rounded-[12px]">
          <Link
            className="flex items-center justify-between px-[1.6rem] py-[1.4rem]"
            href="history"
          >
            <span className="text-text title1">위시풀 기록</span>
            <Icon name="next" />
          </Link>
          <Link className="px-[1.6rem] py-[1.4rem]" href="history">
            <span className="title1 text-gray-300">
              선물 펀딩 기록(준비 중)
            </span>
          </Link>
        </div>
      </div>
      <div className="mb-[1.6rem] px-[2rem] py-[3.2rem]">
        <h3 className="text-text subtitle2">관리</h3>
        <div className="bg-background-01 flex flex-col rounded-[12px]">
          <Link
            className="flex items-center justify-between px-[1.6rem] py-[1.4rem]"
            href="history"
          >
            <span className="text-text title1">평가/피드백 하기</span>
            <Icon name="next" />
          </Link>
          <Link className="px-[1.6rem] py-[1.4rem]" href="history">
            <span className="title1 text-text">로그아웃</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyPage;

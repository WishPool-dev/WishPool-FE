'use client';

import CenterModal from '@/components/common/Modal/CenterModal';
import MyPageItem from '@/components/mypage/MyPageItem';
import MyPageList from '@/components/mypage/MyPageList';
import { PATH } from '@/constants/common/path';
import useModal from '@/hooks/common/useModal';

const MyPage = () => {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <>
      <div className="bg-background-01 flex items-center gap-[2rem] px-[2rem] py-[1.6rem]">
        <img
          src="/images/gift-card.svg"
          alt="프로필 이미지"
          className="h-[6rem] w-[6rem] rounded-full"
        />
        <span className="text-text head1">User Name</span>
      </div>

      <div className="flex flex-col gap-[3.2rem] px-[2rem] py-[3.2rem]">
        <MyPageList title="지난 이벤트">
          <MyPageItem page="위시풀 기록" link={PATH.WISHPOOL_HISTORY} />
          <MyPageItem page="선물 펀딩 기록(준비 중)" link="" disabled />
        </MyPageList>

        <MyPageList title="관리">
          <MyPageItem page="평가/피드백 하기" link={PATH.FEEDBACK} />
          <button
            className="text-text title1 px-[1.6rem] py-[1.4rem] text-left"
            onClick={onOpen}
          >
            로그아웃
          </button>
        </MyPageList>
      </div>
      {isOpen && (
        <CenterModal
          onClose={onClose}
          modalTitle="위시풀 계정을 로그아웃할까요?"
          rightText="로그아웃"
        />
      )}
    </>
  );
};

export default MyPage;

'use client';

import { usePostLogout } from '@/api/domain/mypage/hooks';
import CenterModal from '@/components/common/Modal/CenterModal';
import MyPageItem from '@/components/mypage/MyPageItem';
import MyPageList from '@/components/mypage/MyPageList';
import Profile from '@/components/mypage/Profile';
import { PATH } from '@/constants/common/path';
import useModal from '@/hooks/common/useModal';

const MyPage = () => {
  const { isOpen, onOpen, onClose } = useModal();

  const { mutate: logout } = usePostLogout();
  const handleSubmit = () => {
    logout();
  };

  return (
    <>
      <Profile />
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
          onSubmit={handleSubmit}
          modalTitle="위시풀 계정을 로그아웃할까요?"
          rightText="로그아웃"
        />
      )}
    </>
  );
};

export default MyPage;

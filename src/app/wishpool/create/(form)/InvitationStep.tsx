import Image from 'next/image';

import invite from '@/assets/images/invite.png';
import Icon from '@/components/common/Icon';
import IconButton from '@/components/common/IconButton';

const InvitationStep = () => {
  return (
    <>
      <div className="mt-[2.8rem]">
        <h3 className="text-text head1">생일자를 위한 위시풀이 열렸어요!</h3>
        <p className="text-text body1 mt-[0.4rem]">
          이제 리스트를 함께 만들 참여자들을 모집해요.
        </p>
      </div>
      <div className="mt-[3.8rem] flex items-center justify-center">
        <Image
          src={invite}
          alt="초대 단계 이미지"
          className="h-[18rem] w-[18rem]"
        />
      </div>

      <div className="bg-background-02 mt-[3.6rem] h-[19.2rem] w-full rounded-[12px] p-[2rem]">
        <p className="subtitle2 text-text ml-[0.6rem]">위시풀 초대장</p>
        <div className="mt-[1.1rem] flex h-[4.9rem] w-full items-center justify-between gap-[1.2rem] rounded-[12px] bg-white px-[1.2rem] py-[0.8rem]">
          <p className="body2 ml-[0.8rem] text-gray-600">
            https://WishPool/gift/to-you
          </p>
          <button className="py[0.8rem] h-[3.3rem] rounded-[6px] border border-gray-400 px-[1.2rem]">
            <p className="texe-text title3">링크 복사</p>
          </button>
        </div>
        <div className="mt-[1.2rem]">
          <IconButton textSize="md">
            <Icon name="kakao" title="카카오톡 아이콘" />
            <span>카카오톡으로 공유하기</span>
          </IconButton>
        </div>
      </div>
      <p className="body2 mt-[2.8rem] text-center text-gray-600">
        위시풀 만들기에 참여해 줄 친구들에게 공유해 주세요!
      </p>
    </>
  );
};

export default InvitationStep;

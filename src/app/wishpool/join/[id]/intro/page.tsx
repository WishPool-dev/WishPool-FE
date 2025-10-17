'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useGetWishpoolDetail } from '@/api/domain/detail/hooks';
import PickPoolImage from '@/assets/images/pick-pool.png';
import Button from '@/components/common/Button';
import InfoBox from '@/components/common/InfoBox/InfoBox';
import { PATH } from '@/constants/common/path';
import { useGetWishpoolId } from '@/hooks/common/useGetWishpoolId';
const IntroPage = () => {
  const router = useRouter();
  const wishpoolId = useGetWishpoolId();
  const { data: wishpoolData } = useGetWishpoolDetail(wishpoolId);

  return (
    <>
      <div className="text-text">
        <h1 className="head1">
          위시풀을 통해 <br />
          <span className="text-blue-primary">{wishpoolData?.celebrant}</span>
          님에게 주고 싶은 선물을 제안해요.
        </h1>
        <p className="body1 mt-[0.4rem]">단계별 항목에 응답해주세요.</p>
      </div>
      <Image
        src={PickPoolImage}
        alt="선물 고르기 이미지"
        width={180}
        height={180}
        className="mx-auto mt-[4.2rem] mb-[2rem]"
      />

      <div className="fixed inset-x-0 bottom-0">
        <div className="mx-auto w-full max-w-[430px] p-[2rem]">
          <Button
            onClick={() => {
              router.push(PATH.JOIN_GIFTS(wishpoolId));
            }}
          >
            시작
          </Button>
        </div>
      </div>
      <InfoBox />
    </>
  );
};

export default IntroPage;

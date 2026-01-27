'use client';

import { useRouter } from 'next/navigation';

import { useGetWishpools } from '@/api/domain/home/hooks';
import BirthdayInfo from '@/components/common/BirthdayInfo';
import Button from '@/components/common/Button';
import EventCard from '@/components/common/EventCard';
import { PATH } from '@/constants/common/path';

const HistoryPage = () => {
  const router = useRouter();

  const { data: wishpools } = useGetWishpools();
  return (
    <>
      <hr className="border-background-02 border-t-[8px]" />
      <div className="px-[2rem] py-[1.2rem]">
        <div className="flex flex-col gap-[2rem]">
          {wishpools &&
            wishpools.map((wishpool) => (
              <div key={wishpool.wishpoolId}>
                <BirthdayInfo
                  celebrant={wishpool.celebrant}
                  birthDay={wishpool.birthDay}
                />
                <EventCard
                  currentIndex={wishpool.wishpoolId}
                  cardData={wishpool}
                />
              </div>
            ))}
          {wishpools && wishpools.length === 0 && (
            <div className="mt-[14rem] flex flex-col items-center justify-center">
              <div className="text-text mb-[3.6rem] text-center">
                <h2 className="title1 mb-[0.4rem]">
                  위시풀 기록이 아직 없어요.
                </h2>
                <p className="body1">첫 위시풀을 만들어볼까요?</p>
              </div>
              <div className="w-[17.1rem]">
                <Button
                  textSize="sm"
                  onClick={() => router.push(PATH.WISHPOOL_CREATE_STEP1)}
                >
                  위시풀 만들기
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HistoryPage;

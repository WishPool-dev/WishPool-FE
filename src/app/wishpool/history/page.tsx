'use client';

import { useGetWishpools } from '@/api/domain/home/hooks';
import BirthdayInfo from '@/components/common/BirthdayInfo';
import EventCard from '@/components/common/EventCard';

const HistoryPage = () => {
  const { data: wishpools } = useGetWishpools();
  return (
    <>
      <hr className="border-background-02 border-t-[8px]" />
      <div className="px-[2rem] py-[1.2rem]">
        <div className="flex flex-col gap-[2rem]">
          {wishpools &&
            wishpools.map((wishpool) => (
              <div key={wishpool.wishpoolId}>
                <BirthdayInfo />
                <EventCard
                  currentIndex={wishpool.wishpoolId}
                  cardData={wishpool}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default HistoryPage;

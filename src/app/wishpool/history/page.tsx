'use client';

import { data } from '@/app/wishpool/history/data';
import BirthdayInfo from '@/components/common/BirthdayInfo';
import EventCard from '@/components/common/EventCard';

const HistoryPage = () => {
  return (
    <>
      <hr className="border-background-02 border-t-[8px]" />
      <div className="px-[2rem] py-[1.2rem]">
        <div className="flex flex-col gap-[2rem]">
          {data.map((d) => (
            <div key={d.id}>
              <BirthdayInfo />
              <EventCard currentIndex={d.wishpoolId} cardData={d} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HistoryPage;

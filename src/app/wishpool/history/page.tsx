'use client';

import { data } from '@/app/wishpool/history/data';
import EventCard from '@/components/common/EventCard';
import Icon from '@/components/common/Icon';
import UserTag from '@/components/common/UserTag';

const HistoryPage = () => {
  return (
    <>
      <hr className="border-background-02 border-t-[8px]" />
      <div className="px-[2rem] py-[1.2rem]">
        <div className="flex flex-col gap-[2rem]">
          {data.map((d) => (
            <div key={d.id}>
              <div className="flex items-center px-[1.6rem] py-[0.8rem]">
                <UserTag>{d.userType}</UserTag>
                <span className="text-text body1 ml-[1.2rem]">
                  {d.birthdayPerson}
                </span>
                <span className="text-text body1 ml-auto flex items-center gap-[1.2rem]">
                  <Icon
                    name="birthday"
                    className="text-pink-1 h-[2rem] w-[2rem]"
                  />
                  {d.birthday}
                </span>
              </div>
              <EventCard currentIndex={d.wishpoolId} cardData={d} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HistoryPage;

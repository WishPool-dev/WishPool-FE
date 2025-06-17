'use client';

import { useState } from 'react';

export default function Home() {
  const [planType, setPlanType] = useState<'funding' | 'wishpool'>('funding');
  const planCount = {
    funding: 1,
    wishpool: 0,
  };

  const handlePlanType = (type: 'funding' | 'wishpool') => {
    setPlanType((prev) => (prev === type ? prev : type));
  };

  return (
    <>
      <div className="flex items-center justify-center gap-[1.2rem]">
        <button
          onClick={() => handlePlanType('funding')}
          className={`title1 relative flex h-[4.6rem] w-[17.1rem] grow-1 items-center justify-center gap-[0.4rem] ${planType === 'funding' ? 'text-text after:bg-blue-2 after:absolute after:bottom-0 after:left-0 after:h-[0.3rem] after:w-full after:rounded-r-[100px] after:content-[""]' : 'text-gray-400'}`}
        >
          선물 펀딩
          {planCount.funding > 0 && (
            <span className="bg-pink-primary caption3 flex h-[1.6rem] w-[1.6rem] items-center justify-center rounded-full text-white">
              {planCount.funding}
            </span>
          )}
        </button>
        <button
          onClick={() => handlePlanType('wishpool')}
          className={`title1 relative flex h-[4.6rem] w-[17.1rem] grow-1 items-center justify-center gap-[0.4rem] ${planType === 'wishpool' ? 'text-text after:bg-blue-2 after:absolute after:bottom-0 after:left-0 after:h-[0.3rem] after:w-full after:rounded-l-[100px] after:content-[""]' : 'text-gray-400'}`}
        >
          위시풀
          {planCount.wishpool > 0 && (
            <span className="bg-pink-primary caption3 flex h-[1.6rem] w-[1.6rem] items-center justify-center rounded-full text-white">
              {planCount.wishpool}
            </span>
          )}
        </button>
      </div>
    </>
  );
}

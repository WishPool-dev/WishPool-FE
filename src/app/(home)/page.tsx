'use client';

// import { redirect } from 'next/navigation';
import { useState } from 'react';

import ActiveEventSection from '@/components/home/ActiveEventSection';
import CreateEventSection from '@/components/home/CreateEventSection';
import PlanTypeSection from '@/components/home/PlanTypeSection';

const planCount = {
  funding: 0,
  wishpool: 4,
};

const Home = () => {
  // const isLoggedIn = false;

  // if (!isLoggedIn) {
  //   redirect('/intro');
  // }

  const [planType, setPlanType] = useState<'funding' | 'wishpool'>('wishpool');

  const handlePlanType = (type: 'funding' | 'wishpool') => {
    setPlanType((prev) => (prev === type ? prev : type));
  };

  return (
    <>
      <div className="bg-background-01 w-full px-[2rem]">
        <PlanTypeSection
          planType={planType}
          onSelectType={handlePlanType}
          planCount={planCount}
        />

        <ActiveEventSection planType={planType} planCount={planCount} />
      </div>
      <div className="p-[2rem]">
        <CreateEventSection planType={planType} />
      </div>
    </>
  );
};

export default Home;
